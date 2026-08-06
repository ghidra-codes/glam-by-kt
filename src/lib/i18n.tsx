import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "sv" | "en";

const STORAGE_KEY = "glam-by-kt-language";

/**
 * PLACEHOLDER — the real BokaDirekt profile URL has not been supplied yet.
 * Replace this single constant once the client provides it.
 */
export const BOOKING_URL = "#booking-url-placeholder";
export const BOOKING_URL_IS_PLACEHOLDER = true;

/** PLACEHOLDER — awaiting the client's Instagram handle / URL. */
export const INSTAGRAM_URL = "#instagram-url-placeholder";

type Dict = typeof translations.sv;

const translations = {
  sv: {
    nav: {
      services: "Tjänster",
      about: "Om Kela",
      work: "Utvalt arbete",
      contact: "Kontakt",
      menu: "Meny",
      close: "Stäng",
    },
    booking: {
      cta: "Boka tid",
      via: "Bokning sker via BokaDirekt",
      newTab: "öppnas i ny flik",
      pending: "Bokningslänk inväntas",
    },
    language: { label: "Språk", sv: "Svenska", en: "English" },
    hero: {
      eyebrow: "Stockholm · Hår & Makeup",
      title: "Hårkonst med precision",
      lead: "Kela är hårstylist och makeupartist i Stockholm med fokus på färg — blekning, slingor, toning och skräddarsydd klippning.",
      secondary: "Se tjänster",
      portraitAlt: "Kela i salongen, iförd svart kavaj",
    },
    services: {
      eyebrow: "Specialistområden",
      title: "Tjänster",
      lead: "Varje behandling planeras utifrån hårets kondition, struktur och önskat resultat.",
      note: "Behandlingsinnehåll, tidsåtgång och priser visas i BokaDirekt.",
      items: [
        { title: "Blekning", body: "Ljusare resultat planerat utifrån hårets kondition." },
        { title: "Slingor", body: "Placering anpassad efter form, växtriktning och önskat uttryck." },
        { title: "Toning", body: "Nyansering som justerar ton och djup." },
        { title: "Färgning", body: "Färgarbete med jämnhet och hållbarhet i fokus." },
        { title: "Klippning", body: "Klippning formad efter hårets fall och personliga uttryck." },
        { title: "Makeup", body: "Makeup för fotografering, fest och bröllop." },
      ],
    },
    about: {
      eyebrow: "Om Kela",
      title: "Erfarenhet, teknik och omsorg",
      body: "Kela arbetar som hårstylist och makeupartist i Stockholm med särskild inriktning mot färgarbete. Arbetssättet är metodiskt: analys av hårets utgångsläge, en tydlig plan och ett resultat som ska bära över tid.",
      note: "PLATSHÅLLARE — fullständig biografi, utbildningar och yrkesbakgrund inväntas från klienten.",
      link: "Mer om Kela",
      portraitAlt: "Porträtt av Kela på kontoret",
    },
    work: {
      eyebrow: "Utvalt arbete",
      title: "Galleri",
      lead: "Ett urval av färg- och stylingarbeten publiceras här när bilderna är godkända.",
      placeholder: "Bildplatshållare",
      pending: "PLATSHÅLLARE — godkända portföljbilder inväntas.",
    },
    cta: {
      eyebrow: "Bokning",
      title: "Boka din tid",
      body: "All tidsbokning sker via BokaDirekt.",
    },
    footer: {
      contact: "Kontakt",
      contactPlaceholder: "PLATSHÅLLARE — kontaktuppgifter och adress inväntas.",
      follow: "Följ",
      instagram: "Instagram",
      instagramPlaceholder: "PLATSHÅLLARE — Instagram-länk inväntas.",
      book: "Boka",
      rights: "Alla rättigheter förbehållna.",
      logoSlot: "Logotypplats",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About Kela",
      work: "Selected work",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    booking: {
      cta: "Book appointment",
      via: "Booking is handled by BokaDirekt",
      newTab: "opens in a new tab",
      pending: "Booking link pending",
    },
    language: { label: "Language", sv: "Svenska", en: "English" },
    hero: {
      eyebrow: "Stockholm · Hair & Makeup",
      title: "Hair artistry with precision",
      lead: "Kela is a Stockholm-based hair stylist and makeup artist focused on colour — bleaching, highlights, toning and tailored cutting.",
      secondary: "View services",
      portraitAlt: "Kela in the salon, wearing a black blazer",
    },
    services: {
      eyebrow: "Specialist areas",
      title: "Services",
      lead: "Every treatment is planned around hair condition, structure and the desired result.",
      note: "Treatment details, duration and pricing are shown in BokaDirekt.",
      items: [
        { title: "Bleaching", body: "Lighter results planned around the condition of the hair." },
        { title: "Highlights", body: "Placement adapted to shape, growth and desired effect." },
        { title: "Toning", body: "Refinement that adjusts tone and depth." },
        { title: "Colouring", body: "Colour work focused on evenness and longevity." },
        { title: "Cutting", body: "Cuts shaped around how the hair falls and personal expression." },
        { title: "Makeup", body: "Makeup for photography, events and weddings." },
      ],
    },
    about: {
      eyebrow: "About Kela",
      title: "Experience, technique and care",
      body: "Kela works as a hair stylist and makeup artist in Stockholm with a particular focus on colour. The approach is methodical: an analysis of the hair's starting point, a clear plan, and a result meant to hold over time.",
      note: "PLACEHOLDER — full biography, training and professional background pending from the client.",
      link: "More about Kela",
      portraitAlt: "Portrait of Kela in the office",
    },
    work: {
      eyebrow: "Selected work",
      title: "Gallery",
      lead: "A selection of colour and styling work will be published here once imagery is approved.",
      placeholder: "Image placeholder",
      pending: "PLACEHOLDER — approved portfolio imagery pending.",
    },
    cta: {
      eyebrow: "Booking",
      title: "Book your appointment",
      body: "All appointments are booked through BokaDirekt.",
    },
    footer: {
      contact: "Contact",
      contactPlaceholder: "PLACEHOLDER — contact details and address pending.",
      follow: "Follow",
      instagram: "Instagram",
      instagramPlaceholder: "PLACEHOLDER — Instagram link pending.",
      book: "Book",
      rights: "All rights reserved.",
      logoSlot: "Logo slot",
    },
  },
} satisfies Record<Language, unknown> as { sv: DictShape; en: DictShape };

type DictShape = typeof rawSv;
const rawSv = {} as never;

type I18nValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dict;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sv");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "sv" || stored === "en") setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] as Dict }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
