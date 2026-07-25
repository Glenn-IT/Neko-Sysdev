import { TestimonialSlider } from "@/components/interactive/TestimonialSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-1/4 left-[20%] h-80 w-80 rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        eyebrow="// reviews"
        accent="Clients Say"
        subtitle="Real feedback from students and businesses we've helped"
      >
        What Our
      </SectionHeading>

      <div className="relative z-10 mt-16">
        <TestimonialSlider />
      </div>
    </section>
  );
}
