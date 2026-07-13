import type { Locale } from "@/lib/i18n";

export const aboutContent = {
  sr: {
    metadata: {
      title: "O nama | Solar Partner",
      description:
        "Solar Partner pruža savremena tehnološka rešenja kroz solarne elektrane, profesionalne dronove i sisteme tehničke zaštite.",
    },
    hero: {
      eyebrow: "O nama",
      title: "Partner za energiju, bezbednost i napredne tehnologije",
      text:
        "Solar Partner pruža savremena tehnološka rešenja za privredu, javni sektor i fizička lica. Radimo na projektima koji unapređuju energetsku efikasnost, bezbednost i operativnu kontrolu objekata.",
    },
    intro: {
      eyebrow: "Način rada",
      title: "Kompletna usluga, bez nepotrebne komplikacije",
      paragraphs: [
        "Osnovna delatnost kompanije je projektovanje, isporuka i izgradnja solarnih elektrana po principu ključ u ruke. Klijent dobija objedinjenu uslugu, od prve analize i projektovanja, preko montaže, do podrške nakon realizacije.",
        "Pored solarnih sistema, razvijamo ponudu profesionalnih dronova i sistema tehničke zaštite. Svakom projektu pristupamo individualno, sa fokusom na rešenje koje ima tehničkog i operativnog smisla za konkretan objekat.",
      ],
    },
    areas: {
      eyebrow: "Tri oblasti",
      title: "Jedan pristup: pouzdano planiranje i odgovorna realizacija",
      items: [
        {
          title: "Solarne elektrane",
          text:
            "Projektovanje, isporuka i izgradnja solarnih elektrana po principu ključ u ruke, od analize potrošnje do puštanja sistema u rad.",
        },
        {
          title: "Profesionalni dronovi",
          text:
            "Distribucija Autel Robotics platformi za inspekcije, mapiranje, geodeziju, poljoprivredu, bezbednost i druge profesionalne primene.",
        },
        {
          title: "Tehnička zaštita",
          text:
            "Projektovanje i ugradnja video nadzora, alarmnih sistema, kontrole pristupa i drugih rešenja za pouzdanu zaštitu objekata.",
        },
      ],
    },
    principles: {
      eyebrow: "Principi",
      title: "Poverenje se gradi kroz jasan proces",
      text:
        "Naš tim povezuje iskustvo iz energetike, elektrotehnike, bezbednosnih sistema i naprednih tehnologija. Važno nam je da klijent razume šta se predlaže, zašto se predlaže i kako se rešenje održava nakon ugradnje.",
      items: [
        "Jasna procena pre predloga rešenja",
        "Oprema i tehnologija prema realnoj potrebi",
        "Transparentna komunikacija tokom projekta",
        "Podrška nakon realizacije",
      ],
    },
    cta: {
      eyebrow: "Kontakt",
      title: "Razgovarajmo o rešenju koje ima smisla za vaš objekat",
      text:
        "Ako razmatrate solarnu elektranu, profesionalne dronove ili sistem tehničke zaštite, prvi korak je kratak razgovor i razumevanje stvarne potrebe.",
      link: "Kontaktirajte nas",
    },
    footer: {
      text: "Tehnološka rešenja za energiju, bezbednost i operativnu efikasnost objekata.",
      links: ["Solarni sistemi", "Dronovi", "Sigurnosni sistemi", "Kontakt"],
    },
  },
  en: {
    metadata: {
      title: "About us | Solar Partner",
      description:
        "Solar Partner provides modern technology solutions through solar power systems, professional drones and technical security systems.",
    },
    hero: {
      eyebrow: "About us",
      title: "A partner for energy, security and advanced technologies",
      text:
        "Solar Partner provides modern technology solutions for businesses, the public sector and private clients. We work on projects that improve energy efficiency, security and operational control of facilities.",
    },
    intro: {
      eyebrow: "How we work",
      title: "A complete service without unnecessary complexity",
      paragraphs: [
        "The company’s core activity is the design, delivery and construction of turnkey solar power systems. The client receives an integrated service, from the first analysis and design to installation and post-project support.",
        "In addition to solar systems, we develop professional drone and technical security solutions. Every project is approached individually, with a focus on a solution that makes technical and operational sense for the specific facility.",
      ],
    },
    areas: {
      eyebrow: "Three areas",
      title: "One approach: reliable planning and responsible delivery",
      items: [
        {
          title: "Solar power systems",
          text:
            "Design, delivery and construction of turnkey solar power systems, from consumption analysis to system commissioning.",
        },
        {
          title: "Professional drones",
          text:
            "Distribution of Autel Robotics platforms for inspections, mapping, surveying, agriculture, security and other professional uses.",
        },
        {
          title: "Technical security",
          text:
            "Design and installation of video surveillance, alarm systems, access control and other solutions for reliable facility protection.",
        },
      ],
    },
    principles: {
      eyebrow: "Principles",
      title: "Trust is built through a clear process",
      text:
        "Our team combines experience in energy, electrical engineering, security systems and advanced technologies. It is important that the client understands what is being proposed, why it is being proposed and how the solution is maintained after installation.",
      items: [
        "Clear assessment before proposing a solution",
        "Equipment and technology matched to the real need",
        "Transparent communication throughout the project",
        "Support after delivery",
      ],
    },
    cta: {
      eyebrow: "Contact",
      title: "Let’s discuss a solution that makes sense for your facility",
      text:
        "If you are considering a solar power system, professional drones or a technical security system, the first step is a short conversation and a clear understanding of the real need.",
      link: "Contact us",
    },
    footer: {
      text: "Technology solutions for energy, security and operational efficiency of facilities.",
      links: ["Solar systems", "Drones", "Security systems", "Contact"],
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getAboutContent(locale: Locale) {
  return aboutContent[locale];
}
