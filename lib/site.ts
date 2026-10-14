// Site-wide strings.

export const site = {
  name: "Tim Brown",
  email: "tim@tangobrown.com",
  linkedin: "https://www.linkedin.com/in/timbrown-exeter/",
  location: "Devon, UK — working with clients anywhere",
  copyright: "© 2026 Tim Brown",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

// Options for the contact form's "What are you after?" field.
export const enquiryTypes = [
  "Website review for my business",
  "Quote for a website build",
  "Something else",
] as const;

// The Expertise mega menu.
export const expertiseLinks = [
  {
    key: "service",
    label: "Service businesses",
    href: "/expertise/service-businesses",
    blurb: "Websites and local SEO that get trades and local businesses more calls and quote requests.",
  },
  {
    key: "ecommerce",
    label: "E-commerce stores",
    href: "/expertise/ecommerce",
    blurb: "Fast custom stores on Shopify or Medusa, with SEO, CRO and AI to sell more.",
  },
] as const;
