import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solarne elektrane za kuće i firme | Solar Partner",
  description:
    "Kompletna solarna rešenja za domaćinstva, firme i industrijske objekte u Srbiji. Projektovanje, oprema, ugradnja i podrška pri priključenju.",
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
