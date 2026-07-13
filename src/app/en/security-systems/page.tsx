import type { Metadata } from "next";
import { getSecurityContent } from "@/content/security";
import { SecuritySystemsPage } from "../../sigurnosni-sistemi/page";

const content = getSecurityContent("en");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EnglishSecuritySystemsRoute() {
  return <SecuritySystemsPage locale="en" />;
}
