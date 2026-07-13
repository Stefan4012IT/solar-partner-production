import type { Metadata } from "next";
import { getIntroContent } from "@/content/intro";
import { IntroExperience } from "../intro/IntroExperience";

const content = getIntroContent("en");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EnglishHomeRoute() {
  return <IntroExperience locale="en" />;
}
