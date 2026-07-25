import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPeso, services } from "@/lib/content/services";

export function Services({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const CardTitle = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="services"
      className="relative bg-[linear-gradient(135deg,#0f0f0f_0%,#1a1a2e_100%)] px-[5%] py-20 lg:px-[8%] lg:py-25"
    >
      <div className="glow-services pointer-events-none absolute inset-0" />

      <SectionHeading
        as={headingLevel}
        accent="Offer"
        subtitle="Tailored solutions for every need and budget"
      >
        What We
      </SectionHeading>

      <div className="relative z-10 mt-14 grid gap-9 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className={`top-bar card-surface flex flex-col rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2.5 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)] ${
              service.featured
                ? "border-2 border-brand/40 shadow-[0_10px_30px_rgba(79,70,229,0.2)]"
                : "border border-brand/10"
            }`}
          >
            {service.badge ? (
              <span className="gradient-brand absolute top-4 right-4 rounded-full px-3.5 py-1.5 text-[0.8rem] font-semibold tracking-[0.5px] text-white">
                {service.badge}
              </span>
            ) : null}

            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(79,70,229,0.15)_0%,rgba(124,58,237,0.15)_100%)] transition-all duration-300">
              <Icon name={service.icon} className="text-[2rem] text-brand" />
            </div>

            <CardTitle className="mb-5 text-[1.5rem] leading-[1.3] font-semibold text-white">
              {service.title}
            </CardTitle>

            <ul className="mb-6 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[0.95rem] leading-[1.8] text-nav"
                >
                  <Icon
                    name="FaCheck"
                    className="mt-1.5 shrink-0 text-[0.9rem] text-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <p className="mb-5 rounded-lg border-l-[3px] border-brand bg-brand/5 p-4 text-[0.9rem] leading-[1.6] text-muted">
              <strong className="font-semibold text-accent">
                {service.note.label}
              </strong>{" "}
              {service.note.text}
            </p>

            <p className="mt-auto rounded-[10px] border-2 border-brand/30 bg-[linear-gradient(135deg,rgba(79,70,229,0.1)_0%,rgba(124,58,237,0.1)_100%)] p-4 text-center transition-all duration-300">
              <span className="block text-[0.75rem] font-medium tracking-[1px] text-muted uppercase">
                {service.priceLabel}
              </span>
              <span className="text-gradient block text-[1.8rem] leading-none font-bold">
                {formatPeso(service.price)}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
