import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contact, navLinks, siteConfig, socials } from "@/lib/content/siteConfig";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base-deep/60 px-[5%] py-14 backdrop-blur-sm lg:px-[8%]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">
            Ne<span className="text-gradient">Ko-SysDev</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Capstone system developers building web, mobile, and desktop
            solutions from {contact.address.locality}, {contact.address.region}.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass group rounded-lg p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20"
              >
                <Icon
                  name={social.icon}
                  className="text-sm text-muted transition-colors group-hover:text-amethyst-400"
                />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 font-mono text-xs tracking-widest text-amethyst-400 uppercase">
            Explore
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-amethyst-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-mono text-xs tracking-widest text-amethyst-400 uppercase">
            Get in touch
          </p>
          <ul className="space-y-2.5 text-sm text-muted">
            {contact.emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors duration-200 hover:text-amethyst-400"
                >
                  {email}
                </a>
              </li>
            ))}
            {contact.phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="transition-colors duration-200 hover:text-amethyst-400"
                >
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-muted">
        <p>
          © {siteConfig.foundingYear}{" "}
          <span className="font-semibold text-amethyst-400">
            {siteConfig.legalName}
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
