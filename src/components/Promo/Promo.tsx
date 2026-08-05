import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { SocialLinks } from "components/SocialLinks";
import scss from "./Promo.module.scss";

const cn = classNames.bind(scss);

/** Promo strip — share CTA + press kit. Copy lives on /press/ for full drafts. */
const Promo: FC = () => {
  const { t } = useI18n();

  return (
    <section className={`band ${cn("Promo")}`} id="promo" aria-labelledby="promo-title">
      <h2 id="promo-title">{t("promo", "title")}</h2>
      <p>{t("promo", "lede")}</p>
      <div className={cn("Promo__actions")}>
        <a className="btn btn-primary" href="/press/">
          {t("promo", "ctaPress")}
        </a>
        <a className="btn btn-ghost" href="/screens/portfolio-task-board.png" download>
          {t("promo", "ctaBoardShot")}
        </a>
        <a className="btn btn-ghost" href="/og.png" download>
          {t("promo", "ctaOg")}
        </a>
      </div>
      <pre className={cn("Promo__blurb")} tabIndex={0}>
        {t("promo", "shareBlurb")}
      </pre>
      <SocialLinks className={cn("Promo__social")} />
    </section>
  );
};

export { Promo };
