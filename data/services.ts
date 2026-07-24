// Service copy lifted verbatim from the prototype's baseServices().
// The 2x2 grid card colours alternate: card 1 & 4 use the darker green
// (#2f4131) with lighter body text (#c7d1bc); card 2 & 3 use the olive
// (#33352f) with a warmer muted body (#c8c8bd). imageSrc is the /public
// path to drop the real service photo into once it arrives.

export type ServicePalette = "green" | "olive";

export interface Service {
  num: string; // "01" .. "04"
  title: string;
  description: string;
  points: string[];
  palette: ServicePalette;
  imageSrc?: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Website Builds",
    description:
      "Fast, considered websites built to convert — designed and coded from scratch around your business, not a template. Everything is planned for how your customers actually behave.",
    points: [
      "Bespoke design & build",
      "Copywriting support",
      "Mobile-first & fast",
      "Launch & handover",
    ],
    palette: "green",
  },
  {
    num: "02",
    title: "Website Hosting",
    description:
      "Reliable, secure hosting with updates, backups and a real person to call. Set it and forget it — your site simply stays online, fast and safe.",
    points: [
      "Daily backups",
      "Security & updates",
      "Uptime monitoring",
      "Priority support",
    ],
    palette: "olive",
  },
  {
    num: "03",
    title: "Lead Generation",
    description:
      "Bringing in the right enquiries, not just more traffic. Honest search visibility and content that turns the right visitors into paying customers.",
    points: [
      "Technical audit",
      "Keyword strategy",
      "On-page & content",
      "Monthly reporting",
    ],
    palette: "olive",
  },
  {
    num: "04",
    title: "AI & Automation",
    description:
      "Quiet automations that take admin off your plate — from enquiry handling to reporting — so your time goes where it matters most.",
    points: [
      "Workflow automation",
      "AI assistants",
      "Integrations",
      "Time-saving audits",
    ],
    palette: "green",
  },
];
