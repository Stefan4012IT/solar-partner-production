# AGENT.md

## Project overview

We are building a modern website for a young solar energy company based in Serbia.

The company works in three connected areas:

1. Installation of solar panel systems
2. Sale of solar equipment
3. Distribution of solar panels and related components

The company is young, but already has several completed or ongoing projects. The website should help the company look professional, trustworthy, technically competent, and ready for both residential and business clients.

The website should not feel like a generic “green energy” landing page. It should feel like a serious engineering and energy company that helps people and businesses produce their own electricity.

The main communication idea is:

> Solar energy without unknowns.

The website should explain the process clearly, reduce uncertainty, and convert visitors into qualified leads.

---

## Main goal of the website

The primary goal is lead generation.

The website should encourage visitors to request an initial solar system assessment by submitting basic information about their property, electricity consumption, and needs.

The website should not push users to “buy now”. Solar panel systems are a considered investment. The site should build trust, explain the process, show real projects, and make the first contact feel easy and low-risk.

Primary CTA:

> Zatražite procenu

Alternative CTAs:

> Pošaljite podatke za okvirnu ponudu  
> Saznajte kako izgleda proces  
> Pogledajte projekte  
> Kontaktirajte nas

---

## Tone of voice

The tone should be:

- professional
- clear
- confident
- technically reliable
- local and approachable
- practical, not overly poetic
- informative, not aggressive

Avoid vague eco-marketing language like:

- “zajedno čuvamo planetu”
- “budućnost je zelena”
- “sunce radi za vas”
- “najbolja energija prirode”

Use direct and grounded language instead:

- “Kompletna solarna rešenja za kuće i poslovne objekte”
- “Od procene i projektovanja do ugradnje i podrške pri priključenju”
- “Sistem prilagođen vašoj potrošnji, krovu i načinu korišćenja objekta”
- “Jasan proces, proverena oprema i stručna montaža”

---

## Suggested tech stack

Use:

- Next.js
- React
- SCSS modules or global SCSS
- No TypeScript unless explicitly requested
- Component-based structure
- Static content stored in structured files if useful
- Responsive layout from the start
- SEO-friendly pages and metadata

The project should be simple, clean, maintainable, and easy to expand later with blog posts, project case studies, or product categories.

---

## Visual direction

The design should feel modern, technical, clean, and trustworthy.

Avoid cliché solar/eco visuals. Do not overuse leaves, green gradients, cartoon suns, or generic stock photos of smiling families.

Preferred visual style:

- strong grid system
- clean typography
- generous spacing
- technical icons
- large project photos
- subtle geometric shapes
- energy/infrastructure feeling
- calm but confident layout

Suggested color direction:

- dark graphite / near black for seriousness
- warm white or very light neutral background
- solar orange as accent
- technical blue as secondary accent
- muted green only if needed, very subtly

Example palette direction:

```css
:root {
  --color-bg: #f7f5ef;
  --color-surface: #ffffff;
  --color-dark: #16181d;
  --color-text: #25272c;
  --color-muted: #6f747c;
  --color-primary: #f59e0b;
  --color-secondary: #1d4ed8;
  --color-border: #e4e0d8;
}
```

The design should look like an energy infrastructure company, not a cheap equipment reseller.

---

## Website structure

The website should start as a strong homepage with several supporting pages.

Recommended pages:

1. Home
2. Solarne elektrane za kuće
3. Solarne elektrane za firme
4. Distribucija solarne opreme
5. Projekti
6. O nama
7. Blog / vodiči
8. Kontakt

If the first version is smaller, build the homepage first but structure the code so these pages can be added later.

---

## Homepage structure

### 1. Hero section

Goal: immediately explain what the company does and who it helps.

Suggested headline:

> Solarne elektrane za kuće, firme i industrijske objekte

Suggested subheadline:

> Projektovanje, oprema, ugradnja i podrška pri priključenju — sve na jednom mestu.

Hero CTAs:

- Zatražite procenu
- Pogledajte kako izgleda proces

Hero trust points:

- Procena potrošnje i kapaciteta
- Oprema proverenih proizvođača
- Stručna montaža i podrška nakon ugradnje

The hero should be direct, clean, and strong. Do not use too much text.

---

### 2. Client types section

Create three cards:

#### Za domaćinstva

Solarni sistemi za porodične kuće i stambene objekte. Fokus na smanjenje računa, veću energetsku nezavisnost i sistem prilagođen realnoj potrošnji.

#### Za firme

Solarne elektrane za poslovne, proizvodne, komercijalne i skladišne objekte. B2B should feel important because companies often have stronger daytime electricity consumption and better solar logic.

#### Za vikendice, farme i udaljene objekte

Off-grid, hibridna i pomoćna solarna rešenja za objekte gde je stabilnost napajanja posebno važna.

---

### 3. Services section

Show that the company does more than just install panels.

Services:

1. Analiza potrošnje
2. Procena lokacije i krova
3. Proračun sistema
4. Projektovanje
5. Isporuka opreme
6. Montaža
7. Podrška pri priključenju
8. Servis i nadzor

Suggested section title:

> Kompletno solarno rešenje, od prve procene do puštanja sistema u rad

Suggested intro:

> Svaki sistem planiramo prema potrošnji, objektu i ciljevima korisnika. Naš posao nije samo da postavimo panele, već da osmislimo rešenje koje ima tehničkog i ekonomskog smisla.

---

### 4. Process section

Create a clear 4-step process.

#### 1. Pošaljete osnovne podatke

Korisnik šalje račun za struju, lokaciju objekta i osnovne informacije o potrošnji.

#### 2. Dobijate okvirni proračun

Company prepares an initial system recommendation, approximate capacity and next steps.

#### 3. Izlazak na teren i finalna ponuda

The roof, orientation, shading, structure and electrical installation are checked.

#### 4. Ugradnja i podrška

The system is installed, tested and prepared for use, with support during and after installation.

Suggested title:

> Kako izgleda put do sopstvene solarne elektrane

---

### 5. Projects section

The company has several projects, so this section is important.

Each project card should include:

- location
- type of object
- system power
- system type: on-grid, off-grid, hybrid
- equipment used
- short challenge
- result or expected production, if available
- images

Project cards should feel like mini case studies, not just image gallery items.

Suggested title:

> Projekti koji pokazuju kako sistem izgleda u praksi

Suggested CTA:

> Pogledajte sve projekte

Use placeholder project data if real data is not yet available.

Example placeholder:

```js
const projects = [
  {
    title: "Solarna elektrana za porodičnu kuću",
    location: "Srbija",
    type: "Domaćinstvo",
    power: "6 kW",
    system: "On-grid",
    description: "Sistem projektovan za smanjenje mesečnih troškova električne energije i veću energetsku nezavisnost domaćinstva."
  },
  {
    title: "Solarni sistem za poslovni objekat",
    location: "Srbija",
    type: "Firma",
    power: "30 kW",
    system: "On-grid",
    description: "Rešenje prilagođeno dnevnoj potrošnji poslovnog objekta, sa fokusom na dugoročnu uštedu."
  },
  {
    title: "Hibridno rešenje za udaljeni objekat",
    location: "Srbija",
    type: "Vikendica / pomoćni objekat",
    power: "5 kW",
    system: "Hibridni sistem",
    description: "Sistem namenjen stabilnijem napajanju objekta i većoj nezavisnosti od mreže."
  }
];
```

---

### 6. Equipment and distribution section

Because the company also sells and distributes equipment, create a separate section.

Categories:

- Solarni paneli
- Inverteri
- Baterije
- Konstrukcije
- Kablovi i zaštitna oprema
- Solarni kompleti
- Oprema za instalatere

Important distinction:

The website should clearly separate:

- complete installation for end clients
- equipment sale and distribution for partners/installers

Suggested title:

> Oprema za kompletna solarna rešenja

Suggested text:

> Pored ugradnje solarnih elektrana, bavimo se i prodajom i distribucijom solarne opreme za krajnje korisnike, partnere i instalatere.

---

### 7. Why choose us section

Do not exaggerate. Since the company is young, avoid claiming decades of experience.

Use credible points:

- Individual system planning
- Clear communication before installation
- Verified equipment
- Support through the process
- Residential and business solutions
- Local availability
- Practical technical approach

Suggested title:

> Zašto je važno da sistem bude pravilno planiran

Suggested text:

> Solarni sistem nije samo skup panela. Njegova isplativost zavisi od potrošnje, položaja objekta, kvaliteta opreme, načina montaže i pravilnog povezivanja. Zato svaki projekat počinje analizom, a ne prodajom gotovog paketa.

---

### 8. Educational / SEO section

Create a section with 3 or 4 educational cards.

Topics:

- Koliko košta solarna elektrana?
- Da li mi treba baterija?
- Da li solarni paneli rade zimi?
- Šta znači kupac-proizvođač?
- Koliko traje ugradnja?
- Da li se sistem može proširiti?

This can later become a blog.

Suggested title:

> Pitanja koja treba rešiti pre ugradnje

---

### 9. FAQ section

Suggested FAQ items:

#### Koliko košta ugradnja solarnih panela?

Cena zavisi od snage sistema, tipa objekta, opreme, konstrukcije, uslova montaže i potrebe za dodatnim komponentama. Zato je za okvirnu procenu najbolje poslati podatke o potrošnji i objektu.

#### Da li solarni paneli rade zimi?

Da. Solarni paneli proizvode električnu energiju i tokom zime, ali proizvodnja zavisi od dužine dana, vremenskih uslova, položaja panela i eventualnog snega ili zasenčenja.

#### Da li mi je potrebna baterija?

Ne uvek. Baterije su korisne kod hibridnih i off-grid sistema, kao i kada korisnik želi veću nezavisnost. Za mnoge on-grid sisteme baterija nije obavezna u prvoj fazi.

#### Koliko traje ugradnja?

Trajanje zavisi od veličine sistema i uslova na objektu. Manji sistemi se mogu montirati relativno brzo, dok veći poslovni i industrijski sistemi zahtevaju detaljnije planiranje.

#### Da li radite i za firme?

Da. Solarni sistemi za firme su posebno važni jer poslovni objekti često imaju veću dnevnu potrošnju, što može poboljšati ekonomsku logiku ulaganja.

#### Šta je potrebno za prvu procenu?

Najkorisnije je poslati račun za električnu energiju, lokaciju objekta, tip objekta i, ako postoji, fotografije krova ili prostora gde bi sistem bio postavljen.

---

### 10. Final CTA section

End the homepage with a strong but calm CTA.

Suggested title:

> Pošaljite podatke i saznajte kakvo solarno rešenje ima smisla za vaš objekat

Suggested text:

> Na osnovu vaše potrošnje, lokacije i tipa objekta možemo pripremiti okvirnu procenu sistema i predložiti sledeće korake.

CTA:

> Zatražite procenu

---

## Contact form fields

The contact form should be more specific than a generic contact form.

Recommended fields:

- Ime i prezime
- Telefon
- Email
- Grad / opština
- Tip objekta
  - Kuća
  - Firma
  - Vikendica
  - Farma
  - Industrijski objekat
  - Drugo
- Prosečan mesečni račun za struju
- Da li imate fotografiju krova?
- Poruka

Optional upload field for roof photos can be added later.

Form CTA:

> Pošaljite zahtev za procenu

Success message:

> Hvala. Vaš zahtev je poslat. Kontaktiraćemo vas kako bismo prikupili dodatne podatke i pripremili okvirnu procenu.

---

## SEO direction

Initial SEO keywords and page topics:

- solarni paneli Srbija
- ugradnja solarnih panela
- solarne elektrane za kuće
- solarne elektrane za firme
- solarni paneli za kuću
- solarni paneli cena
- kupac-proizvođač Srbija
- off-grid solarni sistemi
- hibridni solarni sistemi
- solarni paneli za vikendicu
- solarni sistemi za poljoprivredu
- distribucija solarne opreme
- inverteri za solarne sisteme
- baterije za solarne sisteme

Every page should have unique meta title and description.

Example homepage meta:

```js
export const metadata = {
  title: "Solarne elektrane za kuće i firme | Ugradnja solarnih panela",
  description:
    "Kompletna solarna rešenja za domaćinstva, firme i industrijske objekte u Srbiji. Projektovanje, oprema, ugradnja i podrška pri priključenju."
};
```

---

## Content rules

Use Serbian Latin by default.

Use clear section headings.

Avoid unrealistic claims unless real data is provided.

Do not invent exact savings, project numbers, guarantees, certificates, equipment brands or years of experience unless provided by the client.

Acceptable phrases:

- “okvirna procena”
- “očekivana proizvodnja”
- “u zavisnosti od potrošnje”
- “u zavisnosti od uslova na objektu”
- “sistem prilagođen vašem objektu”
- “podrška kroz proces”

Avoid unsupported claims:

- “uštedite 80%”
- “najbolji solarni paneli u Srbiji”
- “garantovana isplativost”
- “najbrža ugradnja”
- “najpovoljnije cene”

---

## Component suggestions

Suggested component structure:

```txt
/components
  Header.jsx
  Footer.jsx
  Hero.jsx
  ClientTypes.jsx
  ServicesGrid.jsx
  ProcessSteps.jsx
  ProjectsPreview.jsx
  EquipmentCategories.jsx
  WhyUs.jsx
  EducationCards.jsx
  FAQ.jsx
  ContactCTA.jsx
  ContactForm.jsx
  SectionHeader.jsx
  Button.jsx
  ProjectCard.jsx
  EquipmentCard.jsx
```

Suggested app structure:

```txt
/app
  page.jsx
  layout.jsx
  globals.scss
  /projekti
    page.jsx
  /kontakt
    page.jsx
  /solarne-elektrane-za-kuce
    page.jsx
  /solarne-elektrane-za-firme
    page.jsx
  /distribucija-solarne-opreme
    page.jsx
```

Suggested content structure:

```txt
/content
  site.js
  projects.js
  faq.js
  services.js
  equipment.js
```

---

## Placeholder images

Until real images are provided, use high-quality placeholder areas, not random irrelevant stock photos.

Create image placeholders for:

- solar panels on roof
- technician installing panels
- inverter/equipment detail
- business building with roof solar system
- completed residential installation
- completed commercial installation

The placeholders should be easy to replace later.

Use descriptive alt text.

Example:

```jsx
<img
  src="/images/project-residential-placeholder.jpg"
  alt="Solarni paneli postavljeni na krovu porodične kuće"
/>
```

---

## UX priorities

The website must be fast, clear, and mobile-friendly.

Important UX rules:

- CTA visible in hero
- CTA repeated after process, projects, and FAQ
- Navigation simple
- Mobile menu clean
- Form easy to complete
- Avoid long walls of text
- Use cards, steps, and short blocks
- Projects must be visually strong
- Contact information always easy to find

---

## Accessibility

Follow basic accessibility rules:

- semantic HTML
- correct heading order
- descriptive alt text
- accessible buttons and links
- good color contrast
- visible focus states
- form labels connected to inputs
- avoid text embedded inside images

---

## Performance

Prioritize:

- optimized images
- lazy loading below the fold
- clean CSS
- minimal dependencies
- no unnecessary animation libraries at first
- responsive image sizes

Animations should be subtle:

- fade in
- slight upward motion
- hover transitions
- no heavy scroll effects in the first version

---

## Development instructions

Build the first version as a polished marketing website, not as a full custom platform.

Do not overcomplicate the architecture.

Focus on:

1. strong homepage
2. clear service sections
3. project cards
4. lead form
5. responsive design
6. SEO-ready structure

Use placeholder content where real company details are missing, but clearly structure the code so real data can be inserted later.

Do not invent company name, address, phone number, legal claims, equipment brands or exact guarantees unless provided.

---

## First implementation task

Create the initial Next.js project structure for the solar company website.

Build:

- homepage
- header
- footer
- hero
- client types section
- services grid
- process section
- projects preview
- equipment section
- FAQ
- final CTA
- contact form component

Use Serbian Latin content.

Design should be modern, serious, technical and trustworthy.

Make it fully responsive.

Use placeholder images and placeholder project data.

Keep code clean and easy to extend.
