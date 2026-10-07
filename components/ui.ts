// Shared class strings for the v4 design system.

/** Centred 1300px content column with a 20px minimum gutter. */
export const container = "mx-auto w-full max-w-[1340px] px-5";

/** Vertical rhythm for the main sections. */
export const sectionY = "py-[clamp(52px,6.5vw,88px)]";

/** The one button: a pill with the label and arrow together. */
const btnBase =
  "inline-flex h-[54px] shrink-0 items-center gap-3 rounded-full pl-[26px] pr-[22px] text-[17px] font-semibold tracking-normal transition-colors duration-200";

export const btnPrimary = `${btnBase} bg-brand text-white hover:bg-brand-dark`;

/** Section H2 (left-aligned sections). */
export const h2Section =
  "m-0 text-[clamp(35px,3.4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em]";

/** Standard body paragraph. */
export const bodyText = "m-0 text-[19px] leading-[1.47] tracking-[-0.015em] text-ink-soft";
