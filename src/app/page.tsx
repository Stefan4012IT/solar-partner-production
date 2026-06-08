import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const assetPath = (path: string) =>
  `${process.env.GITHUB_PAGES === "true" ? "/solar-partner" : ""}${path}`;

const clientTypes = [
  {
    title: "Za domaćinstva",
    text: "Solarni sistemi za porodične kuće i stambene objekte, planirani prema realnoj potrošnji i uslovima na krovu.",
    image: assetPath("/solutions/solar_porodicno.png"),
    alt: "Porodična kuća sa solarnim panelima na krovu",
  },
  {
    title: "Za firme",
    text: "Solarne elektrane za poslovne, proizvodne, komercijalne i skladišne objekte sa izraženom dnevnom potrošnjom.",
    image: assetPath("/solutions/solar_poslovni_prostori.png"),
    alt: "Poslovni objekat sa solarnim panelima na krovu",
  },
  {
    title: "Za vikendice, farme i udaljene objekte",
    text: "Off-grid, hibridna i pomoćna solarna rešenja kada je stabilnost napajanja posebno važna.",
    image: assetPath("/solutions/vikendice_farme.png"),
    alt: "Udaljeni objekat sa solarnim panelima i baterijskim sistemom",
  },
];

const services = [
  "Analiza potrošnje",
  "Procena lokacije i krova",
  "Proračun sistema",
  "Projektovanje",
  "Isporuka opreme",
  "Montaža",
  "Podrška pri priključenju",
  "Servis i nadzor",
];

const processSteps = [
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
];

const projects = [
  {
    title: "Solarna elektrana za porodičnu kuću",
    meta: "Domaćinstvo / 6 kW / On-grid",
    text: "Sistem projektovan za smanjenje mesečnih troškova električne energije i veću energetsku nezavisnost domaćinstva.",
    image: assetPath("/projects/porodicna_kuca_01.png"),
    alt: "Solarna elektrana postavljena na porodičnoj kući",
  },
  {
    title: "Solarni sistem za poslovni objekat",
    meta: "Firma / 30 kW / On-grid",
    text: "Rešenje prilagođeno dnevnoj potrošnji poslovnog objekta, sa fokusom na dugoročnu uštedu.",
    image: assetPath("/projects/poslovni_objekti_01.png"),
    alt: "Solarni paneli na krovu poslovnog objekta",
  },
  {
    title: "Hibridno rešenje za udaljeni objekat",
    meta: "Pomoćni objekat / 5 kW / Hibridni sistem",
    text: "Sistem namenjen stabilnijem napajanju objekta i većoj nezavisnosti od mreže.",
    image: assetPath("/projects/hibridno_resenje_01.png"),
    alt: "Hibridni solarni sistem za udaljeni objekat",
  },
];

const equipment = [
  "Solarni paneli",
  "Inverteri",
  "Baterije",
  "Konstrukcije",
  "Kablovi i zaštitna oprema",
  "Solarni kompleti",
  "Oprema za instalatere",
];

const faqs = [
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
];

export default function Home() {
  return (
    <main className={`${redHatDisplay.className} ${styles.page}`}>
      <SiteHeader />

      <section id="top" className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Solarna energija bez nepoznatih</p>
          <h1>Solarne elektrane za kuće, firme i industrijske objekte</h1>
          <p className={styles.lead}>
            Projektovanje, oprema, ugradnja i podrška pri priključenju, sve na jednom mestu.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#kontakt">
              Zatražite procenu
            </a>
            <a className={styles.secondaryButton} href="#proces">
              Pogledajte proces
            </a>
          </div>
          <div className={styles.trustPoints} aria-label="Ključne prednosti">
            <span>Procena potrošnje i kapaciteta</span>
            <span>Oprema proverenih proizvođača</span>
            <span>Stručna montaža i podrška</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={assetPath("/solar-partne-hero--000.png")}
            alt="Solarni paneli montirani na krovu objekta"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="resenja" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Rešenja prema objektu</p>
          <h2>Kompletna solarna rešenja za različite tipove korisnika</h2>
        </div>
        <div className={styles.cardGrid}>
          {clientTypes.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.cardImage}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLine} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.blueBand}>
        <section id="obim-rada" className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.split}>
            <div>
              <p className={styles.eyebrow}>Obim rada</p>
              <h2>Od prve procene do puštanja sistema u rad</h2>
              <p>
                Svaki sistem planiramo prema potrošnji, objektu i ciljevima korisnika. Cilj nije
                prodaja gotovog paketa, već rešenje koje ima tehničkog i ekonomskog smisla.
              </p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="proces" className={`${styles.section} ${styles.processSection}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Proces</p>
            <h2>Kako izgleda put do sopstvene solarne elektrane</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <article className={styles.processStep} key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section id="projekti" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Primeri projekata</p>
          <h2>Kako sistem može da izgleda u praksi</h2>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className={styles.projectContent}>
                <p>{project.meta}</p>
                <h3>{project.title}</h3>
                <span>{project.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="oprema-distribucija" className={`${styles.section} ${styles.equipmentSection}`}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Oprema i distribucija</p>
            <h2>Oprema za kompletna solarna rešenja</h2>
            <p>
              Pored ugradnje solarnih elektrana, Solar Partner se bavi prodajom i distribucijom
              solarne opreme za krajnje korisnike, partnere i instalatere.
            </p>
          </div>
          <div className={styles.equipmentList}>
            {equipment.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="analiza" className={`${styles.section} ${styles.reasonSection}`}>
        <div className={styles.reasonContent}>
          <div>
            <p className={styles.eyebrow}>Analiza pre ponude</p>
            <h2>Prvo proveravamo podatke, pa tek onda predlažemo sistem</h2>
            <p>
              Isplativost zavisi od potrošnje, položaja objekta, kvaliteta opreme, načina montaže i
              pravilnog povezivanja. Zato svaki projekat počinje analizom, a ne prodajom gotovog
              paketa.
            </p>
            <div className={styles.analysisPoints}>
              <span>Potrošnja i dnevni profil</span>
              <span>Krov, orijentacija i zasenčenje</span>
              <span>Snaga sistema i okvirna proizvodnja</span>
            </div>
          </div>
          <div className={styles.analysisPanel} aria-label="Vizuelni prikaz analize sistema">
            <div className={styles.analysisHeader}>
              <span>ANALYSIS MODE</span>
              <strong>01</strong>
            </div>
            <div className={styles.analysisGraph}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.analysisMetrics}>
              <span>
                Potrošnja
                <strong>12 meseci</strong>
              </span>
              <span>
                Krov
                <strong>azimut / nagib</strong>
              </span>
              <span>
                Sistem
                <strong>kW + oprema</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Česta pitanja</p>
          <h2>Pitanja koja treba rešiti pre ugradnje</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className={styles.ctaSection}>
        <div>
          <p className={styles.eyebrow}>Prva procena</p>
          <h2>Pošaljite podatke i saznajte kakvo solarno rešenje ima smisla za vaš objekat</h2>
          <p>
            Na osnovu potrošnje, lokacije i tipa objekta pripremamo okvirnu procenu sistema i
            predlog sledećih koraka.
          </p>
        </div>
        <a className={styles.primaryButton} href="mailto:kontakt@solarpartner.rs">
          Pošaljite zahtev
        </a>
      </section>
    </main>
  );
}
