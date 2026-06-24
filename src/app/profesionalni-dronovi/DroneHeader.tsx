"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

export function DroneHeader() {
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
      <Link className={styles.brand} href="/" aria-label="Solar Partner početna">
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
          <span>01</span> Primena
        </a>
        <a href="#platforme">
          <span>02</span> Platforme
        </a>
        <a href="#poredjenje">
          <span>03</span> Poređenje
        </a>
        <a href="#upit">
          <span>04</span> Upit
        </a>
      </nav>
      <a className={styles.headerCta} href="#upit">
        <span>Zatražite konsultaciju</span>
        <i aria-hidden="true">↗</i>
      </a>
    </header>
  );
}
