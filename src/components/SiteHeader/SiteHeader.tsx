import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { LOCALES, LOCALE_LABEL, type Locale } from "i18n/locale";
import scss from "./SiteHeader.module.scss";

const cn = classNames.bind(scss);

type SiteHeaderProps = {
  variant?: "home" | "page";
};

const SiteHeader: FC<SiteHeaderProps> = ({ variant = "home" }) => {
  const { t, locale, setLocale } = useI18n();

  const linkClass = ({ isActive }: { isActive: boolean }) => cn("SiteHeader__link", { active: isActive });

  const pageLinks = (
    <div className={cn("SiteHeader__cluster", "pages")}>
      <NavLink className={linkClass} to="/docs">
        {t("nav", "docs")}
      </NavLink>
      <NavLink className={linkClass} to="/benchmark">
        {t("nav", "benchmark")}
      </NavLink>
      {variant === "home" ? (
        <a className={cn("SiteHeader__link", "cta")} href="#download">
          {t("nav", "download")}
        </a>
      ) : (
        <Link className={cn("SiteHeader__link", "cta")} to="/#download">
          {t("nav", "download")}
        </Link>
      )}
    </div>
  );

  return (
    <header className={`top ${cn("SiteHeader")}`}>
      <Link className={cn("SiteHeader__brand")} to="/">
        Doc Hub
      </Link>
      <nav className={cn("SiteHeader__nav")} aria-label={t("nav", "ariaPrimary")}>
        {variant === "home" ? (
          <div className={cn("SiteHeader__cluster", "sections")}>
            <a className={cn("SiteHeader__link")} href="#how">
              {t("nav", "how")}
            </a>
            <a className={cn("SiteHeader__link")} href="#screens">
              {t("nav", "screens")}
            </a>
            <a className={cn("SiteHeader__link")} href="#packs">
              {t("nav", "packs")}
            </a>
            <a className={cn("SiteHeader__link")} href="#support">
              {t("nav", "support")}
            </a>
            <a className={cn("SiteHeader__link")} href="#faq">
              {t("nav", "faq")}
            </a>
          </div>
        ) : (
          <div className={cn("SiteHeader__cluster", "sections")}>
            <Link className={cn("SiteHeader__link")} to="/">
              {t("nav", "home")}
            </Link>
          </div>
        )}

        {pageLinks}

        <div className={cn("SiteHeader__lang")} role="group" aria-label={t("nav", "langLabel")}>
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              className={cn("SiteHeader__langBtn", { active: locale === code })}
              aria-pressed={locale === code}
              onClick={() => setLocale(code as Locale)}
            >
              {LOCALE_LABEL[code]}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export { SiteHeader };
export type { SiteHeaderProps };
