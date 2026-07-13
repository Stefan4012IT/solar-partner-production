import type { Locale } from "@/lib/i18n";

export const siteContent: Record<
  Locale,
  {
    brand: string;
    nav: {
      solutions: string;
      scope: string;
      process: string;
      projects: string;
      drones: string;
      security: string;
      solar: string;
      about: string;
      contact: string;
      sections: string;
      otherPages: string;
    };
    cta: {
      assessment: string;
    };
  }
> = {
  sr: {
    brand: "Solar Partner",
    nav: {
      solutions: "Rešenja",
      scope: "Obim rada",
      process: "Proces",
      projects: "Projekti",
      drones: "Dronovi",
      security: "Sigurnosni sistemi",
      solar: "Solarni sistemi",
      about: "O nama",
      contact: "Kontakt",
      sections: "Sekcije",
      otherPages: "Ostala rešenja",
    },
    cta: {
      assessment: "Zatražite procenu",
    },
  },
  en: {
    brand: "Solar Partner",
    nav: {
      solutions: "Solutions",
      scope: "Scope",
      process: "Process",
      projects: "Projects",
      drones: "Drones",
      security: "Security systems",
      solar: "Solar systems",
      about: "About",
      contact: "Contact",
      sections: "Sections",
      otherPages: "Other solutions",
    },
    cta: {
      assessment: "Request assessment",
    },
  },
};
