import Image from "next/image";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { team } from "@/lib/content/team";
import { breadcrumbSchema, peopleSchema, reviewsSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About NeKo System Developers Team — Santo Niño, Cagayan",
  description:
    "Meet the NeKo-SysDev team: Glenard Pagurayan (Lead Developer) and Lucky Padua (UI/UX & Frontend Specialist), capstone system developers based in Santo Niño, Cagayan. How we work with students, from first meeting to final defense.",
  path: "/about",
  keywords: [
    "NeKo-SysDev team",
    "capstone developer Cagayan",
    "system developer Santo Niño",
    "thesis developer Philippines",
  ],
});

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a2e_100%)] px-[5%] py-20 lg:px-[8%] lg:py-25">
        <div className="glow-left pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-[2.2rem] font-bold text-white sm:text-[2.6rem] lg:text-[3rem]">
            The Team Behind{" "}
            <span className="text-gradient">NeKo-SysDev</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-[1.8] text-nav">
            Two developers from Santo Niño, Cagayan building capstone systems,
            websites, and mobile apps for students and small businesses across
            the Philippines — and staying on until the defense is passed.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="card-surface group rounded-2xl border border-brand/10 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_12px_35px_rgba(79,70,229,0.2)]"
            >
              <div className="mx-auto h-30 w-30 overflow-hidden rounded-2xl border-[3px] border-brand/30 transition-all duration-300 group-hover:scale-105 group-hover:border-brand">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at NeKo-SysDev`}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-5 text-[1.4rem] font-semibold text-white">
                {member.name}
              </h2>
              <p className="mt-1 font-semibold text-accent">{member.role}</p>
              <p className="mt-1 text-[0.9rem] text-muted">
                {member.description}
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition-all duration-300 hover:-translate-y-[3px] hover:border-transparent hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] hover:text-white"
                >
                  <Icon name="FaEnvelope" />
                </a>
                {member.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${link.label}`}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition-all duration-300 hover:-translate-y-[3px] hover:border-transparent hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] hover:text-white"
                  >
                    <Icon name={link.icon} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />

      <JsonLd
        data={[
          ...peopleSchema(),
          reviewsSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
    </>
  );
}
