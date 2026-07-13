import type { Metadata } from "next";
import { getAboutContent } from "@/content/about";
import { AboutPage } from "../../o-nama/page";

const content = getAboutContent("en");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EnglishAboutRoute() {
  return <AboutPage locale="en" />;
}
