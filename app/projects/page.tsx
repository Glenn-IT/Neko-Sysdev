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

      <section className="bg-base px-[5%] py-16 text-center lg:px-[8%]">
        <h2 className="text-2xl font-semibold text-white">
          Have a different system in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          These are the systems we have built most often — but we take on new
          ideas too. Send us your topic and we&apos;ll scope it with you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <GradientLink href="/contact">Discuss Your Idea</GradientLink>
          <GradientLink href="/services" variant="outline">
            See Package Prices
          </GradientLink>
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
