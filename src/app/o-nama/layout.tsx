import type { Metadata } from "next";
import { getAboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

const content = getAboutContent("sr");

export const metadata: Metadata = createPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/o-nama/",
  keywords: [
    "Solar Partner",
    "o nama",
    "solarna rešenja",
    "Autel Robotics",
    "sigurnosni sistemi",
    "tehnička rešenja Srbija",
  ],
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
