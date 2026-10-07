// Selected work, in display order. `category` is the pill on the card;
// `services` and `summary` show on the green hover overlay.

export type Project = {
  id: string;
  title: string;
  category: string;
  services: string;
  summary: string;
  url: string | null;
  /** Transparent device-frame mock shown on the card. */
  cover: string;
};

export const projects: Project[] = [
  {
    id: "devon-joinery",
    title: "Devon Joinery",
    category: "Joinery · Devon",
    services: "Branding, website & SEO",
    summary: "Rebuilt around the jobs they actually wanted. Fewer enquiries now — better ones.",
    url: "https://devonjoinery.co.uk",
    cover: "/work/tablet/w1.png",
  },
  {
    id: "vowles",
    title: "Vowles Carpentry",
    category: "Carpentry · Devon",
    services: "Branding, website & SEO",
    summary: "A portfolio the team updates from a phone, on site, with muddy hands.",
    url: "https://paulvowlescarpentry.co.uk",
    cover: "/work/tablet/w2.png",
  },
  {
    id: "ipj",
    title: "IPJ London",
    category: "Furniture · London",
    services: "Branding & website",
    summary: "A quiet, confident site that confirms the referral in ten seconds.",
    url: "https://ipjlondon.com",
    cover: "/work/tablet/ipj.png",
  },
  {
    id: "old-fashioned",
    title: "The Old Fashioned Cocktail Co.",
    category: "Mobile bar · New York",
    services: "Branding, website & SEO",
    summary: "A brand-led site for a mobile cocktail bar, built to turn browsers into bookings.",
    url: "https://theoldfashionedcocktailco.com",
    cover: "/work/tablet/w3.png",
  },
  {
    id: "pim-pam",
    title: "World Bank",
    category: "PIM-PAM",
    services: "Branding & website",
    summary: "The public home of a World Bank programme on smarter public investment.",
    url: "https://pim-pam.net",
    cover: "/work/tablet/w4.png",
  },
  {
    id: "torbay",
    title: "Torbay Sweeps",
    category: "Chimney sweep · Torbay",
    services: "Website build",
    summary: "A fast, trustworthy site built around the local searches that turn into bookings.",
    url: "https://torbaysweeps.co.uk",
    cover: "/work/tablet/torbay.png",
  },
  {
    id: "sanwei",
    title: "Sanwei Asia",
    category: "Manufacturing · Taiwan & UK",
    services: "Website & SEO",
    summary: "One bilingual site, edited from two time zones without breaking.",
    url: "https://sanwei-asia.com",
    cover: "/work/tablet/sanwei.png",
  },
  {
    id: "infragov",
    title: "World Bank",
    category: "InfraGov Assessment Tool",
    services: "UI/UX design & development",
    summary: "A 90-tab spreadsheet turned into an assessment governments actually finish.",
    url: "https://infragov-dashboard.vercel.app/en",
    cover: "/work/tablet/w5.png",
  },
  {
    id: "highgrove",
    title: "Highgrove Retirement Village",
    category: "Retirement village · NZ",
    services: "Website & SEO",
    summary: "Warm, unhurried pages that reassure residents and the families helping them decide.",
    url: "https://highgrove.co.nz",
    cover: "/work/tablet/highgrove.png",
  },
  {
    id: "cbd",
    title: "World Bank",
    category: "Country Benchmarking",
    services: "UI/UX design & development",
    summary: "An interactive world map that makes a global governance index readable.",
    url: "https://cbd.pim-pam.net/",
    cover: "/work/tablet/cbd.png",
  },
];
