import { FC } from "react";
import classNames from "classnames/bind";
import { DownloadCtas } from "components/DownloadCtas";
import { ProductStage } from "components/ProductStage";
import { useI18n } from "i18n";
import scss from "./Hero.module.scss";

const cn = classNames.bind(scss);

const Hero: FC = () => {
  const { t } = useI18n();

  return (
    <section className={`hero ${cn("Hero")}`}>
      <ProductStage />
      <div className={cn("Hero__copy")}>
        <p className={cn("Hero__brand")}>Doc Hub</p>
        <h1 className={cn("Hero__title")}>{t("hero", "headline")}</h1>
        <p className={cn("Hero__lede")}>{t("hero", "lede")}</p>
        <DownloadCtas className={cn("Hero__ctas")} />
      </div>
    </section>
  );
};

export { Hero };
