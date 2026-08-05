import { useI18n } from "../i18n";

export function Features() {
  const { t } = useI18n();
  const features = [
    { title: t("features", "localTitle"), body: t("features", "localBody") },
    { title: t("features", "boardTitle"), body: t("features", "boardBody") },
    {
      title: t("features", "extensionsTitle"),
      body: t("features", "extensionsBody"),
    },
  ];

  return (
    <section
      className="band features"
      id="features"
      aria-labelledby="features-title"
    >
      <h2 id="features-title">{t("features", "title")}</h2>
      <ul className="feature-list">
        {features.map((f) => (
          <li key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
