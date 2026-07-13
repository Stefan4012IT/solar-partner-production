import type { Metadata } from "next";
import { getSolarContent } from "@/content/solar";
import { SolarSystemsPage } from "../../solarni-sistemi/SolarSystemsPage";

const content = getSolarContent("en");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EnglishSolarSystemsRoute() {
  return <SolarSystemsPage locale="en" />;
}
