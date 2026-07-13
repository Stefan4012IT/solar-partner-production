"use client";

import Link from "next/link";
import { Red_Hat_Display } from "next/font/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getIntroContent } from "@/content/intro";
import { assetPath } from "@/lib/assetPath";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import styles from "./page.module.scss";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function IntroExperience({ locale = "sr" }: { locale?: Locale } = {}) {
  const scenes = getIntroContent(locale).scenes;
  const pageRef = useRef<HTMLElement>(null);
  const snapTimer = useRef<number>(0);
  const touchStartY = useRef(0);
  const touchDeltaY = useRef(0);
  const lastLightNavigationTime = useRef(0);
  const [virtualPosition, setVirtualPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updatePosition = useCallback((nextPosition: number) => {
    const rawIndex = Math.round(nextPosition);
    const nextIndex = ((rawIndex % scenes.length) + scenes.length) % scenes.length;
    const nextTransitionProgress = Math.min(1, Math.abs(nextPosition - rawIndex) * 2);

    setVirtualPosition(nextPosition);
    setActiveIndex(nextIndex);
    setTransitionProgress(nextTransitionProgress);
  }, []);

  const scheduleSnap = useCallback(
    (position: number) => {
      const distanceToFocus = Math.abs(position - Math.round(position));

      window.clearTimeout(snapTimer.current);
      snapTimer.current = window.setTimeout(() => {
        updatePosition(Math.round(position));
      }, distanceToFocus < 0.14 ? 80 : 180);
    },
    [updatePosition],
  );

  const moveToAdjacentScene = useCallback(
    (direction: number) => {
      const now = window.performance.now();

      if (now - lastLightNavigationTime.current < 520) {
        return;
      }

      lastLightNavigationTime.current = now;
      setVirtualPosition((current) => {
        const next = Math.round(current) + direction;

        updatePosition(next);

        return next;
      });
    },
    [updatePosition],
  );

  useEffect(() => {
    const shouldUseLightNavigation = () =>
      window.matchMedia("(max-width: 980px), (prefers-reduced-motion: reduce)").matches;

    const moveBy = (delta: number) => {
      setVirtualPosition((current) => {
        const next = current + delta;
        const rawIndex = Math.round(next);
        const nextIndex = ((rawIndex % scenes.length) + scenes.length) % scenes.length;
        const nextTransitionProgress = Math.min(1, Math.abs(next - rawIndex) * 2);

        setActiveIndex(nextIndex);
        setTransitionProgress(nextTransitionProgress);
        scheduleSnap(next);

        return next;
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (shouldUseLightNavigation()) {
        if (Math.abs(event.deltaY) > 18) {
          event.preventDefault();
          moveToAdjacentScene(event.deltaY > 0 ? 1 : -1);
        }

        return;
      }

      event.preventDefault();
      moveBy(event.deltaY / 760);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? 0;
      touchDeltaY.current = 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (shouldUseLightNavigation()) {
        const nextY = event.touches[0]?.clientY ?? touchStartY.current;

        touchDeltaY.current = touchStartY.current - nextY;
        event.preventDefault();

        return;
      }

      const nextY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - nextY;

      event.preventDefault();
      touchStartY.current = nextY;
      moveBy(delta / 440);
    };

    const onTouchEnd = () => {
      if (!shouldUseLightNavigation()) {
        return;
      }

      if (Math.abs(touchDeltaY.current) > 46) {
        moveToAdjacentScene(touchDeltaY.current > 0 ? 1 : -1);
      }

      touchDeltaY.current = 0;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.clearTimeout(snapTimer.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [moveToAdjacentScene, scheduleSnap]);

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

  const pageStyle = useMemo(
    () =>
      ({
        "--loop-progress": virtualPosition,
        "--active-index": activeIndex,
        "--transition-progress": transitionProgress,
      }) as React.CSSProperties,
    [activeIndex, transitionProgress, virtualPosition],
  );

  const closeMenu = () => setIsMenuOpen(false);
  const loopPosition = ((virtualPosition % scenes.length) + scenes.length) % scenes.length;

  const getDistance = (index: number) => {
    let distance = index - loopPosition;

    if (distance > scenes.length / 2) {
      distance -= scenes.length;
    }

    if (distance < -scenes.length / 2) {
      distance += scenes.length;
    }

    return distance;
  };

  const goToScene = (index: number) => {
    const currentCycle = Math.round((virtualPosition - loopPosition) / scenes.length);
    updatePosition(currentCycle * scenes.length + index);
  };

  return (
    <main ref={pageRef} className={`${redHatDisplay.className} ${styles.introPage}`} style={pageStyle}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Solar Partner početna">
          <span>SP</span>
          <strong>Solar Partner</strong>
        </Link>
        <nav className={styles.headerNav} aria-label="Intro navigacija">
          {scenes.map((scene, index) => (
            <Link key={scene.label} href={scene.href} className={activeIndex === index ? styles.activeNavItem : ""}>
              {scene.label}
            </Link>
          ))}
        </nav>
        <div className={styles.languageSwitch} aria-label="Language switcher">
          <Link className={locale === "sr" ? styles.activeLanguage : ""} href={getLocalizedPath("intro", "sr")}>
            SR
          </Link>
          <Link className={locale === "en" ? styles.activeLanguage : ""} href={getLocalizedPath("intro", "en")}>
            EN
          </Link>
        </div>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={isMenuOpen}
          aria-controls="intro-mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={styles.quickNav} aria-label="Brzi izbor oblasti">
        {scenes.map((scene, index) => (
          <a
            key={scene.label}
            href={`#intro-scene-${index + 1}`}
            className={activeIndex === index ? styles.activeQuickNavItem : ""}
            aria-label={scene.label}
            onClick={(event) => {
              event.preventDefault();
              goToScene(index);
            }}
          >
            <span aria-hidden="true" />
            <strong>{scene.label}</strong>
          </a>
        ))}
      </nav>

      <nav
        id="intro-mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobilni intro meni"
      >
        {scenes.map((scene) => (
          <Link key={scene.label} href={scene.href} onClick={closeMenu}>
            <span aria-hidden="true" />
            {scene.label}
          </Link>
        ))}
        <div className={styles.mobileLanguageSwitch} aria-label="Language switcher">
          <Link className={locale === "sr" ? styles.activeLanguage : ""} href={getLocalizedPath("intro", "sr")} onClick={closeMenu}>
            SR
          </Link>
          <Link className={locale === "en" ? styles.activeLanguage : ""} href={getLocalizedPath("intro", "en")} onClick={closeMenu}>
            EN
          </Link>
        </div>
      </nav>

      <div className={styles.stage}>
        <div className={styles.reel}>
          {scenes.map((scene, index) => {
            const distance = getDistance(index);
            const absDistance = Math.min(2, Math.abs(distance));
            const isActive = activeIndex === index;

            return (
            <div
              className={`${styles.mediaPanel} ${styles[scene.tone]} ${isActive ? styles.activePanel : ""}`}
              key={scene.label}
              aria-hidden={!isActive}
              style={
                {
                  "--panel-distance": distance,
                  "--panel-abs-distance": absDistance,
                  "--panel-poster": `url(${assetPath(scene.poster)})`,
                  "--panel-mobile-poster": `url(${assetPath(scene.mobilePoster ?? scene.poster)})`,
                } as React.CSSProperties
              }
            >
              <div className={styles.videoSurface}>
                <video
                  poster={assetPath(scene.poster)}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${scene.label} video`}
                />
                <span className={styles.motionLayer} />
                <span className={styles.scanline} />
              </div>
              <div className={styles.panelCopy}>
                <p>{scene.eyebrow}</p>
                <h1>{scene.title}</h1>
                <span>{scene.text}</span>
                <Link className={styles.primaryButton} href={scene.href}>
                  {scene.cta}
                </Link>
              </div>
              <div className={styles.panelMeta}>
                <span>{scene.eyebrow}</span>
                <strong>{scene.label}</strong>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sceneAnchors} aria-hidden="true">
        {scenes.map((scene, index) => (
          <span id={`intro-scene-${index + 1}`} key={scene.label} />
        ))}
      </div>
    </main>
  );
}
