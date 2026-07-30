"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./LeadSuccessModal.module.scss";

type LeadSuccessModalProps = {
  isOpen: boolean;
  title: string;
  text: string;
  closeLabel?: string;
  onClose: () => void;
};

export function LeadSuccessModal({
  isOpen,
  title,
  text,
  closeLabel = "Zatvori",
  onClose,
}: LeadSuccessModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-success-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} type="button" aria-label={closeLabel} onClick={onClose}>
          ×
        </button>
        <span className={styles.statusMark} aria-hidden="true">
          ✓
        </span>
        <p className={styles.eyebrow}>Zahtev je poslat</p>
        <h2 id="lead-success-title">{title}</h2>
        <p>{text}</p>
        <button className={styles.actionButton} type="button" onClick={onClose}>
          {closeLabel}
        </button>
      </div>
    </div>,
    document.body,
  );
}
