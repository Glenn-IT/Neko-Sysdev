import { ProjectAccordion } from "@/components/interactive/ProjectAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mobileProjects, webProjects } from "@/lib/content/projects";

export function Projects({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section
      id="projects"
      className="relative bg-[linear-gradient(135deg,#0f0f0f_0%,#1a1a2e_100%)] px-[5%] py-20 text-center lg:px-[8%] lg:py-25"
    >
      <div className="glow-center pointer-events-none absolute inset-0" />

      <div className="relative z-10">
        <SectionHeading
          as={headingLevel}
          accent="Projects"
          subtitle="Comprehensive system solutions for modern challenges in the Philippines"
        >
          Capstone
        </SectionHeading>

        <div className="mt-14">
          <ProjectAccordion projects={webProjects} />
        </div>

        <div className="mt-20">
          <SectionHeading
            accent="Capstone Projects"
            subtitle="Android and Cross-Platform Mobile Solutions"
          >
            Mobile Application
          </SectionHeading>

          <div className="mt-14">
            <ProjectAccordion projects={mobileProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
