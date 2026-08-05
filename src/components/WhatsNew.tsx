import { useI18n } from "../i18n";

export function WhatsNew() {
  const { t } = useI18n();
  const highlights = [
    t("whatsNew", "item1"),
    t("whatsNew", "item2"),
    t("whatsNew", "item3"),
    t("whatsNew", "item4"),
  ];

  return (
    <section
      className="band whats-new"
      id="whats-new"
      aria-labelledby="whats-new-title"
    >
      <h2 id="whats-new-title">{t("whatsNew", "title")}</h2>
      <p>{t("whatsNew", "lede")}</p>
      <ul className="whats-list">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="whats-note">{t("whatsNew", "note")}</p>
    </section>
  );
}
