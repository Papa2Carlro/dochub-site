import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { DownloadCtas } from "components/DownloadCtas";
import scss from "./DownloadBand.module.scss";

const cn = classNames.bind(scss);

/** Second CTA band — SEO + conversion after feature story. */
const DownloadBand: FC = () => {
  const { t } = useI18n();

  return (
    <section className={`band ${cn("DownloadBand")}`} id="download" aria-labelledby="download-title">
      <h2 id="download-title">{t("download", "title")}</h2>
      <p>{t("download", "lede")}</p>
      <DownloadCtas className={cn("DownloadBand__ctas")} />
    </section>
  );
};

export { DownloadBand };
