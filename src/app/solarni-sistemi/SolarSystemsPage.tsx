import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { clientTypes, equipment, faqs, processSteps, projects, services } from "@/content/solar";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function SolarSystemsPage() {
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
                <Image
                  src={assetPath(item.image)}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
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
                  src={assetPath(project.image)}
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
          <h2>Ostavite kontakt, a zatim zajedno prolazimo kroz najbolje opcije za vaš objekat</h2>
          <p>
            U prvom razgovoru prolazimo kroz vašu trenutnu potrošnju, račune za struju, tip
            objekta i uslove na lokaciji. Na osnovu toga možemo realno proceniti da li solarni
            sistem ima smisla, koja snaga bi bila odgovarajuća i koji su sledeći koraci.
          </p>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formField}>
            <label htmlFor="solar-name">Ime i prezime</label>
            <input id="solar-name" name="name" type="text" autoComplete="name" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="solar-email">Email</label>
            <input id="solar-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="solar-phone">Telefon</label>
            <input id="solar-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="solar-website">Website</label>
            <input
              id="solar-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button className={styles.primaryButton} type="button">
            Pošaljite zahtev
          </button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>Solarna rešenja za kuće, firme i objekte kojima je potrebna jasna tehnička procena.</p>
        </div>
        <nav aria-label="Footer navigacija">
          <a href="#resenja">Rešenja</a>
          <a href="#proces">Proces</a>
          <a href="#projekti">Projekti</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </footer>
    </main>
  );
}
