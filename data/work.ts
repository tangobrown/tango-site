// Project data lifted verbatim from the prototype's baseWork().
// First entry uses the real Devon Joinery screenshot in /public;
// the other three are placeholders until the client supplies photos.

export interface Project {
  name: string;
  role: string; // e.g. "Website · SEO"
  tag: string; // eyebrow line
  quote: string; // client quote inside the overlay card
  imageSrc?: string;
  url?: string; // when set, the stack card renders a 'Visit website' link
}

export const work: Project[] = [
  {
    name: "Devon Joinery",
    role: "Website · SEO",
    tag: "Selected project",
    quote:
      "Tim just got it. The site feels like us, and the enquiries have more than doubled since launch.",
    imageSrc: "/devon-joinery.jpg",
    url: "https://www.devonjoinery.co.uk",
  },
  {
    name: "PIM-PAM",
    role: "Website · Branding",
    tag: "World Bank Group",
    quote:
      "Complex public-sector policy made easy to navigate — a site our global audience actually engages with.",
    imageSrc: "/pim-pam.jpg",
    url: "https://pim-pam.net",
  },
  {
    name: "Project Three",
    role: "Website · Automation",
    tag: "Selected project",
    quote:
      "The booking process that used to eat my week now takes a few taps. It quietly gave me hours back.",
  },
  {
    name: "Project Four",
    role: "E-commerce · Hosting",
    tag: "Selected project",
    quote:
      "A slow, patchy store turned into a dependable little engine for our family business.",
  },
];
