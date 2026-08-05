import { useI18n } from "../i18n";
import { FEEDBACK_EMAIL, licenseMailto } from "../lib/contact";
import { PATREON_TIERS, PATREON_URL } from "../lib/patreon";

const BLURB_KEY = {
  spark: "sparkBlurb",
  ember: "emberBlurb",
  patron: "patronBlurb",
  anvil: "anvilBlurb",
  "founding-forge": "foundingBlurb",
  "papa-carlo": "papaBlurb",
} as const;

export function Support() {
  const { t } = useI18n();

  return (
    <section
      className="band support"
      id="support"
      aria-labelledby="support-title"
    >
      <p className="packs-eyebrow">Carlo Forge · Prymax Labs</p>
      <h2 id="support-title">{t("support", "title")}</h2>
      <p>
        {t("support", "lede")
          .split(t("support", "packsLink"))
          .map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <a href="#packs">{t("support", "packsLink")}</a>
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
      </p>
      <p className="support-feedback">
        {t("support", "feedback")}{" "}
        <a href={licenseMailto()}>{FEEDBACK_EMAIL}</a>
      </p>

      <ul className="support-grid">
        {PATREON_TIERS.map((tier, index) => (
          <li
            key={tier.id}
            className={`glass-card support-card${tier.featured ? " support-card--featured" : ""}`}
            style={{ animationDelay: `${100 + index * 60}ms` }}
          >
            <div className="support-card-top">
              <h3>{tier.name}</h3>
              <p className="support-price">
                <span className="support-price-amt">${tier.priceUsd}</span>
                <span className="support-price-unit">
                  {t("support", "priceUnit")}
                </span>
              </p>
            </div>
            <p className="support-blurb">
              {t("support", BLURB_KEY[tier.id as keyof typeof BLURB_KEY])}
            </p>
            {tier.featured ? (
              <span className="support-badge">{t("support", "badgePopular")}</span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="support-cta">
        <a
          className="btn btn-primary"
          href={PATREON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("support", "ctaJoin")}
        </a>
        <p className="support-note">{t("support", "note")}</p>
      </div>
    </section>
  );
}
