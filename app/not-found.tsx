import Link from "next/link";
import { GradientLink } from "@/components/ui/GradientButton";

export const metadata = {
  title: { absolute: "404 - Page Not Found | NeKo-SysDev" },
  robots: { index: false, follow: true },
};

/** Port of the original 404.html, with the fragment links pointed at the real routes. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-5 py-24 text-center">
      <div
        aria-hidden="true"
        className="orb-amethyst pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full"
      />

      <div className="relative z-10 max-w-[600px]">
        <p className="text-gradient font-mono text-[90px] leading-none font-extrabold md:text-[140px]">
          404
        </p>
        <h1 className="mt-5 text-2xl font-bold text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-4 mb-8 leading-relaxed text-muted">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted, or the URL might be incorrect.
        </p>

        <GradientLink href="/">Back to Home</GradientLink>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { href: "/services", label: "Our Services" },
            { href: "/projects", label: "View Projects" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-amethyst-400 transition-colors duration-300 hover:text-amethyst-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
