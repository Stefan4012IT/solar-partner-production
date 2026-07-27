"use client";

import { useEffect, useState } from "react";
import { LeadSuccessModal } from "@/components/LeadSuccessModal";
import { submitLeadForm } from "@/lib/leadSubmit";
import styles from "./page.module.scss";

type DroneInquiryFormContent = {
  fields: {
    name: string;
    company: string;
    phone: string;
    email: string;
    application: string;
    platform: string;
    placeholder: string;
  };
  applications: string[];
  platforms: string[];
  submit: string;
};

const defaultContent: DroneInquiryFormContent = {
  fields: {
    name: "Ime i prezime",
    company: "Kompanija / institucija",
    phone: "Telefon",
    email: "Email",
    application: "Tip primene",
    platform: "Interesuje me",
    placeholder: "Izaberite",
  },
  applications: [
    "Industrijska inspekcija",
    "Solarne elektrane",
    "Elektro mreža",
    "Javna bezbednost",
    "Potraga i spasavanje",
    "Vanredne situacije",
    "Distribucija / partnerstvo",
    "Drugo",
  ],
  platforms: ["EVO Max", "Alpha", "Dragonfish", "EVO Nest", "Nisam siguran, potrebna mi je konsultacija"],
  submit: "Pošaljite enterprise upit",
};

type PlatformSelectEvent = CustomEvent<{ platform: string }>;

export function DroneInquiryForm({ content = defaultContent }: { content?: DroneInquiryFormContent } = {}) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const platformOptions = content.platforms;

  useEffect(() => {
    const selectPlatform = (event: Event) => {
      const { platform } = (event as PlatformSelectEvent).detail;

      if (platformOptions.includes(platform)) {
        setSelectedPlatform(platform);
      }
    };

    window.addEventListener("drone-platform-select", selectPlatform);

    return () => window.removeEventListener("drone-platform-select", selectPlatform);
  }, [platformOptions]);

  return (
    <>
      <form
        className={styles.form}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          setStatus("submitting");

          try {
            await submitLeadForm("dronovi", form);
            form.reset();
            setSelectedPlatform("");
            setStatus("success");
          } catch {
            setStatus("error");
          }
        }}
      >
        <div className={styles.field}>
          <label htmlFor="drone-name">{content.fields.name}</label>
          <input id="drone-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="drone-company">{content.fields.company}</label>
          <input id="drone-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className={styles.field}>
          <label htmlFor="drone-phone">{content.fields.phone}</label>
          <input id="drone-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="drone-email">{content.fields.email}</label>
          <input id="drone-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="drone-application">{content.fields.application}</label>
          <select id="drone-application" name="application" defaultValue="">
            <option value="" disabled>
              {content.fields.placeholder}
            </option>
            {content.applications.map((application) => (
              <option key={application}>{application}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="drone-platform">{content.fields.platform}</label>
          <select
            id="drone-platform"
            name="platform"
            value={selectedPlatform}
            onChange={(event) => setSelectedPlatform(event.target.value)}
          >
            <option value="" disabled>
              {content.fields.placeholder}
            </option>
            {platformOptions.map((platform) => (
              <option key={platform}>{platform}</option>
            ))}
          </select>
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="drone-website">Website</label>
          <input id="drone-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Slanje..." : content.submit}
        </button>
        {status === "error" && (
          <p className={styles.formStatus} role="alert">
            Slanje trenutno nije uspelo. Pokušajte ponovo ili nas kontaktirajte direktno.
          </p>
        )}
      </form>
      <LeadSuccessModal
        isOpen={status === "success"}
        title="Hvala. Vaš upit je poslat."
        text="Kontaktiraćemo vas kako bismo razjasnili operativnu potrebu, primenu i Autel Robotics platformu koja najviše odgovara zadatku."
        onClose={() => setStatus("idle")}
      />
    </>
  );
}
