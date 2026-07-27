"use client";

import { useState } from "react";
import { LeadSuccessModal } from "@/components/LeadSuccessModal";
import { submitLeadForm } from "@/lib/leadSubmit";
import styles from "./page.module.scss";

type SolarLeadFormProps = {
  content: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  submitLabel: string;
};

export function SolarLeadForm({ content, submitLabel }: SolarLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  return (
    <>
      <form
        className={styles.contactForm}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          setStatus("submitting");

          try {
            await submitLeadForm("solarni-paneli", form);
            form.reset();
            setStatus("success");
          } catch {
            setStatus("error");
          }
        }}
      >
        <div className={styles.formField}>
          <label htmlFor="solar-name">{content.name}</label>
          <input id="solar-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="solar-email">{content.email}</label>
          <input id="solar-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="solar-phone">{content.phone}</label>
          <input id="solar-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="solar-website">{content.website}</label>
          <input id="solar-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button className={styles.primaryButton} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Slanje..." : submitLabel}
        </button>
        {status === "error" && (
          <p className={styles.formStatus} role="alert">
            Slanje trenutno nije uspelo. Pokušajte ponovo ili nas kontaktirajte direktno.
          </p>
        )}
      </form>
      <LeadSuccessModal
        isOpen={status === "success"}
        title="Hvala. Vaš zahtev je poslat."
        text="Kontaktiraćemo vas kako bismo prošli kroz osnovne podatke i predložili sledeće korake za procenu solarnog sistema."
        onClose={() => setStatus("idle")}
      />
    </>
  );
}
