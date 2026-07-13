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

export function DroneHeader({
  locale = "sr",
  content = defaultContent,
}: {
  locale?: Locale;
  content?: DroneHeaderContent;
}) {
  const [isVisible, setIsVisible] = useState(true);
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
      <a className={styles.headerCta} href="#upit">
        <span>{content.cta}</span>
        <i aria-hidden="true">↗</i>
      </a>
    </header>
  );
}
