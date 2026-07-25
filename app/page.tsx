import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, offerCatalogSchema, reviewsSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "NeKo-SysDev | Professional Capstone System Developers Philippines",
  description:
    "NeKo-SysDev - Professional capstone system developers offering web, mobile, and desktop application solutions for students and businesses in the Philippines. Expert in PHP, Laravel, Android, Flutter, and more.",
  path: "/",
});

/** Every section, in the original order — the scroll experience is unchanged. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <Skills />
      <Projects />
      <Contact />
      <JsonLd data={[offerCatalogSchema(), reviewsSchema(), faqSchema()]} />
    </>
  );
}
