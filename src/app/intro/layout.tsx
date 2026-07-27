import type { Metadata } from "next";
import { getIntroContent } from "@/content/intro";
import { createPageMetadata } from "@/lib/metadata";

const content = getIntroContent("sr");

export const metadata: Metadata = createPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/intro/",
  keywords: [
    "Solar Partner",
    "solarni sistemi Srbija",
    "profesionalni dronovi Srbija",
    "sigurnosni sistemi",
    "tehnička rešenja",
  ],
});

export default function IntroLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
