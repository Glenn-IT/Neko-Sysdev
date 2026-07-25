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
    <h3 className="relative mb-10 text-center text-[1.6rem] font-semibold text-white after:mx-auto after:mt-4 after:block after:h-1 after:w-20 after:rounded-sm after:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] lg:text-[2rem]">
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
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0f0f1a_0%,#1a1a2e_100%)] px-[5%] py-20 lg:px-[8%] lg:py-25"
    >
      <div className="glow-left pointer-events-none absolute inset-0" />

      <SectionHeading
        as={headingLevel}
        accent="Work With You"
        subtitle="Seamless collaboration through every step of your project"
      >
        How We
      </SectionHeading>

      <div className="relative z-10 mt-14">
        <div className="card-surface-alt mx-auto mb-16 max-w-3xl rounded-[20px] border-2 border-brand/30 p-10 text-center transition-all duration-[400ms] hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
          <div className="gradient-brand mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full shadow-[0_10px_30px_rgba(79,70,229,0.4)]">
            <Icon
              name={processIntro.icon}
              className="text-[2.5rem] text-white"
            />
          </div>
          <h3 className="mb-4 text-[1.6rem] font-semibold text-white lg:text-[2rem]">
            {processIntro.title}
          </h3>
          <p className="text-[1.05rem] leading-[1.8] text-nav">
            {processIntro.text}
          </p>
        </div>

        <div className="mb-20">
          <SubHeading>Meeting &amp; Discussion Options</SubHeading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {meetingOptions.map((option) => (
              <article
                key={option.title}
                className="shine card-surface-alt group rounded-2xl border-2 border-brand/20 px-6 py-9 text-center transition-all duration-[400ms] hover:-translate-y-2.5 hover:border-brand/60 hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)]"
              >
                <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-brand/20 transition-all duration-[400ms] group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)]">
                  <Icon
                    name={option.icon}
                    className="text-[2rem] text-accent transition-colors duration-[400ms] group-hover:text-white"
                  />
                </div>
                <h4 className="mb-3 text-[1.4rem] font-semibold text-white">
                  {option.title}
                </h4>
                <p className="text-[0.95rem] leading-[1.6] text-muted">
                  {option.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SubHeading>What We Provide</SubHeading>
          <div className="grid gap-6 lg:grid-cols-2">
            {providedFeatures.map((feature) => (
              <article
                key={feature.title}
                className="card-surface-alt group flex items-start gap-5 rounded-xl border border-brand/20 p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-brand/50 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)]"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] bg-brand/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)]">
                  <Icon
                    name={feature.icon}
                    className="text-[1.5rem] text-accent transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-[1.2rem] font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-[0.95rem] leading-[1.6] text-muted">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[20px] border-2 border-brand/40 bg-[linear-gradient(135deg,rgba(79,70,229,0.2)_0%,rgba(124,58,237,0.2)_100%)] px-10 py-12">
            <div className="animate-glow-pulse pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)]" />
            <h3 className="relative z-10 mb-4 text-[1.6rem] font-bold text-white lg:text-[2rem]">
              {workCta.title}
            </h3>
            <p className="relative z-10 mb-8 text-[1.1rem] text-nav">
              {workCta.text}
            </p>
            <div className="relative z-10">
              <ScheduleModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
