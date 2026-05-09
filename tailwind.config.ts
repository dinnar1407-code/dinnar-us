import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#03060d",
          900: "#070b18",
          800: "#0c1224",
          700: "#121a30",
          600: "#1b2540",
          500: "#243154",
        },
        accent: {
          50: "#e6fbff",
          100: "#b8f2ff",
          200: "#7ee7ff",
          300: "#39d6ff",
          400: "#06bff0",
          500: "#0098c7",
          600: "#00789f",
          700: "#005a78",
          800: "#003e54",
          900: "#002435",
        },
        signal: {
          400: "#7c4dff",
          500: "#6531ff",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.12em",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(6,191,240,0.18), transparent 60%)",
        "hero-spot":
          "radial-gradient(60% 60% at 50% 30%, rgba(6,191,240,0.25) 0%, rgba(3,6,13,0) 60%)",
        "card-glow":
          "linear-gradient(140deg, rgba(6,191,240,0.18) 0%, rgba(124,77,255,0.08) 50%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "shimmer": "shimmer 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
