"use client";

import { useEffect, useState } from "react";
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
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="drone-name">{content.fields.name}</label>
        <input id="drone-name" name="name" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-company">{content.fields.company}</label>
        <input id="drone-company" name="company" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-phone">{content.fields.phone}</label>
        <input id="drone-phone" name="phone" type="tel" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-email">{content.fields.email}</label>
        <input id="drone-email" name="email" type="email" />
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
      <button type="button">{content.submit}</button>
    </form>
  );
}
