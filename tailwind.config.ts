import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nature palette — lifted from the handoff's Design Tokens section.
        cream: "#f5f1e8",
        ink: "#2a3327",
        muted: {
          DEFAULT: "#4c5145",
          soft: "#5c6153",
          faint: "#8a917c",
          hair: "#ddd6c7",
        },
        gold: "#e0a94a",
        hero: "#252523",
        heroText: "#f5f1e8",
        heroMuted: "#d7d4c8",
        heroMuted2: "#bdbbb0",
        heroMuted3: "#a9a79c",
        sand: "#eae4d5",
        forest: "#26332a",
        forestLabel: "#96a086",
        footer: {
          DEFAULT: "#1e281f",
          text: "#c8cebd",
          faint: "#7f886f",
          rule: "#33402f",
        },
        // Service / dark card panels
        card: {
          green: "#2f4131",
          olive: "#33352f",
          greenText: "#c7d1bc",
          oliveText: "#c8c8bd",
        },
        // Contact slide-out
        panel: {
          DEFAULT: "#26332a",
          label: "#8fa082",
          border: "#3f5138",
          close: "#3a4a34",
        },
        placeholderTile: "#e7e1d2",
        rule: {
          DEFAULT: "#ddd6c7",
          carousel: "#c3c1af",
        },
        linkHover: "#5a6b4d",
      },
      fontFamily: {
        heading: ["var(--font-atkinson)", "sans-serif"],
        body: ["var(--font-atkinson)", "sans-serif"],
        instrument: ["var(--font-instrument)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1280px",
        hero: "1400px",
      },
      spacing: {
        gutter: "48px",
      },
    },
  },
  plugins: [],
};

export default config;
