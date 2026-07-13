import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { getSolarContent } from "@/content/solar";
import { assetPath } from "@/lib/assetPath";
import type { Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function SolarSystemsPage({ locale = "sr" }: { locale?: Locale } = {}) {
  const content = getSolarContent(locale);

  return (
    <main className={`${redHatDisplay.className} ${styles.page}`}>
      <SiteHeader locale={locale} />

      <section id="top" className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className={styles.lead}>{content.hero.lead}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#kontakt">
              {content.hero.primaryCta}
            </a>
            <a className={styles.secondaryButton} href="#proces">
              {content.hero.secondaryCta}
            </a>
          </div>
          <div className={styles.trustPoints} aria-label="Ključne prednosti">
            {content.hero.trustPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={assetPath("/solar-partne-hero--000.png")}
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="resenja" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.sections.clientTypes.eyebrow}</p>
          <h2>{content.sections.clientTypes.title}</h2>
        </div>
        <div className={styles.cardGrid}>
          {content.clientTypes.map((item) => (
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
              <p className={styles.eyebrow}>{content.sections.scope.eyebrow}</p>
              <h2>{content.sections.scope.title}</h2>
              <p>{content.sections.scope.text}</p>
            </div>
            <div className={styles.serviceGrid}>
              {content.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="proces" className={`${styles.section} ${styles.processSection}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{content.sections.process.eyebrow}</p>
            <h2>{content.sections.process.title}</h2>
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
      </div>

      <section id="projekti" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.sections.projects.eyebrow}</p>
          <h2>{content.sections.projects.title}</h2>
        </div>
        <div className={styles.projectGrid}>
          {content.projects.map((project) => (
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
            <p className={styles.eyebrow}>{content.sections.equipment.eyebrow}</p>
            <h2>{content.sections.equipment.title}</h2>
            <p>{content.sections.equipment.text}</p>
          </div>
          <div className={styles.equipmentList}>
            {content.equipment.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="analiza" className={`${styles.section} ${styles.reasonSection}`}>
        <div className={styles.reasonContent}>
          <div>
            <p className={styles.eyebrow}>{content.sections.analysis.eyebrow}</p>
            <h2>{content.sections.analysis.title}</h2>
            <p>{content.sections.analysis.text}</p>
            <div className={styles.analysisPoints}>
              {content.sections.analysis.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
          <div className={styles.analysisPanel} aria-label={content.sections.analysis.title}>
            <div className={styles.analysisHeader}>
              <span>{content.sections.analysis.panel.label}</span>
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
                {content.sections.analysis.panel.consumption}
                <strong>{content.sections.analysis.panel.consumptionValue}</strong>
              </span>
              <span>
                {content.sections.analysis.panel.roof}
                <strong>{content.sections.analysis.panel.roofValue}</strong>
              </span>
              <span>
                {content.sections.analysis.panel.system}
                <strong>{content.sections.analysis.panel.systemValue}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.sections.faq.eyebrow}</p>
          <h2>{content.sections.faq.title}</h2>
        </div>
        <div className={styles.faqGrid}>
          {content.faqs.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className={styles.ctaSection}>
        <div>
          <p className={styles.eyebrow}>{content.sections.contact.eyebrow}</p>
          <h2>{content.sections.contact.title}</h2>
          <p>{content.sections.contact.text}</p>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formField}>
            <label htmlFor="solar-name">{content.form.name}</label>
            <input id="solar-name" name="name" type="text" autoComplete="name" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="solar-email">{content.form.email}</label>
            <input id="solar-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="solar-phone">{content.form.phone}</label>
            <input id="solar-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="solar-website">{content.form.website}</label>
            <input
              id="solar-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button className={styles.primaryButton} type="button">
            {content.sections.contact.submit}
          </button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Solar Partner</strong>
          <p>{content.footer.text}</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#resenja">{content.footer.links.solutions}</a>
          <a href="#proces">{content.footer.links.process}</a>
          <a href="#projekti">{content.footer.links.projects}</a>
          <a href="#faq">{content.footer.links.faq}</a>
          <a href="#kontakt">{content.footer.links.contact}</a>
        </nav>
      </footer>
    </main>
  );
}
