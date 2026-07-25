import Image from "next/image";
import { Reveal } from "@/components/effects/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, socials } from "@/lib/content/siteConfig";
import { team } from "@/lib/content/team";

const infoBox =
  "card-surface flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-amethyst-500/35 hover:shadow-[0_10px_40px_rgba(155,89,182,0.2)]";
const iconBox =
  "gradient-cool flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg text-white";
const linkStyle =
  "block text-sm text-muted transition-all duration-200 hover:translate-x-1 hover:text-amethyst-400";
const iconLink =
  "glass flex items-center justify-center rounded-xl text-amethyst-400 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20 hover:text-white";

export function Contact({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const CardTitle = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-[5%] py-24 lg:px-[8%]"
    >
      <div
        aria-hidden="true"
        className="orb-klein pointer-events-none absolute right-[15%] bottom-1/4 h-96 w-96 rounded-full"
      />

      <SectionHeading
        as={headingLevel}
        eyebrow="// contact"
        accent="Touch"
        subtitle="Let's discuss your next capstone project"
      >
        Get In
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-2">
        <address className="flex flex-col gap-6 text-left not-italic">
          <Reveal>
            <div className={infoBox}>
              <div className={iconBox}>
                <Icon name="FaEnvelope" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white">Email Us</h3>
                {contact.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className={linkStyle}>
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className={infoBox}>
              <div className={iconBox}>
                <Icon name="FaPhoneAlt" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white">Call Us</h3>
                {contact.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className={linkStyle}>
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className={infoBox}>
              <div className={iconBox}>
                <Icon name="FaMapMarkerAlt" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white">Location</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {contact.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="card-surface rounded-2xl p-6">
              <h3 className="mb-4 font-bold text-white">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`${iconLink} h-11 w-11`}
                  >
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </address>

        <div className="flex flex-col gap-6">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 120}>
              <article className="card-surface card-hover group flex items-center gap-6 rounded-2xl p-7 text-left">
                <div className="relative shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 scale-110 rounded-2xl bg-gradient-to-br from-amethyst-500/40 to-klein-500/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-amethyst-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-amethyst-400">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at NeKo-SysDev`}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-white">
                    {member.name}
                  </CardTitle>
                  <p className="mt-0.5 font-mono text-sm text-amethyst-400">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {member.description}
                  </p>
                  <div className="mt-4 flex gap-2.5">
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      title="Email"
                      className={`${iconLink} h-9 w-9 text-sm`}
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
                        title={link.label}
                        className={`${iconLink} h-9 w-9 text-sm`}
                      >
                        <Icon name={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
