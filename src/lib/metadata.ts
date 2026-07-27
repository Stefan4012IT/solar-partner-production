import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

const siteName = "Solar Partner";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stefan4012it.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function createPageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const canonicalPath = `${basePath}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName,
      locale: "sr_RS",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
