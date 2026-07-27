"use client";

import { useSearchParams } from "next/navigation";
import { Red_Hat_Display } from "next/font/google";
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { getAboutContent } from "@/content/about";
import { assetPath } from "@/lib/assetPath";
import { getLocaleFromValue, getLocalizedHref, type Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function AboutPage({ locale = "sr" }: { locale?: Locale } = {}) {
  const content = getAboutContent(locale);

  return (
    <main className={`${redHatDisplay.className} ${styles.page}`}>
      <SiteHeader locale={locale} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.text}</p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div>
          <p className={styles.eyebrow}>{content.intro.eyebrow}</p>
          <h2>{content.intro.title}</h2>
        </div>
        <div className={styles.introText}>
          {content.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.areasSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.areas.eyebrow}</p>
          <h2>{content.areas.title}</h2>
        </div>
        <div className={styles.areaGrid}>
          {content.areas.items.map((area, index) => (
            <article className={styles.areaCard} key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div>
          <p className={styles.eyebrow}>{content.principles.eyebrow}</p>
          <h2>{content.principles.title}</h2>
          <p>{content.principles.text}</p>
        </div>
        <div className={styles.principleList}>
          {content.principles.items.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <p className={styles.eyebrow}>{content.cta.eyebrow}</p>
        <h2>{content.cta.title}</h2>
        <p>{content.cta.text}</p>
        <a href="mailto:office@solarpartner.rs">{content.cta.link}</a>
      </section>

      <footer className={styles.footer}>
        <div>
          <img
            className={styles.footerLogo}
            src={assetPath("/brand/solar-partner-footer-01.svg")}
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
          <nav aria-label="Footer ostala rešenja">
            <span>{locale === "en" ? "Other solutions" : "Ostala rešenja"}</span>
            <a href={getLocalizedHref("solar", locale)}>{content.footer.links[0]}</a>
            <a href={getLocalizedHref("drones", locale)}>{content.footer.links[1]}</a>
            <a href={getLocalizedHref("security", locale)}>{content.footer.links[2]}</a>
            <a href="mailto:office@solarpartner.rs">{content.footer.links[3]}</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default function AboutRoute() {
  return (
    <Suspense fallback={null}>
      <AboutRouteContent />
    </Suspense>
  );
}

function AboutRouteContent() {
  const searchParams = useSearchParams();
  return <AboutPage locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
