import { expectations } from "@/lib/site";

function Item({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-[26px] whitespace-nowrap font-bebas text-[22px] tracking-[0.045em] text-cream-text lg:text-[28px]">
      {text}
      <span className="h-[6px] w-[6px] flex-none rounded-full bg-rust" />
    </span>
  );
}

export default function ExpectationsBand() {
  return (
    <section className="mb-[30px] overflow-hidden bg-ink-dark py-[18px] lg:py-[26px]">
      <div className="marquee-group">
        {/* List duplicated back-to-back for a seamless -50% loop. */}
        <div className="marquee-track flex w-max animate-marquee-band items-center gap-[26px]">
          {expectations.map((text) => (
            <Item key={`a-${text}`} text={text} />
          ))}
          {expectations.map((text) => (
            <Item key={`b-${text}`} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
