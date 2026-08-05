import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { FEEDBACK_EMAIL, licenseMailto } from "lib/contact";
import { PATREON_TIERS, PATREON_URL } from "lib/patreon";
import { SocialLinks } from "components/SocialLinks";
import scss from "./Support.module.scss";

const cn = classNames.bind(scss);

const BLURB_KEY = {
  spark: "sparkBlurb",
  ember: "emberBlurb",
  patron: "patronBlurb",
  anvil: "anvilBlurb",
  "founding-forge": "foundingBlurb",
  "papa-carlo": "papaBlurb",
} as const;

const Support: FC = () => {
  const { t } = useI18n();

  return (
    <section className={`band ${cn("Support")}`} id="support" aria-labelledby="support-title">
      <p className={cn("Support__eyebrow")}>Carlo Forge · Prymax Labs</p>
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
            )
          )}
      </p>
      <p className={cn("Support__feedback")}>
        {t("support", "feedback")} <a href={licenseMailto()}>{FEEDBACK_EMAIL}</a>
      </p>

      <SocialLinks className={cn("Support__social")} />

      <ul className={cn("Support__grid")}>
        {PATREON_TIERS.map((tier, index) => (
          <li
            key={tier.id}
            className={`glass-card ${cn("Support__card", { featured: tier.featured })}`}
            style={{ animationDelay: `${100 + index * 60}ms` }}
          >
            <div className={cn("Support__cardTop")}>
              <h3 className={cn("Support__name")}>{tier.name}</h3>
              <p className={cn("Support__price")}>
                <span className={cn("Support__priceAmt")}>${tier.priceUsd}</span>
                <span className={cn("Support__priceUnit")}>{t("support", "priceUnit")}</span>
              </p>
            </div>
            <p className={cn("Support__blurb")}>
              {t("support", BLURB_KEY[tier.id as keyof typeof BLURB_KEY])}
            </p>
            {tier.featured ? (
              <span className={cn("Support__badge")}>{t("support", "badgePopular")}</span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className={cn("Support__cta")}>
        <a className="btn btn-primary" href={PATREON_URL} target="_blank" rel="noopener noreferrer">
          {t("support", "ctaJoin")}
        </a>
        <p className={cn("Support__note")}>{t("support", "note")}</p>
      </div>
    </section>
  );
};

export { Support };
