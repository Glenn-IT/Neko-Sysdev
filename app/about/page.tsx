import Image from "next/image";
import { Reveal } from "@/components/effects/Reveal";
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
      <section className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]">
        <div
          aria-hidden="true"
          className="orb-amethyst pointer-events-none absolute top-1/4 left-[20%] h-96 w-96 rounded-full"
        />
        <div
          aria-hidden="true"
          className="orb-klein pointer-events-none absolute right-[15%] bottom-0 h-80 w-80 rounded-full"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 font-mono text-sm tracking-widest text-amethyst-400">
            {"// the team"}
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The Team Behind{" "}
            <span className="text-gradient">NeKo-SysDev</span>
          </h1>
          <div
            aria-hidden="true"
            className="gradient-brand mx-auto mt-5 h-[3px] w-20 rounded-full"
          />
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Two developers from Santo Niño, Cagayan building capstone systems,
            websites, and mobile apps for students and small businesses across
            the Philippines — and staying on until the defense is passed.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 120} className="h-full">
              <article className="card-surface card-hover group h-full rounded-2xl p-8 text-center">
                <div className="relative mx-auto h-28 w-28">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 scale-110 rounded-2xl bg-gradient-to-br from-amethyst-500/40 to-klein-500/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-amethyst-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-amethyst-400">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at NeKo-SysDev`}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="mt-5 text-xl font-bold text-white">
                  {member.name}
                </h2>
                <p className="mt-1 font-mono text-sm text-amethyst-400">
                  {member.role}
                </p>
                <p className="mt-1 text-sm text-muted">{member.description}</p>
                <div className="mt-5 flex justify-center gap-2.5">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="glass flex h-9 w-9 items-center justify-center rounded-xl text-sm text-amethyst-400 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20 hover:text-white"
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
                      className="glass flex h-9 w-9 items-center justify-center rounded-xl text-sm text-amethyst-400 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20 hover:text-white"
                    >
                      <Icon name={link.icon} />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
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
