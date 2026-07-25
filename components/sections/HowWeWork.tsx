import { Reveal } from "@/components/effects/Reveal";
import { ScheduleModal } from "@/components/interactive/ScheduleModal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  meetingOptions,
  processIntro,
  providedFeatures,
  workCta,
} from "@/lib/content/workProcess";

function SubHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-10 text-center text-2xl font-bold text-white after:mx-auto after:mt-4 after:block after:h-[3px] after:w-16 after:rounded-full after:bg-[linear-gradient(135deg,#9b59b6,#6a5acd)] lg:text-3xl">
      {children}
    </h3>
  );
}

export function HowWeWork({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-slateblue pointer-events-none absolute top-1/4 left-[10%] h-[500px] w-[500px] rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        eyebrow="// process"
        accent="Work With You"
        subtitle="Seamless collaboration through every step of your project"
      >
        How We
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-16 max-w-7xl">
        <Reveal>
          <div className="card-surface mx-auto mb-20 max-w-3xl rounded-2xl border-amethyst-500/25 p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/50 hover:shadow-[0_20px_60px_rgba(155,89,182,0.3)]">
            <div className="gradient-brand mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(155,89,182,0.4)]">
              <Icon name={processIntro.icon} className="text-2xl text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              {processIntro.title}
            </h3>
            <p className="leading-relaxed text-nav">{processIntro.text}</p>
          </div>
        </Reveal>

        <div className="mb-20">
          <SubHeading>Meeting &amp; Discussion Options</SubHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {meetingOptions.map((option, i) => (
              <Reveal key={option.title} delay={i * 80} className="h-full">
                <article className="card-surface card-hover shine group h-full rounded-2xl p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-amethyst-500/20 bg-amethyst-500/15 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,#9b59b6,#6a5acd)]">
                    <Icon
                      name={option.icon}
                      className="text-xl text-amethyst-400 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-white">
                    {option.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">
                    {option.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <SubHeading>What We Provide</SubHeading>
          <div className="grid gap-5 lg:grid-cols-2">
            {providedFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 70} className="h-full">
                <article className="card-surface group flex h-full items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-amethyst-500/35 hover:shadow-[0_10px_40px_rgba(155,89,182,0.2)]">
                  <div className="gradient-cool flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Icon name={feature.icon} className="text-lg text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {feature.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-amethyst-500/30 bg-[linear-gradient(135deg,rgba(155,89,182,0.16)_0%,rgba(0,47,167,0.16)_100%)] px-10 py-12 text-center backdrop-blur-sm">
            <div
              aria-hidden="true"
              className="orb-amethyst pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full"
            />
            <h3 className="relative z-10 mb-4 text-2xl font-bold text-white lg:text-3xl">
              {workCta.title}
            </h3>
            <p className="relative z-10 mb-8 text-nav">{workCta.text}</p>
            <div className="relative z-10">
              <ScheduleModal />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
