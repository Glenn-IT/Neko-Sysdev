import Link from "next/link";
import { GradientLink } from "@/components/ui/GradientButton";

export const metadata = {
  title: { absolute: "404 - Page Not Found | NeKo-SysDev" },
  robots: { index: false, follow: true },
};

/** Port of the original 404.html, with the fragment links pointed at the real routes. */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a2e_100%)] px-5 py-24 text-center">
      <div className="max-w-[600px]">
        <p className="text-gradient text-[80px] leading-none font-bold md:text-[120px]">
          404
        </p>
        <h1 className="mt-5 text-2xl font-semibold text-white md:text-[2rem]">
          Page Not Found
        </h1>
        <p className="mt-4 mb-8 text-base leading-[1.6] text-muted md:text-[1.1rem]">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted, or the URL might be incorrect.
        </p>

        <GradientLink href="/">Back to Home</GradientLink>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Link
            href="/services"
            className="text-[0.95rem] text-accent transition-colors duration-300 hover:text-brand"
          >
            Our Services
          </Link>
          <Link
            href="/projects"
            className="text-[0.95rem] text-accent transition-colors duration-300 hover:text-brand"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="text-[0.95rem] text-accent transition-colors duration-300 hover:text-brand"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
