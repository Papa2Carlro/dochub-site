export type OsKind = "mac" | "win" | "linux" | "other";

/**
 * Tracked downloads host (Cloudflare Worker + R2), e.g. https://downloads.doc-hub.app
 * When set, CTAs hit /d/{mac|win|linux} so every click is counted.
 * Manifest: GET {base}/latest.json
 */
const DOWNLOADS_BASE = (
  import.meta.env.VITE_DOWNLOADS_BASE?.trim() || ""
).replace(/\/$/, "");

/** Optional GitHub mirror while CDN is empty (build artifacts only). */
const DIST_REPO =
  import.meta.env.VITE_DIST_REPO?.trim() || "Papa2Carlro/dochub-releases";

export const USES_OWN_CDN = Boolean(DOWNLOADS_BASE);

export const LATEST_RELEASE_URL = USES_OWN_CDN
  ? `${DOWNLOADS_BASE}/`
  : `https://github.com/${DIST_REPO}/releases/latest`;

const GH_API = `https://api.github.com/repos/${DIST_REPO}/releases/latest`;
const CDN_MANIFEST = USES_OWN_CDN ? `${DOWNLOADS_BASE}/latest.json` : null;

export function detectOs(): OsKind {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "win";
  if (ua.includes("linux")) return "linux";
  return "other";
}

export const OS_LABEL: Record<OsKind, string> = {
  mac: "macOS",
  win: "Windows",
  linux: "Linux",
  other: "your OS",
};

/** Tracked download URL for an OS (goes through the Worker). */
export function trackedDownloadUrl(os: OsKind): string | null {
  if (!USES_OWN_CDN || os === "other") return null;
  return `${DOWNLOADS_BASE}/d/${os}`;
}

function matchAsset(name: string, os: OsKind): boolean {
  const n = name.toLowerCase();
  if (os === "mac") return n.endsWith(".dmg") || n.endsWith(".app.tar.gz");
  if (os === "win") return n.endsWith(".exe") || n.endsWith(".msi");
  if (os === "linux")
    return n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm");
  return false;
}

function rank(name: string): number {
  const n = name.toLowerCase();
  if (n.endsWith(".dmg") || n.endsWith(".exe") || n.endsWith(".appimage")) return 0;
  if (n.endsWith(".deb") || n.endsWith(".msi")) return 1;
  return 2;
}

export type ReleaseAsset = { name: string; browser_download_url: string };

export function pickAsset(
  assets: ReleaseAsset[],
  os: OsKind,
): ReleaseAsset | null {
  const matched = assets.filter((a) => matchAsset(a.name, os));
  if (!matched.length) return null;
  matched.sort((a, b) => rank(a.name) - rank(b.name));
  return matched[0] ?? null;
}

export type ReleaseLinks = {
  htmlUrl: string;
  byOs: Partial<Record<OsKind, string>>;
  tracked: boolean;
};

/** CDN latest.json (Tauri updater shape + optional installers map). */
type CdnManifest = {
  version?: string;
  platforms?: Record<string, { url?: string }>;
  /** Convenience keys for the landing (Worker may also resolve these). */
  installers?: Partial<Record<"mac" | "win" | "linux", string>>;
};

function linksFromCdnManifest(manifest: CdnManifest): ReleaseLinks {
  const byOs: Partial<Record<OsKind, string>> = {};
  for (const os of ["mac", "win", "linux"] as const) {
    const tracked = trackedDownloadUrl(os);
    if (tracked) byOs[os] = tracked;
    else if (manifest.installers?.[os]) byOs[os] = manifest.installers[os]!;
  }
  // Fill from platforms if installers missing
  const platforms = manifest.platforms ?? {};
  if (!byOs.mac) {
    const p =
      platforms["darwin-aarch64"]?.url || platforms["darwin-x86_64"]?.url;
    if (p) byOs.mac = trackedDownloadUrl("mac") ?? p;
  }
  if (!byOs.win) {
    const p = platforms["windows-x86_64"]?.url;
    if (p) byOs.win = trackedDownloadUrl("win") ?? p;
  }
  if (!byOs.linux) {
    const p =
      platforms["linux-x86_64"]?.url || platforms["linux-aarch64"]?.url;
    if (p) byOs.linux = trackedDownloadUrl("linux") ?? p;
  }
  return {
    htmlUrl: LATEST_RELEASE_URL,
    byOs,
    tracked: true,
  };
}

async function fetchGithubLinks(): Promise<ReleaseLinks> {
  const res = await fetch(GH_API, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) {
    return { htmlUrl: LATEST_RELEASE_URL, byOs: {}, tracked: false };
  }
  const data = (await res.json()) as {
    html_url?: string;
    assets?: ReleaseAsset[];
  };
  const assets = Array.isArray(data.assets) ? data.assets : [];
  const byOs: Partial<Record<OsKind, string>> = {};
  for (const os of ["mac", "win", "linux"] as const) {
    const asset = pickAsset(assets, os);
    if (asset) byOs[os] = asset.browser_download_url;
  }
  return {
    htmlUrl: data.html_url ?? LATEST_RELEASE_URL,
    byOs,
    tracked: false,
  };
}

export async function fetchReleaseLinks(): Promise<ReleaseLinks> {
  if (CDN_MANIFEST) {
    try {
      const res = await fetch(CDN_MANIFEST, { cache: "no-store" });
      if (res.ok) {
        const manifest = (await res.json()) as CdnManifest;
        return linksFromCdnManifest(manifest);
      }
    } catch {
      // fall through — still return tracked /d/ URLs
    }
    const byOs: Partial<Record<OsKind, string>> = {};
    for (const os of ["mac", "win", "linux"] as const) {
      const u = trackedDownloadUrl(os);
      if (u) byOs[os] = u;
    }
    return { htmlUrl: LATEST_RELEASE_URL, byOs, tracked: true };
  }
  return fetchGithubLinks();
}
