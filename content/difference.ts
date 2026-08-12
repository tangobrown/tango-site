// 03 / Difference — the three feature columns inside the frosted card.

export type DifferenceFeature = {
  slotId: string; // maps to a placeholder / real icon asset
  title: string;
  body: string;
};

export const differenceFeatures: DifferenceFeature[] = [
  {
    slotId: "diff-1",
    title: "Built, not outsourced",
    body: "Every site, campaign and automation is made by one operator who answers your calls — no juniors learning on your budget.",
  },
  {
    slotId: "diff-2",
    title: "Tomorrow-ready",
    body: "AI and automation wired in from day one, so your follow-up, quoting and reporting run while you are on the tools.",
  },
  {
    slotId: "diff-3",
    title: "You own everything",
    body: "Your domain, ad accounts, data and automations stay in your name. Leave whenever you like and take the whole engine with you.",
  },
];
