// Site-wide strings and navigation. Placeholder values (email, prices,
// currency) are flagged in the handoff's "Open questions" and are expected
// to change — keep them here, never hard-coded in components.

export const site = {
  name: "Tango Digital",
  kicker: "est. solo",
  // Placeholder address — real inbox / CRM / scheduler is an open question.
  email: "hello@tangodigital.com",
  emailReplyNote: "Replies within one business day",
  footerTagline: "Next-gen marketing for small business",
  copyright: "© 2026",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Vs. Agency", href: "#versus" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

// Sector ticker — order is intentional. Rendered twice for a seamless loop.
export const sectors = [
  "Trades & home services",
  "Clinics & health practices",
  "Legal & finance",
  "Hospitality & food",
  "E-commerce & retail",
] as const;
