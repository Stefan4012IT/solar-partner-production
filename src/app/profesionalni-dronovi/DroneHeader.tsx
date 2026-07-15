"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

type DroneHeaderContent = {
  nav: string[];
  cta: string;
};

const defaultContent: DroneHeaderContent = {
  nav: ["Primena", "Platforme", "Poređenje", "Upit"],
  cta: "Zatražite konsultaciju",
};

const mobilePageCopy = {
  sr: {
    sections: "Sekcije",
    otherPages: "Ostala rešenja",
    solar: "Solarni sistemi",
    security: "Sigurnosni sistemi",
    about: "O nama",
  },
  en: {
    sections: "Sections",
    otherPages: "Other solutions",
    solar: "Solar systems",
    security: "Security systems",
    about: "About",
  },
};

export function DroneHeader({
  locale = "sr",
  content = defaultContent,
}: {
  locale?: Locale;
  content?: DroneHeaderContent;
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
  const solutionLinks = [
    { key: "solar" as const, label: mobileCopy.solar },
    { key: "security" as const, label: mobileCopy.security },
    { key: "about" as const, label: mobileCopy.about },
  ];

  return (
    <header
      className={`${styles.header} ${
        isVisible ? styles.headerVisible : styles.headerHidden
      }`}
    >
      <Link className={styles.brand} href={getLocalizedPath("intro", locale)} aria-label="Solar Partner početna">
        <span className={styles.brandMark}>SP</span>
        <span className={styles.brandCopy}>
          <strong>Solar Partner</strong>
          <small>
            <i /> Enterprise systems
          </small>
        </span>
      </Link>
      <nav className={styles.nav} aria-label="Navigacija stranice profesionalnih dronova">
        <a href="#primena">
          <span>01</span> {content.nav[0]}
        </a>
        <a href="#platforme">
          <span>02</span> {content.nav[1]}
        </a>
        <a href="#poredjenje">
          <span>03</span> {content.nav[2]}
        </a>
        <a href="#upit">
          <span>04</span> {content.nav[3]}
        </a>
      </nav>
      <div className={styles.languageSwitch} aria-label="Language switcher">
        <Link className={locale === "sr" ? styles.activeLanguage : ""} href={getLocalizedPath("drones", "sr")}>
          SR
        </Link>
        <Link className={locale === "en" ? styles.activeLanguage : ""} href={getLocalizedPath("drones", "en")}>
          EN
        </Link>
      </div>
      <div className={styles.solutionsDropdown}>
        <button className={styles.solutionsToggle} type="button" aria-haspopup="true">
          {mobileCopy.otherPages}
          <i aria-hidden="true" />
        </button>
        <div className={styles.solutionsMenu}>
          {solutionLinks.map((item) => (
            <Link key={item.key} href={getLocalizedPath(item.key, locale)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="drone-mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="drone-mobile-navigation"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile drone navigation"
      >
        <div className={styles.mobileSectionGroup}>
          <small className={styles.mobileNavLabel}>{mobileCopy.sections}</small>
          <a href="#primena" onClick={closeMenu}>
            <span>01</span> {content.nav[0]}
          </a>
          <a href="#platforme" onClick={closeMenu}>
            <span>02</span> {content.nav[1]}
          </a>
          <a href="#poredjenje" onClick={closeMenu}>
            <span>03</span> {content.nav[2]}
          </a>
          <a href="#upit" onClick={closeMenu}>
            <span>04</span> {content.nav[3]}
          </a>
        </div>
        <div className={styles.mobilePageGroup}>
          <small className={styles.mobileNavLabel}>{mobileCopy.otherPages}</small>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("solar", locale)} onClick={closeMenu}>
            {mobileCopy.solar}
          </Link>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("security", locale)} onClick={closeMenu}>
            {mobileCopy.security}
          </Link>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("about", locale)} onClick={closeMenu}>
            {mobileCopy.about}
          </Link>
        </div>
      </nav>
    </header>
  );
}
