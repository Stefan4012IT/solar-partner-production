"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { Suspense, type CSSProperties } from "react";
import { getSecurityContent } from "@/content/security";
import { assetPath } from "@/lib/assetPath";
import { getLocaleFromValue, getLocalizedPath, type Locale } from "@/lib/i18n";
import { SecurityLeadForm } from "./SecurityLeadForm";
import { SecurityHeader } from "./SecurityHeader";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-security-display",
});

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
        <SecurityLeadForm content={content.contact} />
      </section>

      <footer className={styles.footer}>
        <div>
          <img
            className={styles.footerLogo}
            src={assetPath("/brand/solar-parner-footer-02.svg")}
            alt="Solar Partner"
          />
          <p>{content.footer.text}</p>
          <div className={styles.footerContact}>
            <a href="mailto:office@solarpartner.rs">
              <span>Email</span>
              office@solarpartner.rs
            </a>
            <a href="tel:+381603471739">
              <span>Telefon</span>
              +381 60 3471739
            </a>
            <a href="tel:+381638495979">
              <span>Telefon</span>
              +381 63 8495979
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <nav aria-label="Footer navigacija">
            <span>{locale === "en" ? "Sections" : "Sekcije"}</span>
            <a href="#sistemi">{content.footer.links[0]}</a>
            <a href="#proces">{content.footer.links[1]}</a>
            <a href="#oprema">{content.footer.links[2]}</a>
            <a href="#kontakt">{content.footer.links[3]}</a>
          </nav>
          <nav aria-label="Footer ostala rešenja">
            <span>{locale === "en" ? "Other solutions" : "Ostala rešenja"}</span>
            <a href={getLocalizedPath("solar", locale)}>{locale === "en" ? "Solar systems" : "Solarni sistemi"}</a>
            <a href={getLocalizedPath("drones", locale)}>{locale === "en" ? "Drones" : "Dronovi"}</a>
            <a href={getLocalizedPath("about", locale)}>{locale === "en" ? "About" : "O nama"}</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default function SecuritySystemsRoute() {
  return (
    <Suspense fallback={null}>
      <SecuritySystemsRouteContent />
    </Suspense>
  );
}

function SecuritySystemsRouteContent() {
  const searchParams = useSearchParams();
  return <SecuritySystemsPage locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
