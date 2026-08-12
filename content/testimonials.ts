// 08 / Testimonials. All eight are invented placeholders (handoff open
// question #3). Split into two marquee rows.

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonialsRowTop: Testimonial[] = [
  {
    quote:
      "Answered his own phone. Rebuilt the site in three weeks. We've had more quote requests this quarter than all of last year.",
    name: "Dave Whitlock",
    company: "Whitlock Roofing",
  },
  {
    quote:
      "Our last agency sent slides. This one sent leads. The difference is embarrassing, honestly.",
    name: "Priya Raman",
    company: "Marlow Dental",
  },
  {
    quote:
      "The automated follow-up alone paid for the whole build. Nobody falls through the cracks now.",
    name: "Tom Beasley",
    company: "Beasley Plumbing & Heating",
  },
  {
    quote: "I understood every invoice and every decision. That was new for us.",
    name: "Claire Hendry",
    company: "Hendry & Croft",
  },
];

export const testimonialsRowBottom: Testimonial[] = [
  {
    quote:
      "He told us not to spend money on two things we'd asked for. That's when I trusted him.",
    name: "Marcus Oyelowo",
    company: "Ember Kitchen",
  },
  {
    quote: "Same work an agency quoted us four times for. Live in a month.",
    name: "Sarah Voss",
    company: "Voss Interiors",
  },
  {
    quote: "The weekly report is one page and I actually read it.",
    name: "Gavin Doyle",
    company: "Doyle Electrical",
  },
  {
    quote:
      "Enquiries get answered in under a minute, at 11pm, without me touching anything.",
    name: "Nadia Karim",
    company: "Karim Aesthetics",
  },
];
