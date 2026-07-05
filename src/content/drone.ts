export const missionApplications = [
  {
    title: "Energetika i solarne elektrane",
    text: "Inspekcija solarnih polja, termalna analiza panela, pregled elektro infrastrukture i rano otkrivanje nepravilnosti.",
  },
  {
    title: "Industrija i kritična infrastruktura",
    text: "Pregledi gasne, hemijske i proizvodne infrastrukture, postrojenja i rizičnih zona bez nepotrebnog izlaganja ljudi.",
  },
  {
    title: "Javna bezbednost i nadzor",
    text: "Patrolne, nadzorne i situacione misije za službe koje zahtevaju brzo prikupljanje informacija iz vazduha.",
  },
  {
    title: "Potraga i spasavanje",
    text: "Termalna detekcija, pregled velikih površina i podrška timovima na terenu u vanrednim situacijama.",
  },
  {
    title: "Vanredne situacije",
    text: "Detekcija dima, vatre, promene temperature i pregled nepristupačnih područja.",
  },
  {
    title: "Dugolinijske operacije",
    text: "Platforme velikog dometa i autonomije za nadzor trasa, elektro mreže, saobraćajnica i velikih sistema.",
  },
];

export const capabilities = [
  "AI DETECTION",
  "THERMAL VISION",
  "A-MESH NETWORK",
  "ANTI-INTERFERENCE",
  "MISSION ROUTES",
  "IP PROTECTION",
  "15 KM TRANSMISSION",
  "FAST BATTERY SWAP",
];

export const dronePlatforms = [
  {
    id: "evo-max",
    label: "EVO MAX PLATFORM",
    image: "/drone/platformStack/platformStack_1.png" as string | null,
    imageAlt: "Autel EVO Max enterprise dron",
    title: "Kompaktna enterprise platforma za autonomne misije",
    text: "EVO Max serija donosi naprednu autonomiju, real-time analizu okruženja i sposobnost kreiranja 3D putanja leta. Platforma je namenjena profesionalnim zadacima gde su mobilnost, termalna detekcija i pouzdanost ključni.",
    models: ["EVO Max 4T", "EVO Max 4N"],
    useCases: ["Inspekcija", "Nadzor", "Termalna detekcija", "Brze intervencije"],
    specs: [
      "720° senzori za izbegavanje prepreka",
      "A-Mesh umrežavanje sa drugim dronovima",
      "AI prepoznavanje ciljeva",
      "Do 15 km transmisije",
      "Do 42 min vreme leta",
      "IP43 zaštita",
      "Termalna kamera 640 x 512",
    ],
    cta: "Zatražite specifikacije EVO Max platforme",
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
    image: "/drone/platformStack/platformStack_2.png" as string | null,
    imageAlt: "Autel Alpha industrijski dron",
    title: "Industrijski dron za najzahtevnije operacije",
    text: "Autel Alpha je inteligentna industrijska platforma za višenamensku upotrebu. Sa autonomnim letom, IP55 zaštitom, otpornošću na smetnje i preciznim RTK sistemom, projektovana je za rad u kompleksnim uslovima.",
    models: ["Autel Alpha"],
    useCases: ["Javna bezbednost", "Energetika", "Vanredne situacije", "Nadzor velikih zona"],
    specs: [
      "720° obstacle avoidance",
      "Dual thermal camera",
      "RTK sistem sa dvostrukim antenama",
      "Laserski daljinomer",
      "Hibridni zum",
      "Do 15 km transmisije",
      "Do 42 min vreme leta",
      "IP55 zaštita",
    ],
    cta: "Saznajte više o Alpha platformi",
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
    image: "/drone/platformStack/platformStack_3.png" as string | null,
    imageAlt: "Autel Dragonfish eVTOL dron",
    title: "eVTOL platforma za dugotrajne nadzorne operacije",
    text: "Dragonfish je eVTOL tiltrotor platforma sa vertikalnim poletanjem i sletanjem. Namenjena je operacijama koje zahtevaju veći domet, duže vreme leta i pregled velikih površina bez piste ili dodatne opreme za lansiranje.",
    models: ["Dragonfish Pro"],
    useCases: ["Dugolinijski nadzor", "Pregled velikih površina", "Vanredne situacije"],
    specs: [
      "eVTOL tiltrotor platforma",
      "Vertikalno poletanje i sletanje",
      "Spremna za let za manje od 5 minuta",
      "Do 179 minuta leta",
      "Domet do 45 km",
      "EO/MWIR senzorske opcije",
      "Brza zamena korisnog tereta",
    ],
    cta: "Zatražite konsultaciju za Dragonfish",
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
    image: "/drone/platformStack/platformStack_4.png" as string | null,
    imageAlt: "Autel EVO Nest bazna stanica",
    title: "Bazna stanica za automatske dron operacije",
    text: "EVO Nest je prenosiva bazna stanica za automatsko poletanje, sletanje, punjenje i planiranje misija za EVO seriju dronova. U kombinaciji sa command system platformom omogućava centralizovano upravljanje i nadzor operacija.",
    models: ["EVO Nest"],
    useCases: ["Automatske operacije", "Punjenje", "Planiranje misija", "Centralizovano upravljanje"],
    specs: [
      "Automatsko poletanje",
      "Automatsko sletanje",
      "Punjenje drona",
      "Planiranje misija",
      "Rad u svim vremenskim uslovima",
      "Prenosiv dizajn",
      "Integracija sa command system platformom",
    ],
    cta: "Pogledajte mogućnosti EVO Nest sistema",
    videos: [
      {
        title: "Autel EVO Nest platform overview",
        url: "https://www.youtube.com/watch?v=Qyedf26UWPE",
      },
    ],
    links: [{ label: "EVO Nest", url: "https://www.autelrobotics.com/productdetail/evo-nest/" }],
  },
];

export const comparisonRows = [
  ["EVO Max", "Sklopivi enterprise quadcopter", "Inspekcija, nadzor, termalna detekcija", "Do 42 min", "IP43", "AI detekcija, A-Mesh, termal 640 x 512"],
  ["Alpha", "Industrijska enterprise platforma", "Javna bezbednost, energetika, nadzor velikih zona", "Do 42 min", "IP55", "Dual thermal, RTK, laserski daljinomer"],
  ["Dragonfish", "eVTOL tiltrotor", "Dugolinijski nadzor i pregled velikih površina", "Do 179 min", "Po specifikaciji modela", "VTOL, domet do 45 km, EO/MWIR payloads"],
  ["EVO Nest", "Bazna stanica", "Automatske operacije i punjenje", "Nije primenjivo", "Po specifikaciji sistema", "Autonomno poletanje/sletanje, mobilna baza"],
];

export const droneFaq = [
  {
    question: "Da li su ovo consumer ili enterprise dronovi?",
    answer: "Ovo su enterprise platforme namenjene profesionalnoj upotrebi u industriji, energetici, bezbednosti, nadzoru i vanrednim situacijama.",
  },
  {
    question: "Da li je moguća demonstracija?",
    answer: "Da. Upit može da uključi konsultaciju i demonstraciju, u zavisnosti od potrebe i dostupnosti odgovarajuće platforme.",
  },
  {
    question: "Koja platforma je najbolja za inspekciju solarnih elektrana?",
    answer: "Najčešće su relevantne platforme sa termalnim senzorima i preciznim planiranjem ruta. Konačan izbor zavisi od veličine sistema, tipa inspekcije i uslova na terenu.",
  },
  {
    question: "Da li dronovi podržavaju termalnu detekciju?",
    answer: "Da. Više Autel enterprise platformi podržava termalne senzore, uključujući EVO Max i Alpha serije.",
  },
  {
    question: "Da li se sistemi mogu koristiti za javnu bezbednost?",
    answer: "Da, u okviru zakonski dozvoljenih i profesionalno organizovanih operacija, za nadzor, potragu, spasavanje i upravljanje vanrednim situacijama.",
  },
  {
    question: "Da li Solar Partner distribuira Autel Robotics opremu?",
    answer: "Da. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za teritoriju Srbije.",
  },
];
