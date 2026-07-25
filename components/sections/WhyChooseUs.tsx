import { Reveal } from "@/components/effects/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/content/benefits";

export function WhyChooseUs({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const CardTitle = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-klein pointer-events-none absolute top-1/3 right-[15%] h-80 w-80 rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        eyebrow="// why us"
        accent="Us?"
        subtitle="Your trusted partners for capstone success"
      >
        Why Choose
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} delay={i * 80} className="h-full">
            <article className="card-surface card-hover shine group h-full rounded-2xl p-8 text-center">
              <div className="gradient-brand mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(155,89,182,0.4)] transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                <Icon name={benefit.icon} className="text-2xl text-white" />
              </div>
              <CardTitle className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-amethyst-300">
                {benefit.title}
              </CardTitle>
              <p className="leading-relaxed text-muted">{benefit.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
