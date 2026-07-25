import { Reveal } from "@/components/effects/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/content/skills";

export function Skills({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const CardTitle = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
      aria-labelledby="skills-heading"
    >
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-1/4 right-[10%] h-96 w-96 rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        id="skills-heading"
        eyebrow="// stack"
        subtitle="Tools and technologies we master to build exceptional solutions"
      >
        Skills &amp; Technologies
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, i) => (
          <Reveal key={skill.title} delay={(i % 4) * 70} className="h-full">
            <article className="card-surface card-hover shine group h-full rounded-2xl p-6 text-center">
              <Icon
                name={skill.icon}
                className="mx-auto mb-4 text-4xl text-amethyst-400 transition-all duration-300 group-hover:scale-110 group-hover:text-amethyst-300"
              />
              <CardTitle className="mb-2 font-mono text-lg font-bold text-white">
                {skill.title}
              </CardTitle>
              <p className="text-sm leading-relaxed text-muted">{skill.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
