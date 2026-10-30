import Image from "next/image";
import { container, eyebrow, leadIn, linkLabel } from "./styles";

const facts = [
  { label: "BASED IN", value: "Devon, UK" },
  { label: "WORKING WITH", value: "Clients anywhere" },
];

// About me: portrait beside the name, a short bio, facts and a link.
export default function AboutMe() {
  return (
    <section
      id="about-me"
      className={`${container} grid items-end gap-16 pb-[140px] pt-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]`}
    >
      <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden">
        <Image
          src="/about-1.jpg"
          alt="Portrait of Tim Brown"
          fill
          sizes="(min-width: 840px) 520px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="m-0 flex flex-col leading-[0.9]">
          <em className={`${leadIn} pl-[0.6em]`}>About</em>
          <span className="font-display text-[clamp(64px,9vw,128px)] font-light tracking-[-0.01em]">
            TIM BROWN
          </span>
        </h2>
        <div className="flex flex-col gap-5">
          <p className="m-0 text-[clamp(22px,2.2vw,28px)] leading-[1.3]">
            I&apos;m a website growth expert based in Devon, helping UK businesses look good and win
            more work online.
          </p>
          <p className="m-0 text-[19px] leading-[1.45] text-stone">
            I&apos;ve been designing websites and running marketing since 2010, long enough to see
            plenty of algorithm changes and tech shifts come and go. Now it&apos;s AI, and I&apos;m
            excited about how it can help small businesses automate the day-to-day and free up time
            for the work that matters. I&apos;m also embracing it for ongoing SEO services to make
            things more cost-effective for my customers.
          </p>
          <p className="m-0 text-[19px] leading-[1.45] text-stone">
            A Kiwi by birth, I now live in Devon with my wife and son. When I&apos;m not working,
            you&apos;ll find me watching rugby, cricket, American football or golf, or out exploring
            the South West countryside.
          </p>
        </div>
        <dl className="m-0 grid gap-8 border-t border-line pt-7 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-2">
              <dt className={eyebrow}>{f.label}</dt>
              <dd className="m-0 text-[17px]">{f.value}</dd>
            </div>
          ))}
        </dl>
        <a href="#contact" className={`${linkLabel} self-start border-b border-bone pb-1.5`}>
          LET&apos;S CONNECT →
        </a>
      </div>
    </section>
  );
}
