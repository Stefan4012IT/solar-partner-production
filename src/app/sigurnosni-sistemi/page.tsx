import type { Metadata } from "next";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { assetPath } from "@/lib/assetPath";
import { SecurityHeader } from "./SecurityHeader";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-security-display",
});

const protectionSystems = [
  {
    title: "Video nadzor",
    text: "Kamere više nisu samo izvor slike. Savremeni sistemi mogu da rade analitiku događaja, klasifikaciju alarma, zaštitu perimetra, detekciju lica, brojanje ljudi i prepoznavanje situacija koje zahtevaju reakciju.",
  },
  {
    title: "Alarmni sistemi",
    text: "Alarm je prva linija odbrane objekta. Pravilno projektovan sistem omogućava brzu dojavu, potvrdu alarma preko video nadzora, scenarije automatizacije i daljinsko upravljanje putem mobilnog telefona.",
  },
  {
    title: "Kontrola pristupa",
    text: "Rešenja za objekte u kojima je potrebno ograničiti i evidentirati kretanje. Sistem beleži ko je otvorio vrata, kada se pristup dogodio i upozorava na nevalidne kartice, pogrešne šifre ili nezatvorena vrata.",
  },
  {
    title: "Video interfoni",
    text: "Moderni interfonski sistemi omogućavaju širokougaone kamere, povezivanje sa liftovima, pametnim kućama, kamerama i udaljeno pozivanje kroz mobilnu aplikaciju.",
  },
  {
    title: "Protivpožarna zaštita",
    text: "Sistemi namenjeni ranom otkrivanju rizika, pravovremenoj dojavi i integraciji sa ostalim tehničkim sistemima objekta kada je to potrebno.",
  },
  {
    title: "Rampe, barijere i parking sistemi",
    text: "Kontrola ulaza i izlaza vozila ili pešaka kroz rampe, pešačke barijere, evidenciju prolaza i integraciju sa kontrolom pristupa.",
  },
];

const processSteps = [
  {
    title: "Procena objekta",
    text: "Sagledavamo namenu objekta, kritične tačke, postojeću infrastrukturu, režim kretanja i realne rizike.",
  },
  {
    title: "Predlog rešenja",
    text: "Biramo opremu i arhitekturu sistema prema zahtevima sa terena, a ne prema gotovom paketu.",
  },
  {
    title: "Ugradnja i podešavanje",
    text: "Sistem se instalira, povezuje, testira i podešava tako da oprema radi ono zbog čega je ugrađena.",
  },
  {
    title: "Održavanje i dokumentacija",
    text: "Po potrebi obezbeđujemo servis, ugovore o održavanju, planove, projekte, sertifikate i ostalu prateću dokumentaciju.",
  },
];

const systemList = [
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
];

export const metadata: Metadata = {
  title: "Sigurnosni sistemi i tehnička zaštita | Solar Partner",
  description:
    "Kompletna rešenja tehničke zaštite: video nadzor, alarmni sistemi, kontrola pristupa, video interfoni, parking sistemi, integracija i održavanje.",
};

export default function SecuritySystemsPage() {
  return (
    <main className={`${redHatDisplay.className} ${styles.page}`}>
      <SecurityHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Sistemi tehničke zaštite</p>
          <h1>Tehnička zaštita za objekte pod kontrolom</h1>
          <p>
            Projektovanje, ugradnja, povezivanje i održavanje sistema video nadzora, alarma,
            kontrole pristupa, video interfona i drugih sistema tehničke zaštite.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#kontakt">
              Zatražite procenu
            </a>
            <a className={styles.secondaryButton} href="#sistemi">
              Pogledajte rešenja
            </a>
          </div>
          <div className={styles.trustGrid}>
            <span>Individualno planiranje prema objektu</span>
            <span>Integracija više sigurnosnih sistema</span>
            <span>Servisno održavanje i podrška</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={assetPath("/security/security_intro.png")}
            alt="Sigurnosni sistem i tehnička zaštita objekta"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
          />
        </div>
      </section>

      <section id="sistemi" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Oblasti primene</p>
          <h2>Sistem se ne bira po katalogu, već prema načinu korišćenja objekta</h2>
        </div>
        <div className={styles.systemGrid}>
          {protectionSystems.map((system, index) => (
            <article className={styles.systemCard} key={system.title}>
              <div className={styles.systemCardMedia} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span />
              <h3>{system.title}</h3>
              <p>{system.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.analyticsSection}>
        <div>
          <p className={styles.eyebrow}>Video analitika</p>
          <h2>Video nadzor sa korisnom analitikom</h2>
        </div>
        <div className={styles.analyticsText}>
          <p>
            Napredne kamere mogu da pomognu kod zaštite perimetra, klasifikacije alarma,
            detekcije ljudi i vozila, prelaska zamišljene linije, ulaska u definisanu zonu,
            brojanja ljudi, detekcije temperature i drugih scenarija.
          </p>
          <p>
            Cilj je da sistem smanji broj lažnih alarma i da korisniku pruži informaciju koja ima
            operativnu vrednost. Zato se svaka analitika podešava prema realnim uslovima na terenu.
          </p>
        </div>
      </section>

      <section id="proces" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Način rada</p>
          <h2>Od procene rizika do sistema koji se može održavati</h2>
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

      <section id="oprema" className={styles.equipmentSection}>
        <div className={styles.equipmentCopy}>
          <p className={styles.eyebrow}>Oprema i integracija</p>
          <h2>Više sistema povezano u jednu operativnu celinu</h2>
          <p>
            Tim poseduje iskustvo u implementaciji različitih proizvođača sigurnosne opreme koji
            su prisutni na domaćem tržištu. U praksi se često koriste rešenja proizvođača kao što
            je Hikvision, posebno kada su važni pouzdanost, širok izbor opreme, servisna podrška i
            mogućnost integracije u jedan softverski sistem.
          </p>
          <strong>Važno je da oprema, softver i održavanje budu planirani kao jedan sistem.</strong>
        </div>
        <div className={styles.systemList}>
          {systemList.map((item, index) => (
            <span key={item}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.complianceSection}>
        <div>
          <p className={styles.eyebrow}>Dokumentacija</p>
          <h2>Tehnička zaštita mora biti planirana i dokumentovana</h2>
        </div>
        <div className={styles.complianceCopy}>
          <p>
            Ugradnja i održavanje sigurnosne opreme povezani su sa pravilima iz oblasti privatnog
            obezbeđenja i zaštite podataka o ličnosti. Zato je, zavisno od tipa objekta i sistema,
            važno na vreme razmotriti planove, projekte, procenu rizika, ugovore o održavanju,
            sertifikate i potvrde o kvalitetu opreme.
          </p>
          <small>
            * Ugradnja sigurnosne opreme striktno je regulisana kroz Zakon o privatnom obezbeđenju
            i Zakon o zaštiti podataka o ličnosti (ZZPL). Samim tim postoje jasno definisane
            zakonske odredbe o propisima montaže i održavanja ovakvog tipa opreme.
          </small>
        </div>
      </section>

      <section id="kontakt" className={styles.contactSection}>
        <div>
          <p className={styles.eyebrow}>Prvi razgovor</p>
          <h2>Ostavite kontakt i ukratko ćemo proći kroz potrebe vašeg objekta</h2>
          <p>
            U razgovoru prolazimo kroz tip objekta, način korišćenja, kritične tačke, postojeće
            instalacije i sisteme koji bi imali najviše smisla za vašu situaciju.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="security-name">Ime i prezime</label>
            <input id="security-name" name="name" type="text" autoComplete="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-email">Email</label>
            <input id="security-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-phone">Telefon</label>
            <input id="security-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-system">Interesuje me</label>
            <select id="security-system" name="system" defaultValue="">
              <option value="" disabled>
                Izaberite
              </option>
              <option>Video nadzor</option>
              <option>Alarmni sistem</option>
              <option>Kontrola pristupa</option>
              <option>Video interfon</option>
              <option>Parking sistem</option>
              <option>Kompletno rešenje</option>
              <option>Nisam siguran, potrebna mi je konsultacija</option>
            </select>
          </div>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="security-website">Website</label>
            <input id="security-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <button type="button">Pošaljite upit</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>Tehnička zaštita, sigurnosni sistemi i integrisana rešenja za objekte.</p>
        </div>
        <nav aria-label="Footer navigacija">
          <a href="#sistemi">Sistemi</a>
          <a href="#proces">Proces</a>
          <a href="#oprema">Oprema</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className={styles.footerCta} href="#kontakt">
          Zatražite procenu
        </a>
      </footer>
    </main>
  );
}
