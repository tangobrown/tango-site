// The different ways clients work with Tim — an escalating set of engagements.
type Way = { n: string; title: string; body: string };

const ways: Way[] = [
  {
    n: "01",
    title: "Build & host",
    body: "I design and build your website, and host it — kept fast, secure and up to date so you never have to think about it.",
  },
  {
    n: "02",
    title: "Build & optimise",
    body: "I design and build your website, and optimise it for SEO on an ongoing basis — steadily growing the search traffic and enquiries that matter.",
  },
  {
    n: "03",
    title: "Fully embedded",
    body: "I become entrenched in your business — website, SEO, automation and AI working together, run by one person who knows how it all fits.",
  },
];

export default function WaysToWork() {
  return (
    <section className="py-16 lg:pb-[116px] lg:pt-[64px]">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:max-w-[640px]">
          <h2 className="m-0 font-bebas text-[clamp(32px,3.3vw,50px)] font-normal leading-[1.15]">
            Ways to work together
          </h2>
          <p className="m-0 text-[16px] leading-[1.75] text-ink-soft">
            However far you want to take it — from a single build to a standing partnership. Most
            people start at one and move down over time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-16 lg:gap-12">
          {ways.map((way) => (
            <div key={way.n} className="flex flex-col gap-4 border-t border-rule pt-6">
              <span className="font-bebas text-[34px] leading-none text-rust">{way.n}</span>
              <h3 className="m-0 font-bebas text-[26px] font-normal leading-[1.1]">{way.title}</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-ink-soft">{way.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
