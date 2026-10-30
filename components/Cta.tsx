import { ContactButton } from "./ContactPanel";
import { btnLight } from "./styles";

export default function Cta() {
  return (
    <section id="contact" className="flex flex-col items-center gap-9 px-8 py-[180px] text-center">
      <h2 className="m-0 font-display text-[clamp(56px,7vw,104px)] font-light leading-[0.95]">
        LET&apos;S BUILD <em className="font-serif font-normal text-ash">something good</em>
      </h2>
      <ContactButton className={btnLight}>GET STARTED</ContactButton>
    </section>
  );
}
