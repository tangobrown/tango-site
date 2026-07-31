// PLACEHOLDER TESTIMONIALS — swap for real client quotes before going live.
// The quotes are drawn from copy previously used on the project cards; the
// attributions point at the real businesses those projects are for, so they
// must be replaced with actual permission-cleared quotes + real names.

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tim just got it. The site feels like us, and the enquiries have more than doubled since launch.",
    author: "Devon Joinery",
    role: "South Devon",
  },
  {
    quote:
      "Complex public-sector policy made easy to navigate — a site our global audience actually engages with.",
    author: "PIM-PAM Initiative",
    role: "World Bank Group",
  },
  {
    quote:
      "Tim captured our style perfectly — moody, cinematic, and now our booking calendar barely takes a day off.",
    author: "The Old Fashioned Cocktail Co.",
    role: "New York",
  },
  {
    quote:
      "Tim gave the business a proper front door. The phone rings more, and the enquiries are exactly the jobs I want to be taking.",
    author: "Paul Vowles",
    role: "Vowles Carpentry",
  },
  {
    quote:
      "Refreshingly straightforward — clear communication, on time, and the whole thing just worked from day one.",
    author: "Placeholder client",
    role: "Exeter",
  },
  {
    quote:
      "Not a hired hand — a real partner from first sketch to launch, and long afterwards.",
    author: "Placeholder client",
    role: "Devon",
  },
];
