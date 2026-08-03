const CATALOG = [
  {
    id: "com.dochub.adapter.typescript",
    glyph: "TS",
    name: "JavaScript / TypeScript adapter",
    tier: "free" as const,
    blurb: "Maps Node/TS tooling into platform events.",
  },
  {
    id: "com.dochub.adapter.unity",
    glyph: "U",
    name: "Unity / C# adapter",
    tier: "free" as const,
    blurb: "Maps Unity Editor activity into platform events.",
  },
  {
    id: "com.dochub.pack.visual-ship",
    glyph: "VS",
    name: "Visual Ship Gate",
    tier: "paid" as const,
    priceUsd: 15,
    blurb:
      "Playwright shots, baseline diffs, and CI gates for local web UI routes — $15 one-time.",
    featured: true,
  },
  {
    id: "com.dochub.pack.dtj",
    glyph: "DT",
    name: "DTJ Trace Gate",
    tier: "paid" as const,
    priceUsd: 25,
    blurb:
      "Portable .dtj sessions, TraceQL explore, MCP analyze, and incident bundles for board/CI — $25 one-time.",
    featured: true,
  },
] as const;

export function Packs() {
  return (
    <section className="band packs" id="packs" aria-labelledby="packs-title">
      <p className="packs-eyebrow">First-party Plugin Store</p>
      <h2 id="packs-title">Packs that stay on your machine</h2>
      <p>
        Free adapters ship with the catalog. Paid packs are optional — the
        launcher stays free, offline, and yours.
      </p>

      <ul className="store-grid">
        {CATALOG.map((pack, index) => (
          <li
            key={pack.id}
            className={`glass-card store-card${"featured" in pack && pack.featured ? " store-card--featured" : ""}`}
            style={{ animationDelay: `${120 + index * 80}ms` }}
          >
            <div className="store-card-top">
              <span
                className={`store-glyph${pack.tier === "paid" ? " store-glyph--paid" : ""}`}
                aria-hidden
              >
                {pack.glyph}
              </span>
              <span
                className={`store-tier store-tier--${pack.tier}`}
              >
                {pack.tier}
              </span>
            </div>
            <h3>{pack.name}</h3>
            <p className="store-id">{pack.id}</p>
            <p className="store-blurb">{pack.blurb}</p>
            {pack.tier === "paid" ? (
              <a className="btn btn-primary store-card-cta" href="#waitlist">
                Notify me · ${pack.priceUsd}
              </a>
            ) : (
              <span className="store-card-meta">Included in catalog</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
