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
