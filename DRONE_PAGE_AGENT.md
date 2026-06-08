# DRONE_PAGE_AGENT.md

## Zadatak

U postojeći sajt solarne kompanije potrebno je dodati novu stranicu posvećenu enterprise / profesionalnim dron rešenjima, sa posebnim fokusom na Autel Robotics platforme.

Stranica treba da bude dio istog projekta, ali vizuelno i komunikacijski mora da se odvoji od klasične solarne priče. Dok je osnovni sajt okrenut solarnim panelima, energetici i tehničkoj pouzdanosti, ova stranica treba da uvede novi segment kompanije:

> profesionalni dronovi za industrijske, bezbednosne, nadzorne i misije specijalne namene.

Firma je Solar Partner i zvanični je uvoznik Autel Robotics proizvoda za teritoriju Srbije. Ne izmišljati dodatne sertifikate, državne reference, brojeve projekata ili garancije ako nisu dostavljeni.

---

## Glavni cilj stranice

Cilj stranice je da predstavi Autel Robotics enterprise dronove kao napredne platforme za:

- inspekciju solarnih elektrana
- inspekciju elektro mreže
- gasnu i hemijsku industriju
- patrolne i nadzorne zadatke
- javnu bezbednost
- traganje i spasavanje
- upravljanje vanrednim situacijama
- industrijske objekte i kritičnu infrastrukturu

Stranica treba da generiše ozbiljne B2B upite, ne impulsivne kupovine.

Primarni CTA:

> Zatražite konsultaciju

Alternativni CTA:

> Pogledajte modele  
> Preuzmite specifikacije  
> Kontaktirajte nas za demonstraciju  
> Pošaljite upit za enterprise rešenje

---

## Vizuelni pravac

Stranica treba da vuče na vojno-bezbednosni, taktički i aerospace momenat, inspirisano osjećajem koji imaju moderni sajtovi poput U.S. Air Force sajta: veliki hero, snažan kontrast, kratke komande, misijski jezik, tamna podloga, oštri layout blokovi, tehnički detalji, osjećaj discipline i spremnosti.

Ne kopirati U.S. Air Force dizajn direktno. Koristiti ga samo kao referencu za atmosferu:

- snažan hero
- uppercase kratki naslovi
- mission-oriented copy
- tamne sekcije
- tehnički grid
- veliki vizuelni kadar letelice
- komande tipa “Mission Ready”, “Aerial Intelligence”, “Autonomous Response”
- ozbiljna, institucionalna energija

Stranica ne smije da izgleda kao gaming / sci-fi landing. Mora ostati komercijalna, profesionalna i B2B.

---

## Predložena estetika

### Boje

Koristiti tamniji, taktički vizuelni sistem:

```css
:root {
  --drone-bg: #070a0f;
  --drone-surface: #101722;
  --drone-surface-soft: #182231;
  --drone-text: #f4f7fb;
  --drone-muted: #a9b4c2;
  --drone-line: rgba(255, 255, 255, 0.12);
  --drone-accent: #f97316;
  --drone-accent-blue: #38bdf8;
  --drone-warning: #facc15;
}
```

### Tipografija

- Koristiti čistu grotesk / sans-serif tipografiju.
- Naslovi mogu biti uppercase ili djelimično uppercase.
- Brojevi i tehničke specifikacije treba da budu vizuelno istaknuti.
- Koristiti kratke label-e iznad naslova: `ENTERPRISE UAV`, `MISSION PLATFORM`, `THERMAL INTELLIGENCE`, `AUTONOMOUS OPERATIONS`.

### Vizuelni elementi

- tamni hero sa dronom u letu ili na tamnoj pozadini
- tehničke linije / grid overlay
- minimalne ikonice za senzore, termal, transmisiju, IP zaštitu, autonomiju
- kartice sa specifikacijama
- model comparison blok
- video blokovi
- CTA kao komandni panel / mission console

Dozvoljeno je koristiti blage animacije:

- fade in
- slide up
- hover glow
- lagani parallax hero background
- skenirajuća linija preko tehničkih kartica

Ne koristiti agresivne animacije, eksplozije, oružje, borbene scene ili bilo šta što djeluje kao promocija nasilja.

---

## Ton komunikacije

Ton treba da bude:

- ozbiljan
- precizan
- tehnički
- misijski
- institucionalan
- bezbednosno orijentisan
- profesionalan

Ne koristiti previše poetski marketing. Koristiti jezik koji zvuči kao kombinacija aerospace, industrije i javne bezbednosti.

Primjeri dobrih fraza:

- “Platforme za zahtevne profesionalne misije”
- “Napredna autonomija, termalna detekcija i rad u kompleksnim okruženjima”
- “Letelice projektovane za inspekciju, nadzor i brzo reagovanje”
- “Pouzdana vazdušna podrška za industriju, energetiku i službe bezbednosti”
- “Senzorska superiornost za odluke u realnom vremenu”
- “Od industrijske inspekcije do operacija potrage i spasavanja”

Izbjegavati:

- “ratni dronovi”
- “borbene misije”
- “oružani sistemi”
- “napad”
- “eliminacija ciljeva”
- bilo kakvu taktiku, instrukcije za operacije ili borbenu upotrebu

Stranica predstavlja profesionalne, civilne, industrijske i bezbednosne primjene, ne vojnu obuku ili ofanzivne sposobnosti.

---

## Predloženi naziv stranice

URL:

```txt
/profesionalni-dronovi
```

Alternativno:

```txt
/autel-robotics
```

Preporuka: koristiti `/profesionalni-dronovi`, jer je bolje za lokalni SEO i jasnije korisniku.

Meta title:

```txt
Profesionalni dronovi za industriju i bezbednost | Autel Robotics Srbija
```

Meta description:

```txt
Enterprise dron rešenja za inspekcije, nadzor, termalnu detekciju, potragu i spasavanje. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za Srbiju.
```

---

## Struktura stranice

### 1. Hero section

Hero treba da bude jak i taktički.

Suggested eyebrow:

> ENTERPRISE UAV SYSTEMS

Suggested headline:

> Profesionalni dronovi za misije u kojima je pouzdanost presudna

Suggested subheadline:

> Autel Robotics platforme za industrijsku inspekciju, nadzor, termalnu detekciju, potragu i spasavanje — dostupne kroz Solar Partner, zvaničnog uvoznika za Srbiju.

CTA:

> Zatražite konsultaciju  
> Pogledajte platforme

Hero trust badges:

- Zvanični uvoznik za Srbiju
- Enterprise Autel Robotics platforme
- Termalna i AI detekcija
- Industrija, energetika i bezbednost

Visual:

- large drone image
- dark background
- subtle grid
- technical telemetry style labels:
  - `THERMAL`
  - `AI TARGET RECOGNITION`
  - `15 KM TRANSMISSION`
  - `IP PROTECTION`
  - `AUTONOMOUS ROUTES`

---

### 2. Mission applications section

Section title:

> Primena u zahtevnim operativnim okruženjima

Create cards for:

#### Energetika i solarne elektrane

Inspekcija solarnih polja, termalna analiza panela, pregled elektro infrastrukture i rano otkrivanje nepravilnosti.

#### Industrija i kritična infrastruktura

Pregledi gasne, hemijske i proizvodne infrastrukture, objekata, postrojenja i rizičnih zona bez nepotrebnog izlaganja ljudi.

#### Javna bezbednost i nadzor

Patrolne, nadzorne i situacione misije za službe koje zahtevaju brzo prikupljanje informacija iz vazduha.

#### Potraga i spasavanje

Termalna detekcija, pregled velikih površina i podrška timovima na terenu u vanrednim situacijama.

#### Vanredne situacije

Detekcija dima, vatre, promjena temperature i pregled nepristupačnih područja.

#### Dugolinijske operacije

Platforme velikog dometa i autonomije za nadzor trasa, granica, elektro mreže, saobraćajnica i velikih sistema.

---

### 3. Autel Robotics intro section

Section title:

> Autel Robotics: enterprise platforme za kompleksne misije

Suggested text:

> Autel Robotics razvija profesionalna dron rešenja za industrijske, infrastrukturne i bezbednosne primene. Za razliku od klasičnih consumer dronova, ove platforme su projektovane za pouzdan rad u zahtevnim uslovima, naprednu autonomiju, termalnu detekciju i misije u kojima je kvalitet podataka presudan.

Additional text:

> Kombinacija robusne hardverske platforme, naprednih senzora, AI mogućnosti i stabilne komunikacije omogućava upotrebu u inspekcijama, patrolnim zadacima, nadzoru, spasilačkim operacijama i upravljanju vanrednim situacijama.

Add a highlighted statement:

> Solar Partner je zvanični uvoznik Autel Robotics proizvoda za teritoriju Srbije.

---

### 4. Capability strip

Create horizontal technical strip with key capabilities.

Items:

- 720° obstacle avoidance
- AI prepoznavanje ciljeva
- Termalna kamera visoke rezolucije
- Autonomne rute i predefinisane tačke
- A-Mesh komunikacija između dronova
- Rad u kompleksnim okruženjima
- Otpornost na smetnje
- Brza zamena baterije
- IP zaštita
- Domet transmisije do 15 km, where applicable

Use Serbian labels but keep some technical English terms acceptable.

Example:

```txt
AI DETECTION
THERMAL VISION
A-MESH NETWORK
ANTI-INTERFERENCE
MISSION ROUTES
```

---

## Product platform sections

### 5. EVO Max platform

Section label:

> EVO MAX PLATFORM

Title:

> Kompaktna enterprise platforma za autonomne misije

Suggested text:

> EVO Max serija donosi naprednu autonomiju, real-time analizu okruženja i sposobnost kreiranja 3D putanja leta. Platforma je namijenjena profesionalnim zadacima gdje su mobilnost, termalna detekcija i pouzdanost ključni.

Highlight specs:

- 720° senzori za izbegavanje prepreka
- visoka otpornost na ometanje
- A-Mesh umrežavanje sa drugim dronovima
- AI prepoznavanje ciljeva
- brza zamena baterije bez gašenja letelice
- do 15 km transmisije
- do 42 min vreme leta
- IP43 zaštita
- termalna kamera 640 x 512

Models:

#### EVO Max 4T

Description:

> Taktički kompaktna platforma za termalnu detekciju, nadzor, inspekcije i intervencije u zahtevnim uslovima.

Links:

- Autel page: https://www.autelrobotics.com/productdetail/evo-max-4t/
- Video: https://www.youtube.com/watch?v=1NeXMNkMGxc

#### EVO Max 4N

Description:

> Enterprise platforma za noćne i složene operacije, sa senzorima namijenjenim radu u uslovima ograničene vidljivosti.

Links:

- Autel page: https://www.autelrobotics.com/productdetail/evo-max-4n/
- Video: https://www.youtube.com/watch?v=Cv5q5dgtz0U

CTA:

> Zatražite specifikacije EVO Max platforme

---

### 6. Autel Alpha

Section label:

> AUTEL ALPHA

Title:

> Industrijski dron za najzahtevnije operacije

Suggested text:

> Autel Alpha je inteligentna industrijska platforma za višenamensku upotrebu. Sa naprednim sistemima autonomnog leta, zaštitom IP55, otpornosti na smetnje i preciznim RTK sistemom sa dvostrukim antenama, Alpha je projektovana za rad u kompleksnim uslovima.

Second paragraph:

> U kombinaciji sa gimbalom DG-L35T, platforma integriše hibridni zum, dve termalne kamere, širokougaonu kameru i laserski daljinomer. Ovakva konfiguracija omogućava pregled, detekciju i nadzor na velikim udaljenostima.

Highlight specs:

- 720° obstacle avoidance
- visoka otpornost na smetnje
- dual thermal camera
- AI prepoznavanje ciljeva
- brza zamena baterije
- do 15 km transmisije
- do 42 min vreme leta
- IP55 zaštita
- RTK sistem sa dvostrukim antenama
- laserski daljinomer
- hibridni zum

Links:

- Autel page: https://www.autelrobotics.com/productdetail/autel-alpha/
- Video: https://www.youtube.com/watch?v=N8ZFlswBuNk

CTA:

> Saznajte više o Alpha platformi

---

### 7. Dragonfish

Section label:

> DRAGONFISH VTOL

Title:

> eVTOL platforma za dugotrajne ISR i nadzorne operacije

Suggested text:

> Dragonfish je eVTOL tiltrotor platforma sa vertikalnim poletanjem i sletanjem. Namenjena je operacijama koje zahtevaju veći domet, duže vreme leta i pregled velikih površina bez potrebe za pistom ili dodatnom opremom za lansiranje.

Second paragraph:

> Platforma može biti spremna za let za manje od 5 minuta i omogućava do 179 minuta leta, uz domet do 45 km. Brza zamena korisnog tereta i više EO/MWIR senzorskih opcija čine je pogodnom za dugolinijski nadzor, upravljanje vanrednim situacijama i kompleksne operativne zadatke.

Important: ISR may be used as “obaveštajne, nadzorne i izviđačke operacije” only in a high-level commercial/security context. Do not add tactical military instructions.

Highlight specs:

- eVTOL tiltrotor platforma
- vertikalno poletanje i sletanje
- spremna za let za manje od 5 minuta
- do 179 minuta leta
- domet do 45 km
- EO/MWIR senzorske opcije
- brza zamena korisnog tereta
- automatsko ili manuelno poletanje i sletanje
- upravljanje od strane jednog operatora

Links:

- Autel page: https://www.autelrobotics.com/productdetail/dragonfish-pro/
- Video: https://www.youtube.com/watch?v=hjA3YRrzRtA

CTA:

> Zatražite konsultaciju za Dragonfish

---

### 8. Autel EVO Nest

Section label:

> AUTEL EVO NEST

Title:

> Bazna stanica za automatske dron operacije

Suggested text:

> EVO Nest je prenosiva bazna stanica za automatsko poletanje, sletanje, punjenje i planiranje misija za EVO seriju dronova. Projektovana je za rad u svim vremenskim uslovima i jednostavno postavljanje na terenu.

Second paragraph:

> U kombinaciji sa Autel Integrated Command System platformom, EVO Nest omogućava centralizovano upravljanje, planiranje i nadzor dron operacija.

Highlight specs:

- automatsko poletanje
- automatsko sletanje
- punjenje drona
- planiranje misija
- rad u svim vremenskim uslovima
- prenosiv dizajn
- transport u standardnom pikap vozilu
- integracija sa command system platformom

Links:

- Autel page: https://www.autelrobotics.com/productdetail/evo-nest/
- Video: https://www.youtube.com/watch?v=Qyedf26UWPE

CTA:

> Pogledajte mogućnosti EVO Nest sistema

---

## Comparison section

Create a simple comparison block.

Columns:

- Platforma
- Tip
- Ključna namena
- Vreme leta
- Zaštita
- Posebne mogućnosti

Rows:

### EVO Max

Tip: sklopivi enterprise quadcopter  
Namena: inspekcija, nadzor, termalna detekcija, brze intervencije  
Vreme leta: do 42 min  
Zaštita: IP43  
Posebno: AI detekcija, A-Mesh, termal 640 x 512

### Alpha

Tip: industrijska enterprise platforma  
Namena: javna bezbednost, energetika, vanredne situacije, nadzor velikih zona  
Vreme leta: do 42 min  
Zaštita: IP55  
Posebno: dual thermal, RTK, laserski daljinomer, hibridni zum

### Dragonfish

Tip: eVTOL tiltrotor  
Namena: dugolinijski nadzor, pregled velikih površina, ISR, vanredne situacije  
Vreme leta: do 179 min  
Zaštita: if unknown, do not invent  
Posebno: VTOL, domet do 45 km, EO/MWIR payloads

### EVO Nest

Tip: bazna stanica  
Namena: automatske operacije, punjenje, planiranje i nadzor misija  
Vreme leta: not applicable  
Zaštita: do not invent  
Posebno: autonomno poletanje/sletanje, mobilna baza, command system

---

## Form section

The page should include a specific enterprise inquiry form.

Fields:

- Ime i prezime
- Kompanija / institucija
- Pozicija
- Telefon
- Email
- Tip primene
  - Industrijska inspekcija
  - Solarne elektrane
  - Elektro mreža
  - Javna bezbednost
  - Potraga i spasavanje
  - Vanredne situacije
  - Distribucija / partnerstvo
  - Drugo
- Interesuje me
  - EVO Max
  - Alpha
  - Dragonfish
  - EVO Nest
  - Nisam siguran, potrebna mi je konsultacija
- Kratak opis potrebe
- Da li želite demonstraciju?
  - Da
  - Ne
  - Kasnije

CTA:

> Pošaljite enterprise upit

Success message:

> Hvala. Vaš upit je poslat. Kontaktiraćemo vas kako bismo razumeli operativne potrebe i predložili odgovarajuću Autel Robotics platformu.

---

## FAQ section

Suggested FAQ:

### Da li su ovo consumer ili enterprise dronovi?

Ovo su enterprise platforme namenjene profesionalnoj upotrebi u industriji, energetici, bezbednosti, nadzoru i vanrednim situacijama.

### Da li je moguća demonstracija?

Da. Stranica treba da komunicira mogućnost konsultacije i eventualne demonstracije, ako klijent to potvrdi.

### Koja platforma je najbolja za inspekciju solarnih elektrana?

Za inspekcije solarnih elektrana najčešće su relevantne platforme sa termalnim senzorima i preciznim planiranjem ruta. Konačan izbor zavisi od veličine sistema, tipa inspekcije i uslova na terenu.

### Da li dronovi podržavaju termalnu detekciju?

Da. Više Autel enterprise platformi podržava termalne senzore, uključujući EVO Max i Alpha serije.

### Da li se sistemi mogu koristiti za javnu bezbednost?

Da, u okviru zakonski dozvoljenih i profesionalno organizovanih operacija. Stranica treba da komunicira nadzor, potragu, spasavanje i upravljanje vanrednim situacijama, bez ulaska u ofanzivne ili borbene primjene.

### Da li Solar Partner prodaje i distribuira Autel Robotics opremu?

Da. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za teritoriju Srbije.

---

## SEO direction

Main keywords:

- profesionalni dronovi Srbija
- enterprise dronovi
- Autel Robotics Srbija
- Autel EVO Max 4T Srbija
- Autel Alpha Srbija
- Autel Dragonfish Srbija
- termalni dronovi
- dronovi za inspekciju solarnih elektrana
- dronovi za javnu bezbednost
- dronovi za potragu i spasavanje
- industrijski dronovi
- dronovi za elektro mrežu
- dronovi za nadzor

Suggested H1:

```txt
Profesionalni dronovi za zahtevne misije
```

Suggested H2 examples:

```txt
Enterprise platforme za industriju, energetiku i bezbednost
Autel Robotics rešenja dostupna u Srbiji
Od termalne detekcije do autonomnih ruta
Izaberite platformu prema operativnoj potrebi
```

---

## Page component suggestions

Add components:

```txt
/components/drone
  DroneHero.jsx
  MissionApplications.jsx
  AutelIntro.jsx
  CapabilityStrip.jsx
  DronePlatformSection.jsx
  DroneComparison.jsx
  DroneVideoBlock.jsx
  DroneInquiryForm.jsx
  DroneFAQ.jsx
  DroneCTA.jsx
```

Add content files:

```txt
/content
  dronePlatforms.js
  droneFaq.js
  droneApplications.js
```

Add page:

```txt
/app/profesionalni-dronovi/page.jsx
```

If using a Pages Router instead of App Router, adapt accordingly.

---

## Suggested data structure

```js
export const dronePlatforms = [
  {
    id: "evo-max",
    label: "EVO MAX PLATFORM",
    title: "Kompaktna enterprise platforma za autonomne misije",
    models: ["EVO Max 4T", "EVO Max 4N"],
    useCases: ["Inspekcija", "Nadzor", "Termalna detekcija", "Brze intervencije"],
    specs: [
      "720° senzori za izbegavanje prepreka",
      "A-Mesh umrežavanje",
      "AI prepoznavanje ciljeva",
      "Do 15 km transmisije",
      "Do 42 min vreme leta",
      "IP43 zaštita",
      "Termalna kamera 640 x 512"
    ],
    links: [
      {
        label: "EVO Max 4T",
        url: "https://www.autelrobotics.com/productdetail/evo-max-4t/"
      },
      {
        label: "EVO Max 4N",
        url: "https://www.autelrobotics.com/productdetail/evo-max-4n/"
      }
    ]
  },
  {
    id: "alpha",
    label: "AUTEL ALPHA",
    title: "Industrijski dron za najzahtevnije operacije",
    models: ["Autel Alpha"],
    useCases: ["Javna bezbednost", "Energetika", "Vanredne situacije", "Nadzor velikih zona"],
    specs: [
      "IP55 zaštita",
      "Dual thermal camera",
      "RTK sistem sa dvostrukim antenama",
      "Laserski daljinomer",
      "AI prepoznavanje ciljeva",
      "Do 15 km transmisije",
      "Do 42 min vreme leta"
    ],
    links: [
      {
        label: "Autel Alpha",
        url: "https://www.autelrobotics.com/productdetail/autel-alpha/"
      }
    ]
  },
  {
    id: "dragonfish",
    label: "DRAGONFISH VTOL",
    title: "eVTOL platforma za dugotrajne ISR i nadzorne operacije",
    models: ["Dragonfish Pro"],
    useCases: ["Dugolinijski nadzor", "Pregled velikih površina", "Vanredne situacije"],
    specs: [
      "eVTOL tiltrotor platforma",
      "Vertikalno poletanje i sletanje",
      "Do 179 minuta leta",
      "Domet do 45 km",
      "EO/MWIR senzorske opcije",
      "Brza zamena korisnog tereta"
    ],
    links: [
      {
        label: "Dragonfish Pro",
        url: "https://www.autelrobotics.com/productdetail/dragonfish-pro/"
      }
    ]
  },
  {
    id: "evo-nest",
    label: "AUTEL EVO NEST",
    title: "Bazna stanica za automatske dron operacije",
    models: ["EVO Nest"],
    useCases: ["Automatske operacije", "Punjenje", "Planiranje misija", "Centralizovano upravljanje"],
    specs: [
      "Automatsko poletanje",
      "Automatsko sletanje",
      "Punjenje drona",
      "Planiranje misija",
      "Rad u svim vremenskim uslovima",
      "Prenosiv dizajn"
    ],
    links: [
      {
        label: "EVO Nest",
        url: "https://www.autelrobotics.com/productdetail/evo-nest/"
      }
    ]
  }
];
```

---

## Development instructions

1. Add a new route `/profesionalni-dronovi`.
2. Keep the page visually connected to the main solar website, but give it a darker, more tactical design system.
3. Do not redesign the entire website.
4. Reuse global header and footer if possible.
5. Add a darker page-specific theme class, for example `.drone-page`.
6. Use structured content files so models and specs can be edited easily.
7. Use placeholder visuals until real product images are provided.
8. Use official Autel links as external references.
9. Make the page fully responsive.
10. Keep all copy in Serbian Latin.
11. Do not invent claims that are not in the provided content.
12. Do not include offensive military or weapon-related language.
13. Keep focus on industrial, enterprise, public safety, search and rescue, inspection and emergency-response use cases.

---

## First implementation task for agent

Create the new page `/profesionalni-dronovi` inside the existing Next.js project.

The page should include:

- DroneHero
- MissionApplications
- AutelIntro
- CapabilityStrip
- EVO Max section
- Alpha section
- Dragonfish section
- EVO Nest section
- comparison table
- FAQ
- final CTA
- enterprise inquiry form

The page should feel like a serious tactical / aerospace / mission-ready presentation, inspired by modern air force visual language, but adapted for a commercial enterprise drone distributor in Serbia.

Use Serbian Latin content.

Use placeholders for images.

Prioritize strong visual rhythm, technical credibility, responsive layout and lead generation.
