import { useI18n } from "../i18n";

export function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { n: "1", title: t("how", "step1Title"), body: t("how", "step1Body") },
    { n: "2", title: t("how", "step2Title"), body: t("how", "step2Body") },
    { n: "3", title: t("how", "step3Title"), body: t("how", "step3Body") },
  ];

  return (
    <section className="band how" id="how" aria-labelledby="how-title">
      <h2 id="how-title">{t("how", "title")}</h2>
      <p>{t("how", "lede")}</p>
      <ol className="how-list">
        {steps.map((step) => (
          <li key={step.n}>
            <span className="how-n" aria-hidden="true">
              {step.n}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
