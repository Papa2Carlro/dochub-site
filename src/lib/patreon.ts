/** Carlo Forge Patreon — tip jar only; packs checkout separately later. */

export const PATREON_URL = "https://www.patreon.com/c/carloforge";

export const PATREON_ABOUT =
  "Carlo Forge by Prymax Labs — indie tools & games. Support keeps Doc Hub and future titles moving. Packs sell separately.";

export type PatreonTier = {
  id: string;
  name: string;
  priceUsd: number;
  blurb: string;
  featured?: boolean;
};

export const PATREON_TIERS: readonly PatreonTier[] = [
  {
    id: "spark",
    name: "Spark",
    priceUsd: 1,
    blurb: "Thanks — and access to the supporter feed.",
  },
  {
    id: "ember",
    name: "Ember",
    priceUsd: 3,
    blurb: "Plus a monthly studio thank-you note.",
  },
  {
    id: "patron",
    name: "Patron",
    priceUsd: 5,
    blurb: "Plus early changelog / build notes for Doc Hub & studio.",
    featured: true,
  },
  {
    id: "anvil",
    name: "Anvil",
    priceUsd: 10,
    blurb: "Plus your name on a future Supporters wall.",
  },
  {
    id: "founding-forge",
    name: "Founding Forge",
    priceUsd: 25,
    blurb: "Plus a soft vote on what to prioritize next.",
  },
  {
    id: "papa-carlo",
    name: "Papa Carlo",
    priceUsd: 50,
    blurb: "Plus a personal thanks credit in a release note when relevant.",
  },
] as const;
