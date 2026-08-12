// 07 / FAQ. First item is open by default.

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Why are you cheaper than an agency?",
    a: "No office, no sales team, no layers of management billing your account. Modern tooling and automation do the work that used to need a department, so the cost of delivery is genuinely lower — I'm not discounting, I just have less to pay for.",
  },
  {
    q: "One person — what if you get hit by a bus?",
    a: "Everything is built in your accounts, documented, and portable. If I vanish tomorrow you keep the site, the ad accounts, the automations and the data, and any competent operator can pick it up. No proprietary platform holding you hostage.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Build work is fixed-scope and fixed-price. Ongoing work is month to month — if it stops paying for itself, you stop. That's the whole accountability mechanism.",
  },
  {
    q: "Is the AI stuff just hype?",
    a: "The hype is. The useful part is boring: answering every enquiry within a minute, chasing quotes nobody followed up, drafting content, and killing admin. Those move revenue for a small business more than anything fashionable.",
  },
  {
    q: "What if I already have a website I like?",
    a: "Then we don't touch it. Plenty of engagements are lead generation and automation only, on top of what you've got. I'll tell you honestly if the site is the thing holding you back.",
  },
  {
    q: "How do I know it's working?",
    a: "Tracking goes in before spend does — calls, forms, and where each lead came from. One page a month: leads in, cost per lead, what closed. If the numbers don't move, we change the plan or you leave.",
  },
];
