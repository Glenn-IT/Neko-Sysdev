import { Reveal } from "@/components/effects/Reveal";
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
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-0 left-[20%] h-80 w-80 rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        eyebrow="// packages"
        accent="Offer"
        subtitle="Tailored solutions for every need and budget"
      >
        What We
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 90} className="h-full">
            <article
              className={`card-surface card-hover top-bar group relative flex h-full flex-col rounded-2xl p-8 ${
                service.featured
                  ? "border-amethyst-500/40 shadow-[0_0_30px_rgba(155,89,182,0.15)]"
                  : ""
              }`}
            >
              {service.badge ? (
                <span className="gradient-brand absolute top-4 right-4 z-10 rounded-lg px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  ⭐ {service.badge}
                </span>
              ) : null}

              <div className="gradient-cool mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-[0_0_20px_rgba(106,90,205,0.35)] transition-transform duration-300 group-hover:scale-110">
                <Icon name={service.icon} className="text-2xl text-white" />
              </div>

              <CardTitle className="mb-5 text-xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-amethyst-300">
                {service.title}
              </CardTitle>

              <ul className="mb-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-nav"
                  >
                    <Icon
                      name="FaCheck"
                      className="mt-1 shrink-0 text-xs text-amethyst-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mb-6 rounded-xl border border-amethyst-500/15 bg-white/[0.03] p-4 text-sm leading-relaxed text-muted">
                <strong className="font-semibold text-amethyst-300">
                  {service.note.label}
                </strong>{" "}
                {service.note.text}
              </p>

              <p className="mt-auto rounded-xl border border-amethyst-500/25 bg-amethyst-500/[0.07] p-4 text-center transition-all duration-300 group-hover:border-amethyst-500/50">
                <span className="block font-mono text-[0.7rem] tracking-[0.15em] text-muted uppercase">
                  {service.priceLabel}
                </span>
                <span className="text-gradient block text-3xl leading-tight font-extrabold">
                  {formatPeso(service.price)}
                </span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
