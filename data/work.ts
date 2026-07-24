// Project data lifted verbatim from the prototype's baseWork().
// First entry uses the real Devon Joinery screenshot in /public;
// the other three are placeholders until the client supplies photos.

export interface Project {
  name: string;
  role: string; // e.g. "Website · SEO"
  tag: string; // eyebrow line
  quote: string; // client quote inside the overlay card
  imageSrc?: string;
}

export const work: Project[] = [
  {
    name: "Devon Joinery",
    role: "Website · SEO",
    tag: "Selected project",
    quote:
      "Tim just got it. The site feels like us, and the enquiries have more than doubled since launch.",
    imageSrc: "/devon-joinery.png",
  },
  {
    name: "Project Two",
    role: "Website · Hosting",
    tag: "Selected project",
    quote:
      "A calm rebuild that made a growing service business easy to find and easy to trust — faster and far less fuss.",
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
