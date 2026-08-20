import type { Config } from "tailwindcss";

// Tokens lifted verbatim from the handoff (design_handoff_freelance_site/
// README.md → "Design tokens").
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1F1D1A",
          soft: "#56504A",
          dark: "#24211D",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          text: "#F6F1E9",
        },
        rust: {
          DEFAULT: "#B5502E",
          dark: "#98411F",
          link: "#8E3C1F",
        },
        stone: "#E9E3D9",
        rule: {
          DEFAULT: "#E3DCD1",
          card: "#EAE2D6",
          btn: "#D6CDC0",
        },
        muted: {
          DEFAULT: "#8C857B",
          dark: "#B8B0A4",
          light: "#D9CFC2",
        },
        hairdark: {
          DEFAULT: "#4A443C",
          2: "#3A342D",
        },
        "underline-accent": "#E0C4B5",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-public)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 64s linear infinite",
        "marquee-right": "marquee-right 64s linear infinite",
        "marquee-band": "marquee-left 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
