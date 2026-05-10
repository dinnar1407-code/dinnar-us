import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dinnar Automatic Intelligence — Lights-Out Manufacturing Platform",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-white text-navy-500 antialiased">{children}</body>
    </html>
  );
}
