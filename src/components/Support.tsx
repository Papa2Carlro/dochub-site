import { PATREON_TIERS, PATREON_URL } from "../lib/patreon";

export function Support() {
  return (
    <section className="band support" id="support" aria-labelledby="support-title">
      <p className="packs-eyebrow">Carlo Forge · Prymax Labs</p>
      <h2 id="support-title">Support the author</h2>
      <p>
        Doc Hub’s free baseline stays free. Patreon is a tip jar for studio work —
        packs will check out separately when they ship.
      </p>

      <ul className="support-grid">
        {PATREON_TIERS.map((tier, index) => (
          <li
            key={tier.id}
            className={`glass-card support-card${tier.featured ? " support-card--featured" : ""}`}
            style={{ animationDelay: `${100 + index * 60}ms` }}
          >
            <div className="support-card-top">
              <h3>{tier.name}</h3>
              <p className="support-price">
                <span className="support-price-amt">${tier.priceUsd}</span>
                <span className="support-price-unit">/mo</span>
              </p>
            </div>
            <p className="support-blurb">{tier.blurb}</p>
            {tier.featured ? (
              <span className="support-badge">Popular</span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="support-cta">
        <a
          className="btn btn-primary"
          href={PATREON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join on Patreon
        </a>
        <p className="support-note">
          Higher tiers include everything below them. No pack unlocks here.
        </p>
      </div>
    </section>
  );
}
