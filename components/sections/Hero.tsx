import { GradientLink } from "@/components/ui/GradientButton";
import { skills } from "@/lib/content/skills";
import { allProjects } from "@/lib/content/projects";
import { testimonials } from "@/lib/content/testimonials";

/**
 * The only new copy on the site. The original page had no <h1> at all — it opened
 * straight into <h2>What We Offer</h2>, which cost it the strongest ranking signal
 * a page has. Styling mirrors the `.home` block that already existed in style.css.
 */
export function Hero() {
  const stats = [
    { value: `${skills.length} technologies`, label: "we build with" },
    { value: `${allProjects.length} project types`, label: "web and mobile" },
    { value: "5-star student reviews", label: "from real defenses" },
  ];

  return (
    <section className="relative flex min-h-[80vh] items-center bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a2e_100%)] px-[5%] py-16 lg:px-[8%] lg:py-24">
      <div className="glow-left pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-5 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-accent">
          Santo Niño, Cagayan · Serving students & businesses nationwide
        </p>

        <h1 className="text-[2.4rem] leading-[1.2] font-bold text-white sm:text-[3rem] lg:text-[3.5rem]">
          Capstone System Developers in the{" "}
          <span className="text-gradient">Philippines</span>
        </h1>

        <h2 className="mt-4 text-[1.15rem] font-normal text-muted lg:text-[1.4rem]">
          Web, mobile, and desktop systems built for thesis defense and real
          business use
        </h2>

        <p className="mt-6 max-w-[90%] text-[1.05rem] leading-[1.8] text-nav lg:text-[1.1rem]">
          We design, build, and hand over complete systems — then stay with you
          through documentation, training, and your final defense. No overkill,
          no kulang, and no disappearing developer.
        </p>

        <div className="mt-9 flex flex-wrap gap-5">
          <GradientLink href="/services">View Our Packages</GradientLink>
          <GradientLink href="/contact" variant="outline">
            Talk to Us
          </GradientLink>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <dt className="text-lg font-semibold text-white">{stat.value}</dt>
              <dd className="text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
        <p className="sr-only">
          Based on {testimonials.length} five-star client reviews.
        </p>
      </div>
    </section>
  );
}
