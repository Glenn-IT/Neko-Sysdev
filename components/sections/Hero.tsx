import { TypingHeadline } from "@/components/interactive/TypingHeadline";
import { GradientLink } from "@/components/ui/GradientButton";
import { Icon } from "@/components/ui/Icon";
import { skills } from "@/lib/content/skills";
import { allProjects } from "@/lib/content/projects";
import { contact, socials } from "@/lib/content/siteConfig";
import { testimonials } from "@/lib/content/testimonials";

const buildTypes = [
  "Capstone Systems",
  "Web Applications",
  "Mobile Apps",
  "Desktop Software",
  "Thesis Projects",
];

/**
 * The only new copy on the site. The original page had no <h1> at all — it opened
 * straight into <h2>What We Offer</h2>, the single biggest ranking signal a page has.
 */
export function Hero() {
  const stats = [
    { value: skills.length, label: "technologies" },
    { value: allProjects.length, label: "project types" },
    { value: `${testimonials.length}`, label: "5-star reviews" },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-[5%] py-20 lg:px-[8%]">
      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-1/4 left-[15%] h-96 w-96 rounded-full"
      />
      <div
        aria-hidden="true"
        className="orb-klein pointer-events-none absolute right-[12%] bottom-1/4 h-80 w-80 rounded-full"
      />
      <div
        aria-hidden="true"
        className="orb-slateblue pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="text-center">
          {/* Status pill */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amethyst-500/20 bg-amethyst-500/10 px-4 py-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-success"
            />
            <span className="text-sm font-medium text-nav">
              Now booking capstone projects
            </span>
          </div>

          <p className="mb-3 font-mono text-lg font-medium text-amethyst-400">
            &lt;NeKo-SysDev /&gt;
          </p>

          <h1 className="text-[2.6rem] leading-[1.1] font-extrabold text-white sm:text-[3.4rem] lg:text-[4rem]">
            We build{" "}
            <span className="block sm:inline">
              <TypingHeadline phrases={buildTypes} />
            </span>{" "}
            <span className="block">in the Philippines</span>
          </h1>

          {/* The rotating phrases, readable by crawlers and screen readers. */}
          <p className="sr-only">
            NeKo-SysDev builds {buildTypes.join(", ")} for students and small
            businesses in the Philippines.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted lg:text-[1.15rem]">
            Capstone system developers from {contact.address.locality},{" "}
            {contact.address.region}. We design, build, and hand over complete
            systems — then stay with you through documentation, training, and
            your final defense. Not overkill, not kulang.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientLink href="/services">
              View Our Packages
              <Icon name="FaChevronDown" className="text-sm" />
            </GradientLink>
            <GradientLink href="/contact" variant="outline">
              Talk to Us
            </GradientLink>
            <GradientLink href="/projects" variant="ghost">
              Browse {allProjects.length} Project Ideas
            </GradientLink>
          </div>

          {/* Stats + socials */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <dl className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-gradient font-mono text-2xl font-bold">
                    {stat.value}
                  </dt>
                  <dd className="text-xs tracking-wide text-muted uppercase">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div aria-hidden="true" className="h-10 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              {socials.slice(0, 2).map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass group rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20"
                >
                  <Icon
                    name={social.icon}
                    className="text-muted transition-colors group-hover:text-amethyst-400"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="animate-icon-bounce absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex"
      >
        <span className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
          Scroll
        </span>
        <Icon name="FaChevronDown" className="text-amethyst-400" />
      </div>
    </section>
  );
}
