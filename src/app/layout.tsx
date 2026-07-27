import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import { getIntroContent } from "@/content/intro";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const brandIconPath = `${basePath}/brand/solar_logo_001.svg`;
const homeMetadata = getIntroContent("sr").metadata;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: homeMetadata.title,
    description: homeMetadata.description,
    path: "/",
    keywords: [
      "Solar Partner",
      "solarni sistemi",
      "profesionalni dronovi",
      "sigurnosni sistemi",
      "tehnička rešenja Srbija",
    ],
  }),
  icons: {
    icon: [{ url: brandIconPath, type: "image/svg+xml" }],
    shortcut: [{ url: brandIconPath, type: "image/svg+xml" }],
    apple: [{ url: brandIconPath, type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
