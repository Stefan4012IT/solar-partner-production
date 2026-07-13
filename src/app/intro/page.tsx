import type { Metadata } from "next";
import { getIntroContent } from "@/content/intro";
import { IntroExperience } from "./IntroExperience";

const content = getIntroContent("sr");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function IntroPage() {
  return <IntroExperience />;
}
