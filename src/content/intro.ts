import type { Locale } from "@/lib/i18n";

export const introContent = {
  sr: {
    metadata: {
      title: "Solar Partner | Solarni sistemi i profesionalni dronovi",
      description:
        "Ulazna Solar Partner stranica za solarne sisteme, profesionalne dronove, sigurnosne sisteme i informacije o kompaniji.",
    },
    scenes: [
      {
        label: "Solarni sistemi",
        eyebrow: "01 / ENERGY",
        title: "Solarni sistemi",
        text:
          "Projektovanje, oprema, montaža i podrška pri priključenju solarnih elektrana za kuće, firme i industrijske objekte.",
        href: "/solarni-sistemi",
        cta: "Uđite u solarne sisteme",
        poster: "/solar-partne-hero--000.png",
        tone: "solar",
      },
      {
        label: "Profesionalni dronovi",
        eyebrow: "02 / UAV",
        title: "Profesionalni dronovi",
        text:
          "Enterprise platforme za energetiku, infrastrukturu, bezbednost i sve zadatke gde je bitna pouzdanost podataka.",
        href: "/dronovi",
        cta: "Pogledajte dronove",
        poster: "/drone/enterprise-uav-hero.png",
        mobilePoster: "/drone/intro_dron_mob_1.1.png",
        tone: "drone",
      },
      {
        label: "Sigurnosni sistemi",
        eyebrow: "03 / SECURITY",
        title: "Sigurnosni sistemi",
        text:
          "Video nadzor, alarmi, kontrola pristupa, interfoni i integracija tehničke zaštite za objekte kojima je potrebna pouzdana kontrola.",
        href: "/sigurnosni-sistemi",
        cta: "Pogledajte sigurnosne sisteme",
        poster: "/security/security_intro.png",
        mobilePoster: "/security/intro_security_mob_1.1.png",
        tone: "security",
      },
      {
        label: "O nama",
        eyebrow: "04 / PARTNER",
        title: "O nama",
        text:
          "Saznajte kako Solar Partner povezuje solarnu energiju, profesionalne dronove i tehničku zaštitu u jasna projektna rešenja.",
        href: "/o-nama",
        cta: "Upoznajte kompaniju",
        poster: "/projects/hibridno_resenje_01.png",
        tone: "about",
      },
    ],
  },
  en: {
    metadata: {
      title: "Solar Partner | Solar systems and professional drones",
      description:
        "Solar Partner entry page for solar systems, professional drones, security systems and company information.",
    },
    scenes: [
      {
        label: "Solar systems",
        eyebrow: "01 / ENERGY",
        title: "Solar systems",
        text:
          "Design, equipment, installation and grid connection support for solar power systems for homes, businesses and industrial facilities.",
        href: "/solarni-sistemi?lang=en",
        cta: "Enter solar systems",
        poster: "/solar-partne-hero--000.png",
        tone: "solar",
      },
      {
        label: "Professional drones",
        eyebrow: "02 / UAV",
        title: "Professional drones",
        text:
          "Enterprise platforms for energy, infrastructure, security and every task where reliable data matters.",
        href: "/dronovi?lang=en",
        cta: "View drones",
        poster: "/drone/enterprise-uav-hero.png",
        mobilePoster: "/drone/intro_dron_mob_1.1.png",
        tone: "drone",
      },
      {
        label: "Security systems",
        eyebrow: "03 / SECURITY",
        title: "Security systems",
        text:
          "Video surveillance, alarms, access control, intercoms and integrated technical security for facilities that need reliable control.",
        href: "/sigurnosni-sistemi?lang=en",
        cta: "View security systems",
        poster: "/security/security_intro.png",
        mobilePoster: "/security/intro_security_mob_1.1.png",
        tone: "security",
      },
      {
        label: "About",
        eyebrow: "04 / PARTNER",
        title: "About",
        text:
          "Learn how Solar Partner connects solar energy, professional drones and technical security into clear project solutions.",
        href: "/o-nama?lang=en",
        cta: "Meet the company",
        poster: "/projects/hibridno_resenje_01.png",
        tone: "about",
      },
    ],
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getIntroContent(locale: Locale) {
  return introContent[locale];
}
