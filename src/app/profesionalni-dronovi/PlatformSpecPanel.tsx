"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

type PlatformSpecPanelProps = {
  useCases: string[];
  specs: string[];
  links: {
    label: string;
    url: string;
  }[];
};

export function PlatformSpecPanel({ useCases, specs, links }: PlatformSpecPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1060px)");
    const syncOpenState = () => setIsOpen(!query.matches);

    syncOpenState();
    query.addEventListener("change", syncOpenState);
    return () => query.removeEventListener("change", syncOpenState);
  }, []);

  return (
    <div className={styles.specPanel} data-open={isOpen}>
      <button
        className={styles.specSummary}
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>
          <small>USE CASES</small>
          <strong>{useCases.join(" / ")}</strong>
        </span>
        <i aria-hidden="true" />
      </button>
      <div className={styles.specContent}>
        <ul>
          {specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
        <div className={styles.externalLinks}>
          {links.map((link) => (
            <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
