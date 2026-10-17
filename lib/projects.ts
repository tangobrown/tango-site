// Selected work, in display order. Each project has its own page at
// /work/<slug>. `image` is the photo behind its box on the home and work pages.
// The Devon Joinery challenge/result copy is Tim's; the rest is draft copy
// written from each project's summary, to be reviewed.

export type Project = {
  slug: string;
  title: string;
  category: string;
  services: string;
  summary: string;
  url: string | null;
  /** Transparent device-frame mock shown on the project page. */
  cover: string;
  /** Background photo for the project's box (placeholder for now). */
  image: string;
  /** The photo's pixel size, so its box can request a sharp enough version. */
  imageSize: { width: number; height: number };
  /** Project page copy: the brief, then what was done and how it went. */
  challenge: string;
  result: string;
  /**
   * Project page images: a wide hero (2:1, e.g. 2400×1200) then two
   * portraits (4:5, e.g. 1600×2000). Until they're supplied, the page shows
   * the tablet mock-up and plain placeholders.
   */
  gallery?: [hero: string, second: string, third: string];
};

export const projects: Project[] = [
  {
    slug: "devon-joinery",
    title: "Devon Joinery",
    category: "Joinery · Devon",
    services: "Branding, website & SEO",
    summary: "A brand new website for a joinery business in Exeter and ongoing SEO services which has led to a big increase in leads.",
    url: "https://devonjoinery.co.uk",
    cover: "/work/tablet/w1.png",
    image: "/work/photos/devon-joinery-website.jpg",
    imageSize: { width: 1300, height: 975 },
    challenge:
      "Devon Joinery is a family-run workshop crafting bespoke kitchens, wardrobes, doors and architectural joinery across Exeter. Their old site didn't reflect the quality of the work, and most enquiries were coming through word of mouth alone.",
    result:
      "I built a new site around their portfolio, with clear service pages and a simple quote form, then followed up with ongoing local SEO. Within months they were ranking for key Exeter searches and enquiries had grown substantially.",
  },
  {
    slug: "vowles-carpentry",
    title: "Vowles Carpentry",
    category: "Carpentry · Devon",
    services: "Branding, website & SEO",
    summary: "New branding design (logo, van graphics, marketing material) and website build for a carpenter based in Torbay, Devon.",
    url: "https://paulvowlescarpentry.co.uk",
    cover: "/work/tablet/w2.png",
    image: "/work/photos/vowles-carpentry-website.jpg",
    imageSize: { width: 1300, height: 975 },
    challenge:
      "Vowles Carpentry is a carpenter based in Torbay, Devon. The business needed a brand that matched the quality of its work, used consistently across the van, printed material and online.",
    result:
      "I designed a new logo, van graphics and marketing material, then built a website around them, giving the business one clear, professional look wherever customers come across it.",
  },
  {
    slug: "ipj-london",
    title: "IPJ London",
    category: "Furniture · London",
    services: "Branding & website",
    summary: "Refreshed branding and a new website, showcasing their stunning furniture consultancy portfolio in London.",
    url: "https://ipjlondon.com",
    cover: "/work/tablet/ipj.png",
    image: "/work/photos/ipj-london-website.jpg",
    imageSize: { width: 1300, height: 975 },
    challenge:
      "IPJ London is a furniture consultancy working on commercial and residential spaces. Their brand and website needed a refresh to do justice to an impressive portfolio of projects.",
    result:
      "I refreshed the branding and built a new website that puts the portfolio front and centre, with clean layouts that let the photography speak for itself.",
  },
  {
    slug: "old-fashioned-cocktail-co",
    title: "The Old Fashioned Cocktail Co.",
    category: "Mobile bar · New York",
    services: "Branding, website & SEO",
    summary: "Branding refresh and a new website built for a mobile cocktail bar in New York, showcasing their services and driving new leads.",
    url: "https://theoldfashionedcocktailco.com",
    cover: "/work/tablet/w3.png",
    image: "/work/photos/old-fashioned-cocktail-co-website.jpg",
    imageSize: { width: 1300, height: 975 },
    challenge:
      "The Old Fashioned Cocktail Co. is a mobile cocktail bar in New York. They needed a brand and website with as much style as their events, and a clear way for people to book.",
    result:
      "I refreshed the branding and built a new website that showcases their services and makes it easy to ask for a quote, helping to drive new leads.",
  },
  {
    slug: "world-bank-pim-pam",
    title: "World Bank",
    category: "PIM-PAM",
    services: "Branding & website",
    summary: "A new website build, showcasing a range of digital tools developed to help government officials make better policy decisions.",
    url: "https://pim-pam.net",
    cover: "/work/tablet/w4.png",
    image: "/work/photos/world-bank-pim-pam-website.jpg",
    imageSize: { width: 1300, height: 975 },
    challenge:
      "The World Bank's PIM-PAM programme develops digital tools that help government officials make better policy decisions. They needed one place to present the whole range clearly.",
    result:
      "I designed the branding and built a new website that showcases each tool and explains it in plain terms, so officials can quickly find what they need.",
  },
  {
    slug: "torbay-sweeps",
    title: "Torbay Sweeps",
    category: "Chimney sweep · Torbay",
    services: "Website build",
    summary: "A fast, trustworthy site built around the local searches that turn into bookings.",
    url: "https://torbaysweeps.co.uk",
    cover: "/work/tablet/torbay.png",
    image: "/about-1.jpg",
    imageSize: { width: 800, height: 770 },
    challenge:
      "Torbay Sweeps is a chimney sweep in Torbay. Most customers find a sweep by searching locally, so the business needed a site that shows up in those searches and builds trust quickly.",
    result:
      "I built a fast, trustworthy website around the local searches that turn into bookings, with clear services and an easy way to get in touch.",
  },
  {
    slug: "highgrove-retirement-village",
    title: "Highgrove Retirement Village",
    category: "Retirement village · NZ",
    services: "Website & SEO",
    summary: "Warm, unhurried pages that reassure residents and the families helping them decide.",
    url: "https://highgrove.co.nz",
    cover: "/work/tablet/highgrove.png",
    image: "/about-1.jpg",
    imageSize: { width: 800, height: 770 },
    challenge:
      "Highgrove is a retirement village in New Zealand. Choosing a retirement home is a big decision, often made with family, so the website needed to feel warm and reassuring.",
    result:
      "I built a website with warm, unhurried pages that reassure residents and the families helping them decide, backed by ongoing SEO.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
