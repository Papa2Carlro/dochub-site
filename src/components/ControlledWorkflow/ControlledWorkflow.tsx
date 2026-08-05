import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import scss from "./ControlledWorkflow.module.scss";

const cn = classNames.bind(scss);

const ControlledWorkflow: FC = () => {
  const { t } = useI18n();

  const steps = [
    { title: t("workflow", "taskTitle"), body: t("workflow", "taskBody") },
    { title: t("workflow", "contextTitle"), body: t("workflow", "contextBody") },
    { title: t("workflow", "scopedTitle"), body: t("workflow", "scopedBody") },
    { title: t("workflow", "reviewTitle"), body: t("workflow", "reviewBody") },
    { title: t("workflow", "deliveryTitle"), body: t("workflow", "deliveryBody") },
  ];

  const values = [
    { title: t("workflow", "relevantTitle"), body: t("workflow", "relevantBody") },
    { title: t("workflow", "riskTitle"), body: t("workflow", "riskBody") },
    { title: t("workflow", "handoffsTitle"), body: t("workflow", "handoffsBody") },
    { title: t("workflow", "verificationTitle"), body: t("workflow", "verificationBody") },
  ];

  return (
    <section className={`band ${cn("ControlledWorkflow")}`} id="workflow" aria-labelledby="workflow-title">
      <p className={cn("ControlledWorkflow__eyebrow")}>{t("workflow", "eyebrow")}</p>
      <h2 id="workflow-title">{t("workflow", "title")}</h2>
      <p>{t("workflow", "lede")}</p>

      <ol className={cn("ControlledWorkflow__flow")}>
        {steps.map((step, i) => (
          <li key={step.title} className={cn("ControlledWorkflow__step")}>
            <span className={cn("ControlledWorkflow__n")} aria-hidden="true">
              {i + 1}
            </span>
            <h3 className={cn("ControlledWorkflow__name")}>{step.title}</h3>
            <p className={cn("ControlledWorkflow__body")}>{step.body}</p>
          </li>
        ))}
      </ol>

      <ul className={cn("ControlledWorkflow__values")}>
        {values.map((value) => (
          <li key={value.title} className={cn("ControlledWorkflow__value")}>
            <h3 className={cn("ControlledWorkflow__name")}>{value.title}</h3>
            <p className={cn("ControlledWorkflow__body")}>{value.body}</p>
          </li>
        ))}
      </ul>

      <p className={cn("ControlledWorkflow__close")}>{t("workflow", "close")}</p>
    </section>
  );
};

export { ControlledWorkflow };
