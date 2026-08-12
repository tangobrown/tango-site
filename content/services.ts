// 01 / Services. Prices are placeholders and the currency is unconfirmed
// (the client is UK-based, so these are likely to become GBP) — hence they
// live here rather than in JSX.

export type Service = {
  code: string;
  price: string;
  title: string;
  body: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    code: "S/01",
    price: "from $2.5k",
    title: "Websites",
    body: "Fast, sharp, built to convert — not a template with your logo dropped in. Sub-second loads, written copy, tracking wired from day one.",
    bullets: [
      "Design & build",
      "Conversion copy",
      "Local SEO foundations",
      "Analytics & call tracking",
    ],
  },
  {
    code: "S/02",
    price: "from $900/mo",
    title: "Lead generation",
    body: "Paid search, local visibility, and follow-up that doesn't leak. Measured in booked jobs and enquiries — not impressions.",
    bullets: [
      "Google & Meta campaigns",
      "Landing pages per offer",
      "Google Business Profile",
      "Lead scoring & routing",
    ],
  },
  {
    code: "S/03",
    price: "from $1.5k",
    title: "AI & automation",
    body: "The unfair advantage small businesses aren't using yet. Answer every enquiry in seconds, chase every quote, kill the admin.",
    bullets: [
      "Instant enquiry response",
      "Quote & review follow-up",
      "CRM & booking workflows",
      "Reporting on autopilot",
    ],
  },
];

export const servicesFootnote =
  "Ranges, not quotes. Scope decides the number — you'll get it in writing before anything starts.";
