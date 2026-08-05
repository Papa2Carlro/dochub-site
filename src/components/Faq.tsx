import { useI18n } from "../i18n";

const FAQ_KEYS = [
  ["q1", "a1"],
  ["q2", "a2"],
  ["q3", "a3"],
  ["q4", "a4"],
  ["q5", "a5"],
  ["q6", "a6"],
  ["q7", "a7"],
] as const;

export function Faq() {
  const { t } = useI18n();
  const faqs = FAQ_KEYS.map(([q, a]) => ({
    q: t("faq", q),
    a: t("faq", a),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="band faq" id="faq" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 id="faq-title">{t("faq", "title")}</h2>
      <dl className="faq-list">
        {faqs.map((item) => (
          <div key={item.q} className="faq-item">
            <dt>{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
