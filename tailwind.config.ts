import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6faf3",
          100: "#b3f0da",
          200: "#80e6c1",
          300: "#4ddca8",
          400: "#26d293",
          500: "#09D898",
          600: "#07b581",
          700: "#059269",
          800: "#046f51",
          900: "#024c38",
        },
        navy: {
          50: "#e8ebf2",
          100: "#b8c1d6",
          200: "#8d9bbd",
          300: "#687ba5",
          400: "#4e6292",
          500: "#1e293b",
          600: "#192438",
          700: "#151f34",
          800: "#101a2e",
          900: "#0c1528",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans SC",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
