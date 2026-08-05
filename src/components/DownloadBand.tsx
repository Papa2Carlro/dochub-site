import { useI18n } from "../i18n";
import { DownloadCtas } from "./DownloadCtas";

/** Second CTA band — SEO + conversion after feature story. */
export function DownloadBand() {
  const { t } = useI18n();
  return (
    <section
      className="band download-band"
      id="download"
      aria-labelledby="download-title"
    >
      <h2 id="download-title">{t("download", "title")}</h2>
      <p>{t("download", "lede")}</p>
      <DownloadCtas />
    </section>
  );
}
