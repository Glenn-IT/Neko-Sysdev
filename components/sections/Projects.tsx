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
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-slateblue pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          as={headingLevel}
          eyebrow="// portfolio"
          accent="Projects"
          subtitle="Comprehensive system solutions for modern challenges in the Philippines"
        >
          Capstone
        </SectionHeading>

        <div className="mt-16">
          <ProjectAccordion projects={webProjects} category="Web System" />
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="// mobile"
            accent="Capstone Projects"
            subtitle="Android and Cross-Platform Mobile Solutions"
          >
            Mobile Application
          </SectionHeading>

          <div className="mt-16">
            <ProjectAccordion
              projects={mobileProjects}
              category="Mobile App"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
