import type { Metadata } from "next";
import { IntroExperience } from "./intro/IntroExperience";

export const metadata: Metadata = {
  title: "Solar Partner | Energetski i enterprise sistemi",
  description:
    "Solarni sistemi, profesionalni dronovi i tehnička rešenja za energetiku, infrastrukturu i poslovne korisnike.",
};

export default function Home() {
  return <IntroExperience />;
}
