import type { Config } from "tailwindcss";

// v4 visual refresh tokens (design_handoff_v4_refresh/README.md → "Design tokens").
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#14A85A", dark: "#0F8A49", bright: "#2FD07A" },
        // Dark green for the hero, footer and dark buttons.
        pine: { DEFAULT: "#0E2A1F", light: "#16392B" },
        ink: { DEFAULT: "#141414", soft: "#3E3E3E", muted: "#6B6B6B" },
        surface: {
          panel: "#F2F4F2",
          placeholder: "#EAECEA",
          card: "#DADDDA",
          hero: "#2B2F2C",
        },
        rule: { DEFAULT: "#DCE0DC", light: "#E2E4E2" },
        footer: { link: "#CFCFCF", muted: "#9A9A9A", legal: "#8A8A8A" },
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        nav: "0 6px 24px rgba(0,0,0,0.12)",
        panel: "-20px 0 60px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
