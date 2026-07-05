import type { Metadata } from "next";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import {
  capabilities,
  comparisonRows,
  droneFaq,
  dronePlatforms,
  missionApplications,
} from "@/content/drone";
import { assetPath } from "@/lib/assetPath";
import { DroneHeader } from "./DroneHeader";
import { HeroCarousel } from "./HeroCarousel";
import { PlatformSpecPanel } from "./PlatformSpecPanel";
import { PlatformVideoModal } from "./PlatformVideoModal";
import styles from "./page.module.scss";

const droneDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-drone-display",
});

const applicationCardImages = [
  {
    src: "/drone/applicationCard/appCard_1_1.png",
    alt: "Profesionalni dron u primeni za industrijsku inspekciju",
  },
  {
    src: "/drone/applicationCard/appCard_2.png",
    alt: "Profesionalni dron u operativnoj primeni za nadzor i bezbednost",
  },
  {
    src: "/drone/applicationCard/appCard_3.png",
    alt: "Profesionalni dron u primeni za potragu, spasavanje i termalnu detekciju",
  },
  {
    src: "/drone/applicationCard/appCard_4.png",
    alt: "Profesionalni dron u primeni za mapiranje i nadzor infrastrukture",
  },
  {
    src: "/drone/applicationCard/appCard_5.png",
    alt: "Profesionalni dron u primeni za taktički nadzor i operativnu podršku",
  },
  {
    src: "/drone/applicationCard/appCard_6.png",
    alt: "Profesionalni dron u primeni za hitne intervencije i kontrolu terena",
  },
];

export const metadata: Metadata = {
  title: "Profesionalni dronovi za industriju i bezbednost | Autel Robotics Srbija",
  description:
    "Enterprise dron rešenja za inspekcije, nadzor, termalnu detekciju, potragu i spasavanje. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za Srbiju.",
};

export default function ProfessionalDronesPage() {
  return (
    <main className={`${styles.dronePage} ${droneDisplay.variable}`}>
      <DroneHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>ENTERPRISE UAV SYSTEMS</p>
          <h1>
            Pouzdanost. Preciznost. <span>Kontrola.</span>
          </h1>
          <p>
            Autel Robotics platforme za industrijsku inspekciju, nadzor, termalnu detekciju,
            potragu i spasavanje, dostupne kroz Solar Partner, zvaničnog uvoznika za Srbiju.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#upit">
              Zatražite konsultaciju
            </a>
            <a className={styles.secondaryButton} href="#platforme">
              Pogledajte platforme
            </a>
          </div>
          <div className={styles.trustGrid}>
            <span>Zvanični uvoznik za Srbiju</span>
            <span>Enterprise Autel Robotics platforme</span>
            <span>Termalna i AI detekcija</span>
            <span>Industrija, energetika i bezbednost</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <HeroCarousel />
          <div className={styles.telemetry}>
            <span>THERMAL</span>
            <span>AI DETECTION</span>
            <span>15 KM LINK</span>
            <span>IP PROTECTION</span>
            <span>AUTONOMOUS ROUTES</span>
          </div>
        </div>
      </section>

      <section id="primena" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>MISSION APPLICATIONS</p>
          <h2>Primena u zahtevnim operativnim okruženjima</h2>
        </div>
        <div className={styles.applicationGrid}>
          {missionApplications.map((item, index) => (
            <article className={styles.applicationCard} key={item.title}>
              {applicationCardImages[index] && (
                <div className={styles.applicationCardMedia}>
                  <Image
                    src={assetPath(applicationCardImages[index].src)}
                    alt={applicationCardImages[index].alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
              )}
              <span />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.introSection}>
        <div>
          <p className={styles.kicker}>AUTEL ROBOTICS SERBIA</p>
          <h2>Enterprise platforme za kompleksne misije</h2>
        </div>
        <div className={styles.introText}>
          <p>
            Autel Robotics razvija profesionalna dron rešenja za industrijske, infrastrukturne i
            bezbednosne primene. Za razliku od klasičnih consumer dronova, ove platforme su
            projektovane za pouzdan rad u zahtevnim uslovima.
          </p>
          <p>
            Kombinacija robusne hardverske platforme, naprednih senzora, AI mogućnosti i stabilne
            komunikacije omogućava upotrebu u inspekcijama, patrolnim zadacima, nadzoru i
            upravljanju vanrednim situacijama.
          </p>
          <strong>Solar Partner je zvanični uvoznik Autel Robotics proizvoda za teritoriju Srbije.</strong>
        </div>
      </section>

      <div className={styles.capabilityStrip} aria-label="Ključne mogućnosti">
        {capabilities.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section id="platforme" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>MISSION PLATFORMS</p>
          <h2>Izaberite platformu prema operativnoj potrebi</h2>
        </div>
        <div className={styles.platformStack}>
          {dronePlatforms.map((platform) => (
            <article className={styles.platform} key={platform.id}>
              <div className={styles.platformMain}>
                <p className={styles.kicker}>{platform.label}</p>
                <h3>{platform.title}</h3>
                <p>{platform.text}</p>
                <div className={styles.modelRow}>
                  {platform.models.map((model) => (
                    <span key={model}>{model}</span>
                  ))}
                </div>
                <a className={styles.platformCta} href="#upit">
                  {platform.cta}
                </a>
              </div>
              <PlatformSpecPanel useCases={platform.useCases} specs={platform.specs} links={platform.links} />
              <div className={`${styles.platformMedia} ${styles[`platformMedia${dronePlatforms.indexOf(platform) + 1}`]}`}>
                {platform.image && (
                  <Image
                    className={styles.platformImage}
                    src={assetPath(platform.image)}
                    alt={platform.imageAlt}
                    fill
                    sizes="(max-width: 1060px) 100vw, 32vw"
                  />
                )}
                <div className={styles.imagePlaceholder} aria-label={`Vizuel platforme: ${platform.imageAlt}`}>
                  <span className={styles.placeholderIndex}>
                    {String(dronePlatforms.indexOf(platform) + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.placeholderTarget} aria-hidden="true">
                    <span />
                  </div>
                  <div className={styles.placeholderCopy}>
                    <span>PRODUCT VISUAL</span>
                    <strong>{platform.models.join(" / ")}</strong>
                    <small>{platform.image ? "MISSION PLATFORM" : "IMAGE PLACEHOLDER"}</small>
                  </div>
                  {platform.videos && (
                    <PlatformVideoModal platformTitle={platform.label} videos={platform.videos} />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="poredjenje" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>PLATFORM COMPARISON</p>
          <h2>Brzo poređenje enterprise rešenja</h2>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Platforma</th>
                <th>Tip</th>
                <th>Ključna namena</th>
                <th>Vreme leta</th>
                <th>Zaštita</th>
                <th>Posebne mogućnosti</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>FAQ</p>
          <h2>Operativna pitanja pre izbora platforme</h2>
        </div>
        <div className={styles.faqGrid}>
          {droneFaq.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="upit" className={styles.inquirySection}>
        <div className={styles.inquiryCopy}>
          <p className={styles.kicker}>ENTERPRISE INQUIRY</p>
          <h2>Pošaljite upit za profesionalno dron rešenje</h2>
          <p>
            Opišite operativnu potrebu, tip primene i platformu koja vas zanima. Kontaktiraćemo vas
            kako bismo predložili odgovarajuće Autel Robotics rešenje.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="drone-name">Ime i prezime</label>
            <input id="drone-name" name="name" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-company">Kompanija / institucija</label>
            <input id="drone-company" name="company" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-phone">Telefon</label>
            <input id="drone-phone" name="phone" type="tel" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-email">Email</label>
            <input id="drone-email" name="email" type="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-application">Tip primene</label>
            <select id="drone-application" name="application" defaultValue="">
              <option value="" disabled>
                Izaberite
              </option>
              <option>Industrijska inspekcija</option>
              <option>Solarne elektrane</option>
              <option>Elektro mreža</option>
              <option>Javna bezbednost</option>
              <option>Potraga i spasavanje</option>
              <option>Vanredne situacije</option>
              <option>Distribucija / partnerstvo</option>
              <option>Drugo</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-platform">Interesuje me</label>
            <select id="drone-platform" name="platform" defaultValue="">
              <option value="" disabled>
                Izaberite
              </option>
              <option>EVO Max</option>
              <option>Alpha</option>
              <option>Dragonfish</option>
              <option>EVO Nest</option>
              <option>Nisam siguran, potrebna mi je konsultacija</option>
            </select>
          </div>
          <button type="button">Pošaljite enterprise upit</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>Enterprise dron rešenja za industriju, energetiku, bezbednost i vanredne situacije.</p>
        </div>
        <nav aria-label="Footer navigacija">
          <a href="#primena">Primena</a>
          <a href="#platforme">Platforme</a>
          <a href="#poredjenje">Poređenje</a>
          <a href="#upit">Upit</a>
        </nav>
        <a className={styles.footerCta} href="#upit">
          Zatražite konsultaciju
        </a>
      </footer>
    </main>
  );
}
