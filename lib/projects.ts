// Selected work, in display order. Each project has its own page at
// /work/<slug>. `image` is the photo behind its box on the home and work pages.

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
  },
  {
    slug: "world-bank-pim-pam",
    title: "World Bank",
    category: "PIM-PAM",
    services: "Branding & website",
    summary: "The public home of a World Bank programme on smarter public investment.",
    url: "https://pim-pam.net",
    cover: "/work/tablet/w4.png",
    image: "/about-1.jpg",
    imageSize: { width: 800, height: 770 },
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
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
