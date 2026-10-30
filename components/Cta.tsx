import { ContactButton } from "./ContactPanel";
import { btnLight } from "./styles";

export default function Cta() {
  return (
    <section id="contact" className="flex flex-col items-center gap-9 px-8 py-[180px] text-center">
      <h2 className="m-0 flex flex-col items-center font-display text-[clamp(48px,7vw,104px)] font-light leading-[0.95]">
        <span>
          LET&apos;S BUILD{" "}
          {/* On phones this drops to its own line rather than breaking mid-phrase. */}
          <em className="font-serif font-normal text-ash max-sm:block">the perfect site</em>
        </span>
        <em className="font-serif font-normal text-ash">for your business</em>
      </h2>
      <ContactButton className={btnLight}>GET STARTED</ContactButton>
    </section>
  );
}
