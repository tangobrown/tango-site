// 02 / Process.

export type ProcessStep = {
  week: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    week: "WEEK 01",
    title: "Audit & angle",
    body: "I look at what your competitors are doing, where your enquiries actually come from, and what's leaking. You get a plan, free, before you commit.",
  },
  {
    week: "WEEK 02",
    title: "Build",
    body: "Site, landing pages, tracking, automations. One person building means no handoffs and no telephone game.",
  },
  {
    week: "WEEK 03",
    title: "Switch on",
    body: "Campaigns live, follow-up running, phone tracked. First leads land within days, not next quarter.",
  },
  {
    week: "WEEK 04+",
    title: "Tune",
    body: "Cut what doesn't pay, double what does. One page of numbers a month — the ones that affect your bank account.",
  },
];
