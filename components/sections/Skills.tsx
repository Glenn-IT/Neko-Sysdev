import { TechMarquee } from "@/components/interactive/TechMarquee";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24"
      aria-labelledby="skills-heading"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-1/4 right-[10%] h-96 w-96 rounded-full"
      />
      <div
        aria-hidden="true"
        className="orb-klein pointer-events-none absolute bottom-1/4 left-[8%] h-80 w-80 rounded-full"
      />

      {/* Heading Container with standard responsive padding */}
      <div className="px-[5%] lg:px-[8%]">
        <SectionHeading
          as={headingLevel}
          id="skills-heading"
          eyebrow="// stack"
          subtitle="Tools, frameworks, and hardware technologies we master to build exceptional solutions"
        >
          Skills &amp; Technologies
        </SectionHeading>
      </div>

      {/* Full-Width Infinite Sideways Looping Logo Marquee */}
      <div className="relative z-10 mt-14 w-full">
        <TechMarquee />
      </div>
    </section>
  );
}
