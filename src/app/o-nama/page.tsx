import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { getAboutContent } from "@/content/about";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const srContent = getAboutContent("sr");

export const metadata: Metadata = {
  title: srContent.metadata.title,
  description: srContent.metadata.description,
};

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
        <a href={`${getLocalizedPath("solar", locale)}#kontakt`}>{content.cta.link}</a>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label="Footer navigacija">
          <a href={getLocalizedPath("solar", locale)}>{content.footer.links[0]}</a>
          <a href={getLocalizedPath("drones", locale)}>{content.footer.links[1]}</a>
          <a href={getLocalizedPath("security", locale)}>{content.footer.links[2]}</a>
          <a href={`${getLocalizedPath("solar", locale)}#kontakt`}>{content.footer.links[3]}</a>
        </nav>
      </footer>
    </main>
  );
}

export default function AboutRoute() {
  return <AboutPage />;
}
