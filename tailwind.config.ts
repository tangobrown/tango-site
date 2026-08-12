import type { Config } from "tailwindcss";

// Tokens are lifted verbatim from the Tango Digital handoff
// (design_handoff_tango_digital_site/README.md → "Design tokens").
// Where the handoff and the prototype HTML disagreed, the handoff wins.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F5F4F0",
        "bone-hover": "#FAFAF7",
        ink: {
          DEFAULT: "#0E1112",
          2: "#3E4447",
          3: "#5B6265",
          4: "#8A9094",
        },
        forest: "#0C6B57",
        mint: "#7FD9C1",
        night: {
          DEFAULT: "#0E1314",
          deep: "#080D0E",
          form: "#141A1A", // form card fill on the dark contact section
        },
        glass: "rgba(20,26,26,.42)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-public)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1320px", // default section content width
        comparison: "1100px",
        faq: "980px",
      },
      borderRadius: {
        // Radii are near-zero by design (handoff): buttons/cards 2px,
        // the difference panel 22px, pills/circles fully round.
        panel: "22px",
      },
      transitionTimingFunction: {
        // The single motion curve used everywhere in the design.
        fluid: "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "scrim-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "panel-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        ticker: "ticker 38s linear infinite",
        "marquee-left": "marquee-left 64s linear infinite",
        "marquee-right": "marquee-right 64s linear infinite",
        "scrim-in": "scrim-in .3s ease both",
        "panel-in": "panel-in .5s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
