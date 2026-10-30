import { container, eyebrow, statement } from "./styles";

const principles = [
  { num: "i.", title: "NO AGENCY", desc: "You deal with me — never an account manager or a junior." },
  { num: "ii.", title: "REAL OWNERSHIP", desc: "Your website is my responsibility, month after month." },
  {
    num: "iii.",
    title: "NO AGENCY FEES",
    desc: "Proper marketing help without the overheads that put small businesses off.",
  },
];

// How I work: label + statement, then three short principles.
export default function Principles() {
  return (
    <section
      className={`${container} grid grid-cols-1 gap-x-16 gap-y-12 pb-[140px] pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]`}
    >
      <span className={`${eyebrow} pt-2.5`}>HOW I WORK</span>
      <div className="flex flex-col gap-16">
        <p className={statement}>
          One person, real ownership. <span className="text-smoke">No agency layers in between.</span>
        </p>
        <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col gap-2.5">
              <em className="text-[20px] text-ash">{p.num}</em>
              <h3 className="m-0 font-display text-[14px] font-normal tracking-[0.12em]">{p.title}</h3>
              <p className="m-0 text-[17px] leading-[1.45] text-ash">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
