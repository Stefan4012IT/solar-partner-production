import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  capabilities,
  comparisonRows,
  droneFaq,
  dronePlatforms,
  missionApplications,
} from "@/content/drone";
import styles from "./page.module.scss";

const assetPath = (path: string) =>
  `${process.env.GITHUB_PAGES === "true" ? "/solar-partner" : ""}${path}`;

export const metadata: Metadata = {
  title: "Profesionalni dronovi za industriju i bezbednost | Autel Robotics Srbija",
  description:
    "Enterprise dron rešenja za inspekcije, nadzor, termalnu detekciju, potragu i spasavanje. Solar Partner je zvanični uvoznik Autel Robotics proizvoda za Srbiju.",
};

export default function ProfessionalDronesPage() {
  return (
    <main className={styles.dronePage}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Solar Partner početna">
          <span>SP</span>
          <strong>Solar Partner</strong>
        </Link>
        <nav className={styles.nav} aria-label="Navigacija stranice profesionalnih dronova">
          <a href="#primena">Primena</a>
          <a href="#platforme">Platforme</a>
          <a href="#poredjenje">Poređenje</a>
          <a href="#upit">Upit</a>
        </nav>
        <a className={styles.headerCta} href="#upit">
          Zatražite konsultaciju
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>ENTERPRISE UAV SYSTEMS</p>
          <h1>Profesionalni dronovi za misije u kojima je pouzdanost presudna</h1>
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
          <Image
            src={assetPath("/drone/enterprise-uav-hero.png")}
            alt="Enterprise dron platforma za profesionalne inspekcije i nadzor"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
          />
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
          {missionApplications.map((item) => (
            <article className={styles.applicationCard} key={item.title}>
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
              <div className={styles.specPanel}>
                <div>
                  <span>USE CASES</span>
                  <p>{platform.useCases.join(" / ")}</p>
                </div>
                <ul>
                  {platform.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <div className={styles.externalLinks}>
                  {platform.links.map((link) => (
                    <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
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
          <label>
            Ime i prezime
            <input name="name" type="text" />
          </label>
          <label>
            Kompanija / institucija
            <input name="company" type="text" />
          </label>
          <label>
            Telefon
            <input name="phone" type="tel" />
          </label>
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Tip primene
            <select name="application" defaultValue="">
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
            </select>
          </label>
          <label>
            Interesuje me
            <select name="platform" defaultValue="">
              <option value="" disabled>
                Izaberite
              </option>
              <option>EVO Max</option>
              <option>Alpha</option>
              <option>Dragonfish</option>
              <option>EVO Nest</option>
              <option>Nisam siguran, potrebna mi je konsultacija</option>
            </select>
          </label>
          <label className={styles.fullField}>
            Kratak opis potrebe
            <textarea name="message" rows={5} />
          </label>
          <button type="button">Pošaljite enterprise upit</button>
        </form>
      </section>
    </main>
  );
}
