import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import scss from "./Features.module.scss";

const cn = classNames.bind(scss);

const Features: FC = () => {
  const { t } = useI18n();
  const features = [
    { title: t("features", "localTitle"), body: t("features", "localBody") },
    { title: t("features", "boardTitle"), body: t("features", "boardBody") },
    { title: t("features", "extensionsTitle"), body: t("features", "extensionsBody") },
  ];

  return (
    <section className={`band ${cn("Features")}`} id="features" aria-labelledby="features-title">
      <h2 id="features-title">{t("features", "title")}</h2>
      <ul className={cn("Features__list")}>
        {features.map((f) => (
          <li key={f.title} className={cn("Features__item")}>
            <h3 className={cn("Features__name")}>{f.title}</h3>
            <p className={cn("Features__body")}>{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Features };
