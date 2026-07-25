import { Projects } from "@/components/sections/Projects";
import { GradientLink } from "@/components/ui/GradientButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { mobileProjects, webProjects } from "@/lib/content/projects";
import { breadcrumbSchema, projectListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${webProjects.length + mobileProjects.length} Capstone Project Ideas — Web & Mobile Systems | NeKo-SysDev`,
  description: `${webProjects.length} web-based capstone systems and ${mobileProjects.length} Android and Flutter mobile apps for Philippine students and LGUs — barangay information systems, health records, e-ticketing, POS, voting, disaster response and more, with the exact technology stack for each.`,
  path: "/projects",
  keywords: [
    "capstone project ideas Philippines",
    "IT capstone title",
    "barangay information system",
    "thesis system ideas",
    "Android capstone project",
    "Flutter capstone project",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <Projects headingLevel="h1" />

      <section className="relative px-[5%] pb-24 text-center lg:px-[8%]">
        <div className="card-surface mx-auto max-w-3xl rounded-2xl border-amethyst-500/25 p-10">
          <h2 className="text-2xl font-bold text-white">
            Have a different system in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            These are the systems we have built most often — but we take on new
            ideas too. Send us your topic and we&apos;ll scope it with you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GradientLink href="/contact">Discuss Your Idea</GradientLink>
            <GradientLink href="/services" variant="outline">
              See Package Prices
            </GradientLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          projectListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
    </>
  );
}
