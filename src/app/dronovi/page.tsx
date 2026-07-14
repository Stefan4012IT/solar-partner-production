"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { Suspense } from "react";
import { getDronePageContent } from "@/content/drones";
import { assetPath } from "@/lib/assetPath";
import { getLocaleFromValue, type Locale } from "@/lib/i18n";
import { DroneInquiryForm } from "../profesionalni-dronovi/DroneInquiryForm";
import { DroneHeader } from "../profesionalni-dronovi/DroneHeader";
import { HeroCarousel } from "../profesionalni-dronovi/HeroCarousel";
import { PlatformInquiryLink } from "../profesionalni-dronovi/PlatformInquiryLink";
import { PlatformSpecPanel } from "../profesionalni-dronovi/PlatformSpecPanel";
import { PlatformVideoModal } from "../profesionalni-dronovi/PlatformVideoModal";
import styles from "../profesionalni-dronovi/page.module.scss";

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

export function ProfessionalDronesPage({ locale = "sr" }: { locale?: Locale } = {}) {
  const content = getDronePageContent(locale);
  const platformInquiryLabels: Record<string, string> = content.platformInquiryLabels;

  return (
    <main className={`${styles.dronePage} ${droneDisplay.variable}`}>
      <DroneHeader locale={locale} content={{ nav: content.footer.links, cta: content.hero.primaryCta }} />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>{content.hero.kicker}</p>
          <h1>{content.hero.title.replace(content.hero.titleAccent, "")}<span>{content.hero.titleAccent}</span></h1>
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

      <div className={styles.capabilityStrip} aria-label="Ključne mogućnosti">
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
                <PlatformInquiryLink platform={platformInquiryLabels[platform.id] ?? platform.models[0]}>
                  {platform.cta}
                </PlatformInquiryLink>
              </div>
              <PlatformSpecPanel useCases={platform.useCases} specs={platform.specs} links={platform.links} />
              <div className={`${styles.platformMedia} ${styles[`platformMedia${index + 1}`]}`}>
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
                    {String(index + 1).padStart(2, "0")}
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
                    <PlatformVideoModal
                      platformTitle={platform.label}
                      videos={platform.videos}
                      buttonLabel={content.videoLabels.button}
                      closeLabel={content.videoLabels.close}
                      switcherLabel={content.videoLabels.switcher}
                    />
                  )}
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
        <DroneInquiryForm content={content.inquiry} />
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label="Footer navigacija">
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

export default function ProfessionalDronesRoute() {
  return (
    <Suspense fallback={null}>
      <ProfessionalDronesRouteContent />
    </Suspense>
  );
}

function ProfessionalDronesRouteContent() {
  const searchParams = useSearchParams();
  return <ProfessionalDronesPage locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
