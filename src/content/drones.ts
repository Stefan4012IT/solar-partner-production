import type { Locale } from "@/lib/i18n";
import {
  capabilities,
  comparisonRows,
  droneFaq,
  dronePlatforms,
  missionApplications,
} from "./drone";

export const srDronePageContent = {
  metadata: {
    title: "Profesionalni dronovi za industriju i bezbednost | Autel Robotics Srbija",
    description:
      "Enterprise dron rešenja za inspekcije, nadzor, termalnu detekciju, potragu i spasavanje. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za Srbiju.",
  },
  hero: {
    kicker: "ENTERPRISE UAV SYSTEMS",
    title: "Pouzdanost. Preciznost. Kontrola.",
    titleAccent: "Kontrola.",
    text:
      "Autel Robotics platforme za industrijsku inspekciju, nadzor, termalnu detekciju, potragu i spasavanje, dostupne kroz Solar Partner, zvaničnog uvoznika za Srbiju.",
    primaryCta: "Zatražite konsultaciju",
    secondaryCta: "Pogledajte platforme",
    trust: [
      "Zvanični uvoznik za Srbiju",
      "Enterprise Autel Robotics platforme",
      "Termalna i AI detekcija",
      "Industrija, energetika i bezbednost",
    ],
    telemetry: ["THERMAL", "AI DETECTION", "15 KM LINK", "IP PROTECTION", "AUTONOMOUS ROUTES"],
  },
  applications: {
    kicker: "MISSION APPLICATIONS",
    title: "Primena u zahtevnim operativnim okruženjima",
    cards: missionApplications,
  },
  intro: {
    kicker: "AUTEL ROBOTICS SERBIA",
    title: "Enterprise platforme za kompleksne misije",
    paragraphs: [
      "Autel Robotics razvija profesionalna dron rešenja za industrijske, infrastrukturne i bezbednosne primene. Za razliku od klasičnih consumer dronova, ove platforme su projektovane za pouzdan rad u zahtevnim uslovima.",
      "Kombinacija robusne hardverske platforme, naprednih senzora, AI mogućnosti i stabilne komunikacije omogućava upotrebu u inspekcijama, patrolnim zadacima, nadzoru i upravljanju vanrednim situacijama.",
    ],
    note: "Solar Partner je zvanični uvoznik Autel Robotics proizvoda za teritoriju Srbije.",
  },
  capabilities,
  platforms: {
    kicker: "MISSION PLATFORMS",
    title: "Izaberite platformu prema operativnoj potrebi",
    items: dronePlatforms,
  },
  comparison: {
    kicker: "PLATFORM COMPARISON",
    title: "Brzo poređenje enterprise rešenja",
    headers: ["Platforma", "Tip", "Ključna namena", "Vreme leta", "Zaštita", "Posebne mogućnosti"],
    rows: comparisonRows,
  },
  faq: {
    kicker: "FAQ",
    title: "Operativna pitanja pre izbora platforme",
    items: droneFaq,
  },
  inquiry: {
    kicker: "ENTERPRISE INQUIRY",
    title: "Pošaljite upit za profesionalno dron rešenje",
    text:
      "Pošaljite kontakt podatke, tip primene i platformu koja vas zanima. Javićemo se kako bismo razjasnili detalje i predložili odgovarajuće Autel Robotics rešenje.",
    fields: {
      name: "Ime i prezime",
      company: "Kompanija / institucija",
      phone: "Telefon",
      email: "Email",
      application: "Tip primene",
      platform: "Interesuje me",
      placeholder: "Izaberite",
    },
    applications: [
      "Industrijska inspekcija",
      "Solarne elektrane",
      "Elektro mreža",
      "Javna bezbednost",
      "Potraga i spasavanje",
      "Vanredne situacije",
      "Distribucija / partnerstvo",
      "Drugo",
    ],
    platforms: ["EVO Max", "Alpha", "Dragonfish", "EVO Nest", "Nisam siguran, potrebna mi je konsultacija"],
    submit: "Pošaljite enterprise upit",
  },
  footer: {
    text: "Enterprise dron rešenja za industriju, energetiku, bezbednost i vanredne situacije.",
    links: ["Primena", "Platforme", "Poređenje", "Upit"],
    cta: "Zatražite konsultaciju",
  },
  platformInquiryLabels: {
    "evo-max": "EVO Max",
    alpha: "Alpha",
    dragonfish: "Dragonfish",
    "evo-nest": "EVO Nest",
  },
  videoLabels: {
    button: "Pogledaj video",
    close: "Zatvori video",
    switcher: "Izbor videa",
  },
};

export const englishDronePageContent = {
  metadata: {
    title: "Professional drones for industry and security | Autel Robotics Serbia",
    description:
      "Enterprise drone solutions for inspections, surveillance, thermal detection, search and rescue. Solar Partner is the official importer of Autel Robotics products for Serbia.",
  },
  hero: {
    kicker: "ENTERPRISE UAV SYSTEMS",
    title: "Reliability. Precision. Control.",
    titleAccent: "Control.",
    text:
      "Autel Robotics platforms for industrial inspection, surveillance, thermal detection, search and rescue, available through Solar Partner, the official importer for Serbia.",
    primaryCta: "Request consultation",
    secondaryCta: "View platforms",
    trust: [
      "Official importer for Serbia",
      "Enterprise Autel Robotics platforms",
      "Thermal and AI detection",
      "Industry, energy and security",
    ],
    telemetry: ["THERMAL", "AI DETECTION", "15 KM LINK", "IP PROTECTION", "AUTONOMOUS ROUTES"],
  },
  applications: {
    kicker: "MISSION APPLICATIONS",
    title: "Use in demanding operational environments",
    cards: [
      {
        title: "Energy and solar power plants",
        text:
          "Solar field inspection, thermal panel analysis, electrical infrastructure review and early detection of irregularities.",
      },
      {
        title: "Industry and critical infrastructure",
        text:
          "Inspection of gas, chemical and production infrastructure, facilities and risk zones without unnecessary human exposure.",
      },
      {
        title: "Public safety and surveillance",
        text:
          "Patrol, monitoring and situational missions for teams that require fast collection of information from the air.",
      },
      {
        title: "Search and rescue",
        text:
          "Thermal detection, large-area review and support for field teams in emergency situations.",
      },
      {
        title: "Emergency response",
        text: "Detection of smoke, fire, temperature changes and review of inaccessible areas.",
      },
      {
        title: "Long-range operations",
        text:
          "Long-endurance platforms for monitoring routes, electrical grids, roads and large systems.",
      },
    ],
  },
  intro: {
    kicker: "AUTEL ROBOTICS SERBIA",
    title: "Enterprise platforms for complex missions",
    paragraphs: [
      "Autel Robotics develops professional drone solutions for industrial, infrastructure and security applications. Unlike consumer drones, these platforms are designed for reliable work in demanding conditions.",
      "The combination of robust hardware, advanced sensors, AI capabilities and stable communication enables use in inspections, patrol missions, surveillance and emergency management.",
    ],
    note: "Solar Partner is the official importer of Autel Robotics products for Serbia.",
  },
  capabilities: [
    "AI DETECTION",
    "THERMAL VISION",
    "A-MESH NETWORK",
    "ANTI-INTERFERENCE",
    "MISSION ROUTES",
    "IP PROTECTION",
    "15 KM TRANSMISSION",
    "FAST BATTERY SWAP",
  ],
  platforms: {
    kicker: "MISSION PLATFORMS",
    title: "Choose the platform according to the operational need",
    items: [
      {
        id: "evo-max",
        label: "EVO MAX PLATFORM",
        image: "/drone/platformStack/platformStack_1.png",
        imageAlt: "Autel EVO Max enterprise drone",
        title: "Compact enterprise platform for autonomous missions",
        text:
          "The EVO Max series brings advanced autonomy, real-time environment analysis and 3D flight path creation. The platform is intended for professional tasks where mobility, thermal detection and reliability are essential.",
        models: ["EVO Max 4T", "EVO Max 4N"],
        cta: "Request EVO Max specifications",
        useCases: ["Inspection", "Surveillance", "Thermal detection", "Rapid response"],
        specs: [
          "720° obstacle avoidance sensors",
          "A-Mesh networking with other drones",
          "AI target recognition",
          "Up to 15 km transmission",
          "Up to 42 min flight time",
          "IP43 protection",
          "640 x 512 thermal camera",
        ],
        videos: [
          {
            title: "EVO Max 4T platform overview",
            url: "https://www.youtube.com/watch?v=1NeXMNkMGxc",
          },
          {
            title: "EVO Max mission capabilities",
            url: "https://www.youtube.com/watch?v=Cv5q5dgtz0U",
          },
        ],
        links: [
          { label: "EVO Max 4T", url: "https://www.autelrobotics.com/productdetail/evo-max-4t/" },
          { label: "EVO Max 4N", url: "https://www.autelrobotics.com/productdetail/evo-max-4n/" },
        ],
      },
      {
        id: "alpha",
        label: "AUTEL ALPHA",
        image: "/drone/platformStack/platformStack_2.png",
        imageAlt: "Autel Alpha industrial drone",
        title: "Industrial drone for the most demanding operations",
        text:
          "Autel Alpha is an intelligent industrial platform for multi-purpose use. With autonomous flight, IP55 protection, interference resistance and precise RTK, it is designed for complex environments.",
        models: ["Autel Alpha"],
        cta: "Learn more about Alpha",
        useCases: ["Public safety", "Energy", "Emergency response", "Large-area surveillance"],
        specs: [
          "720° obstacle avoidance",
          "Dual thermal camera",
          "RTK system with dual antennas",
          "Laser rangefinder",
          "Hybrid zoom",
          "Up to 15 km transmission",
          "Up to 42 min flight time",
          "IP55 protection",
        ],
        videos: [
          {
            title: "Autel Alpha platform overview",
            url: "https://www.youtube.com/watch?v=N8ZFlswBuNk",
          },
        ],
        links: [{ label: "Autel Alpha", url: "https://www.autelrobotics.com/productdetail/autel-alpha/" }],
      },
      {
        id: "dragonfish",
        label: "DRAGONFISH VTOL",
        image: "/drone/platformStack/platformStack_3.png",
        imageAlt: "Autel Dragonfish eVTOL drone",
        title: "eVTOL platform for long-duration surveillance operations",
        text:
          "Dragonfish is an eVTOL tiltrotor platform with vertical takeoff and landing. It is intended for operations that require greater range, longer flight time and coverage of large areas without a runway.",
        models: ["Dragonfish Pro"],
        cta: "Request Dragonfish consultation",
        useCases: ["Long-line surveillance", "Large-area review", "Emergency response"],
        specs: [
          "eVTOL tiltrotor platform",
          "Vertical takeoff and landing",
          "Ready to fly in under 5 minutes",
          "Up to 179 minutes flight time",
          "Range up to 45 km",
          "EO/MWIR sensor options",
          "Fast payload replacement",
        ],
        videos: [
          {
            title: "Dragonfish VTOL platform overview",
            url: "https://www.youtube.com/watch?v=hjA3YRrzRtA",
          },
        ],
        links: [
          { label: "Dragonfish Pro", url: "https://www.autelrobotics.com/productdetail/dragonfish-pro/" },
        ],
      },
      {
        id: "evo-nest",
        label: "AUTEL EVO NEST",
        image: "/drone/platformStack/platformStack_4.png",
        imageAlt: "Autel EVO Nest base station",
        title: "Base station for automated drone operations",
        text:
          "EVO Nest is a portable base station for automatic takeoff, landing, charging and mission planning for EVO series drones. Combined with command system software, it enables centralized operation management.",
        models: ["EVO Nest"],
        cta: "View EVO Nest capabilities",
        useCases: ["Automated operations", "Charging", "Mission planning", "Centralized management"],
        specs: [
          "Automatic takeoff",
          "Automatic landing",
          "Drone charging",
          "Mission planning",
          "All-weather operation",
          "Portable design",
          "Command system integration",
        ],
        videos: [
          {
            title: "Autel EVO Nest platform overview",
            url: "https://www.youtube.com/watch?v=Qyedf26UWPE",
          },
        ],
        links: [{ label: "EVO Nest", url: "https://www.autelrobotics.com/productdetail/evo-nest/" }],
      },
    ],
  },
  comparison: {
    kicker: "PLATFORM COMPARISON",
    title: "Quick comparison of enterprise solutions",
    headers: ["Platform", "Type", "Key use", "Flight time", "Protection", "Special capabilities"],
    rows: [
      ["EVO Max", "Foldable enterprise quadcopter", "Inspection, surveillance, thermal detection", "Up to 42 min", "IP43", "AI detection, A-Mesh, 640 x 512 thermal"],
      ["Alpha", "Industrial enterprise platform", "Public safety, energy, large-area surveillance", "Up to 42 min", "IP55", "Dual thermal, RTK, laser rangefinder"],
      ["Dragonfish", "eVTOL tiltrotor", "Long-line surveillance and large-area review", "Up to 179 min", "According to model specification", "VTOL, range up to 45 km, EO/MWIR payloads"],
      ["EVO Nest", "Base station", "Automated operations and charging", "Not applicable", "According to system specification", "Autonomous takeoff/landing, mobile base"],
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Operational questions before choosing a platform",
    items: [
      {
        question: "Are these consumer or enterprise drones?",
        answer:
          "These are enterprise platforms intended for professional use in industry, energy, security, surveillance and emergency response.",
      },
      {
        question: "Is a demonstration possible?",
        answer:
          "Yes. An inquiry can include consultation and demonstration, depending on the need and availability of the appropriate platform.",
      },
      {
        question: "Which platform is best for solar power plant inspection?",
        answer:
          "Platforms with thermal sensors and precise route planning are usually relevant. The final choice depends on system size, inspection type and field conditions.",
      },
      {
        question: "Do the drones support thermal detection?",
        answer:
          "Yes. Several Autel enterprise platforms support thermal sensors, including the EVO Max and Alpha series.",
      },
      {
        question: "Can the systems be used for public safety?",
        answer:
          "Yes, within legally permitted and professionally organized operations, for surveillance, search, rescue and emergency management.",
      },
      {
        question: "Does Solar Partner distribute Autel Robotics equipment?",
        answer: "Yes. Solar Partner is the official importer of Autel Robotics products for Serbia.",
      },
    ],
  },
  inquiry: {
    kicker: "ENTERPRISE INQUIRY",
    title: "Send an inquiry for a professional drone solution",
    text:
      "Send contact details, application type and the platform you are interested in. We will get in touch to clarify details and recommend an appropriate Autel Robotics solution.",
    fields: {
      name: "Full name",
      company: "Company / institution",
      phone: "Phone",
      email: "Email",
      application: "Application type",
      platform: "Interested in",
      placeholder: "Select",
    },
    applications: [
      "Industrial inspection",
      "Solar power plants",
      "Electrical grid",
      "Public safety",
      "Search and rescue",
      "Emergency response",
      "Distribution / partnership",
      "Other",
    ],
    platforms: ["EVO Max", "Alpha", "Dragonfish", "EVO Nest", "Not sure, I need consultation"],
    submit: "Send enterprise inquiry",
  },
  footer: {
    text: "Enterprise drone solutions for industry, energy, security and emergency situations.",
    links: ["Applications", "Platforms", "Comparison", "Inquiry"],
    cta: "Request consultation",
  },
  platformInquiryLabels: {
    "evo-max": "EVO Max",
    alpha: "Alpha",
    dragonfish: "Dragonfish",
    "evo-nest": "EVO Nest",
  },
  videoLabels: {
    button: "Watch video",
    close: "Close video",
    switcher: "Video selection",
  },
};

export const dronePageContent = {
  sr: srDronePageContent,
  en: englishDronePageContent,
} satisfies Record<Locale, typeof srDronePageContent>;

export function getDronePageContent(locale: Locale) {
  return dronePageContent[locale];
}
