"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { navLinks } from "@/lib/content/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(10,10,26,0.85)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4 lg:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-amethyst-500/30 bg-amethyst-500/10 transition-all duration-300 group-hover:border-amethyst-400 group-hover:shadow-[0_0_20px_rgba(155,89,182,0.4)]">
            <Image
              src="/img/neko-header.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Ne<span className="text-gradient">Ko-SysDev</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      active
                        ? "text-amethyst-400"
                        : "text-nav hover:text-amethyst-400"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`gradient-brand absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass cursor-pointer rounded-xl p-2.5 text-xl text-white md:hidden"
          >
            <Icon name={open ? "FaTimes" : "FaBars"} />
          </button>
        </nav>
      </div>

      {/* Mobile menu — kept in the DOM so crawlers still read the links. */}
      <ul
        id="mobile-menu"
        className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-white/10 bg-[rgba(10,10,26,0.95)] px-[5%] pb-5 backdrop-blur-xl md:hidden`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-lg px-2 py-3 text-nav transition-colors duration-200 hover:bg-amethyst-500/10 hover:text-amethyst-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
