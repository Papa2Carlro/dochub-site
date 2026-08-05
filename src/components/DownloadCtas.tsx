import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import {
  detectOs,
  fetchReleaseLinks,
  LATEST_RELEASE_URL,
  USES_OWN_CDN,
  type OsKind,
  type ReleaseLinks,
} from "../lib/releases";

const PLATFORMS: OsKind[] = ["mac", "win", "linux"];

const OS_KEY = {
  mac: "osMac",
  win: "osWin",
  linux: "osLinux",
  other: "osOther",
} as const;

export function DownloadCtas() {
  const { t } = useI18n();
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

  const osLabel = t("download", OS_KEY[os]);

  const hint =
    os === "mac"
      ? t("download", "hintMac")
      : os === "win"
        ? t("download", "hintWin")
        : null;

  return (
    <div className="ctas">
      <a className="btn btn-primary" href={primaryHref}>
        {t("download", "ctaPrimary", { os: osLabel })}
      </a>
      <a className="btn btn-ghost" href={links.htmlUrl}>
        {links.tracked
          ? t("download", "ctaAllPlatforms")
          : t("download", "ctaAllReleases")}
      </a>
      <ul className="platforms" aria-label={t("download", "platformsAria")}>
        {PLATFORMS.map((kind) => (
          <li key={kind}>
            <a
              className={kind === os ? "is-active" : undefined}
              href={links.byOs[kind] ?? links.htmlUrl}
            >
              {t("download", OS_KEY[kind])}
            </a>
          </li>
        ))}
      </ul>
      {links.tracked ? (
        <p className="hint">{t("download", "hintCdn")}</p>
      ) : null}
      {hint ? <p className="hint">{hint}</p> : null}
    </div>
  );
}
