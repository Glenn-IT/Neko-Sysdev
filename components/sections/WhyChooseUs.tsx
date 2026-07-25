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
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0a0a_0%,#16213e_100%)] px-[5%] py-20 lg:px-[8%] lg:py-25"
    >
      <div className="glow-left pointer-events-none absolute inset-0" />

      <SectionHeading
        as={headingLevel}
        accent="Us?"
        subtitle="Your trusted partners for capstone success"
      >
        Why Choose
      </SectionHeading>

      <div className="relative z-10 mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="shine card-surface group rounded-2xl border border-brand/10 p-10 text-center transition-all duration-[400ms] hover:-translate-y-2.5 hover:border-brand/50 hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)]"
          >
            <div className="gradient-brand mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-[400ms] group-hover:scale-110 group-hover:rotate-[360deg] group-hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)]">
              <Icon name={benefit.icon} className="text-[2rem] text-white" />
            </div>
            <CardTitle className="mb-4 text-[1.4rem] font-semibold text-white">
              {benefit.title}
            </CardTitle>
            <p className="leading-[1.7] text-muted">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
