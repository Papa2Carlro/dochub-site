import { useI18n } from "../i18n";
import { SocialLinks } from "components/SocialLinks";

/**
 * Promo strip — share CTA + press kit. Copy lives on /press/ for full drafts.
 */
export function Promo() {
  const { t } = useI18n();
  return (
    <section className="band promo" id="promo" aria-labelledby="promo-title">
      <h2 id="promo-title">{t("promo", "title")}</h2>
      <p>{t("promo", "lede")}</p>
      <div className="promo-actions">
        <a className="btn btn-primary" href="/press/">
          {t("promo", "ctaPress")}
        </a>
        <a
          className="btn btn-ghost"
          href="/screens/portfolio-task-board.png"
          download
        >
          {t("promo", "ctaBoardShot")}
        </a>
        <a className="btn btn-ghost" href="/og.png" download>
          {t("promo", "ctaOg")}
        </a>
      </div>
      <pre className="promo-blurb" tabIndex={0}>
        {t("promo", "shareBlurb")}
      </pre>
      <SocialLinks className="promo-social" />
    </section>
  );
}
