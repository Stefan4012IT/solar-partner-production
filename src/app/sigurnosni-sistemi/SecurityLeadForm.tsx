"use client";

import { useState } from "react";
import { submitLeadForm } from "@/lib/leadSubmit";
import styles from "./page.module.scss";

type SecurityLeadFormProps = {
  content: {
    fields: {
      name: string;
      email: string;
      phone: string;
      interest: string;
      placeholder: string;
      website: string;
    };
    options: string[];
    submit: string;
  };
};

export function SecurityLeadForm({ content }: SecurityLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  return (
    <form
      className={styles.form}
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("submitting");

        try {
          await submitLeadForm("sigurnosni-sistemi", form);
          form.reset();
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
    >
      <div className={styles.field}>
        <label htmlFor="security-name">{content.fields.name}</label>
        <input id="security-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="security-email">{content.fields.email}</label>
        <input id="security-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="security-phone">{content.fields.phone}</label>
        <input id="security-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="security-system">{content.fields.interest}</label>
        <select id="security-system" name="system" defaultValue="">
          <option value="" disabled>
            {content.fields.placeholder}
          </option>
          {content.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="security-website">{content.fields.website}</label>
        <input id="security-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Slanje..." : content.submit}
      </button>
      {status === "success" && (
        <p className={styles.formStatus} role="status">
          Hvala. Vaš upit je poslat.
        </p>
      )}
      {status === "error" && (
        <p className={styles.formStatus} role="alert">
          Slanje trenutno nije uspelo. Pokušajte ponovo ili nas kontaktirajte direktno.
        </p>
      )}
    </form>
  );
}
