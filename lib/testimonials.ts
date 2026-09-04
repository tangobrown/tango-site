// Two marquee rows of real, permissioned client quotes — one quote from each
// client per row.

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Small circular company logo mark shown beside the name. */
  logo?: string;
};

export const testimonialsRow1: Testimonial[] = [
  {
    quote:
      "Tim is a crisp designer with a great eye for a client's needs. He was prompt and responsive to our requests, and made every effort to ensure that he fulfilled the brief.",
    name: "Alex Barnes",
    company: "CEO of Lanterne",
  },
  {
    quote:
      "His SEO work has lead to us to grow as a company quicker than expected.",
    name: "Nathan Dallow",
    company: "Owner of Torbay Composite",
  },
  {
    quote:
      "Myself and Craig would like to thank you for your hard work building our new website. Your expertise made it easy and stress free for us.",
    name: "Karen Cargill",
    company: "Owner of Heatsavers",
  },
  {
    quote:
      "Tim has been an amazing support setting up my website and giving my business the boost it needed to get things off the ground.",
    name: "Peter Hawes",
    company: "Owner of Torbay Sweeps",
  },
  {
    quote:
      "We are delighted with the results — tidy, uncluttered and easy to navigate.",
    name: "Dr Michael Fisk",
    company: "Milford Eye Clinic",
  },
  {
    quote:
      "Tim's experience has ensured a relevant website and content delivering excellent enquiries and conversion. Experienced, Affordable, and Timely.",
    name: "Deb Mayo",
    company: "Owner of Kombined Experience",
  },
  {
    quote:
      "Tim implemented Google Ads and SEO which have seen our business grow beyond expectations!",
    name: "Damian Conolly",
    company: "Founder of Moving Maids",
  },
];

export const testimonialsRow2: Testimonial[] = [
  {
    quote:
      "His designs are great, whether for pitch decks, t shirts or the website.",
    name: "Alex Barnes",
    company: "CEO of Lanterne",
  },
  {
    quote:
      "I spoke to Tim about SEO and since that conversation I am inundated with enquiries in the specific area that we spoke about.",
    name: "Nathan Dallow",
    company: "Owner of Torbay Composite",
  },
  {
    quote:
      "We are so proud of our website and couldn't have done it without you. We will also be in touch soon so you can assist us with SEO work.",
    name: "Karen Cargill",
    company: "Owner of Heatsavers",
  },
  {
    quote:
      "Nothing is too much trouble and is great at guiding you on what works best for the website and the business as a whole.",
    name: "Peter Hawes",
    company: "Owner of Torbay Sweeps",
  },
  {
    quote:
      "During the website build process he fielded countless enquiries and endured innumerable revisions with professionalism.",
    name: "Dr Michael Fisk",
    company: "Milford Eye Clinic",
  },
  {
    quote:
      "Tim Brown recently built a new website for Kombined Experience and I am thrilled with the result.",
    name: "Deb Mayo",
    company: "Owner of Kombined Experience",
  },
  {
    quote:
      "Tim created our entire brand and our website, which we are absolutely stoked with. A clean, professional look that we're proud of.",
    name: "Damian Conolly",
    company: "Founder of Moving Maids",
  },
];
