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
      "A 25-year-old Exeter joinery firm with exceptional work and nowhere to show it.\n\nI built a fast, image-led site with a page for every area of expertise, a full gallery, and a free-estimate form driving. I then took on ongoing SEO to grow their visibility across Devon.",
    imageSrc: "/devon-joinery.jpg",
    url: "https://www.devonjoinery.co.uk",
  },
  {
    name: "PIM-PAM",
    role: "Website · Branding",
    tag: "World Bank Group",
    quote:
      "PIM-PAM is a World Bank initiative bringing digital tools to public investment and asset management.\n\nI designed the brand from the ground up and built the website around it. A single entry point to multiple specialist tools, turning dense institutional material into something practitioners can navigate in minutes.",
    imageSrc: "/pim-pam.jpg",
    url: "https://pim-pam.net",
  },
  {
    name: "The Old Fashioned Cocktail Co.",
    role: "Website · Branding",
    tag: "Selected project",
    quote:
      "A mobile cocktail bar competing in New York on atmosphere, not price. I gave The Old Fashioned Cocktail Co. a full prohibition-era identity, then built a site that sells the theater first and books the event second, with landing pages for weddings, corporate hire and parties.",
    imageSrc: "/old-fashioned.jpg",
    url: "https://theoldfashionedcocktailco.com",
  },
  {
    name: "Vowles Carpentry",
    role: "Website · Lead Generation",
    tag: "Selected project",
    quote:
      "Paul Vowles is a skilled carpenter working across South Devon. I created his brand from scratch. Logo, marketing material and his website and wrote every word on it.\n\nEight service pages, a gallery and a three-step quote flow turn a one-man operation into something that reads as established and easy to trust.",
    imageSrc: "/vowles.jpg",
    url: "https://vowlescarpentry.co.uk",
  },
  {
    name: "Country Benchmarking Dashboard",
    role: "Web App · Data Visualisation",
    tag: "World Bank Group",
    quote:
      "The Country Benchmarking Dashboard is a World Bank tool for public financial management across Central Asia.\n\nI designed the brand and built the application, an interactive front end that makes World Bank and IMF datasets explorable, so ministries of finance can see how their country compares on the indicators.",
    imageSrc: "/cbd.jpg",
    url: "https://cbd.pim-pam.net",
  },
];
