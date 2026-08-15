import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "sv" | "en";

const STORAGE_KEY = "glam-by-kt-language";

/** Official BokaDirekt profile — all appointments are booked externally. */
export const BOOKING_URL = "https://www.bokadirekt.se/places/dear-beauty-60384/";

/** Official Instagram for Glam By KT. */
export const INSTAGRAM_URL = "https://www.instagram.com/glam_by_kt/";
export const INSTAGRAM_HANDLE = "@GLAM_BY_KT";

type Dict = typeof translations.sv;

const translations = {
  sv: {
    nav: {
      services: "Tjänster",
      about: "Om Kela",
      education: "Utbildning",
      work: "Galleri",
      contact: "Kontakt",
      menu: "Meny",
      close: "Stäng",
    },
    booking: {
      cta: "Boka tid",
      via: "Bokning sker via BokaDirekt",
      newTab: "öppnas i ny flik",
    },
    language: { label: "Språk", sv: "Svenska", en: "English" },
    hero: {
      eyebrow: "Stockholm · Hår & Makeup",
      title: "Färg, precision och 25 års erfarenhet",
      lead: "Glam By KT är Kelas personliga varumärke — hårstylist och makeupartist i Stockholm med specialistkompetens inom blekning, slingor, toning och färg.",
      secondary: "Se tjänster",
      portraitAlt: "Kela i salongen, iförd svart kavaj",
      facts: [
        { value: "2001", label: "I branschen sedan" },
        { value: "7 år", label: "Utbildning, BES Academy Milano" },
        { value: "25+", label: "År av yrkeserfarenhet" },
      ],
    },
    services: {
      eyebrow: "Tjänster",
      title: "Specialistområden",
      lead: "Varje behandling planeras utifrån hårets kondition, struktur och önskat resultat. Tyngdpunkten ligger på avancerat färgarbete.",
      colourTitle: "Färgspecialisering",
      colourItems: [
        {
          title: "Blekning",
          body: "Ljusare resultat planerat utifrån hårets kondition och utgångsläge.",
        },
        {
          title: "Slingor",
          body: "Placering anpassad efter ansiktsform, växtriktning och önskat uttryck.",
        },
        { title: "Toning", body: "Nyansering som justerar ton, djup och glans." },
        { title: "Färgning", body: "Färgarbete med jämnhet och hållbarhet i fokus." },
      ],
      moreTitle: "Även hos Kela",
      moreItems: [
        { title: "Klippning", body: "Precisionsklippning formad efter hårets fall." },
        { title: "Styling", body: "Styling för vardag, fest och fotografering." },
        { title: "Bröllopsuppsättning", body: "Hår för bröllop och högtid." },
        { title: "Avancerad makeup", body: "Makeup för fest, event, bröllop och foto." },
      ],
      note: "Behandlingsinnehåll, tidsåtgång och priser visas i BokaDirekt.",
    },
    about: {
      eyebrow: "Om Kela",
      title: "En resa som började 2001",
      paragraphs: [
        "Min resa i skönhetsbranschen började 2001, driven av en djup passion för hårkonst och ett orubbligt engagemang för hantverket. Målet har hela tiden varit att fortsätta växa, förfina mina tekniker och leverera exceptionella resultat för varje kund.",
        "Under sju år utbildade jag mig vid den ansedda BES Academy i Milano, där jag specialiserade mig på precisionsklippning, avancerade färgtekniker och de senaste trenderna inom hårvård. Den grunden formade både min tekniska kompetens och min konstnärliga blick.",
        "Karriären växte vidare till tv-branschen i Albanien, där jag arbetade som hårstylist och makeupartist för tv-produktioner och kända artister. Det stärkte min kreativitet och min förmåga att leverera felfria resultat under höga professionella krav.",
        "Idag är jag Professional Technical Educator för Albanien med Lisap Milano. Genom min egen akademi i Albanien har jag utbildat blivande hårstylister och hjälpt dem utveckla teknik, självförtroende och passion för yrket.",
        "Jag har också specialiserat mig på slingtekniker genom avancerade Masterclasses i Milano och seminarier ledda av italienska hårmästare i Tirana. Det har låtit mig förfina moderna färgtekniker och skapa naturligt eleganta, skräddarsydda resultat.",
      ],
      missionTitle: "Mitt uppdrag",
      mission:
        "Med över 25 års erfarenhet är uppdraget detsamma: att framhäva naturlig skönhet, inspirera självförtroende och se till att varje kund lämnar salongen vacker, stärkt och omhändertagen.",
      portraitAlt: "Porträtt av Kela",
      credentialsTitle: "Bakgrund i korthet",
      credentials: [
        { year: "2001", title: "Start i branschen", body: "Yrkesdebut inom hår och skönhet." },
        {
          year: "7 år",
          title: "BES Academy, Milano",
          body: "Precisionsklippning och avancerad färg.",
        },
        {
          year: "TV",
          title: "Albansk television",
          body: "Hår och makeup för produktioner och artister.",
        },
        {
          year: "Idag",
          title: "Lisap Milano",
          body: "Professional Technical Educator för Albanien.",
        },
        {
          year: "Egen akademi",
          title: "Utbildare i Albanien",
          body: "Har utbildat blivande hårstylister.",
        },
        {
          year: "Milano",
          title: "Masterclasses",
          body: "Avancerade slingtekniker och seminarier i Tirana.",
        },
      ],
    },
    education: {
      eyebrow: "Utbildning & utbildarroll",
      title: "Kontinuerlig vidareutbildning",
      lead: "Bilder från Kelas utbildningsmiljöer och utbildarroll — inte kundarbeten.",
      captions: [
        "Avancerad Masterclass i slingteknik, Milano.",
        "Lisap Milano — där Kela är Professional Technical Educator för Albanien.",
      ],
      placeholder: "Bildplatshållare",
      placeholderCaption: "TBD – bild inväntas.",
    },
    masterclass: {
      eyebrow: "Kommande",
      title: "Master Classes",
      body: "Kela planerar Master Classes i bland annat slingteknik och toning för yrkesverksamma frisörer.",
      tbd: "TBD – detaljer om datum, plats, innehåll och anmälan är ännu inte fastställda.",
    },
    work: {
      eyebrow: "Galleri",
      title: "Utvalt arbete",
      lead: "Ett urval av färg- och stylingarbeten publiceras här när bilderna är godkända.",
      placeholder: "Bildplatshållare",
      pending: "TBD – godkända portföljbilder inväntas.",
      instagram: "Se senaste arbeten på Instagram",
    },
    cta: {
      eyebrow: "Bokning",
      title: "Boka din tid",
      body: "All tidsbokning sker via BokaDirekt hos Dear Beauty i Stockholm.",
    },
    footer: {
      contact: "Kontakt",
      contactPlaceholder: "TBD – kontaktuppgifter och adress inväntas.",
      follow: "Följ",
      book: "Boka",
      rights: "Alla rättigheter förbehållna.",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About Kela",
      education: "Education",
      work: "Gallery",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    booking: {
      cta: "Book appointment",
      via: "Booking is handled by BokaDirekt",
      newTab: "opens in a new tab",
    },
    language: { label: "Language", sv: "Svenska", en: "English" },
    hero: {
      eyebrow: "Stockholm · Hair & Makeup",
      title: "Colour, precision and 25 years of craft",
      lead: "Glam By KT is Kela's personal brand — a Stockholm hair stylist and makeup artist with specialist expertise in bleaching, highlights, toning and colour.",
      secondary: "View services",
      portraitAlt: "Kela in the salon, wearing a black blazer",
      facts: [
        { value: "2001", label: "In the industry since" },
        { value: "7 yrs", label: "Training, BES Academy Milan" },
        { value: "25+", label: "Years of experience" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Specialist areas",
      lead: "Every treatment is planned around hair condition, structure and the desired result, with advanced colour work at the centre.",
      colourTitle: "Colour specialisation",
      colourItems: [
        { title: "Bleaching", body: "Lighter results planned around the condition of the hair." },
        {
          title: "Highlights",
          body: "Placement adapted to face shape, growth pattern and desired effect.",
        },
        { title: "Toning", body: "Refinement that adjusts tone, depth and shine." },
        { title: "Colouring", body: "Colour work focused on evenness and longevity." },
      ],
      moreTitle: "Also with Kela",
      moreItems: [
        { title: "Cutting", body: "Precision cutting shaped around how the hair falls." },
        { title: "Styling", body: "Styling for everyday, events and photography." },
        { title: "Bridal hair", body: "Hair for weddings and special occasions." },
        { title: "Advanced makeup", body: "Makeup for parties, events, weddings and photo." },
      ],
      note: "Treatment details, duration and pricing are shown in BokaDirekt.",
    },
    about: {
      eyebrow: "About Kela",
      title: "A journey that began in 2001",
      paragraphs: [
        "My journey in the beauty industry began in 2001, driven by a deep passion for hair artistry and an unwavering commitment to excellence. From the very beginning, my goal has been to continuously grow, refine my skills, and deliver exceptional results for every client.",
        "For seven years, I trained at the prestigious BES Academy in Milan, where I specialized in the latest trends in hairdressing, precision cutting, and advanced colour techniques. This strong educational foundation shaped my artistic vision and technical expertise.",
        "My career then expanded into the television industry in Albania, where I worked as a professional hairstylist and makeup artist, creating looks for television productions and renowned singers. This experience strengthened my creativity and my ability to deliver flawless results under the highest professional standards.",
        "Today I proudly serve as a Professional Technical Educator for Albania with Lisap Milano. Through my own academy in Albania, I have had the privilege of training aspiring hairstylists, helping them develop the skills, confidence and passion needed to succeed.",
        "I have also specialized in highlight techniques through advanced Masterclasses in Milan and numerous seminars led by renowned Italian hair masters in Tirana. These experiences have allowed me to perfect modern colour techniques and create naturally elegant, customized results for every client.",
      ],
      missionTitle: "My mission",
      mission:
        "With over 25 years of experience, my mission remains the same: to enhance natural beauty, inspire confidence, and ensure that every client leaves my salon feeling beautiful, empowered and truly cared for.",
      portraitAlt: "Portrait of Kela",
      credentialsTitle: "Background at a glance",
      credentials: [
        {
          year: "2001",
          title: "Career start",
          body: "First professional years in hair and beauty.",
        },
        {
          year: "7 yrs",
          title: "BES Academy, Milan",
          body: "Precision cutting and advanced colour.",
        },
        {
          year: "TV",
          title: "Albanian television",
          body: "Hair and makeup for productions and singers.",
        },
        {
          year: "Today",
          title: "Lisap Milano",
          body: "Professional Technical Educator for Albania.",
        },
        {
          year: "Own academy",
          title: "Educator in Albania",
          body: "Trained aspiring hairstylists.",
        },
        {
          year: "Milan",
          title: "Masterclasses",
          body: "Advanced highlight techniques and seminars in Tirana.",
        },
      ],
    },
    education: {
      eyebrow: "Education & teaching",
      title: "Continuous professional education",
      lead: "Images from Kela's education environments and teaching work — not client results.",
      captions: [
        "Advanced highlight Masterclass, Milan.",
        "Lisap Milano — where Kela is Professional Technical Educator for Albania.",
      ],
      placeholder: "Image placeholder",
      placeholderCaption: "TBD — image pending.",
    },
    masterclass: {
      eyebrow: "Planned",
      title: "Master Classes",
      body: "Kela is planning Master Classes in techniques such as highlights and toning for working professionals.",
      tbd: "TBD – dates, location, content and registration details are not yet confirmed.",
    },
    work: {
      eyebrow: "Gallery",
      title: "Selected work",
      lead: "A selection of colour and styling work will be published here once imagery is approved.",
      placeholder: "Image placeholder",
      pending: "TBD – approved portfolio imagery pending.",
      instagram: "See the latest work on Instagram",
    },
    cta: {
      eyebrow: "Booking",
      title: "Book your appointment",
      body: "All appointments are booked through BokaDirekt at Dear Beauty in Stockholm.",
    },
    footer: {
      contact: "Contact",
      contactPlaceholder: "TBD – contact details and address pending.",
      follow: "Follow",
      book: "Book",
      rights: "All rights reserved.",
    },
  },
};

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
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
