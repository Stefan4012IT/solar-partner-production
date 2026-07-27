import type { Metadata } from "next";
import { getDronePageContent } from "@/content/drones";
import { createPageMetadata } from "@/lib/metadata";

const content = getDronePageContent("sr");

export const metadata: Metadata = createPageMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  path: "/dronovi/",
  keywords: [
    "profesionalni dronovi",
    "Autel Robotics Srbija",
    "enterprise dronovi",
    "dronovi za inspekciju",
    "termalni dronovi",
    "dronovi za bezbednost",
    "Solar Partner dronovi",
  ],
});

export default function DronesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
