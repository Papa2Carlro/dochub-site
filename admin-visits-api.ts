import { existsSync, readFileSync } from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import { resolve } from "node:path";
import type { Plugin, PreviewServer, ViteDevServer } from "vite";

export type AdminVisitsEnv = {
  /** Absolute path to admin/ (gitignored). */
  adminRoot: string;
  cfAccountId: string;
  cfSiteTag: string;
};

const CF_GRAPHQL = "https://api.cloudflare.com/client/v4/graphql";
const DEFAULT_DOWNLOADS_HOST = "dochub-downloads.dochubhq.workers.dev";

/** Parse KEY=VAL from admin/.env on each request (token edits apply without restart). */
function readAdminEnv(adminRoot: string): Record<string, string> {
  const out: Record<string, string> = {};
  const file = resolve(adminRoot, ".env");
  if (!existsSync(file)) return out;
  for (const raw of readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i <= 0) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

function resolveToken(adminRoot: string): string {
  const fileEnv = readAdminEnv(adminRoot);
  return (
    fileEnv.CF_API_TOKEN ||
    fileEnv.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    process.env.CLOUDFLARE_API_TOKEN ||
    ""
  ).trim();
}

function resolveCfContext(env: AdminVisitsEnv) {
  const fileEnv = readAdminEnv(env.adminRoot);
  const token = resolveToken(env.adminRoot);
  const accountId = (
    fileEnv.CF_ACCOUNT_ID ||
    env.cfAccountId ||
    "293add1698c4458729001c4828c1b481"
  ).trim();
  const siteTag = (
    fileEnv.CF_SITE_TAG ||
    env.cfSiteTag ||
    "ccc59f84652c4564b665581cfed7db65"
  ).trim();
  const downloadsHost = (
    fileEnv.CF_DOWNLOADS_HOST ||
    DEFAULT_DOWNLOADS_HOST
  )
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  return { token, accountId, siteTag, downloadsHost, fileEnv };
}

const VISITS_QUERY = `
query AdminVisits($accountTag: string!, $siteTag: string!, $since: Time!, $until: Time!) {
  viewer {
    accounts(filter: { accountTag: $accountTag }) {
      rumPageloadEventsAdaptiveGroups(
        filter: {
          siteTag: $siteTag
          datetime_geq: $since
          datetime_leq: $until
        }
        limit: 10000
        orderBy: [date_DESC]
      ) {
        sum {
          visits
        }
        dimensions {
          date
        }
      }
    }
  }
}
`;

const DOWNLOAD_HITS_QUERY = `
query AdminDownloadHits($accountTag: string!, $host: string!, $since: Time!, $until: Time!) {
  viewer {
    accounts(filter: { accountTag: $accountTag }) {
      httpRequestsAdaptiveGroups(
        filter: {
          datetime_geq: $since
          datetime_leq: $until
          clientRequestHTTPHost: $host
        }
        limit: 5000
      ) {
        count
        dimensions {
          date
          datetimeHour
          clientRequestPath
          clientCountryName
          userAgentBrowser
          userAgent
          edgeResponseStatus
        }
      }
    }
  }
}
`;

type CfVisitsResponse = {
  errors?: { message: string }[];
  data?: {
    viewer?: {
      accounts?: {
        rumPageloadEventsAdaptiveGroups?: {
          sum?: { visits?: number };
          dimensions?: { date?: string };
        }[];
      }[];
    };
  };
};

type CfHitsResponse = {
  errors?: { message: string }[];
  data?: {
    viewer?: {
      accounts?: {
        httpRequestsAdaptiveGroups?: {
          count?: number;
          dimensions?: {
            date?: string;
            datetimeHour?: string;
            clientRequestPath?: string;
            clientCountryName?: string;
            userAgentBrowser?: string;
            userAgent?: string;
            edgeResponseStatus?: number;
          };
        }[];
      }[];
    };
  };
};

function parseDays(url: string | undefined): number {
  try {
    const u = new URL(url || "", "http://local");
    const d = Number(u.searchParams.get("days") ?? "30");
    if (!Number.isFinite(d) || d < 1 || d > 366) return 30;
    return Math.floor(d);
  } catch {
    return 30;
  }
}

function rangeForDays(days: number): { since: string; until: string } {
  const until = new Date();
  until.setUTCHours(23, 59, 59, 999);
  const since = new Date(until);
  since.setUTCDate(since.getUTCDate() - (days - 1));
  since.setUTCHours(0, 0, 0, 0);
  return { since: since.toISOString(), until: until.toISOString() };
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function requireToken(
  res: ServerResponse,
  token: string,
): token is string {
  if (!token) {
    sendJson(res, 503, {
      error:
        "CF_API_TOKEN (or CLOUDFLARE_API_TOKEN) missing in admin/.env — server-only, never VITE_*",
    });
    return false;
  }
  return true;
}

async function cfGraphql<T>(
  token: string,
  query: string,
  variables: Record<string, unknown>,
): Promise<{ ok: true; json: T } | { ok: false; error: string; status: number }> {
  const cfRes = await fetch(CF_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = (await cfRes.json()) as T & { errors?: { message: string }[] };
  if (!cfRes.ok || json.errors?.length) {
    return {
      ok: false,
      status: 502,
      error:
        json.errors?.map((e) => e.message).join("; ") ||
        `Cloudflare HTTP ${cfRes.status}`,
    };
  }
  return { ok: true, json };
}

function osFromPath(path: string): "mac" | "win" | "linux" | null {
  if (path === "/d/mac" || path.startsWith("/d/mac?")) return "mac";
  if (path === "/d/win" || path.startsWith("/d/win?")) return "win";
  if (path === "/d/linux" || path.startsWith("/d/linux?")) return "linux";
  return null;
}

/** /store/com.dochub.pack.foo/0.1.0.dhpack → com.dochub.pack.foo */
function packIdFromStorePath(path: string): string | null {
  const m = path.match(/^\/store\/([^/]+)\/[^/]+\.dhpack(?:\?|$)/);
  return m?.[1] ?? null;
}

function looksLikeBot(ua: string, browser: string): boolean {
  const s = `${ua} ${browser}`.toLowerCase();
  return /curl|wget|httpie|python-requests|go-http|bot|spider|headless|scrapy|axios\//.test(
    s,
  );
}

async function handleVisits(
  req: IncomingMessage,
  res: ServerResponse,
  env: AdminVisitsEnv,
) {
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const { token, accountId, siteTag } = resolveCfContext(env);
  if (!requireToken(res, token)) return;

  const days = parseDays(req.url);
  const { since, until } = rangeForDays(days);

  try {
    const result = await cfGraphql<CfVisitsResponse>(token, VISITS_QUERY, {
      accountTag: accountId,
      siteTag,
      since,
      until,
    });
    if (!result.ok) {
      sendJson(res, result.status, { error: result.error });
      return;
    }

    const groups =
      result.json.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups ??
      [];

    const byDay = groups
      .map((g) => ({
        date: g.dimensions?.date ?? "",
        visits: g.sum?.visits ?? 0,
      }))
      .filter((d) => d.date)
      .sort((a, b) => b.date.localeCompare(a.date));

    const total = byDay.reduce((s, d) => s + d.visits, 0);

    sendJson(res, 200, {
      host: "dochub-site.pages.dev",
      siteTag,
      days,
      range: { since, until },
      total,
      byDay,
    });
  } catch (e) {
    sendJson(res, 500, {
      error: e instanceof Error ? e.message : String(e),
    });
  }
}

async function handleDownloadHits(
  req: IncomingMessage,
  res: ServerResponse,
  env: AdminVisitsEnv,
) {
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const { token, accountId, downloadsHost } = resolveCfContext(env);
  if (!requireToken(res, token)) return;

  const days = parseDays(req.url);
  const { since, until } = rangeForDays(days);

  try {
    const result = await cfGraphql<CfHitsResponse>(
      token,
      DOWNLOAD_HITS_QUERY,
      {
        accountTag: accountId,
        host: downloadsHost,
        since,
        until,
      },
    );
    if (!result.ok) {
      sendJson(res, result.status, { error: result.error });
      return;
    }

    const groups =
      result.json.data?.viewer?.accounts?.[0]?.httpRequestsAdaptiveGroups ?? [];

    type Hit = {
      when: string;
      date: string;
      path: string;
      os: "mac" | "win" | "linux";
      count: number;
      country: string;
      browser: string;
      ua: string;
      status: number | null;
      likelyBot: boolean;
    };

    type StoreHit = {
      when: string;
      date: string;
      path: string;
      packId: string;
      count: number;
      country: string;
      browser: string;
      ua: string;
      status: number | null;
      likelyBot: boolean;
    };

    const hits: Hit[] = [];
    const storeHits: StoreHit[] = [];
    const byOs = { mac: 0, win: 0, linux: 0 };
    const byPack: Record<string, number> = {};
    let browserish = 0;
    let botish = 0;
    let storeTotal = 0;

    for (const g of groups) {
      const path = g.dimensions?.clientRequestPath || "";
      const count = Number(g.count || 0);
      const browser = g.dimensions?.userAgentBrowser || "";
      const ua = g.dimensions?.userAgent || browser || "";
      const bot = looksLikeBot(ua, browser);
      const when = g.dimensions?.datetimeHour || g.dimensions?.date || "";
      const date = g.dimensions?.date || "";
      const country = g.dimensions?.clientCountryName || "—";
      const status = g.dimensions?.edgeResponseStatus ?? null;

      const os = osFromPath(path);
      if (os) {
        byOs[os] += count;
        if (bot) botish += count;
        else browserish += count;
        hits.push({
          when,
          date,
          path,
          os,
          count,
          country,
          browser: browser || "—",
          ua: ua || "—",
          status,
          likelyBot: bot,
        });
        continue;
      }

      const packId = packIdFromStorePath(path);
      if (packId) {
        storeTotal += count;
        byPack[packId] = (byPack[packId] || 0) + count;
        storeHits.push({
          when,
          date,
          path,
          packId,
          count,
          country,
          browser: browser || "—",
          ua: ua || "—",
          status,
          likelyBot: bot,
        });
      }
    }

    hits.sort((a, b) => b.when.localeCompare(a.when));
    storeHits.sort((a, b) => b.when.localeCompare(a.when));

    const total = hits.reduce((s, h) => s + h.count, 0);
    const packs = Object.entries(byPack)
      .map(([id, count]) => ({ id, count }))
      .sort((a, b) => b.count - a.count);

    sendJson(res, 200, {
      host: downloadsHost,
      days,
      range: { since, until },
      total,
      byOs,
      browserish,
      botish,
      hits: hits.slice(0, 100),
      store: {
        total: storeTotal,
        packs,
        hits: storeHits.slice(0, 100),
      },
    });
  } catch (e) {
    sendJson(res, 500, {
      error: e instanceof Error ? e.message : String(e),
    });
  }
}

function adminApiMiddleware(env: AdminVisitsEnv) {
  return (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const path = req.url?.split("?")[0];
    if (path === "/api/visits") {
      void handleVisits(req, res, env);
      return;
    }
    if (path === "/api/download-hits") {
      void handleDownloadHits(req, res, env);
      return;
    }
    next();
  };
}

/** Local dev-only: /api/visits + /api/download-hits → Cloudflare GraphQL. */
export function adminVisitsApi(env: AdminVisitsEnv): Plugin {
  const attach = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use(adminApiMiddleware(env));
  };

  return {
    name: "admin-visits-api",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}
