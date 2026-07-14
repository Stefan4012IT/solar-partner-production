"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";
import {
  getLocaleFromValue,
  getLocalizedPath,
  getRouteKey,
  type Locale,
  withHash,
} from "@/lib/i18n";
import styles from "./SiteHeader.module.scss";

export function SiteHeader({ locale }: { locale?: Locale } = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = locale ?? getLocaleFromValue(searchParams.get("lang"));
  const routeKey = getRouteKey(pathname);
  const copy = siteContent[currentLocale];
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const sectionHref = (hash: string) => withHash(getLocalizedPath("solar", currentLocale), hash);
  const languageHref = (nextLocale: Locale) => getLocalizedPath(routeKey, nextLocale);

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
      <Link className={styles.brand} href={getLocalizedPath("intro", currentLocale)} aria-label="Solar Partner početna">
        <span className={styles.brandMark}>SP</span>
        <span>{copy.brand}</span>
      </Link>
      <nav className={styles.nav} aria-label="Glavna navigacija">
        <a href={sectionHref("#resenja")}>{copy.nav.solutions}</a>
        <a href={sectionHref("#proces")}>{copy.nav.process}</a>
        <a href={sectionHref("#projekti")}>{copy.nav.projects}</a>
        <Link href={getLocalizedPath("drones", currentLocale)}>{copy.nav.drones}</Link>
        <Link href={getLocalizedPath("about", currentLocale)}>{copy.nav.about}</Link>
        <a href={sectionHref("#kontakt")}>{copy.nav.contact}</a>
      </nav>
      <div className={styles.languageSwitch} aria-label="Language switcher">
        <Link className={currentLocale === "sr" ? styles.activeLanguage : ""} href={languageHref("sr")}>
          SR
        </Link>
        <Link className={currentLocale === "en" ? styles.activeLanguage : ""} href={languageHref("en")}>
          EN
        </Link>
      </div>
      <a className={styles.headerCta} href={sectionHref("#kontakt")}>
        {copy.cta.assessment}
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
        <div className={styles.mobileSectionGroup}>
          <span className={styles.mobileNavLabel}>{copy.nav.sections}</span>
          <a href={sectionHref("#resenja")} onClick={closeMenu}>
            {copy.nav.solutions}
          </a>
          <a href={sectionHref("#obim-rada")} onClick={closeMenu}>
            {copy.nav.scope}
          </a>
          <a href={sectionHref("#proces")} onClick={closeMenu}>
            {copy.nav.process}
          </a>
          <a href={sectionHref("#projekti")} onClick={closeMenu}>
            {copy.nav.projects}
          </a>
          <a href={sectionHref("#kontakt")} onClick={closeMenu}>
            {copy.nav.contact}
          </a>
        </div>
        <div className={styles.mobilePageGroup}>
          <span className={styles.mobileNavLabel}>{copy.nav.otherPages}</span>
          {routeKey !== "solar" && (
            <Link className={styles.mobilePageLink} href={getLocalizedPath("solar", currentLocale)} onClick={closeMenu}>
              {copy.nav.solar}
            </Link>
          )}
          <Link className={styles.mobilePageLink} href={getLocalizedPath("drones", currentLocale)} onClick={closeMenu}>
            {copy.nav.drones}
          </Link>
          <Link className={styles.mobilePageLink} href={getLocalizedPath("security", currentLocale)} onClick={closeMenu}>
            {copy.nav.security}
          </Link>
          {routeKey !== "about" && (
            <Link className={styles.mobilePageLink} href={getLocalizedPath("about", currentLocale)} onClick={closeMenu}>
              {copy.nav.about}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
