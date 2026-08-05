import { DownloadCtas } from "./DownloadCtas";
import { ProductStage } from "./ProductStage";
import { useI18n } from "../i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <ProductStage />
      <div className="hero-copy">
        <p className="brand-mark">Doc Hub</p>
        <h1>{t("hero", "headline")}</h1>
        <p className="lede">{t("hero", "lede")}</p>
        <DownloadCtas />
      </div>
    </section>
  );
}
