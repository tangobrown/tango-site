import type { Config } from "tailwindcss";

// Tokens from design_handoff_tim_brown_home/README.md ("Design Tokens").
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    // No border radius anywhere.
    borderRadius: { none: "0", DEFAULT: "0" },
    extend: {
      colors: {
        ink: "#110f0d", // page background
        bone: "#ece6dc", // primary text / light buttons
        sand: "#cfc7bb", // hero subtitle
        stone: "#a69d91", // body copy (secondary)
        ash: "#8a8278", // muted labels, serif accents
        smoke: "#5e5850", // tertiary text
        ember: "#c8743a", // accent (eyebrows, numerals, hover)
        line: "rgba(236,230,220,0.14)", // hairline dividers / borders
        line2: "rgba(236,230,220,0.25)", // stronger outline (icon buttons)
      },
      fontFamily: {
        display: ["var(--font-antonio)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1280px", wide: "1440px" },
    },
  },
  plugins: [],
};

export default config;
