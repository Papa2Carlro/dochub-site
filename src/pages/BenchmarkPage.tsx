import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "components/SiteHeader";
import { useI18n } from "i18n";
import { BenchmarkHistory } from "./benchmark/BenchmarkHistory";
import { BenchmarkNow } from "./benchmark/BenchmarkNow";
import { BenchmarkStoreProvider, useBenchmarkUi } from "./benchmark/BenchmarkStoreContext";

export function BenchmarkPage() {
  return (
    <BenchmarkStoreProvider>
      <BenchmarkPageInner />
    </BenchmarkStoreProvider>
  );
}

function BenchmarkPageInner() {
  const { t } = useI18n();
  const tab = useBenchmarkUi((s) => s.tab);
  const setTab = useBenchmarkUi((s) => s.setTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page bench-page">
      <SiteHeader variant="page" />

      <main className="band bench">
        <p className="bench-crumb">
          <Link to="/">{t("benchmark", "crumbHome")}</Link>
          <span>{t("benchmark", "crumbCurrent")}</span>
        </p>
        <h1 className="bench-title">{t("benchmark", "title")}</h1>
        <p className="bench-lede">{t("benchmark", "lede")}</p>

        <div className="bench-tabs" role="tablist" aria-label={t("benchmark", "tabsAria")}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "now"}
            className={`bench-tab${tab === "now" ? " is-active" : ""}`}
            onClick={() => setTab("now")}
          >
            {t("benchmark", "tabNow")}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "history"}
            className={`bench-tab${tab === "history" ? " is-active" : ""}`}
            onClick={() => setTab("history")}
          >
            {t("benchmark", "tabHistory")}
          </button>
        </div>

        {tab === "now" ? <BenchmarkNow /> : <BenchmarkHistory />}

        <h2 className="bench-h2">{t("benchmark", "limitationsTitle")}</h2>
        <ul className="bench-list">
          <li>{t("benchmark", "lim1")}</li>
          <li>{t("benchmark", "lim2")}</li>
          <li>{t("benchmark", "lim3")}</li>
          <li>{t("benchmark", "lim4")}</li>
        </ul>

        <div className="bench-foot">
          <p className="bench-faint">{t("benchmark", "footSnapshot")}</p>
          <p className="bench-foot-links">
            <Link to="/">{t("benchmark", "footBack")}</Link>
            <a href="/press/">{t("benchmark", "footPress")}</a>
            <Link to="/#download">{t("benchmark", "footDownload")}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
