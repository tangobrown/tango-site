// Site-wide strings. Contact details and the LinkedIn URL are placeholders
// (handoff open items #2 and #4) — replace before launch.

export const site = {
  name: "Tim Brown",
  email: "hello@timbrown.co",
  tel: "+44 7000 000 000",
  telHref: "tel:+447000000000",
  linkedin: "https://www.linkedin.com",
  location: "Devon, UK — working with clients anywhere",
  copyright: "© 2026 Tim Brown",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// The expectations band items, in order (handoff §4).
export const expectations = [
  "Transparent pricing",
  "Local SEO (Google)",
  "Monthly reporting",
  "Ongoing support",
  "Optimised for AI Search",
  "One person, start to finish",
  "Blazing fast sites",
  "Honest advice",
] as const;
