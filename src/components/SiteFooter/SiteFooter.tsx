import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { FEEDBACK_EMAIL, FEEDBACK_MAILTO } from "lib/contact";
import { SocialLinks } from "components/SocialLinks";
import scss from "./SiteFooter.module.scss";

const cn = classNames.bind(scss);

const SiteFooter: FC = () => {
  const { t } = useI18n();

  return (
    <footer className={cn("SiteFooter")}>
      <div className={cn("SiteFooter__brand")}>
        <span>{t("footer", "tagline")}</span>
        <SocialLinks variant="footer" />
      </div>
      <span className={cn("SiteFooter__links")}>
        <a href="/privacy/">{t("footer", "privacy")}</a>
        <a href="/press/">{t("footer", "press")}</a>
        <Link to="/docs">{t("footer", "docs")}</Link>
        <Link to="/benchmark">{t("footer", "benchmark")}</Link>
        <a href="#support">{t("footer", "support")}</a>
        <a href={FEEDBACK_MAILTO}>{FEEDBACK_EMAIL}</a>
        <a href="#waitlist">{t("footer", "notify")}</a>
        <a href="#download">{t("footer", "download")}</a>
      </span>
    </footer>
  );
};

export { SiteFooter };
