import type { Locale } from "@/lib/i18n";

const images = [
  "/security/systemCardMedia/systemCardMedia_001.png",
  "/security/systemCardMedia/systemCardMedia_002.png",
  "/security/systemCardMedia/systemCardMedia_003.png",
  "/security/systemCardMedia/systemCardMedia_004.png",
  "/security/systemCardMedia/systemCardMedia_005.png",
  "/security/systemCardMedia/systemCardMedia_006.png",
];

export const securityContent = {
  sr: {
    metadata: {
      title: "Sigurnosni sistemi i tehnička zaštita | Solar Partner",
      description:
        "Kompletna rešenja tehničke zaštite: video nadzor, alarmni sistemi, kontrola pristupa, video interfoni, parking sistemi, integracija i održavanje.",
    },
    header: {
      small: "Security systems",
      nav: ["Sistemi", "Proces", "Oprema", "Kontakt"],
      cta: "Zatražite procenu",
    },
    hero: {
      eyebrow: "Sistemi tehničke zaštite",
      title: "Tehnička zaštita za objekte pod kontrolom",
      text:
        "Projektovanje, ugradnja, povezivanje i održavanje sistema video nadzora, alarma, kontrole pristupa, video interfona i drugih sistema tehničke zaštite.",
      primaryCta: "Zatražite procenu",
      secondaryCta: "Pogledajte rešenja",
      trust: [
        "Individualno planiranje prema objektu",
        "Integracija više sigurnosnih sistema",
        "Servisno održavanje i podrška",
      ],
      imageAlt: "Sigurnosni sistem i tehnička zaštita objekta",
    },
    systemsSection: {
      eyebrow: "Oblasti primene",
      title: "Sistem se ne bira po katalogu, već prema načinu korišćenja objekta",
    },
    systems: [
      {
        title: "Video nadzor",
        text:
          "Kamere više nisu samo izvor slike. Savremeni sistemi mogu da rade analitiku događaja, klasifikaciju alarma, zaštitu perimetra, detekciju lica, brojanje ljudi i prepoznavanje situacija koje zahtevaju reakciju.",
        imageAlt: "Sistem video nadzora za tehničku zaštitu objekta",
      },
      {
        title: "Alarmni sistemi",
        text:
          "Alarm je prva linija odbrane objekta. Pravilno projektovan sistem omogućava brzu dojavu, potvrdu alarma preko video nadzora, scenarije automatizacije i daljinsko upravljanje putem mobilnog telefona.",
        imageAlt: "Alarmni sistem za zaštitu objekta",
      },
      {
        title: "Kontrola pristupa",
        text:
          "Rešenja za objekte u kojima je potrebno ograničiti i evidentirati kretanje. Sistem beleži ko je otvorio vrata, kada se pristup dogodio i upozorava na nevalidne kartice, pogrešne šifre ili nezatvorena vrata.",
        imageAlt: "Kontrola pristupa i evidencija ulaska u objekat",
      },
      {
        title: "Video interfoni",
        text:
          "Moderni interfonski sistemi omogućavaju širokougaone kamere, povezivanje sa liftovima, pametnim kućama, kamerama i udaljeno pozivanje kroz mobilnu aplikaciju.",
        imageAlt: "Video interfon za kontrolu ulaza u objekat",
      },
      {
        title: "Protivpožarna zaštita",
        text:
          "Sistemi namenjeni ranom otkrivanju rizika, pravovremenoj dojavi i integraciji sa ostalim tehničkim sistemima objekta kada je to potrebno.",
        imageAlt: "Protivpožarni sistem i detekcija rizika",
      },
      {
        title: "Rampe, barijere i parking sistemi",
        text:
          "Kontrola ulaza i izlaza vozila ili pešaka kroz rampe, pešačke barijere, evidenciju prolaza i integraciju sa kontrolom pristupa.",
        imageAlt: "Parking sistem sa rampama i kontrolom prolaza",
      },
    ],
    analytics: {
      eyebrow: "Video analitika",
      title: "Video nadzor sa korisnom analitikom",
      paragraphs: [
        "Analitika ima smisla tek kada je povezana sa načinom rada objekta. Nije svaki pokret alarm, niti svaka kamera treba da prati iste događaje. Zone, pravila i obaveštenja definišu se prema tome šta korisnik zaista mora da zna u trenutku kada se događaj desi.",
        "Cilj je da sistem smanji broj lažnih alarma, jasnije razdvoji važne događaje od pozadinske aktivnosti i pruži informaciju koja ima operativnu vrednost. Zato se svaka analitika podešava prema realnim uslovima na terenu.",
      ],
    },
    processSection: {
      eyebrow: "Način rada",
      title: "Od procene rizika do sistema koji se može održavati",
    },
    processSteps: [
      {
        title: "Procena objekta",
        text:
          "Sagledavamo namenu objekta, kritične tačke, postojeću infrastrukturu, režim kretanja i realne rizike.",
      },
      {
        title: "Predlog rešenja",
        text: "Biramo opremu i arhitekturu sistema prema zahtevima sa terena, a ne prema gotovom paketu.",
      },
      {
        title: "Ugradnja i podešavanje",
        text:
          "Sistem se instalira, povezuje, testira i podešava tako da oprema radi ono zbog čega je ugrađena.",
      },
      {
        title: "Održavanje i dokumentacija",
        text:
          "Po potrebi obezbeđujemo servis, ugovore o održavanju, planove, projekte, sertifikate i ostalu prateću dokumentaciju.",
      },
    ],
    equipment: {
      eyebrow: "Oprema i integracija",
      title: "Više sistema povezano u jednu operativnu celinu",
      text:
        "Tim poseduje iskustvo u implementaciji različitih proizvođača sigurnosne opreme koji su prisutni na domaćem tržištu. U praksi se često koriste rešenja proizvođača kao što je Hikvision, posebno kada su važni pouzdanost, širok izbor opreme, servisna podrška i mogućnost integracije u jedan softverski sistem.",
      note: "Važno je da oprema, softver i održavanje budu planirani kao jedan sistem.",
      list: [
        "Video nadzor",
        "Alarmni sistemi",
        "Kontrola pristupa",
        "PA audio sistemi",
        "Video interfoni",
        "Komercijalni displeji",
        "LED displeji",
        "Termalne kamere",
        "Parking sistemi",
        "Integracioni softver",
      ],
    },
    compliance: {
      eyebrow: "Dokumentacija",
      title: "Tehnička zaštita mora biti planirana i dokumentovana",
      text:
        "Ugradnja i održavanje sigurnosne opreme povezani su sa pravilima iz oblasti privatnog obezbeđenja i zaštite podataka o ličnosti. Zato je, zavisno od tipa objekta i sistema, važno na vreme razmotriti planove, projekte, procenu rizika, ugovore o održavanju, sertifikate i potvrde o kvalitetu opreme.",
      note:
        "* Ugradnja sigurnosne opreme striktno je regulisana kroz Zakon o privatnom obezbeđenju i Zakon o zaštiti podataka o ličnosti (ZZPL). Samim tim postoje jasno definisane zakonske odredbe o propisima montaže i održavanja ovakvog tipa opreme.",
    },
    contact: {
      eyebrow: "Prvi razgovor",
      title: "Ostavite kontakt i ukratko ćemo proći kroz potrebe vašeg objekta",
      text:
        "U razgovoru prolazimo kroz tip objekta, način korišćenja, kritične tačke, postojeće instalacije i sisteme koji bi imali najviše smisla za vašu situaciju.",
      fields: {
        name: "Ime i prezime",
        email: "Email",
        phone: "Telefon",
        interest: "Interesuje me",
        placeholder: "Izaberite",
        website: "Website",
      },
      options: [
        "Video nadzor",
        "Alarmni sistem",
        "Kontrola pristupa",
        "Video interfon",
        "Parking sistem",
        "Kompletno rešenje",
        "Nisam siguran, potrebna mi je konsultacija",
      ],
      submit: "Pošaljite upit",
    },
    footer: {
      text: "Tehnička zaštita, sigurnosni sistemi i integrisana rešenja za objekte.",
      links: ["Sistemi", "Proces", "Oprema", "Kontakt"],
      cta: "Zatražite procenu",
    },
  },
  en: {
    metadata: {
      title: "Security systems and technical protection | Solar Partner",
      description:
        "Complete technical security solutions: video surveillance, alarm systems, access control, video intercoms, parking systems, integration and maintenance.",
    },
    header: {
      small: "Security systems",
      nav: ["Systems", "Process", "Equipment", "Contact"],
      cta: "Request assessment",
    },
    hero: {
      eyebrow: "Technical security systems",
      title: "Technical protection for controlled facilities",
      text:
        "Design, installation, integration and maintenance of video surveillance, alarm systems, access control, video intercoms and other technical security systems.",
      primaryCta: "Request assessment",
      secondaryCta: "View solutions",
      trust: [
        "Individual planning for each facility",
        "Integration of multiple security systems",
        "Service maintenance and support",
      ],
      imageAlt: "Security system and technical protection of a facility",
    },
    systemsSection: {
      eyebrow: "Application areas",
      title: "A system is not chosen from a catalogue, but according to how the facility is used",
    },
    systems: [
      {
        title: "Video surveillance",
        text:
          "Cameras are no longer just a source of footage. Modern systems can perform event analytics, alarm classification, perimeter protection, face detection, people counting and recognition of situations that require response.",
        imageAlt: "Video surveillance system for technical facility protection",
      },
      {
        title: "Alarm systems",
        text:
          "An alarm is the first line of defense for a facility. A properly designed system enables fast notification, video verification, automation scenarios and remote control through a mobile phone.",
        imageAlt: "Alarm system for facility protection",
      },
      {
        title: "Access control",
        text:
          "Solutions for facilities where movement needs to be restricted and recorded. The system tracks who opened a door, when access occurred and alerts on invalid cards, wrong codes or open doors.",
        imageAlt: "Access control and entry logging for a facility",
      },
      {
        title: "Video intercoms",
        text:
          "Modern intercom systems support wide-angle cameras, integration with elevators, smart homes, cameras and remote calling through a mobile application.",
        imageAlt: "Video intercom for entrance control",
      },
      {
        title: "Fire protection",
        text:
          "Systems intended for early risk detection, timely notification and integration with other technical systems of the facility when needed.",
        imageAlt: "Fire protection system and risk detection",
      },
      {
        title: "Barriers and parking systems",
        text:
          "Vehicle and pedestrian entry control through ramps, barriers, passage logging and integration with access control.",
        imageAlt: "Parking system with barriers and passage control",
      },
    ],
    analytics: {
      eyebrow: "Video analytics",
      title: "Video surveillance with useful analytics",
      paragraphs: [
        "Analytics only makes sense when it is connected to the way a facility operates. Not every movement is an alarm, and not every camera needs to track the same events. Zones, rules and notifications are defined according to what the user actually needs to know when an event happens.",
        "The goal is to reduce false alarms, separate important events from background activity more clearly and provide information with operational value. That is why every analytics setup is adjusted to real site conditions.",
      ],
    },
    processSection: {
      eyebrow: "Process",
      title: "From risk assessment to a maintainable system",
    },
    processSteps: [
      {
        title: "Facility assessment",
        text:
          "We review facility purpose, critical points, existing infrastructure, movement patterns and real risks.",
      },
      {
        title: "Solution proposal",
        text: "We choose equipment and system architecture according to site requirements, not a ready-made package.",
      },
      {
        title: "Installation and setup",
        text:
          "The system is installed, connected, tested and configured so the equipment performs the purpose it was installed for.",
      },
      {
        title: "Maintenance and documentation",
        text:
          "When needed, we provide service, maintenance agreements, plans, projects, certificates and supporting documentation.",
      },
    ],
    equipment: {
      eyebrow: "Equipment and integration",
      title: "Multiple systems connected into one operational unit",
      text:
        "The team has experience implementing different security equipment manufacturers present on the local market. In practice, solutions from manufacturers such as Hikvision are often used when reliability, a wide equipment range, service support and software integration matter.",
      note: "Equipment, software and maintenance should be planned as one system.",
      list: [
        "Video surveillance",
        "Alarm systems",
        "Access control",
        "PA audio systems",
        "Video intercoms",
        "Commercial displays",
        "LED displays",
        "Thermal cameras",
        "Parking systems",
        "Integration software",
      ],
    },
    compliance: {
      eyebrow: "Documentation",
      title: "Technical security must be planned and documented",
      text:
        "Installation and maintenance of security equipment are connected to rules in the field of private security and personal data protection. Depending on facility and system type, it is important to consider plans, projects, risk assessment, maintenance contracts, certificates and equipment quality confirmations on time.",
      note:
        "* Installation of security equipment is strictly regulated through the Law on Private Security and the Law on Personal Data Protection. This means there are clearly defined legal provisions for installation and maintenance of this type of equipment.",
    },
    contact: {
      eyebrow: "First conversation",
      title: "Leave your contact details and we will briefly review your facility needs",
      text:
        "In the conversation we go through the facility type, usage, critical points, existing installations and systems that would make the most sense for your situation.",
      fields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        interest: "I am interested in",
        placeholder: "Select",
        website: "Website",
      },
      options: [
        "Video surveillance",
        "Alarm system",
        "Access control",
        "Video intercom",
        "Parking system",
        "Complete solution",
        "I am not sure, I need a consultation",
      ],
      submit: "Send inquiry",
    },
    footer: {
      text: "Technical protection, security systems and integrated solutions for facilities.",
      links: ["Systems", "Process", "Equipment", "Contact"],
      cta: "Request assessment",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getSecurityContent(locale: Locale) {
  const content = securityContent[locale];

  return {
    ...content,
    systems: content.systems.map((system, index) => ({
      ...system,
      image: images[index],
    })),
  };
}
