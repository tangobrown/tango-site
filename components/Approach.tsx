import Image from "next/image";
import { container, eyebrow, linkLabel, statement } from "./styles";

// The approach: label + statement, then a photo beside a short paragraph.
export default function Approach() {
  return (
    <section
      id="about"
      className={`${container} grid grid-cols-1 gap-x-16 gap-y-12 pb-[120px] pt-[140px] md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]`}
    >
      <span className={`${eyebrow} pt-3`}>THE APPROACH</span>
      <p className={statement}>
        Most small businesses don&apos;t need an agency. They need one person who takes real
        ownership.{" "}
        <span className="text-smoke">
          I&apos;ll be your website department — and take your success personally.
        </span>
      </p>

      <div className="relative aspect-[4/3] w-full self-end overflow-hidden">
        <Image
          src="/about-2.jpg"
          alt="Tim with a client"
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex max-w-[520px] flex-col items-start gap-7 self-end">
        <p className="m-0 text-[19px] leading-[1.45] text-stone">
          Each month I work to make sure your website looks good, outperforms your competition and
          brings in new leads or sales. You deal with me — not an account manager or an agency
          junior — and you don&apos;t pay agency fees.
        </p>
        <a href="#contact" className={linkLabel}>
          LET&apos;S CONNECT →
        </a>
      </div>
    </section>
  );
}
