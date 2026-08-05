import { useI18n } from "../i18n";

export function ControlledWorkflow() {
  const { t } = useI18n();

  const steps = [
    { title: t("workflow", "taskTitle"), body: t("workflow", "taskBody") },
    {
      title: t("workflow", "contextTitle"),
      body: t("workflow", "contextBody"),
    },
    { title: t("workflow", "scopedTitle"), body: t("workflow", "scopedBody") },
    { title: t("workflow", "reviewTitle"), body: t("workflow", "reviewBody") },
    {
      title: t("workflow", "deliveryTitle"),
      body: t("workflow", "deliveryBody"),
    },
  ];

  const values = [
    {
      title: t("workflow", "relevantTitle"),
      body: t("workflow", "relevantBody"),
    },
    { title: t("workflow", "riskTitle"), body: t("workflow", "riskBody") },
    {
      title: t("workflow", "handoffsTitle"),
      body: t("workflow", "handoffsBody"),
    },
    {
      title: t("workflow", "verificationTitle"),
      body: t("workflow", "verificationBody"),
    },
  ];

  return (
    <section
      className="band workflow"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <p className="workflow-eyebrow">{t("workflow", "eyebrow")}</p>
      <h2 id="workflow-title">{t("workflow", "title")}</h2>
      <p>{t("workflow", "lede")}</p>

      <ol className="workflow-flow">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="workflow-step-n" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>

      <ul className="workflow-values">
        {values.map((value) => (
          <li key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </li>
        ))}
      </ul>

      <p className="workflow-close">{t("workflow", "close")}</p>
    </section>
  );
}
