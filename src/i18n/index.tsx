import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  detectLocale,
  interpolate,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "./locale";
import { en, type Messages } from "./messages/en";
import { uk } from "./messages/uk";

const catalogs: Record<Locale, Messages> = { en, uk };

/** Onest ≈ Syne (display); Manrope ≈ DM Sans (body) — both ship Cyrillic. */
const CYRILLIC_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Onest:wght@600;700;800&display=swap";
const CYRILLIC_FONTS_ID = "dochub-cyrillic-fonts";

function ensureCyrillicFonts(locale: Locale) {
  if (typeof document === "undefined") return;
  let link = document.getElementById(CYRILLIC_FONTS_ID) as HTMLLinkElement | null;
  if (locale !== "uk") return;
  if (link) return;
  link = document.createElement("link");
  link.id = CYRILLIC_FONTS_ID;
  link.rel = "stylesheet";
  link.href = CYRILLIC_FONTS_HREF;
  document.head.appendChild(link);
}

type MessageSection = keyof Messages;
type MessageKey<S extends MessageSection> = keyof Messages[S] & string;

type TFunction = {
  <S extends MessageSection>(
    section: S,
    key: MessageKey<S>,
    vars?: Record<string, string | number>,
  ): string;
};

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TFunction;
  messages: Messages;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    ensureCyrillicFonts(locale);
  }, [locale]);

  const messages = catalogs[locale];

  const t = useCallback<TFunction>(
    (section, key, vars) => {
      const template = String(
        messages[section][key] ?? catalogs.en[section][key] ?? key,
      );
      return interpolate(template, vars);
    },
    [messages],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
