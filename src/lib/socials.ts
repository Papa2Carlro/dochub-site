import { PATREON_URL } from "./patreon";

/** Public Carlo Forge channels — keep in sync with press kit / n8n promo. */
export type SocialId = "telegram" | "x" | "patreon";

export type SocialLink = {
  id: SocialId;
  /** Brand label shown on the site (not translated). */
  label: string;
  /** Public handle / slug for aria and tooltips. */
  handle: string;
  href: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "telegram",
    label: "Telegram",
    handle: "@carlo_forge",
    href: "https://t.me/carlo_forge",
  },
  {
    id: "x",
    label: "X",
    handle: "@carlo_forge",
    href: "https://x.com/carlo_forge",
  },
  {
    id: "patreon",
    label: "Patreon",
    handle: "carloforge",
    href: PATREON_URL,
  },
] as const;
