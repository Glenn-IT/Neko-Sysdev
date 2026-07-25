"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { navLinks } from "@/lib/content/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-[rgba(10,10,10,0.95)] backdrop-blur-[10px] transition-all duration-300 hover:shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-[5%] py-4 lg:px-[8%] lg:py-5">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[1.4rem] font-semibold tracking-[1px] text-white lg:text-[1.6rem]"
        >
          <Image
            src="/img/neko-header.png"
            alt="NeKo-SysDev logo"
            width={45}
            height={45}
            priority
            className="h-[38px] w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg] lg:h-[45px]"
          />
          <span>
            Ne<span className="font-bold text-brand">Ko-SysDev</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <li key={link.href} className="mx-4 lg:mx-5">
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="relative text-[0.95rem] font-medium text-nav transition-colors duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-[width] after:duration-300 hover:text-white hover:after:w-full aria-[current=page]:text-white aria-[current=page]:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="cursor-pointer p-1 text-2xl text-white md:hidden"
          >
            <Icon name={open ? "FaTimes" : "FaBars"} />
          </button>
        </nav>
      </div>

      {/* Mobile menu. Kept in the DOM and hidden with `hidden` so crawlers still read the links. */}
      <ul
        id="mobile-menu"
        className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-white/10 bg-base px-[5%] pb-5 md:hidden`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-3 text-nav transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
