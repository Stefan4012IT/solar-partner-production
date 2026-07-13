"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

export function SecurityHeader() {
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
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
      <Link className={styles.brand} href="/" aria-label="Solar Partner početna">
        <span className={styles.brandMark}>SP</span>
        <span className={styles.brandCopy}>
          <strong>Solar Partner</strong>
          <small>
            <i /> Security systems
          </small>
        </span>
      </Link>
      <nav className={styles.nav} aria-label="Navigacija stranice sigurnosnih sistema">
        <a href="#sistemi">
          <span>01</span> Sistemi
        </a>
        <a href="#proces">
          <span>02</span> Proces
        </a>
        <a href="#oprema">
          <span>03</span> Oprema
        </a>
        <a href="#kontakt">
          <span>04</span> Kontakt
        </a>
      </nav>
      <a className={styles.headerCta} href="#kontakt">
        <span>Zatražite procenu</span>
        <i aria-hidden="true">↗</i>
      </a>
    </header>
  );
}
