/** Public feedback / product contact (landing). */
export const FEEDBACK_EMAIL = "priymak615@gmail.com";

export const FEEDBACK_MAILTO = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent("Doc Hub feedback")}`;

/** Early pack licenses by email until this date (inclusive). */
export const EARLY_LICENSE_UNTIL = "2026-09-01";

export const EARLY_LICENSE_UNTIL_LABEL = "1 September 2026";

export function licenseMailto(packName?: string): string {
  const subject = packName
    ? `Doc Hub early license — ${packName}`
    : "Doc Hub early license request";
  const body = packName
    ? `Hi — I'd like an early license for ${packName} (before ${EARLY_LICENSE_UNTIL_LABEL}).\n\nMachine / OS:\nUse case:\n`
    : `Hi — I'd like an early pack license (before ${EARLY_LICENSE_UNTIL_LABEL}).\n\nPack:\nMachine / OS:\nUse case:\n`;
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** True while early email licenses are still offered. */
export function earlyLicenseOpen(now = new Date()): boolean {
  // Inclusive through end of EARLY_LICENSE_UNTIL (UTC calendar day).
  const end = Date.parse(`${EARLY_LICENSE_UNTIL}T23:59:59.999Z`);
  return now.getTime() <= end;
}
