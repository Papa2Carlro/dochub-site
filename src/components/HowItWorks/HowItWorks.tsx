import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import scss from "./HowItWorks.module.scss";

const cn = classNames.bind(scss);

const HowItWorks: FC = () => {
  const { t } = useI18n();
  const steps = [
    { n: "1", title: t("how", "step1Title"), body: t("how", "step1Body") },
    { n: "2", title: t("how", "step2Title"), body: t("how", "step2Body") },
    { n: "3", title: t("how", "step3Title"), body: t("how", "step3Body") },
  ];

  return (
    <section className={`band ${cn("HowItWorks")}`} id="how" aria-labelledby="how-title">
      <h2 id="how-title">{t("how", "title")}</h2>
      <p>{t("how", "lede")}</p>
      <ol className={cn("HowItWorks__list")}>
        {steps.map((step) => (
          <li key={step.n} className={cn("HowItWorks__item")}>
            <span className={cn("HowItWorks__n")} aria-hidden="true">
              {step.n}
            </span>
            <h3 className={cn("HowItWorks__name")}>{step.title}</h3>
            <p className={cn("HowItWorks__body")}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export { HowItWorks };
