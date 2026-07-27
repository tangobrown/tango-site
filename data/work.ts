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
    name: "The Old Fashioned Cocktail Co.",
    role: "Website · Branding",
    tag: "Selected project",
    quote:
      "Tim captured our style perfectly — moody, cinematic, and now our booking calendar barely takes a day off.",
    imageSrc: "/old-fashioned.jpg",
    url: "https://theoldfashionedcocktailco.com",
  },
  {
    name: "Vowles Carpentry",
    role: "Website · Lead Generation",
    tag: "Selected project",
    quote:
      "Tim gave the business a proper front door. The phone rings more, and the enquiries are exactly the jobs I want to be taking.",
    imageSrc: "/vowles.jpg",
    url: "https://vowlescarpentry.co.uk",
  },
  {
    name: "Country Benchmarking Dashboard",
    role: "Web App · Data Visualisation",
    tag: "World Bank Group",
    quote:
      "Global climate governance indicators for 182 countries, made explorable in a click — the kind of interface policymakers actually use.",
    imageSrc: "/cbd.jpg",
    url: "https://cbd.pim-pam.net",
  },
];
