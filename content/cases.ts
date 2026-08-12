// 04 / Case studies. All four are invented placeholders pending real
// material and client permission to name them (handoff open question #2).
// The same image asset is used by both the carousel card and the panel.

export type CaseStudy = {
  slotId: string;
  title: string;
  tags: string;
  sector: string;
  problem: string;
  work: string;
  outcome: string;
};

export const cases: CaseStudy[] = [
  {
    slotId: "case-0",
    title: "Ridgeway Roofing",
    tags: "Web build · Local SEO",
    sector: "Trades & home services",
    problem:
      "A five-van roofing firm getting most of its work from word of mouth, with a site that hadn't been touched since 2018 and no way of knowing which jobs came from where.",
    work: "Rebuilt the site around the three services that actually make money, wrote the copy, set up call tracking, and cleaned up the Google Business Profile with real job photos and service-area pages.",
    outcome:
      "Enquiries now arrive with a source attached, so quoting time goes to the jobs worth quoting. The owner stopped paying a directory site a monthly fee to send him tyre-kickers.",
  },
  {
    slotId: "case-1",
    title: "Marlow Dental",
    tags: "Lead generation · Automation",
    sector: "Clinics & health practices",
    problem:
      "Plenty of website visits, very few bookings. Enquiries sat in an inbox overnight and patients booked with whoever answered first.",
    work: "Built a treatment-specific landing page, ran tightly matched search campaigns, and wired instant response: every enquiry gets a reply in under a minute, then two follow-ups if nobody books.",
    outcome:
      "No enquiry goes unanswered, and reception spends its time on patients in the chair rather than chasing emails.",
  },
  {
    slotId: "case-2",
    title: "Hale & Croft Legal",
    tags: "Web build · AI content",
    sector: "Professional services",
    problem:
      "A two-partner practice competing with firms that outspend them ten to one, and no time to write anything for the site.",
    work: "A fast, sober site that reads like the partners talk, plus an AI-assisted workflow that turns a ten-minute voice note into a publishable article the partners approve.",
    outcome:
      "The firm publishes consistently for the first time, and ranks for the specific matters it actually wants — not general 'solicitor near me' traffic.",
  },
  {
    slotId: "case-3",
    title: "Ember Kitchen",
    tags: "Automation · Lead generation",
    sector: "Hospitality & food",
    problem:
      "Bookings and function enquiries came in on three different channels and got lost between shifts.",
    work: "One intake form feeding a single pipeline, automatic confirmations and reminders, review requests after each visit, and a simple weekly report for the owner.",
    outcome:
      "Fewer no-shows, a steady stream of new reviews, and the owner sees the week's numbers without asking anyone.",
  },
];

export const casesFootnote = "Click any project to read what happened →";
