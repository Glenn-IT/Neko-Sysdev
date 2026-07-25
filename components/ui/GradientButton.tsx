import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-3 rounded-lg px-8 py-3.5 text-[0.95rem] font-semibold transition-all duration-300";

const variants = {
  solid:
    "gradient-brand text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)]",
  outline:
    "border-2 border-brand text-brand hover:-translate-y-0.5 hover:bg-brand hover:text-white",
  pill: "gradient-brand rounded-full px-10 py-4 text-[1.1rem] text-white shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)]",
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
