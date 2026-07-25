import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 active:scale-95";

const variants = {
  solid:
    "gradient-brand text-white shadow-[0_0_20px_rgba(155,89,182,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(155,89,182,0.3)]",
  outline:
    "border border-amethyst-500/40 bg-amethyst-500/10 text-white hover:-translate-y-1 hover:border-amethyst-400 hover:bg-amethyst-500/20",
  ghost:
    "border border-klein-500/40 bg-klein-500/10 text-klein-300 hover:-translate-y-1 hover:border-klein-400 hover:bg-klein-500/20",
  pill: "gradient-brand rounded-full px-10 py-4 text-[1.05rem] text-white shadow-[0_0_20px_rgba(155,89,182,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(155,89,182,0.4)]",
} as const;

type Variant = keyof typeof variants;

export function GradientLink({
  href,
  variant = "solid",
  className = "",
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function GradientButton({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
