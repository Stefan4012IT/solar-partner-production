"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

const platformOptions = ["EVO Max", "Alpha", "Dragonfish", "EVO Nest", "Nisam siguran, potrebna mi je konsultacija"];

type PlatformSelectEvent = CustomEvent<{ platform: string }>;

export function DroneInquiryForm() {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  useEffect(() => {
    const selectPlatform = (event: Event) => {
      const { platform } = (event as PlatformSelectEvent).detail;

      if (platformOptions.includes(platform)) {
        setSelectedPlatform(platform);
      }
    };

    window.addEventListener("drone-platform-select", selectPlatform);

    return () => window.removeEventListener("drone-platform-select", selectPlatform);
  }, []);

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="drone-name">Ime i prezime</label>
        <input id="drone-name" name="name" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-company">Kompanija / institucija</label>
        <input id="drone-company" name="company" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-phone">Telefon</label>
        <input id="drone-phone" name="phone" type="tel" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-email">Email</label>
        <input id="drone-email" name="email" type="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-application">Tip primene</label>
        <select id="drone-application" name="application" defaultValue="">
          <option value="" disabled>
            Izaberite
          </option>
          <option>Industrijska inspekcija</option>
          <option>Solarne elektrane</option>
          <option>Elektro mreža</option>
          <option>Javna bezbednost</option>
          <option>Potraga i spasavanje</option>
          <option>Vanredne situacije</option>
          <option>Distribucija / partnerstvo</option>
          <option>Drugo</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="drone-platform">Interesuje me</label>
        <select
          id="drone-platform"
          name="platform"
          value={selectedPlatform}
          onChange={(event) => setSelectedPlatform(event.target.value)}
        >
          <option value="" disabled>
            Izaberite
          </option>
          {platformOptions.map((platform) => (
            <option key={platform}>{platform}</option>
          ))}
        </select>
      </div>
      <button type="button">Pošaljite enterprise upit</button>
    </form>
  );
}
