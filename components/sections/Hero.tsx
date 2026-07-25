import Image from "next/image";
import { TypingHeadline } from "@/components/interactive/TypingHeadline";
import { GradientLink } from "@/components/ui/GradientButton";
import { Icon } from "@/components/ui/Icon";
import { skills } from "@/lib/content/skills";
import { allProjects } from "@/lib/content/projects";
import { contact, socials } from "@/lib/content/siteConfig";
import { team } from "@/lib/content/team";
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
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

          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted lg:mx-0 lg:text-[1.15rem]">
            Capstone system developers from {contact.address.locality},{" "}
            {contact.address.region}. We design, build, and hand over complete
            systems — then stay with you through documentation, training, and
            your final defense. Not overkill, not kulang.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
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

        {/* Team visual */}
        <div className="flex shrink-0 justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 animate-pulse rounded-full bg-gradient-to-br from-amethyst-500/30 to-klein-500/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute inset-[-16px] rounded-full border border-amethyst-500/20"
            />
            <div
              aria-hidden="true"
              className="animate-spin-reverse absolute inset-[-34px] rounded-full border border-slateblue-500/10"
            />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-amethyst-500/30 shadow-[0_0_20px_rgba(155,89,182,0.4)] sm:h-80 sm:w-80">
              <Image
                src={team[0].image}
                alt={`${team[0].name}, ${team[0].role} at NeKo-SysDev`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent"
              />
            </div>

            <div className="animate-float absolute -bottom-5 -left-6 rounded-xl border border-amethyst-500/30 bg-card px-4 py-2 font-mono text-xs font-semibold text-amethyst-400 shadow-[0_0_20px_rgba(155,89,182,0.4)]">
              PHP · Laravel · MySQL
            </div>
            <div
              className="animate-float absolute -top-3 -right-5 rounded-xl border border-klein-500/30 bg-card px-4 py-2 font-mono text-xs font-semibold text-klein-300 shadow-[0_0_20px_rgba(0,47,167,0.4)]"
              style={{ animationDelay: "2s" }}
            >
              Android · Flutter
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
