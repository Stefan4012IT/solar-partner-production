"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
      <Link className={styles.brand} href="/" aria-label="Solar Partner početna">
        <span className={styles.brandMark}>SP</span>
        <span>Solar Partner</span>
      </Link>
      <nav className={styles.nav} aria-label="Glavna navigacija">
        <a href="#resenja">Rešenja</a>
        <a href="#proces">Proces</a>
        <a href="#projekti">Projekti</a>
        <Link href="/dronovi">Dronovi</Link>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a className={styles.headerCta} href="#kontakt">
        Zatražite procenu
      </a>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Zatvori navigaciju" : "Otvori navigaciju"}
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobilna navigacija"
      >
        <a href="#resenja" onClick={closeMenu}>
          Rešenja
        </a>
        <a href="#obim-rada" onClick={closeMenu}>
          Obim rada
        </a>
        <a href="#proces" onClick={closeMenu}>
          Proces
        </a>
        <a href="#projekti" onClick={closeMenu}>
          Projekti
        </a>
        <Link href="/dronovi" onClick={closeMenu}>
          Dronovi
        </Link>
        <a href="#kontakt" onClick={closeMenu}>
          Kontakt
        </a>
      </nav>
    </header>
  );
}
