type Service = { title: string; body: string; iconSrc: string };

const services: Service[] = [
  {
    title: "Website Builds",
    body: "Beautiful looks, blazing fast websites that convert viewers into leads. From the copy to the visuals, you'll have a website to be proud of, adapting seamlessly across all device types.",
    iconSrc: "/icons/globe.webp",
  },
  {
    title: "Optimisation",
    body: "I get more local customers to your website through Google and AI search, then keep improving the site so more of them turn into enquiries to grow your business.",
    iconSrc: "/icons/chart.webp",
  },
  {
    title: "AI & Automation",
    body: "Implementation of AI & Automation workflows to help free up more of your time and grow. With all of the noise about AI, I help to cut through that and find what works practically for your business.",
    iconSrc: "/icons/layers.webp",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-rule">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid grid-cols-1 bg-white lg:grid-cols-3">
          {services.map((service, i) => {
            const isLast = i === services.length - 1;
            const borders = [
              i === 0 ? "lg:border-l" : "",
              "lg:border-r",
              !isLast ? "border-b lg:border-b-0" : "",
            ].join(" ");
            return (
              <div
                key={service.title}
                className={`flex flex-col gap-10 border-rule p-[40px_24px_36px] lg:gap-[150px] lg:p-[66px_40px_56px] ${borders}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.iconSrc}
                  alt=""
                  className="h-[70px] w-[70px] object-contain"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-[14px]">
                  <h3 className="m-0 font-bebas text-[34px] font-normal">{service.title}</h3>
                  <p className="m-0 text-[16px] leading-[1.7] text-ink-soft">{service.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
