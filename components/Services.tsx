type Service = { title: string; body: string; iconSrc: string };

const services: Service[] = [
  {
    title: "Web design",
    body: "Sites that load fast, read well and are built so you can update them yourself. Design, copy shaping and build, start to finish.",
    iconSrc: "/icons/globe.webp",
  },
  {
    title: "Optimisation",
    body: "Local and technical SEO for people who'd rather be found than famous. Clear reporting, no monthly retainer padding.",
    iconSrc: "/icons/chart.webp",
  },
  {
    title: "AI & automation",
    body: "The dull, repeated jobs — quotes, enquiries, admin — handled quietly in the background so your week gets shorter.",
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
                className={`flex flex-col gap-10 border-rule p-[40px_24px_48px] lg:gap-[150px] lg:p-[66px_40px_76px] ${borders}`}
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
