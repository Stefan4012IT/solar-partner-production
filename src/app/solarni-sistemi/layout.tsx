import type { Metadata } from "next";
import { getSolarContent } from "@/content/solar";
import { createPageMetadata } from "@/lib/metadata";

const content = getSolarContent("sr");

export const metadata: Metadata = createPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/solarni-sistemi/",
  keywords: [
    "solarni paneli Srbija",
    "ugradnja solarnih panela",
    "solarne elektrane za kuće",
    "solarne elektrane za firme",
    "solarni sistemi",
    "kupac-proizvođač",
    "solar partner",
  ],
});

export default function SolarSystemsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
