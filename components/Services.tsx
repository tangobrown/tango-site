import type { ReactNode } from "react";

type Service = { title: string; body: string; icon: ReactNode };

const services: Service[] = [
  {
    title: "Web design",
    body: "Sites that load fast, read well and are built so you can update them yourself. Design, copy shaping and build, start to finish.",
    icon: (
      <>
        <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
        <path d="M9 20.5h6M12 17v3.5" />
      </>
    ),
  },
  {
    title: "Optimisation",
    body: "Local and technical SEO for people who'd rather be found than famous. Clear reporting, no monthly retainer padding.",
    icon: (
      <>
        <path d="M3 17l5.5-6 4 3.5L21 6" />
        <path d="M15.5 6H21v5.5" />
      </>
    ),
  },
  {
    title: "AI & automation",
    body: "The dull, repeated jobs — quotes, enquiries, admin — handled quietly in the background so your week gets shorter.",
    icon: (
      <>
        <path d="M3 18l5-11 5 11M4.7 14.4h6.6" />
        <path d="M18 17V6M18 6l-3 3M18 6l3 3" />
      </>
    ),
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
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rust"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
                <div className="flex flex-col gap-[14px]">
                  <h3 className="m-0 font-bebas text-[34px] font-normal">{service.title}</h3>
                  <p className="m-0 text-[15px] leading-[1.7] text-ink-soft">{service.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
