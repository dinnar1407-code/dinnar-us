import type { ReactNode } from "react";
import "./globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Dinnar — The Future of Lights-Out Manufacturing",
  description:
    "Dinnar Automatic Intelligence Inc. — vision, motion, and AI engineered into a single platform for the lights-out factory.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interSans.variable} ${jetbrains.variable} bg-ink-950 text-white antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
