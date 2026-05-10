import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { OrganizationSchema } from "@/components/JsonLd";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinnar.us"),
  title: {
    default: "Dinnar Automatic Intelligence — Lights-Out Manufacturing Platform",
    template: "%s | Dinnar",
  },
  description:
    "Dinnar engineers vision, motion, and AI into a single platform that runs production lines without a human in the loop. Lights-out manufacturing for consumer electronics, EV batteries, semiconductors, and displays.",
  keywords: [
    "lights-out manufacturing",
    "machine vision",
    "defect detection",
    "AOI",
    "automated optical inspection",
    "vision AI",
    "industrial automation",
    "Industry 4.0",
    "Dinnar",
  ],
  openGraph: {
    type: "website",
    siteName: "Dinnar Automatic Intelligence",
    title: "Dinnar — The Future of Lights-Out Manufacturing",
    description: "Vision, motion, and AI engineered into a single platform for the lights-out factory.",
    url: "https://dinnar.us",
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinnar — Lights-Out Manufacturing",
    description: "Vision, motion, and AI engineered into a single platform for the lights-out factory.",
    images: ["/images/og-default.svg"],
  },
  alternates: {
    languages: {
      en: "https://dinnar.us",
      zh: "https://dinnar.us/zh",
    },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-white text-navy-500 antialiased">
        <OrganizationSchema />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX"} /></body>
    </html>
  );
}
