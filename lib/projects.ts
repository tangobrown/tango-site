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
  },
  {
    id: "w2",
    title: "Vowles Carpentry",
    meta: "Carpentry · Somerset",
    year: "2025",
    scope: "Site, phone-first editing",
    url: null,
    body: "A portfolio the team can add to from a phone, on site, with muddy hands. Photograph the job, drop it in, done — no laptop, no CMS training, no waiting on me.",
  },
  {
    id: "w3",
    title: "The Old Fashioned Cocktail Co.",
    meta: "Drinks brand · E-commerce",
    year: "2024",
    scope: "Design, build, checkout",
    url: null,
    body: "A brand-led shop front with a checkout that behaves itself through December. Built for the seasonal spike: fast product pages, honest stock counts, and gifting flows that do not fall over on the busiest weekend of the year.",
  },
  {
    id: "w4",
    title: "PIM-PAM",
    meta: "World Bank programme",
    year: "2024",
    scope: "Interface design, front-end",
    url: null,
    body: "A public-facing tool for a World Bank programme. Dense comparative data, plain language, and a structure that lets a minister and a researcher both find what they came for.",
  },
  {
    id: "w5",
    title: "InfraGov Assessment Tool",
    meta: "World Bank programme",
    year: "2023",
    scope: "UX, build, documentation",
    url: null,
    body: "An assessment framework that existed as a very long spreadsheet. Turned into something governments can actually fill in — sectioned, saveable, and clear about why each question is being asked.",
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
    meta: "Practice site · London",
    year: "2023",
    scope: "Design and build",
    url: null,
    body: "A quiet, confident presence for a London practice — and a site that survives referrals. Most visitors arrive having already been told the practice is good; the job was to confirm it in ten seconds.",
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
    title: "Highgrove",
    meta: "Estate · Editorial pages",
    year: "2022",
    scope: "Editorial layouts",
    url: null,
    body: "Careful, understated pages for a name that does not need shouting about. Generous imagery, restrained type, and layouts that hold up whether there are three photographs or thirty.",
  },
];
