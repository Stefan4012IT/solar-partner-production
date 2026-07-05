"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./page.module.scss";

type PlatformVideo = {
  title: string;
  url: string;
};

type PlatformVideoModalProps = {
  platformTitle: string;
  videos: PlatformVideo[];
};

function getYoutubeEmbedUrl(url: string) {
  const parsedUrl = new URL(url);
  const id = parsedUrl.hostname.includes("youtu.be")
    ? parsedUrl.pathname.replace("/", "")
    : parsedUrl.searchParams.get("v");

  return id ? `https://www.youtube.com/embed/${id}` : url;
}

export function PlatformVideoModal({ platformTitle, videos }: PlatformVideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const selectedVideo = videos[activeVideo] ?? videos[0];
  const embedUrl = useMemo(() => (selectedVideo ? getYoutubeEmbedUrl(selectedVideo.url) : ""), [selectedVideo]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  if (!selectedVideo) {
    return null;
  }

  return (
    <>
      <button className={styles.videoButton} type="button" onClick={() => setIsOpen(true)}>
        <span aria-hidden="true" />
        Pogledaj video
      </button>

      {isOpen &&
        createPortal(
        <div className={styles.videoModal} role="dialog" aria-modal="true" aria-label={`Video: ${platformTitle}`}>
          <button className={styles.videoBackdrop} type="button" aria-label="Zatvori video" onClick={() => setIsOpen(false)} />
          <div className={styles.videoDialog}>
            <div className={styles.videoDialogHeader}>
              <div>
                <span>MISSION VIDEO</span>
                <strong>{platformTitle}</strong>
              </div>
              <button type="button" aria-label="Zatvori video" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className={styles.videoFrame}>
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {videos.length > 1 && (
              <div className={styles.videoSwitcher} aria-label="Izbor videa">
                {videos.map((video, index) => (
                  <button
                    key={video.url}
                    type="button"
                    className={index === activeVideo ? styles.videoSwitchActive : styles.videoSwitch}
                    aria-pressed={index === activeVideo}
                    onClick={() => setActiveVideo(index)}
                  >
                    {String(index + 1).padStart(2, "0")}
                    <span>{video.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
