import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, socials } from "@/lib/content/siteConfig";
import { team } from "@/lib/content/team";

const infoBox =
  "card-surface flex items-start gap-5 rounded-xl border border-brand/10 p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-brand/30 hover:shadow-[0_8px_25px_rgba(79,70,229,0.15)]";
const iconBox =
  "gradient-brand flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] text-[1.3rem] text-white";
const linkStyle =
  "block text-[0.95rem] leading-[1.6] text-muted transition-all duration-300 hover:pl-1.5 hover:text-brand";
const iconLink =
  "flex items-center justify-center rounded-[10px] border border-brand/20 bg-brand/10 text-brand transition-all duration-300 hover:-translate-y-[3px] hover:border-transparent hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] hover:text-white hover:shadow-[0_5px_15px_rgba(79,70,229,0.3)]";

export function Contact({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const CardTitle = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="contact"
      className="relative bg-[linear-gradient(135deg,#0a0a0a_0%,#16213e_100%)] px-[5%] py-20 text-center lg:px-[8%] lg:py-25"
    >
      <SectionHeading
        as={headingLevel}
        accent="Touch"
        subtitle="Let's discuss your next capstone project"
      >
        Get In
      </SectionHeading>

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Contact details */}
        <address className="flex flex-col gap-7 text-left not-italic">
          <div className={infoBox}>
            <div className={iconBox}>
              <Icon name="FaEnvelope" />
            </div>
            <div>
              <h3 className="mb-2.5 text-[1.1rem] font-semibold text-white">
                Email Us
              </h3>
              {contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className={linkStyle}>
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className={infoBox}>
            <div className={iconBox}>
              <Icon name="FaPhoneAlt" />
            </div>
            <div>
              <h3 className="mb-2.5 text-[1.1rem] font-semibold text-white">
                Call Us
              </h3>
              {contact.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className={linkStyle}
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <div className={infoBox}>
            <div className={iconBox}>
              <Icon name="FaMapMarkerAlt" />
            </div>
            <div>
              <h3 className="mb-2.5 text-[1.1rem] font-semibold text-white">
                Location
              </h3>
              <p className="text-[0.95rem] leading-[1.6] text-muted">
                {contact.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="card-surface rounded-xl border border-brand/10 p-6">
            <h3 className="mb-5 text-[1.1rem] font-semibold text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={`${iconLink} h-[45px] w-[45px] text-[1.2rem]`}
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </address>

        {/* Team */}
        <div className="flex flex-col gap-7">
          {team.map((member) => (
            <article
              key={member.name}
              className="card-surface group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-brand/10 p-8 text-left transition-all duration-300 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:origin-top before:scale-y-0 before:bg-[linear-gradient(180deg,#4f46e5,#7c3aed)] before:transition-transform before:duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_12px_35px_rgba(79,70,229,0.2)] hover:before:scale-y-100"
            >
              <div className="h-25 w-25 shrink-0 overflow-hidden rounded-xl border-[3px] border-brand/30 transition-all duration-300 group-hover:scale-105 group-hover:border-brand">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at NeKo-SysDev`}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <CardTitle className="mb-1 text-[1.4rem] font-semibold text-white">
                  {member.name}
                </CardTitle>
                <p className="mb-2 text-[0.95rem] font-semibold text-accent">
                  {member.role}
                </p>
                <p className="mb-4 text-[0.9rem] leading-[1.5] text-muted">
                  {member.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    title="Email"
                    className={`${iconLink} h-[38px] w-[38px]`}
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
                      className={`${iconLink} h-[38px] w-[38px]`}
                    >
                      <Icon name={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
