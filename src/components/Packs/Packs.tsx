import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import {
  EARLY_LICENSE_UNTIL_LABEL,
  FEEDBACK_EMAIL,
  earlyLicenseOpen,
  licenseMailto,
} from "lib/contact";
import scss from "./Packs.module.scss";

const cn = classNames.bind(scss);

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

const Packs: FC = () => {
  const { t } = useI18n();
  const earlyOpen = earlyLicenseOpen();

  return (
    <section className={`band ${cn("Packs")}`} id="packs" aria-labelledby="packs-title">
      <p className={cn("Packs__eyebrow")}>{t("packs", "eyebrow")}</p>
      <h2 id="packs-title">{t("packs", "title")}</h2>
      <p>{t("packs", "lede")}</p>

      {earlyOpen ? (
        <aside className={cn("Packs__early")} aria-label={t("packs", "earlyAria")}>
          <p className={cn("Packs__earlyKicker")}>
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
                )
              )}
          </p>
        </aside>
      ) : null}

      <ul className={cn("Packs__grid")}>
        {CATALOG.map((pack, index) => {
          const name = t("packs", pack.nameKey);
          const featured = "featured" in pack && pack.featured;
          return (
            <li
              key={pack.id}
              className={`glass-card ${cn("Packs__card", { featured })}`}
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <div className={cn("Packs__cardTop")}>
                <span className={cn("Packs__glyph", { paid: pack.tier === "paid" })} aria-hidden>
                  {pack.glyph}
                </span>
                <span className={cn("Packs__tier", pack.tier)}>
                  {t("packs", pack.tier === "paid" ? "tierPaid" : "tierFree")}
                </span>
              </div>
              <h3 className={cn("Packs__name")}>{name}</h3>
              <p className={cn("Packs__id")}>{pack.id}</p>
              <p className={cn("Packs__blurb")}>{t("packs", pack.blurbKey)}</p>
              {pack.tier === "paid" ? (
                earlyOpen ? (
                  <a className={`btn btn-primary ${cn("Packs__cta")}`} href={licenseMailto(name)}>
                    {t("packs", "ctaEmailLicense", { price: pack.priceUsd })}
                  </a>
                ) : (
                  <a className={`btn btn-primary ${cn("Packs__cta")}`} href="#waitlist">
                    {t("packs", "ctaNotify", { price: pack.priceUsd })}
                  </a>
                )
              ) : (
                <span className={cn("Packs__meta")}>{t("packs", "includedMeta")}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { Packs };
