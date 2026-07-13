import type { Locale } from "@/lib/i18n";

const sharedImages = {
  clientTypes: [
    {
      image: "/solutions/solar_porodicno.png",
      alt: {
        sr: "Porodična kuća sa solarnim panelima na krovu",
        en: "Family house with solar panels on the roof",
      },
    },
    {
      image: "/solutions/solar_poslovni_prostori.png",
      alt: {
        sr: "Poslovni objekat sa solarnim panelima na krovu",
        en: "Commercial facility with solar panels on the roof",
      },
    },
    {
      image: "/solutions/vikendice_farme.png",
      alt: {
        sr: "Udaljeni objekat sa solarnim panelima i baterijskim sistemom",
        en: "Remote facility with solar panels and a battery system",
      },
    },
  ],
  projects: [
    {
      image: "/projects/porodicna_kuca_01.png",
      alt: {
        sr: "Solarna elektrana postavljena na porodičnoj kući",
        en: "Solar power system installed on a family house",
      },
    },
    {
      image: "/projects/poslovni_objekti_01.png",
      alt: {
        sr: "Solarni paneli na krovu poslovnog objekta",
        en: "Solar panels on the roof of a business facility",
      },
    },
    {
      image: "/projects/hibridno_resenje_01.png",
      alt: {
        sr: "Hibridni solarni sistem za udaljeni objekat",
        en: "Hybrid solar system for a remote facility",
      },
    },
  ],
};

export const solarContent = {
  sr: {
    metadata: {
      title: "Solarne elektrane za kuće i firme | Solar Partner",
      description:
        "Kompletna solarna rešenja za domaćinstva, firme i industrijske objekte u Srbiji. Projektovanje, oprema, ugradnja i podrška pri priključenju.",
    },
    hero: {
      eyebrow: "Solarna energija bez nepoznatih",
      title: "Solarne elektrane za kuće, firme i industrijske objekte",
      lead: "Projektovanje, oprema, ugradnja i podrška pri priključenju, sve na jednom mestu.",
      primaryCta: "Zatražite procenu",
      secondaryCta: "Pogledajte proces",
      trustPoints: [
        "Procena potrošnje i kapaciteta",
        "Oprema proverenih proizvođača",
        "Stručna montaža i podrška",
      ],
      imageAlt: "Solarni paneli montirani na krovu objekta",
    },
    sections: {
      clientTypes: {
        eyebrow: "Rešenja prema objektu",
        title: "Kompletna solarna rešenja za različite tipove korisnika",
      },
      scope: {
        eyebrow: "Obim rada",
        title: "Od prve procene do puštanja sistema u rad",
        text:
          "Svaki sistem planiramo prema potrošnji, objektu i ciljevima korisnika. Cilj nije prodaja gotovog paketa, već rešenje koje ima tehničkog i ekonomskog smisla.",
      },
      process: {
        eyebrow: "Proces",
        title: "Kako izgleda put do sopstvene solarne elektrane",
      },
      projects: {
        eyebrow: "Primeri projekata",
        title: "Kako sistem može da izgleda u praksi",
      },
      equipment: {
        eyebrow: "Oprema i distribucija",
        title: "Oprema za kompletna solarna rešenja",
        text:
          "Pored ugradnje solarnih elektrana, Solar Partner se bavi prodajom i distribucijom solarne opreme za krajnje korisnike, partnere i instalatere.",
      },
      analysis: {
        eyebrow: "Analiza pre ponude",
        title: "Prvo proveravamo podatke, pa tek onda predlažemo sistem",
        text:
          "Isplativost zavisi od potrošnje, položaja objekta, kvaliteta opreme, načina montaže i pravilnog povezivanja. Zato svaki projekat počinje analizom, a ne prodajom gotovog paketa.",
        points: [
          "Potrošnja i dnevni profil",
          "Krov, orijentacija i zasenčenje",
          "Snaga sistema i okvirna proizvodnja",
        ],
        panel: {
          label: "ANALYSIS MODE",
          consumption: "Potrošnja",
          consumptionValue: "12 meseci",
          roof: "Krov",
          roofValue: "azimut / nagib",
          system: "Sistem",
          systemValue: "kW + oprema",
        },
      },
      faq: {
        eyebrow: "Česta pitanja",
        title: "Pitanja koja treba rešiti pre ugradnje",
      },
      contact: {
        eyebrow: "Prva procena",
        title: "Ostavite kontakt, a zatim zajedno prolazimo kroz najbolje opcije za vaš objekat",
        text:
          "U prvom razgovoru prolazimo kroz vašu trenutnu potrošnju, račune za struju, tip objekta i uslove na lokaciji. Na osnovu toga možemo realno proceniti da li solarni sistem ima smisla, koja snaga bi bila odgovarajuća i koji su sledeći koraci.",
        submit: "Pošaljite zahtev",
      },
    },
    form: {
      name: "Ime i prezime",
      email: "Email",
      phone: "Telefon",
      website: "Website",
    },
    footer: {
      text:
        "Solarna rešenja za kuće, firme i objekte kojima je potrebna jasna tehnička procena.",
      links: {
        solutions: "Rešenja",
        process: "Proces",
        projects: "Projekti",
        faq: "FAQ",
        contact: "Kontakt",
      },
    },
    clientTypes: [
      {
        title: "Za domaćinstva",
        text:
          "Solarni sistemi za porodične kuće i stambene objekte, planirani prema realnoj potrošnji i uslovima na krovu.",
      },
      {
        title: "Za firme",
        text:
          "Solarne elektrane za poslovne, proizvodne, komercijalne i skladišne objekte sa izraženom dnevnom potrošnjom.",
      },
      {
        title: "Za vikendice, farme i udaljene objekte",
        text:
          "Off-grid, hibridna i pomoćna solarna rešenja kada je stabilnost napajanja posebno važna.",
      },
    ],
    services: [
      "Analiza potrošnje",
      "Procena lokacije i krova",
      "Proračun sistema",
      "Projektovanje",
      "Isporuka opreme",
      "Montaža",
      "Podrška pri priključenju",
      "Servis i nadzor",
    ],
    processSteps: [
      {
        title: "Pošaljete osnovne podatke",
        text: "Račun za struju, lokaciju objekta i osnovne informacije o potrošnji.",
      },
      {
        title: "Dobijate okvirni proračun",
        text: "Predlog snage sistema, okvirnu procenu i jasne sledeće korake.",
      },
      {
        title: "Izlazak na teren i finalna ponuda",
        text: "Proveravamo krov, orijentaciju, zasenčenje, konstrukciju i elektroinstalacije.",
      },
      {
        title: "Ugradnja i podrška",
        text: "Sistem se montira, testira i priprema za korišćenje uz podršku kroz proces.",
      },
    ],
    projects: [
      {
        title: "Solarna elektrana za porodičnu kuću",
        meta: "Domaćinstvo / 6 kW / On-grid",
        text:
          "Sistem projektovan za smanjenje mesečnih troškova električne energije i veću energetsku nezavisnost domaćinstva.",
      },
      {
        title: "Solarni sistem za poslovni objekat",
        meta: "Firma / 30 kW / On-grid",
        text:
          "Rešenje prilagođeno dnevnoj potrošnji poslovnog objekta, sa fokusom na dugoročnu uštedu.",
      },
      {
        title: "Hibridno rešenje za udaljeni objekat",
        meta: "Pomoćni objekat / 5 kW / Hibridni sistem",
        text: "Sistem namenjen stabilnijem napajanju objekta i većoj nezavisnosti od mreže.",
      },
    ],
    equipment: [
      "Solarni paneli",
      "Inverteri",
      "Baterije",
      "Konstrukcije",
      "Kablovi i zaštitna oprema",
      "Solarni kompleti",
      "Oprema za instalatere",
    ],
    faqs: [
      {
        question: "Koliko košta ugradnja solarnih panela?",
        answer:
          "Cena zavisi od snage sistema, tipa objekta, opreme, konstrukcije, uslova montaže i dodatnih komponenti.",
      },
      {
        question: "Da li solarni paneli rade zimi?",
        answer:
          "Da. Proizvodnja zavisi od dužine dana, vremenskih uslova, položaja panela, snega i zasenčenja.",
      },
      {
        question: "Da li mi je potrebna baterija?",
        answer:
          "Ne uvek. Baterije su korisne kod hibridnih i off-grid sistema, dok kod mnogih on-grid sistema nisu obavezne u prvoj fazi.",
      },
      {
        question: "Šta je potrebno za prvu procenu?",
        answer:
          "Najkorisnije je poslati račun za električnu energiju, lokaciju objekta, tip objekta i fotografije krova ako postoje.",
      },
      {
        question: "Da li radite solarne sisteme za firme?",
        answer:
          "Da. Poslovni objekti često imaju izraženu dnevnu potrošnju, pa solarni sistem može imati dobru ekonomsku logiku kada je pravilno dimenzionisan.",
      },
      {
        question: "Šta znači kupac-proizvođač?",
        answer:
          "Kupac-proizvođač je korisnik koji proizvodi električnu energiju za sopstvenu potrošnju i višak predaje u mrežu u skladu sa važećim pravilima.",
      },
      {
        question: "Koliko traje ugradnja?",
        answer:
          "Trajanje zavisi od veličine sistema, pristupa krovu, konstrukcije i elektroinstalacija. Manji sistemi se obično izvode brže, dok poslovni sistemi traže detaljnije planiranje.",
      },
      {
        question: "Da li se sistem može proširiti kasnije?",
        answer:
          "U mnogim slučajevima može, ali je važno da se proširenje planira već u prvoj fazi kroz izbor invertera, konstrukcije i prostora za dodatne komponente.",
      },
    ],
  },
  en: {
    metadata: {
      title: "Solar power systems for homes and businesses | Solar Partner",
      description:
        "Complete solar solutions for homes, businesses and industrial facilities in Serbia. Design, equipment, installation and grid connection support.",
    },
    hero: {
      eyebrow: "Solar energy without unknowns",
      title: "Solar power systems for homes, businesses and industrial facilities",
      lead: "Design, equipment, installation and grid connection support in one place.",
      primaryCta: "Request assessment",
      secondaryCta: "View the process",
      trustPoints: [
        "Consumption and capacity assessment",
        "Equipment from verified manufacturers",
        "Professional installation and support",
      ],
      imageAlt: "Solar panels installed on a building roof",
    },
    sections: {
      clientTypes: {
        eyebrow: "Solutions by facility",
        title: "Complete solar solutions for different types of users",
      },
      scope: {
        eyebrow: "Scope of work",
        title: "From first assessment to system commissioning",
        text:
          "Every system is planned around consumption, the facility and the user’s goals. The goal is not to sell a ready-made package, but to propose a solution that makes technical and economic sense.",
      },
      process: {
        eyebrow: "Process",
        title: "What the path to your own solar power system looks like",
      },
      projects: {
        eyebrow: "Project examples",
        title: "How a system can look in practice",
      },
      equipment: {
        eyebrow: "Equipment and distribution",
        title: "Equipment for complete solar solutions",
        text:
          "In addition to installing solar power systems, Solar Partner sells and distributes solar equipment for end users, partners and installers.",
      },
      analysis: {
        eyebrow: "Analysis before proposal",
        title: "We review the data first, then propose the system",
        text:
          "Profitability depends on consumption, facility position, equipment quality, mounting method and proper electrical connection. That is why every project starts with analysis, not with a ready-made package.",
        points: [
          "Consumption and daily profile",
          "Roof, orientation and shading",
          "System power and expected production",
        ],
        panel: {
          label: "ANALYSIS MODE",
          consumption: "Consumption",
          consumptionValue: "12 months",
          roof: "Roof",
          roofValue: "azimuth / tilt",
          system: "System",
          systemValue: "kW + equipment",
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions to resolve before installation",
      },
      contact: {
        eyebrow: "First assessment",
        title: "Leave your contact details and we will review the best options for your facility",
        text:
          "In the first conversation we review your current electricity consumption, bills, facility type and location conditions. Based on that, we can realistically assess whether a solar system makes sense, what capacity could be appropriate and what the next steps are.",
        submit: "Send request",
      },
    },
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      website: "Website",
    },
    footer: {
      text:
        "Solar solutions for homes, businesses and facilities that need a clear technical assessment.",
      links: {
        solutions: "Solutions",
        process: "Process",
        projects: "Projects",
        faq: "FAQ",
        contact: "Contact",
      },
    },
    clientTypes: [
      {
        title: "For households",
        text:
          "Solar systems for family houses and residential buildings, planned around real consumption and roof conditions.",
      },
      {
        title: "For businesses",
        text:
          "Solar power systems for business, production, commercial and warehouse facilities with strong daytime consumption.",
      },
      {
        title: "For cottages, farms and remote facilities",
        text:
          "Off-grid, hybrid and auxiliary solar solutions where power supply stability is especially important.",
      },
    ],
    services: [
      "Consumption analysis",
      "Location and roof assessment",
      "System calculation",
      "Design",
      "Equipment delivery",
      "Installation",
      "Grid connection support",
      "Service and monitoring",
    ],
    processSteps: [
      {
        title: "You send the basic data",
        text: "Electricity bill, facility location and basic information about consumption.",
      },
      {
        title: "You receive an initial calculation",
        text: "Recommended system power, initial estimate and clear next steps.",
      },
      {
        title: "Site visit and final offer",
        text: "We check the roof, orientation, shading, structure and electrical installation.",
      },
      {
        title: "Installation and support",
        text: "The system is installed, tested and prepared for use with support throughout the process.",
      },
    ],
    projects: [
      {
        title: "Solar power system for a family house",
        meta: "Household / 6 kW / On-grid",
        text:
          "A system designed to reduce monthly electricity costs and improve the household’s energy independence.",
      },
      {
        title: "Solar system for a business facility",
        meta: "Business / 30 kW / On-grid",
        text:
          "A solution aligned with daytime consumption, with a focus on long-term savings.",
      },
      {
        title: "Hybrid solution for a remote facility",
        meta: "Auxiliary facility / 5 kW / Hybrid system",
        text: "A system intended for more stable power supply and greater independence from the grid.",
      },
    ],
    equipment: [
      "Solar panels",
      "Inverters",
      "Batteries",
      "Mounting structures",
      "Cables and protection equipment",
      "Solar kits",
      "Equipment for installers",
    ],
    faqs: [
      {
        question: "How much does solar panel installation cost?",
        answer:
          "The price depends on system power, facility type, equipment, mounting structure, installation conditions and additional components.",
      },
      {
        question: "Do solar panels work in winter?",
        answer:
          "Yes. Production depends on day length, weather conditions, panel position, snow and shading.",
      },
      {
        question: "Do I need a battery?",
        answer:
          "Not always. Batteries are useful for hybrid and off-grid systems, while many on-grid systems do not require them in the first phase.",
      },
      {
        question: "What is needed for the first assessment?",
        answer:
          "The most useful information is an electricity bill, location, facility type and roof photos if available.",
      },
      {
        question: "Do you work with businesses?",
        answer:
          "Yes. Business facilities often have strong daytime consumption, so a properly sized solar system can have a strong economic logic.",
      },
      {
        question: "What does prosumer mean?",
        answer:
          "A prosumer produces electricity for their own consumption and feeds surplus energy into the grid in accordance with applicable rules.",
      },
      {
        question: "How long does installation take?",
        answer:
          "The duration depends on system size, roof access, structure and electrical installation. Smaller systems are usually faster, while business systems require more detailed planning.",
      },
      {
        question: "Can the system be expanded later?",
        answer:
          "In many cases it can, but expansion should be considered in the first phase through inverter selection, mounting structure and space for additional components.",
      },
    ],
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getSolarContent(locale: Locale) {
  const content = solarContent[locale];

  return {
    ...content,
    clientTypes: content.clientTypes.map((item, index) => ({
      ...item,
      image: sharedImages.clientTypes[index].image,
      alt: sharedImages.clientTypes[index].alt[locale],
    })),
    projects: content.projects.map((item, index) => ({
      ...item,
      image: sharedImages.projects[index].image,
      alt: sharedImages.projects[index].alt[locale],
    })),
  };
}

export const clientTypes = getSolarContent("sr").clientTypes;
export const services = getSolarContent("sr").services;
export const processSteps = getSolarContent("sr").processSteps;
export const projects = getSolarContent("sr").projects;
export const equipment = getSolarContent("sr").equipment;
export const faqs = getSolarContent("sr").faqs;
