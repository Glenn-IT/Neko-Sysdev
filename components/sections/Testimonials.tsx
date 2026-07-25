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
      className="relative overflow-hidden bg-base px-[5%] py-20 lg:px-[8%] lg:py-25"
    >
      <SectionHeading
        as={headingLevel}
        accent="Clients Say"
        subtitle="Real feedback from students and businesses we've helped"
      >
        What Our
      </SectionHeading>

      <div className="mt-14">
        <TestimonialSlider />
      </div>
    </section>
  );
}
