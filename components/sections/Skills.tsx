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
      className="bg-base px-[5%] py-20 lg:px-[8%] lg:py-25"
      aria-labelledby="skills-heading"
    >
      <SectionHeading
        as={headingLevel}
        id="skills-heading"
        subtitle="Tools and technologies we master to build exceptional solutions"
      >
        Skills &amp; Technologies
      </SectionHeading>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="shine card-surface group rounded-2xl border border-brand/10 px-6 py-9 text-center transition-all duration-300 hover:-translate-y-2.5 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)]"
          >
            <Icon
              name={skill.icon}
              className="mx-auto mb-5 text-[3rem] text-brand transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
            />
            <CardTitle className="mb-3 text-[1.3rem] font-semibold text-white">
              {skill.title}
            </CardTitle>
            <p className="text-[0.95rem] leading-[1.6] text-muted">
              {skill.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
