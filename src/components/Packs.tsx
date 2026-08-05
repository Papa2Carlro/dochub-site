import { useI18n } from "../i18n";
import {
  EARLY_LICENSE_UNTIL_LABEL,
  FEEDBACK_EMAIL,
  earlyLicenseOpen,
  licenseMailto,
} from "../lib/contact";

const CATALOG = [
  {
    id: "com.dochub.adapter.typescript",
    glyph: "TS",
    nameKey: "tsName" as const,
    blurbKey: "tsBlurb" as const,
    tier: "free" as const,
  },
  {
    id: "com.dochub.adapter.unity",
    glyph: "U",
    nameKey: "unityName" as const,
    blurbKey: "unityBlurb" as const,
    tier: "free" as const,
  },
  {
    id: "com.dochub.pack.visual-ship",
    glyph: "VS",
    nameKey: "visualShipName" as const,
    blurbKey: "visualShipBlurb" as const,
    tier: "paid" as const,
    priceUsd: 15,
    featured: true,
  },
  {
    id: "com.dochub.pack.dtj",
    glyph: "DT",
    nameKey: "dtjName" as const,
    blurbKey: "dtjBlurb" as const,
    tier: "paid" as const,
    priceUsd: 25,
    featured: true,
  },
] as const;

export function Packs() {
  const { t } = useI18n();
  const earlyOpen = earlyLicenseOpen();

  return (
    <section className="band packs" id="packs" aria-labelledby="packs-title">
      <p className="packs-eyebrow">{t("packs", "eyebrow")}</p>
      <h2 id="packs-title">{t("packs", "title")}</h2>
      <p>{t("packs", "lede")}</p>

      {earlyOpen ? (
        <aside
          className="store-early"
          aria-label={t("packs", "earlyAria")}
        >
          <p className="store-early-kicker">
            {t("packs", "earlyKicker", { date: EARLY_LICENSE_UNTIL_LABEL })}
          </p>
          <p>
            {t("packs", "earlyBody", {
              email: FEEDBACK_EMAIL,
              date: EARLY_LICENSE_UNTIL_LABEL,
            })
              .split(FEEDBACK_EMAIL)
              .map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href={licenseMailto()}>{FEEDBACK_EMAIL}</a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
          </p>
        </aside>
      ) : null}

      <ul className="store-grid">
        {CATALOG.map((pack, index) => {
          const name = t("packs", pack.nameKey);
          return (
            <li
              key={pack.id}
              className={`glass-card store-card${"featured" in pack && pack.featured ? " store-card--featured" : ""}`}
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <div className="store-card-top">
                <span
                  className={`store-glyph${pack.tier === "paid" ? " store-glyph--paid" : ""}`}
                  aria-hidden
                >
                  {pack.glyph}
                </span>
                <span className={`store-tier store-tier--${pack.tier}`}>
                  {t("packs", pack.tier === "paid" ? "tierPaid" : "tierFree")}
                </span>
              </div>
              <h3>{name}</h3>
              <p className="store-id">{pack.id}</p>
              <p className="store-blurb">{t("packs", pack.blurbKey)}</p>
              {pack.tier === "paid" ? (
                earlyOpen ? (
                  <a
                    className="btn btn-primary store-card-cta"
                    href={licenseMailto(name)}
                  >
                    {t("packs", "ctaEmailLicense", { price: pack.priceUsd })}
                  </a>
                ) : (
                  <a className="btn btn-primary store-card-cta" href="#waitlist">
                    {t("packs", "ctaNotify", { price: pack.priceUsd })}
                  </a>
                )
              ) : (
                <span className="store-card-meta">
                  {t("packs", "includedMeta")}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
