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
      about: string;
      contact: string;
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
      about: "O nama",
      contact: "Kontakt",
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
      about: "About",
      contact: "Contact",
    },
    cta: {
      assessment: "Request assessment",
    },
  },
};
