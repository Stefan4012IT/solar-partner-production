"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./FloatingContact.module.scss";

const phoneDisplay = "Broj telefona";
const phoneHref = "#kontakt";
const whatsappHref = "#kontakt";
const viberHref = "#kontakt";

const contactActions = [
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: "whatsapp",
  },
  {
    label: "Viber",
    href: viberHref,
    icon: "viber",
  },
  {
    label: phoneDisplay,
    href: phoneHref,
    icon: "phone",
  },
];

function ContactIcon({ name }: { name: string }) {
  if (name === "phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.6 10.8c1.5 2.9 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.3 21.9 2.1 13.7 2.1 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.7 2.2Z" />
      </svg>
    );
  }

  if (name === "viber") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2.1c5.8 0 9.2 2.6 9.2 8.6 0 4.2-1.5 6.7-4.4 7.9l.4 2.2c.1.7-.6 1.2-1.1.8l-2.8-2.2H12c-5.8 0-9.2-2.6-9.2-8.6S6.2 2.1 12 2.1Zm-3.2 5c-.4.2-.8.6-.9 1.1-.3 1.1.3 3.4 2.2 5.3s4.2 2.5 5.3 2.2c.5-.1.9-.5 1.1-.9l.5-1c.2-.4.1-.8-.3-1l-1.7-.9c-.3-.2-.7-.1-1 .2l-.6.8c-.2.2-.5.3-.8.2-.6-.3-1.2-.7-1.7-1.2s-.9-1.1-1.2-1.7c-.1-.3 0-.6.2-.8l.8-.6c.3-.3.4-.7.2-1l-.9-1.7c-.2-.4-.6-.5-1-.3l-1 .5Z" />
        <path d="M13.4 6.5c1.9.4 3.1 1.7 3.4 3.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M13.3 8.7c.8.2 1.2.7 1.4 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2.2c5.4 0 9.8 4 9.8 9 0 5-4.4 9-9.8 9-1.6 0-3.1-.4-4.4-1l-4.1 1.3 1.4-3.7c-1.7-1.6-2.7-3.5-2.7-5.6 0-5 4.4-9 9.8-9Z" />
      <path d="M8.6 7.9c-.4.2-.7.7-.8 1.2-.2 1 .3 3 2 4.7 1.7 1.7 3.7 2.2 4.7 2 .5-.1.9-.4 1.2-.8l.4-.8c.2-.4 0-.8-.3-1l-1.5-.7c-.3-.2-.7-.1-.9.2l-.5.6c-.2.2-.5.3-.8.1-.5-.2-1-.6-1.4-1-.4-.4-.8-.9-1-1.4-.1-.3-.1-.6.1-.8l.6-.5c.3-.2.4-.6.2-.9L9.9 8c-.2-.3-.6-.5-1-.3l-.3.2Z" />
    </svg>
  );
}

export function FloatingContact() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/intro") {
    return null;
  }

  return (
    <div className={styles.floatingContact}>
      <div className={isOpen ? styles.actionListOpen : styles.actionList}>
        {contactActions.map((action) => (
          <a href={action.href} key={action.label} onClick={() => setIsOpen(false)}>
            <span>
              <ContactIcon name={action.icon} />
            </span>
            {action.label}
          </a>
        ))}
      </div>
      <button
        className={styles.launcher}
        type="button"
        aria-label={isOpen ? "Zatvori brzi kontakt" : "Otvori brzi kontakt"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>SP</span>
      </button>
      <span className={styles.launcherLabel}>Pozovite nas</span>
    </div>
  );
}
