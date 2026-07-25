import { Services } from "@/components/sections/Services";
import { GradientLink } from "@/components/ui/GradientButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { formatPeso, services } from "@/lib/content/services";
import { breadcrumbSchema, faqSchema, offerCatalogSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Capstone & Website Packages — Prices from ₱3,000 | NeKo-SysDev Philippines",
  description: `Capstone system and website development packages in the Philippines: ${services
    .map((s) => `${s.title} from ${formatPeso(s.price)}`)
    .join(", ")}. Built with PHP, Laravel, MySQL, Android and Flutter.`,
  path: "/services",
  keywords: [
    "capstone system price Philippines",
    "website package price",
    "thesis system developer",
    "capstone project package",
    "web development package Philippines",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <Services headingLevel="h1" />

      <section className="relative px-[5%] pb-24 text-center lg:px-[8%]">
        <div className="card-surface mx-auto max-w-3xl rounded-2xl border-amethyst-500/25 p-10">
          <h2 className="text-2xl font-bold text-white">
            Not sure which package fits your project?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Tell us what your capstone or business needs and we&apos;ll tell you
            honestly which one is enough — not overkill, not kulang.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GradientLink href="/contact">Get a Recommendation</GradientLink>
            <GradientLink href="/projects" variant="outline">
              Browse Project Types
            </GradientLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          offerCatalogSchema(),
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
    </>
  );
}
