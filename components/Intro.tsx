export default function Intro() {
  return (
    <section className="py-16 lg:pb-[104px] lg:pt-[120px]">
      <div
        data-reveal
        className="mx-auto grid max-w-content grid-cols-1 gap-6 px-5 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-[8vw] lg:px-8"
      >
        <h2 className="m-0 text-pretty font-bebas text-[clamp(34px,3.7vw,56px)] font-normal leading-[1.02] tracking-[0.01em]">
          Most small businesses don&apos;t need an agency. They need one person who takes real
          ownership.
        </h2>
        <div className="flex flex-col gap-[18px] lg:pt-[10px]">
          <p className="m-0 text-[17px] leading-[1.75] text-ink-soft">
            That&apos;s where I come in. I&apos;ll be your digital/website department who will take
            your success personally.
          </p>
          <p className="m-0 text-[17px] leading-[1.75] text-ink-soft">
            I&apos;ll work tirelessly each month to ensure your website looks good, outperforms your
            competition and attracts new leads for your business. You&apos;ll be dealing with me (not
            an account manager, or agency junior) and you won&apos;t pay agency fees that put off
            small businesses getting help with their marketing efforts.
          </p>
        </div>
      </div>
    </section>
  );
}
