// 05 / Comparison. Agency figures and prices are placeholders (currency
// unconfirmed — likely GBP).

export type ComparisonRow = {
  item: string;
  agency: string;
  us: string;
};

export const comparisonRows: ComparisonRow[] = [
  { item: "Who builds it", agency: "Junior, offshore team", us: "Me, start to finish" },
  { item: "Setup fee", agency: "$8k–$25k", us: "From $2.5k" },
  { item: "Monthly retainer", agency: "$3k–$6k + ad spend", us: "From $900 + ad spend" },
  { item: "Contract", agency: "6–12 months locked", us: "Month to month" },
  { item: "Time to first campaign", agency: "8–12 weeks", us: "About 3 weeks" },
  { item: "Reporting", agency: "40 slides of impressions", us: "One page: leads, cost, revenue" },
  { item: "Who owns the accounts", agency: "The agency, usually", us: "You, always" },
];
