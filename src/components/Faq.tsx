const FAQS = [
  {
    q: "Is Doc Hub free?",
    a: "Yes. The free launcher baseline — workspaces, docs, planning board, local analytics — stays free. No mandatory subscription for essential project access.",
  },
  {
    q: "Does it need the cloud?",
    a: "No. Core workflows are local-first and work offline. Cloud sync is not part of the free baseline.",
  },
  {
    q: "Which platforms are supported?",
    a: "macOS, Windows, and Linux installers. Download from this site or the public releases page.",
  },
  {
    q: "macOS says the developer cannot be verified — what do I do?",
    a: "For unsigned builds: right-click the app → Open → Open. Apple notarization is optional for later releases.",
  },
  {
    q: "Is the source code open?",
    a: "The application is closed core. Extension contracts are published for adapters and plugins. Installers are distributed separately from the private source repository.",
  },
] as const;

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
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
        // FAQ rich results — crawlers that execute JS will pick this up;
        // critical SoftwareApplication schema lives in index.html.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 id="faq-title">FAQ</h2>
      <dl className="faq-list">
        {FAQS.map((item) => (
          <div key={item.q} className="faq-item">
            <dt>{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
