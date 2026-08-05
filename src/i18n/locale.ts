export type Locale = "en" | "uk";

export const LOCALES: Locale[] = ["en", "uk"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  uk: "UK",
};

export const LOCALE_STORAGE_KEY = "dochub-site-locale";

export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "en" || stored === "uk") return stored;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== "undefined") {
    const lang = (navigator.language || "").toLowerCase();
    if (lang.startsWith("uk") || lang.startsWith("ru")) return "uk";
  }
  return "en";
}

export function interpolate(
  template: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] !== undefined ? String(vars[key]) : `{${key}}`,
  );
}
