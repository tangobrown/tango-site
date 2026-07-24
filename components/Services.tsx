import { services } from "@/data/services";
import Image from "next/image";

/**
 * 2x2 grid of service cards. Each card is an image placeholder on
 * top (or a real /public image if imageSrc is set) with a solid
 * green panel underneath containing the number, title, description
 * and a hairline-divided "Includes" list of four points.
 *
 * Card palettes alternate — 01 and 04 use the darker green
 * (#2f4131 / #c7d1bc body); 02 and 03 use the olive (#33352f /
 * #c8c8bd). Values come from the tailwind theme.
 */
export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-rule"
      style={{ scrollMarginTop: "20px" }}
    >
      <div className="container-tb pt-24 pb-10">
        <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
          What I do
        </div>
        <h2
          className="font-heading font-medium leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px,3.4vw,46px)", maxWidth: "16ch" }}
        >
          Four ways I help your business grow.
        </h2>
      </div>
      <div className="container-tb pt-12 pb-[104px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((svc) => {
          const bg = svc.palette === "green" ? "bg-card-green" : "bg-card-olive";
          const bodyColor =
            svc.palette === "green" ? "text-card-greenText" : "text-card-oliveText";
          return (
            <article key={svc.num} className="flex flex-col">
              {/* Image slot */}
              <div className="relative w-full h-[260px] overflow-hidden bg-placeholderTile">
                {svc.imageSrc && (
                  <Image
                    src={svc.imageSrc}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                  />
                )}
              </div>
              {/* Panel */}
              <div className={`${bg} flex-1 px-11 pt-11 pb-10 text-[#eef0e6] flex flex-col`}>
                <div className="font-heading font-light text-xl text-[#a7ab98] mb-3.5">
                  {svc.num}
                </div>
                <h3 className="font-heading font-medium text-[32px] tracking-[-0.01em] text-white">
                  {svc.title}
                </h3>
                <p className={`mt-[18px] text-base leading-[1.68] font-light ${bodyColor}`}>
                  {svc.description}
                </p>
                <div className="mt-7 flex flex-col">
                  {svc.points.map((pt) => (
                    <div
                      key={pt}
                      className={`text-[15px] leading-[1.5] font-light py-[9px] ${bodyColor}`}
                      style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}
                    >
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
