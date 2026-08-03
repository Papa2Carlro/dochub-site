import { useEffect, useState } from "react";
import {
  detectOs,
  fetchReleaseLinks,
  LATEST_RELEASE_URL,
  OS_LABEL,
  USES_OWN_CDN,
  type OsKind,
  type ReleaseLinks,
} from "../lib/releases";

const PLATFORMS: OsKind[] = ["mac", "win", "linux"];

export function DownloadCtas() {
  const [os] = useState(() => detectOs());
  const [links, setLinks] = useState<ReleaseLinks>({
    htmlUrl: LATEST_RELEASE_URL,
    byOs: {},
    tracked: USES_OWN_CDN,
  });

  useEffect(() => {
    let cancelled = false;
    void fetchReleaseLinks().then((next) => {
      if (!cancelled) setLinks(next);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const primaryHref =
    (os !== "other" ? links.byOs[os] : undefined) ?? links.htmlUrl;

  const hint =
    os === "mac"
      ? "Unsigned builds: if macOS blocks the app, right-click → Open → Open."
      : os === "win"
        ? "Unsigned builds: SmartScreen → More info → Run anyway."
        : null;

  return (
    <div className="ctas">
      <a className="btn btn-primary" href={primaryHref}>
        Download for {OS_LABEL[os]}
      </a>
      <a className="btn btn-ghost" href={links.htmlUrl}>
        {links.tracked ? "All builds" : "All releases"}
      </a>
      <ul className="platforms" aria-label="Downloads by platform">
        {PLATFORMS.map((kind) => (
          <li key={kind}>
            <a
              className={kind === os ? "is-active" : undefined}
              href={links.byOs[kind] ?? links.htmlUrl}
            >
              {OS_LABEL[kind]}
            </a>
          </li>
        ))}
      </ul>
      {links.tracked ? (
        <p className="hint">Downloads are served from our CDN (counted per OS).</p>
      ) : null}
      {hint ? <p className="hint">{hint}</p> : null}
    </div>
  );
}
