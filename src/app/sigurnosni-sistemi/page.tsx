import type { Metadata } from "next";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import type { CSSProperties } from "react";
import { getSecurityContent } from "@/content/security";
import { assetPath } from "@/lib/assetPath";
import type { Locale } from "@/lib/i18n";
import { SecurityHeader } from "./SecurityHeader";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-security-display",
});

const srContent = getSecurityContent("sr");

export const metadata: Metadata = {
  title: srContent.metadata.title,
  description: srContent.metadata.description,
};

export function SecuritySystemsPage({ locale = "sr" }: { locale?: Locale } = {}) {
  const content = getSecurityContent(locale);

  return (
    <main className={`${redHatDisplay.className} ${styles.page}`}>
      <SecurityHeader locale={locale} content={content.header} />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.text}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#kontakt">
              {content.hero.primaryCta}
            </a>
            <a className={styles.secondaryButton} href="#sistemi">
              {content.hero.secondaryCta}
            </a>
          </div>
          <div className={styles.trustGrid}>
            {content.hero.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={assetPath("/security/security_hero_001.png")}
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
          />
        </div>
      </section>

      <section id="sistemi" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.systemsSection.eyebrow}</p>
          <h2>{content.systemsSection.title}</h2>
        </div>
        <div className={styles.systemGrid}>
          {content.systems.map((system, index) => (
            <article className={styles.systemCard} key={system.title}>
              <div className={styles.systemCardMedia} aria-hidden="true">
                {system.image && (
                  <Image
                    src={assetPath(system.image)}
                    alt={system.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                )}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span />
              <h3>{system.title}</h3>
              <p>{system.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.analyticsSection}
        style={
          {
            "--analytics-bg": `url(${assetPath("/security/analyticsSection.png")})`,
          } as CSSProperties
        }
      >
        <div>
          <p className={styles.eyebrow}>{content.analytics.eyebrow}</p>
          <h2>{content.analytics.title}</h2>
        </div>
        <div className={styles.analyticsText}>
          {content.analytics.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="proces" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.processSection.eyebrow}</p>
          <h2>{content.processSection.title}</h2>
        </div>
        <div className={styles.processGrid}>
          {content.processSteps.map((step, index) => (
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
          <p className={styles.eyebrow}>{content.equipment.eyebrow}</p>
          <h2>{content.equipment.title}</h2>
          <p>{content.equipment.text}</p>
          <strong>{content.equipment.note}</strong>
        </div>
        <div className={styles.systemList}>
          {content.equipment.list.map((item, index) => (
            <span key={item}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.complianceSection}>
        <div>
          <p className={styles.eyebrow}>{content.compliance.eyebrow}</p>
          <h2>{content.compliance.title}</h2>
        </div>
        <div className={styles.complianceCopy}>
          <p>{content.compliance.text}</p>
          <small>{content.compliance.note}</small>
        </div>
      </section>

      <section id="kontakt" className={styles.contactSection}>
        <div>
          <p className={styles.eyebrow}>{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.text}</p>
        </div>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="security-name">{content.contact.fields.name}</label>
            <input id="security-name" name="name" type="text" autoComplete="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-email">{content.contact.fields.email}</label>
            <input id="security-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-phone">{content.contact.fields.phone}</label>
            <input id="security-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className={styles.field}>
            <label htmlFor="security-system">{content.contact.fields.interest}</label>
            <select id="security-system" name="system" defaultValue="">
              <option value="" disabled>
                {content.contact.fields.placeholder}
              </option>
              {content.contact.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="security-website">{content.contact.fields.website}</label>
            <input id="security-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <button type="button">{content.contact.submit}</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label="Footer navigacija">
          <a href="#sistemi">{content.footer.links[0]}</a>
          <a href="#proces">{content.footer.links[1]}</a>
          <a href="#oprema">{content.footer.links[2]}</a>
          <a href="#kontakt">{content.footer.links[3]}</a>
        </nav>
        <a className={styles.footerCta} href="#kontakt">
          {content.footer.cta}
        </a>
      </footer>
    </main>
  );
}

export default function SecuritySystemsRoute() {
  return <SecuritySystemsPage />;
}
