const HIGHLIGHTS = [
  "Doc Hub branding and closed-core distribution",
  "macOS, Windows, and Linux installers on the CDN path",
  "In-app auto-update via signed latest.json",
  "Marketing site with product screens and SEO basics",
] as const;

export function WhatsNew() {
  return (
    <section
      className="band whats-new"
      id="whats-new"
      aria-labelledby="whats-new-title"
    >
      <h2 id="whats-new-title">What’s new in 0.1.0</h2>
      <p>
        First public channel for the free launcher — private source, public
        binaries.
      </p>
      <ul className="whats-list">
        {HIGHLIGHTS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="whats-note">
        Unsigned builds may need an OS trust click — details in the FAQ.
      </p>
    </section>
  );
}
