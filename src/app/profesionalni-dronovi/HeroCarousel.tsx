"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.scss";

const heroSlides = [
  {
    src: "/drone/hero_dronovi/dron_hero_1.png",
    alt: "Profesionalni dron u tamnom operativnom okruženju",
  },
  {
    src: "/drone/hero_dronovi/dron_hero_2.png",
    alt: "Enterprise dron platforma za industrijske i bezbednosne misije",
  },
  {
    src: "/drone/hero_dronovi/dron_hero_3.png",
    alt: "Profesionalni dron prikazan u tehničkom aerospace stilu",
  },
  {
    src: "/drone/hero_dronovi/dron_hero_5.png",
    alt: "Profesionalni dron prikazan u noćnom operativnom ambijentu",
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
