"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.scss";

const heroSlides = [
  {
    src: "/drone/solar-partner-hero-002.png",
    alt: "Profesionalni Autel dron u operativnom okruženju",
  },
  {
    src: "/drone/enterprise-uav-hero.png",
    alt: "Enterprise UAV platforma za industrijske i bezbednosne misije",
  },
  {
    src: "/drone/solar-partner-intro-section-002.png",
    alt: "Dron platforma prikazana kroz tehnički vizuel",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroCarousel} aria-label="Hero prikaz profesionalnih dronova">
      <div className={styles.heroSlides}>
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            className={index === activeSlide ? styles.heroSlideActive : styles.heroSlide}
            src={assetPath(slide.src)}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1060px) 100vw, 54vw"
          />
        ))}
      </div>
      <div className={styles.heroDots} aria-label="Navigacija hero slajdera">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === activeSlide ? styles.heroDotActive : styles.heroDot}
            aria-label={`Prikaži sliku ${index + 1}`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
