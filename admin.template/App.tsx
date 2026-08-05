import { useCallback, useEffect, useMemo, useState } from "react";

type DlStats = {
  mac: number;
  win: number;
  linux: number;
  total: number;
  devices?: {
    count: number;
    last_updated_at: string | null;
  } | null;
};

type GhAsset = { name: string; downloads: number };

type VisitsData = {
  total: number;
  days: number;
  byDay: { date: string; visits: number }[];
  host?: string;
};

type DownloadHit = {
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

type DownloadHitsData = {
  host: string;
  days: number;
  total: number;
  byOs: { mac: number; win: number; linux: number };
  browserish: number;
  botish: number;
  hits: DownloadHit[];
  store?: {
    total: number;
    packs: { id: string; count: number }[];
    hits: StoreHit[];
  };
};

const DOWNLOADS_BASE =
  import.meta.env.VITE_DOWNLOADS_BASE?.replace(/\/$/, "") ||
  "https://dochub-downloads.dochubhq.workers.dev";

const STATS_TOKEN = import.meta.env.VITE_STATS_TOKEN?.trim() || "";
const DIST_REPO =
  import.meta.env.VITE_DIST_REPO?.trim() || "Papa2Carlro/dochub-releases";

const CF_ANALYTICS =
  "https://dash.cloudflare.com/?to=:/analytics/web-analytics/sites";

const DAY_OPTIONS = [1, 7, 30] as const;
type DayOption = (typeof DAY_OPTIONS)[number];

const TABS = [
  { id: "funnel", label: "Funnel" },
  { id: "installers", label: "Installers" },
  { id: "store", label: "Store" },
  { id: "visits", label: "Visits" },
  { id: "devices", label: "Devices" },
  { id: "github", label: "GitHub" },
] as const;

type TabId = (typeof TABS)[number]["id"];

async function fetchWorkerStats(): Promise<DlStats> {
  if (!STATS_TOKEN) {
    throw new Error("VITE_STATS_TOKEN missing — copy ADMIN.env.example → admin/.env");
  }
  const res = await fetch(
    `${DOWNLOADS_BASE}/stats?token=${encodeURIComponent(STATS_TOKEN)}`,
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || `HTTP ${res.status}`);
  }
  return data as DlStats;
}

async function fetchGithubAssets(): Promise<GhAsset[]> {
  const res = await fetch(
    `https://api.github.com/repos/${DIST_REPO}/releases/latest`,
  );
  if (!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
  const data = await res.json();
  return (data.assets || []).map(
    (a: { name: string; download_count: number }) => ({
      name: a.name,
      downloads: a.download_count,
    }),
  );
}

async function fetchVisits(days: number): Promise<VisitsData> {
  const res = await fetch(`/api/visits?days=${days}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || `HTTP ${res.status}`);
  }
  return data as VisitsData;
}

async function fetchDownloadHits(days: number): Promise<DownloadHitsData> {
  const res = await fetch(`/api/download-hits?days=${days}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || `HTTP ${res.status}`);
  }
  return data as DownloadHitsData;
}

function pct(part: number, whole: number): string {
  if (!whole) return "—";
  return `${((100 * part) / whole).toFixed(0)}%`;
}

function shortPack(id: string): string {
  return id.replace(/^com\.dochub\./, "");
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <article className="card">
      <p className="card-label">{label}</p>
      <p className="card-value">{value}</p>
      {hint ? <p className="card-hint">{hint}</p> : null}
    </article>
  );
}

export function AdminApp() {
  const [tab, setTab] = useState<TabId>("funnel");
  const [days, setDays] = useState<DayOption>(30);
  const [stats, setStats] = useState<DlStats | null>(null);
  const [gh, setGh] = useState<GhAsset[] | null>(null);
  const [visits, setVisits] = useState<VisitsData | null>(null);
  const [hits, setHits] = useState<DownloadHitsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [visitsError, setVisitsError] = useState<string | null>(null);
  const [hitsError, setHitsError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    setVisitsError(null);
    setHitsError(null);
    try {
      const [w, g, v, h] = await Promise.all([
        fetchWorkerStats(),
        fetchGithubAssets().catch(() => [] as GhAsset[]),
        fetchVisits(days).catch((e) => {
          setVisitsError(e instanceof Error ? e.message : String(e));
          return null;
        }),
        fetchDownloadHits(days).catch((e) => {
          setHitsError(e instanceof Error ? e.message : String(e));
          return null;
        }),
      ]);
      setStats(w);
      setGh(g);
      setVisits(v);
      setHits(h);
      setUpdatedAt(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const ghInstallers =
    gh?.filter((a) => !a.name.endsWith(".sig") && a.name !== "latest.json") ??
    [];
  const ghTotal = ghInstallers.reduce((s, a) => s + a.downloads, 0);

  const conversion = useMemo(() => {
    const v = visits?.total ?? 0;
    const kv = stats?.total ?? 0;
    const http = hits?.total ?? 0;
    if (!v) {
      return {
        kv: { label: "—", hint: "Needs visits > 0" },
        http: { label: "—", hint: "Needs visits > 0" },
      };
    }
    return {
      kv: {
        label: `${((100 * kv) / v).toFixed(1)}%`,
        hint: `${kv} KV / ${v} visits (KV all-time)`,
      },
      http: {
        label: `${((100 * http) / v).toFixed(1)}%`,
        hint: `${http} HTTP /d/* / ${v} visits (${days}d)`,
      },
    };
  }, [visits?.total, stats?.total, hits?.total, days]);

  const reconcileNotes = useMemo(() => {
    const notes: string[] = [];
    if (!hits || !stats) return notes;
    const http = hits.total;
    if (http > 0 && hits.botish / http >= 0.5) {
      notes.push(
        `HTTP /d/*: ${hits.botish}/${http} look like curl/bot — KV may be inflated by tests.`,
      );
    }
    if (http > stats.total) {
      notes.push(
        `HTTP hits (${http}) > KV total (${stats.total}) in this window — check CF sampling or KV reset.`,
      );
    }
    for (const os of ["mac", "win", "linux"] as const) {
      const h = hits.byOs[os];
      const k = stats[os];
      if (h > k) {
        notes.push(
          `${os}: HTTP ${h} > KV ${k} — counter lag or probes outside Worker bump path.`,
        );
      }
    }
    return notes;
  }, [hits, stats]);

  const windowLabel = days === 1 ? "Today" : `${days}d`;

  return (
    <div className="shell">
      <header className="top">
        <div>
          <p className="eyebrow">Local only · gitignored</p>
          <h1>Doc Hub admin</h1>
        </div>
        <div className="top-actions">
          <div className="day-toggle" role="group" aria-label="Time window">
            {DAY_OPTIONS.map((d) => (
              <button
                key={d}
                type="button"
                className={`btn ghost day-btn${days === d ? " day-btn--on" : ""}`}
                onClick={() => setDays(d)}
                disabled={loading && days === d}
              >
                {d === 1 ? "Today" : `${d}d`}
              </button>
            ))}
          </div>
          <button type="button" className="btn" onClick={() => void refresh()} disabled={loading}>
            {loading ? "Refreshing…" : "Refresh"}
          </button>
          <a className="btn ghost" href={CF_ANALYTICS} target="_blank" rel="noreferrer">
            Web Analytics →
          </a>
        </div>
      </header>

      {error ? <p className="banner err">{error}</p> : null}
      {!STATS_TOKEN ? (
        <p className="banner warn">
          Set <code>VITE_STATS_TOKEN</code> in <code>admin/.env</code> (see{" "}
          <code>ADMIN.env.example</code>).
        </p>
      ) : null}
      {reconcileNotes.map((n) => (
        <p key={n} className="banner warn">
          {n}
        </p>
      ))}

      <nav className="tabs" role="tablist" aria-label="Admin sections">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`tab${tab === t.id ? " tab--on" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="tab-panel" role="tabpanel">
        {tab === "funnel" ? (
          <section className="section section--flush">
            <h2>Funnel ({windowLabel})</h2>
            <p className="muted">
              Prefer <strong>HTTP conversion</strong> (same window). KV conversion mixes
              all-time counters with windowed visits.
            </p>
            <div className="grid">
              <StatCard
                label={`Visits (${windowLabel})`}
                value={visits?.total ?? "—"}
                hint={visitsError || "RUM"}
              />
              <StatCard label="Downloads (KV)" value={stats?.total ?? "—"} />
              <StatCard
                label="HTTP conversion"
                value={conversion.http.label}
                hint={conversion.http.hint}
              />
              <StatCard
                label="KV conversion"
                value={conversion.kv.label}
                hint={conversion.kv.hint}
              />
              <StatCard
                label="macOS share"
                value={stats ? pct(stats.mac, stats.total) : "—"}
                hint={stats ? `${stats.mac} of ${stats.total}` : undefined}
              />
              <StatCard
                label="Windows share"
                value={stats ? pct(stats.win, stats.total) : "—"}
                hint={stats ? `${stats.win} of ${stats.total}` : undefined}
              />
              <StatCard
                label="Linux share"
                value={stats ? pct(stats.linux, stats.total) : "—"}
                hint={stats ? `${stats.linux} of ${stats.total}` : undefined}
              />
              <StatCard
                label="Store packs"
                value={hits?.store?.total ?? "—"}
                hint={`${hits?.store?.packs?.length ?? 0} unique`}
              />
            </div>
          </section>
        ) : null}

        {tab === "installers" ? (
          <>
            <section className="section section--flush">
              <h2>Downloads (Worker KV)</h2>
              <p className="muted">
                Counted via <code>{DOWNLOADS_BASE}/d/&#123;os&#125;</code> · all-time
              </p>
              <div className="grid">
                <StatCard label="Total" value={stats?.total ?? "—"} />
                <StatCard label="macOS" value={stats?.mac ?? "—"} />
                <StatCard label="Windows" value={stats?.win ?? "—"} />
                <StatCard label="Linux" value={stats?.linux ?? "—"} />
              </div>
            </section>
            <section className="section">
              <h2>HTTP hits · UA ({windowLabel})</h2>
              <p className="muted">
                Edge on <code>{hits?.host ?? "dochub-downloads…"}</code> ·{" "}
                <code>/d/mac|win|linux</code>
              </p>
              {hitsError ? <p className="banner warn">{hitsError}</p> : null}
              <div className="grid">
                <StatCard label="HTTP hits" value={hits?.total ?? "—"} />
                <StatCard
                  label="Likely browser"
                  value={hits?.browserish ?? "—"}
                  hint="not curl/bot UA"
                />
                <StatCard
                  label="Likely bot/curl"
                  value={hits?.botish ?? "—"}
                  hint="curl, wget, bots…"
                />
              </div>
              {hits?.hits?.length ? (
                <ul className="asset-list hits-list">
                  {hits.hits.map((h, i) => (
                    <li key={`${h.when}-${h.path}-${h.ua}-${i}`}>
                      <span className="hit-main">
                        <strong className="hit-os">{h.os}</strong>
                        <span className="hit-meta">
                          {h.when.replace("T", " ").replace(":00Z", "Z")} · {h.country} ·{" "}
                          {h.likelyBot ? "bot/curl" : "browser"} · {h.browser}
                          {h.status != null ? ` · ${h.status}` : ""}
                        </span>
                        <span className="hit-ua" title={h.ua}>
                          {h.ua}
                        </span>
                      </span>
                      <strong>×{h.count}</strong>
                    </li>
                  ))}
                </ul>
              ) : !hitsError ? (
                <p className="muted">No /d/* hits in this window (or CF lag).</p>
              ) : null}
            </section>
          </>
        ) : null}

        {tab === "store" ? (
          <section className="section section--flush">
            <h2>Store packs (.dhpack · {windowLabel})</h2>
            <p className="muted">
              Paths <code>/store/…/*.dhpack</code> on the Worker CDN.
            </p>
            {hitsError ? <p className="banner warn">{hitsError}</p> : null}
            <div className="grid">
              <StatCard label="Pack DLs" value={hits?.store?.total ?? "—"} />
              <StatCard
                label="Unique packs"
                value={hits?.store?.packs?.length ?? "—"}
              />
            </div>
            {hits?.store?.packs?.length ? (
              <ul className="asset-list">
                {hits.store.packs.map((p) => (
                  <li key={p.id}>
                    <span title={p.id}>{shortPack(p.id)}</span>
                    <strong>{p.count}</strong>
                  </li>
                ))}
              </ul>
            ) : !hitsError ? (
              <p className="muted">No .dhpack hits in this window.</p>
            ) : null}
            {hits?.store?.hits?.length ? (
              <ul className="asset-list hits-list" style={{ marginTop: "0.75rem" }}>
                {hits.store.hits.slice(0, 40).map((h, i) => (
                  <li key={`${h.when}-${h.path}-${i}`}>
                    <span className="hit-main">
                      <strong className="hit-os">{shortPack(h.packId)}</strong>
                      <span className="hit-meta">
                        {h.when.replace("T", " ").replace(":00Z", "Z")} · {h.country} ·{" "}
                        {h.likelyBot ? "bot/curl" : "browser"}
                        {h.status != null ? ` · ${h.status}` : ""}
                      </span>
                    </span>
                    <strong>×{h.count}</strong>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        {tab === "visits" ? (
          <section className="section section--flush">
            <h2>Visits ({windowLabel})</h2>
            <p className="muted">
              <code>GET /api/visits</code> ·{" "}
              <code>{visits?.host ?? "dochub-site.pages.dev"}</code>
            </p>
            {visitsError ? <p className="banner warn">{visitsError}</p> : null}
            <div className="grid">
              <StatCard label="Total" value={visits?.total ?? "—"} hint="RUM" />
            </div>
            {visits?.byDay?.length ? (
              <ul className="asset-list">
                {visits.byDay.map((d) => (
                  <li key={d.date}>
                    <span>{d.date}</span>
                    <strong>{d.visits}</strong>
                  </li>
                ))}
              </ul>
            ) : !visitsError ? (
              <p className="muted">No RUM visits yet (beacon may still be warming).</p>
            ) : null}
          </section>
        ) : null}

        {tab === "devices" ? (
          <section className="section section--flush">
            <h2>Devices (install-set)</h2>
            <p className="muted">
              D1 <code>device_install_sets</code> via Worker <code>/stats</code> —
              machines that synced pack intent (no accounts).
            </p>
            <div className="grid">
              <StatCard
                label="Synced devices"
                value={stats?.devices?.count ?? "—"}
                hint={
                  stats?.devices == null
                    ? "redeploy worker for devices field"
                    : undefined
                }
              />
              <StatCard
                label="Last sync"
                value={
                  stats?.devices?.last_updated_at
                    ? stats.devices.last_updated_at.replace("T", " ").slice(0, 19)
                    : "—"
                }
              />
            </div>
          </section>
        ) : null}

        {tab === "github" ? (
          <section className="section section--flush">
            <h2>GitHub Releases</h2>
            <p className="muted">
              Public asset counts on <code>{DIST_REPO}</code> — fallback CTAs.
            </p>
            <div className="grid">
              <StatCard label="Installer DLs (approx)" value={ghTotal} />
            </div>
            {ghInstallers.length > 0 ? (
              <ul className="asset-list">
                {ghInstallers.map((a) => (
                  <li key={a.name}>
                    <span>{a.name}</span>
                    <strong>{a.downloads}</strong>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}
      </div>

      <footer className="foot">
        <span>
          {updatedAt
            ? `Updated ${updatedAt.toLocaleTimeString()}`
            : "Not loaded yet"}
        </span>
        <span className="muted">Never ship — folder is gitignored</span>
      </footer>
    </div>
  );
}
