import { container, displayWord, leadIn, linkLabel } from "./styles";

const audiences = [
  {
    num: "01.",
    title: "SERVICE BUSINESSES",
    desc: "Builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    points: [
      "Bespoke websites that look stunning on every device",
      "SEO for better rankings in search & AI",
      "Built to turn browsers into leads in your inbox",
    ],
    link: "WEBSITES FOR SERVICE BUSINESSES",
    stagger: "",
  },
  {
    num: "02.",
    title: "E-COMMERCE STORES",
    desc: "Custom online stores for ambitious UK brands that want a super-fast site on modern technology.",
    points: [
      "Online shops built to convert users into buyers",
      "Bespoke functionality to suit your business",
      "Optimised to bring more visitors to your store",
    ],
    link: "WEBSITES FOR ONLINE STORES",
    stagger: "min-[1080px]:pt-24",
  },
  {
    num: "03.",
    title: "AI SERVICES",
    desc: "Practical AI solutions for small to medium-sized businesses — less admin, sharper decisions.",
    points: [
      "Automation of repetitive tasks & workflows",
      "Dashboards that turn your data into decisions",
      "Custom tools & integrations with the software you already use",
      "Secure, private set-ups that protect your business data",
    ],
    link: "AI SERVICES",
    stagger: "min-[1080px]:pt-48",
  },
];

// What I build: right-aligned title, then three staggered columns (the
// stagger only applies when all three sit side by side).
export default function Build() {
  return (
    <section id="make" className={`${container} flex flex-col gap-20 pb-[140px] pt-20`}>
      <h2 className="m-0 flex flex-col items-end self-end leading-[0.9]">
        <em className={`${leadIn} pr-[0.6em]`}>What I</em>
        <span className={displayWord}>BUILD</span>
      </h2>
      <div className="grid gap-14 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {audiences.map((a) => (
          <div key={a.title} className={`flex flex-col items-start gap-6 ${a.stagger}`}>
            <div className="flex items-baseline gap-3">
              <em className="text-[22px] text-ember">{a.num}</em>
              <h3 className="m-0 font-display text-[32px] font-light tracking-[0.01em]">{a.title}</h3>
            </div>
            <p className="m-0 max-w-[440px] text-[19px] leading-[1.45] text-stone">{a.desc}</p>
            <ul className="m-0 flex w-full list-none flex-col border-t border-line p-0">
              {a.points.map((p) => (
                <li key={p} className="border-b border-line py-3.5 text-[17px] leading-[1.4]">
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className={linkLabel}>
              {a.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
