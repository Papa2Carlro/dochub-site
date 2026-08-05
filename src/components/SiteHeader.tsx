import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n";
import { LOCALES, LOCALE_LABEL, type Locale } from "../i18n/locale";

type SiteHeaderProps = {
  variant?: "home" | "page";
};

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const { t, locale, setLocale } = useI18n();

  const pageLinks = (
    <div className="top-cluster top-cluster-pages">
      <NavLink className="top-link" to="/docs">
        {t("nav", "docs")}
      </NavLink>
      <NavLink className="top-link" to="/benchmark">
        {t("nav", "benchmark")}
      </NavLink>
      {variant === "home" ? (
        <a className="top-link top-link-cta" href="#download">
          {t("nav", "download")}
        </a>
      ) : (
        <Link className="top-link top-link-cta" to="/#download">
          {t("nav", "download")}
        </Link>
      )}
    </div>
  );

  return (
    <header className="top">
      <Link className="brand" to="/">
        Doc Hub
      </Link>
      <nav className="top-nav" aria-label={t("nav", "ariaPrimary")}>
        {variant === "home" ? (
          <div className="top-cluster top-cluster-sections">
            <a className="top-link" href="#how">
              {t("nav", "how")}
            </a>
            <a className="top-link" href="#screens">
              {t("nav", "screens")}
            </a>
            <a className="top-link" href="#packs">
              {t("nav", "packs")}
            </a>
            <a className="top-link" href="#support">
              {t("nav", "support")}
            </a>
            <a className="top-link" href="#faq">
              {t("nav", "faq")}
            </a>
          </div>
        ) : (
          <div className="top-cluster top-cluster-sections">
            <Link className="top-link" to="/">
              {t("nav", "home")}
            </Link>
          </div>
        )}

        {pageLinks}

        <div className="lang-switch" role="group" aria-label={t("nav", "langLabel")}>
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn${locale === code ? " is-active" : ""}`}
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
}
