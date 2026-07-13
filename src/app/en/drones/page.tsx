import type { Metadata } from "next";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { englishDronePageContent as content } from "@/content/drones";
import { assetPath } from "@/lib/assetPath";
import { DroneHeader } from "../../profesionalni-dronovi/DroneHeader";
import { HeroCarousel } from "../../profesionalni-dronovi/HeroCarousel";
import { PlatformSpecPanel } from "../../profesionalni-dronovi/PlatformSpecPanel";
import { PlatformVideoModal } from "../../profesionalni-dronovi/PlatformVideoModal";
import styles from "../../profesionalni-dronovi/page.module.scss";

const droneDisplay = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-drone-display",
});

const applicationCardImages = [
  "/drone/applicationCard/appCard_1_1.png",
  "/drone/applicationCard/appCard_2.png",
  "/drone/applicationCard/appCard_3.png",
  "/drone/applicationCard/appCard_4.png",
  "/drone/applicationCard/appCard_5.png",
  "/drone/applicationCard/appCard_6.png",
];

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EnglishDronesPage() {
  return (
    <main className={`${styles.dronePage} ${droneDisplay.variable}`}>
      <DroneHeader locale="en" content={{ nav: content.footer.links, cta: content.hero.primaryCta }} />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>{content.hero.kicker}</p>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.text}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#upit">
              {content.hero.primaryCta}
            </a>
            <a className={styles.secondaryButton} href="#platforme">
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
          <HeroCarousel />
          <div className={styles.telemetry}>
            {content.hero.telemetry.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="primena" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>{content.applications.kicker}</p>
          <h2>{content.applications.title}</h2>
        </div>
        <div className={styles.applicationGrid}>
          {content.applications.cards.map((item, index) => (
            <article className={styles.applicationCard} key={item.title}>
              <div className={styles.applicationCardMedia}>
                <Image
                  src={assetPath(applicationCardImages[index])}
                  alt={item.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <span />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.introSection}>
        <div>
          <p className={styles.kicker}>{content.intro.kicker}</p>
          <h2>{content.intro.title}</h2>
        </div>
        <div className={styles.introText}>
          {content.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <strong>{content.intro.note}</strong>
        </div>
      </section>

      <div className={styles.capabilityStrip} aria-label="Key capabilities">
        {content.capabilities.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section id="platforme" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>{content.platforms.kicker}</p>
          <h2>{content.platforms.title}</h2>
        </div>
        <div className={styles.platformStack}>
          {content.platforms.items.map((platform, index) => (
            <article className={styles.platform} key={platform.label}>
              <div className={styles.platformMain}>
                <p className={styles.kicker}>{platform.label}</p>
                <h3>{platform.title}</h3>
                <p>{platform.text}</p>
                <div className={styles.modelRow}>
                  {platform.models.map((model) => (
                    <span key={model}>{model}</span>
                  ))}
                </div>
              </div>
              <PlatformSpecPanel useCases={platform.useCases} specs={platform.specs} links={platform.links} />
              <div className={`${styles.platformMedia} ${styles[`platformMedia${index + 1}`]}`}>
                <Image
                  className={styles.platformImage}
                  src={assetPath(platform.image)}
                  alt={platform.imageAlt}
                  fill
                  sizes="(max-width: 1060px) 100vw, 32vw"
                />
                <div className={styles.imagePlaceholder} aria-label={platform.imageAlt}>
                  <span className={styles.placeholderIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.placeholderTarget} aria-hidden="true">
                    <span />
                  </div>
                  <div className={styles.placeholderCopy}>
                    <span>PRODUCT VISUAL</span>
                    <strong>{platform.models.join(" / ")}</strong>
                    <small>MISSION PLATFORM</small>
                  </div>
                  <PlatformVideoModal
                    platformTitle={platform.label}
                    videos={platform.videos}
                    buttonLabel="Watch video"
                    closeLabel="Close video"
                    switcherLabel="Video selection"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="poredjenje" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>{content.comparison.kicker}</p>
          <h2>{content.comparison.title}</h2>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {content.comparison.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row) => (
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
          <p className={styles.kicker}>{content.faq.kicker}</p>
          <h2>{content.faq.title}</h2>
        </div>
        <div className={styles.faqGrid}>
          {content.faq.items.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="upit" className={styles.inquirySection}>
        <div className={styles.inquiryCopy}>
          <p className={styles.kicker}>{content.inquiry.kicker}</p>
          <h2>{content.inquiry.title}</h2>
          <p>{content.inquiry.text}</p>
        </div>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="drone-name-en">{content.inquiry.fields.name}</label>
            <input id="drone-name-en" name="name" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-company-en">{content.inquiry.fields.company}</label>
            <input id="drone-company-en" name="company" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-phone-en">{content.inquiry.fields.phone}</label>
            <input id="drone-phone-en" name="phone" type="tel" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-email-en">{content.inquiry.fields.email}</label>
            <input id="drone-email-en" name="email" type="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-application-en">{content.inquiry.fields.application}</label>
            <select id="drone-application-en" name="application" defaultValue="">
              <option value="" disabled>
                {content.inquiry.fields.placeholder}
              </option>
              {content.inquiry.applications.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="drone-platform-en">{content.inquiry.fields.platform}</label>
            <select id="drone-platform-en" name="platform" defaultValue="">
              <option value="" disabled>
                {content.inquiry.fields.placeholder}
              </option>
              {content.inquiry.platforms.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <button type="button">{content.inquiry.submit}</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#primena">{content.footer.links[0]}</a>
          <a href="#platforme">{content.footer.links[1]}</a>
          <a href="#poredjenje">{content.footer.links[2]}</a>
          <a href="#upit">{content.footer.links[3]}</a>
        </nav>
        <a className={styles.footerCta} href="#upit">
          {content.footer.cta}
        </a>
      </footer>
    </main>
  );
}
