export default function Intro() {
  return (
    <section className="py-16 lg:pb-[104px] lg:pt-[120px]">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-6 px-5 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-[8vw] lg:px-8">
        <h2 className="m-0 text-pretty font-bebas text-[clamp(34px,3.7vw,56px)] font-normal leading-[1.02] tracking-[0.01em]">
          Most small businesses don&apos;t need an agency. They need one person who takes real
          ownership.
        </h2>
        <div className="flex flex-col gap-[18px] lg:pt-[10px]">
          <p className="m-0 text-[17px] leading-[1.75] text-ink-soft">
            I&apos;ve spent the last decade building sites for joiners, bars and economists — and for
            teams at the World Bank. Same approach either way: understand the business, write it down
            plainly, then build something quick and easy to look after.
          </p>
          <p className="m-0 text-[17px] leading-[1.75] text-ink-soft">
            You talk to me from the first call to launch. No handovers, no account managers, no
            surprise invoices.
          </p>
        </div>
      </div>
    </section>
  );
}
