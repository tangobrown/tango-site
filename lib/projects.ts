// The nine work projects. `url` is null until the real live-site URL is
// supplied — the panel hides the "Visit the live site" button when null
// rather than linking nowhere (handoff open item #3). `imageSlot`/`panelSlot`
// name the asset positions; images are placeholder blocks until they land.

export type Project = {
  id: string;
  title: string;
  meta: string;
  year: string;
  scope: string;
  url: string | null;
  body: string;
  /**
   * Transparent device-frame mock shown in the work coverflow carousel.
   * Rendered whole (object-contain), floating on the page.
   */
  cover?: string;
  /**
   * Project images. The panel shows all in a carousel. Falls back to a
   * neutral placeholder when empty/unset.
   */
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "w1",
    title: "Devon Joinery",
    meta: "Joinery workshop · Devon",
    year: "2025",
    scope: "Site, copy shaping, local SEO",
    url: null,
    body: "A workshop that was getting the wrong sort of enquiry. We rebuilt the site around the jobs they actually wanted — staircases, bespoke fitted furniture — and put the workshop itself front and centre. Local SEO followed. Fewer enquiries now, better ones.",
    cover: "/work/tablet/w1.png",
    images: ["/work/w1.jpg"],
  },
  {
    id: "w2",
    title: "Vowles Carpentry",
    meta: "Carpentry · Somerset",
    year: "2025",
    scope: "Site, phone-first editing",
    url: null,
    body: "A portfolio the team can add to from a phone, on site, with muddy hands. Photograph the job, drop it in, done — no laptop, no CMS training, no waiting on me.",
    cover: "/work/tablet/w2.png",
    images: ["/work/w2.jpg"],
  },
  {
    id: "torbay",
    title: "Torbay Sweeps",
    meta: "Chimney sweep · Torbay",
    year: "2025",
    scope: "Site, local SEO",
    url: "https://torbaysweeps.co.uk",
    body: "A chimney sweeping and stove-installation business that wanted the phone to ring across Brixham, Paignton and the South Hams. A fast, trustworthy site built around the local searches that turn into bookings — quote requests front and centre.",
    cover: "/work/tablet/torbay.png",
    images: ["/work/torbay.jpg"],
  },
  {
    id: "w3",
    title: "The Old Fashioned Cocktail Co.",
    meta: "Drinks brand · E-commerce",
    year: "2024",
    scope: "Design, build, checkout",
    url: null,
    body: "A brand-led shop front with a checkout that behaves itself through December. Built for the seasonal spike: fast product pages, honest stock counts, and gifting flows that do not fall over on the busiest weekend of the year.",
    cover: "/work/tablet/w3.png",
    images: ["/work/w3.jpg"],
  },
  {
    id: "w4",
    title: "PIM-PAM",
    meta: "World Bank programme",
    year: "2024",
    scope: "Interface design, front-end",
    url: null,
    body: "The public face of a World Bank programme — digital tools for smarter public investment and asset management, built around the sixteen dimensions of InfraGov 2.0. Plain language over dense policy, so a minister and a researcher both find what they came for.",
    cover: "/work/tablet/w4.png",
    images: ["/work/w4.jpg"],
  },
  {
    id: "cbd",
    title: "Country Benchmarking",
    meta: "World Bank programme",
    year: "2024",
    scope: "Data visualisation, front-end",
    url: null,
    body: "An interactive world map that turns a governance index into something you can actually read — click a country, see its score, compare across a region. Dense comparative data made public-friendly.",
    cover: "/work/tablet/cbd.png",
    images: ["/work/cbd.jpg"],
  },
  {
    id: "w5",
    title: "InfraGov Assessment Tool",
    meta: "World Bank programme",
    year: "2023",
    scope: "UX, build, documentation",
    url: null,
    body: "An assessment framework that existed as a very long spreadsheet. Turned into something governments can actually fill in — sectioned, saveable, and clear about why each question is being asked.",
    cover: "/work/tablet/w5.png",
    images: ["/work/w5.jpg"],
  },
  {
    id: "w6",
    title: "Sanwei Asia",
    meta: "Manufacturing group · Bilingual",
    year: "2023",
    scope: "Bilingual site, CMS",
    url: null,
    body: "A bilingual site for a manufacturing group, built to be edited from two time zones without either side breaking the other. Structured content, mirrored layouts, one source of truth.",
  },
  {
    id: "w7",
    title: "IPJ London",
    meta: "Furniture consultancy · London",
    year: "2023",
    scope: "Design and build",
    url: "https://ipjlondon.com/",
    body: "A London furniture consultancy that needed a site as considered as the pieces they source — calm, editorial and quietly confident. Most visitors arrive already referred; the job was to confirm, in a few seconds, that they're in the right hands.",
    cover: "/work/tablet/ipj.png",
  },
  {
    id: "w8",
    title: "505 Economics",
    meta: "Research consultancy",
    year: "2022",
    scope: "Site, publication system",
    url: null,
    body: "A research consultancy where the writing does the selling, so nothing gets in its way. Long-form pages built for reading, and a publication flow that takes minutes rather than an afternoon.",
  },
  {
    id: "w9",
    title: "Highgrove Retirement Village",
    meta: "Retirement village · New Zealand",
    year: "2022",
    scope: "Design, build, editorial layouts",
    url: "https://highgrove.co.nz",
    body: "A retirement village where the website has to reassure two audiences at once — the person moving in and the family helping them decide. Warm, generous imagery and plain, unhurried pages that make the next step feel easy.",
    cover: "/work/tablet/highgrove.png",
  },
];
