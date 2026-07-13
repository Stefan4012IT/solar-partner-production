"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

type SecurityHeaderContent = {
  small: string;
  nav: string[];
  cta: string;
};

const mobilePageCopy = {
  sr: {
    sections: "Sekcije",
    otherPages: "Ostala rešenja",
    solar: "Solarni sistemi",
    drones: "Dronovi",
    about: "O nama",
  },
  en: {
    sections: "Sections",
    otherPages: "Other solutions",
    solar: "Solar systems",
    drones: "Drones",
    about: "About",
  },
};

export function SecurityHeader({
  locale = "sr",
  content,
}: {
  locale?: Locale;
  content: SecurityHeaderContent;
}) {
  const mobileCopy = mobilePageCopy[locale];
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      setIsVisible(currentScrollY < 24 || isScrollingUp);
      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
      <Link className={styles.brand} href={getLocalizedPath("intro", locale)} aria-label="Solar Partner početna">
        <span className={styles.brandMark}>SP</span>
        <span className={styles.brandCopy}>
          <strong>Solar Partner</strong>
          <small>
            <i /> {content.small}
          </small>
        </span>
      </Link>
      <nav className={styles.nav} aria-label="Navigacija stranice sigurnosnih sistema">
        <a href="#sistemi">
          <span>01</span> {content.nav[0]}
        </a>
        <a href="#proces">
          <span>02</span> {content.nav[1]}
        </a>
        <a href="#oprema">
          <span>03</span> {content.nav[2]}
        </a>
        <a href="#kontakt">
          <span>04</span> {content.nav[3]}
        </a>
      </nav>
      <div className={styles.languageSwitch} aria-label="Language switcher">
        <Link className={locale === "sr" ? styles.activeLanguage : ""} href={getLocalizedPath("security", "sr")}>
          SR
        </Link>
        <Link className={locale === "en" ? styles.activeLanguage : ""} href={getLocalizedPath("security", "en")}>
          EN
        </Link>
      </div>
      <a className={styles.headerCta} href="#kontakt">
        <span>{content.cta}</span>
        <i aria-hidden="true">↗</i>
      </a>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="security-mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="security-mobile-navigation"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile security navigation"
      >
        <div className={styles.mobileSectionGroup}>
          <small className={styles.mobileNavLabel}>{mobileCopy.sections}</small>
          <a href="#sistemi" onClick={closeMenu}>
            <span>01</span> {content.nav[0]}
          </a>
          <a href="#proces" onClick={closeMenu}>
            <span>02</span> {content.nav[1]}
          </a>
          <a href="#oprema" onClick={closeMenu}>
            <span>03</span> {content.nav[2]}
          </a>
          <a href="#kontakt" onClick={closeMenu}>
            <span>04</span> {content.nav[3]}
          </a>
        </div>
        <div className={styles.mobilePageGroup}>
          <small className={styles.mobileNavLabel}>{mobileCopy.otherPages}</small>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("solar", locale)} onClick={closeMenu}>
            {mobileCopy.solar}
          </Link>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("drones", locale)} onClick={closeMenu}>
            {mobileCopy.drones}
          </Link>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("about", locale)} onClick={closeMenu}>
            {mobileCopy.about}
          </Link>
        </div>
      </nav>
    </header>
  );
}
