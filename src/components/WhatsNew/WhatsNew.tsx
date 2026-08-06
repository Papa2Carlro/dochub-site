import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import scss from "./WhatsNew.module.scss";

const cn = classNames.bind(scss);

const WhatsNew: FC = () => {
  const { t } = useI18n();
  const highlights = [
    t("whatsNew", "item1"),
    t("whatsNew", "item2"),
    t("whatsNew", "item3"),
    t("whatsNew", "item4"),
  ];

  return (
    <section className={`band ${cn("WhatsNew")}`} id="whats-new" aria-labelledby="whats-new-title">
      <h2 id="whats-new-title">{t("whatsNew", "title")}</h2>
      <p>{t("whatsNew", "lede")}</p>
      <ul className={cn("WhatsNew__list")}>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={cn("WhatsNew__note")}>{t("whatsNew", "note")}</p>
    </section>
  );
};

export { WhatsNew };
