import type { Metadata } from "next";
import { IntroExperience } from "./intro/IntroExperience";

export const metadata: Metadata = {
  title: "Solar Partner | Solarni sistemi i profesionalni dronovi",
  description:
    "Ulazna Solar Partner stranica za solarne sisteme, profesionalne dronove, sigurnosne sisteme i informacije o kompaniji.",
};

export default function Home() {
  return <IntroExperience />;
}
