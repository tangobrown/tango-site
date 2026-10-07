import { expectations } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";

function Item({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-[30px] whitespace-nowrap text-[17px] font-medium">
      {text}
      <span className="opacity-70">
        <ArrowIcon size={14} />
      </span>
    </span>
  );
}

// Green "what to expect" marquee. The list is duplicated back-to-back so the
// -50% loop is seamless; hovering pauses it.
export default function ExpectationsBand() {
  return (
    <section aria-label="What to expect" className="overflow-hidden bg-brand py-[15px] text-white">
      <div className="marquee-group">
        <div className="marquee-track flex w-max animate-marquee items-center gap-[30px]">
          {expectations.map((text) => (
            <Item key={`a-${text}`} text={text} />
          ))}
          <span aria-hidden="true" className="contents">
            {expectations.map((text) => (
              <Item key={`b-${text}`} text={text} />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
