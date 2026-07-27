import type { Metadata } from "next";
import { getSecurityContent } from "@/content/security";
import { createPageMetadata } from "@/lib/metadata";

const content = getSecurityContent("sr");

export const metadata: Metadata = createPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/sigurnosni-sistemi/",
  keywords: [
    "sigurnosni sistemi",
    "tehnička zaštita",
    "video nadzor",
    "alarmni sistemi",
    "kontrola pristupa",
    "video interfoni",
    "sigurnosna oprema Srbija",
  ],
});

export default function SecuritySystemsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
