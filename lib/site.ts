// Site-wide strings.

export const site = {
  name: "Tim Brown",
  email: "tim@tangobrown.com",
  linkedin: "https://www.linkedin.com/in/timbrown-exeter/",
  location: "Devon, UK — working with clients anywhere",
  copyright: "© 2026 Tim Brown",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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

// Options for the contact form's "What are you after?" field.
export const enquiryTypes = [
  "Website review for my business",
  "Quote for a website build",
  "Something else",
] as const;
