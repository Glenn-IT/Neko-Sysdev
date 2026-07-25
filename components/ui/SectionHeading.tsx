import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Plain part of the heading. */
  children: ReactNode;
  /** Portion rendered in the three-stop gradient. */
  accent?: ReactNode;
  subtitle?: ReactNode;
  /** Small mono label above the heading, e.g. "// services". */
  eyebrow?: string;
  /** Render as <h1> on pages where this heading is the page title. */
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  children,
  accent,
  subtitle,
  eyebrow,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className="relative z-10 text-center">
      {eyebrow ? (
        <p className="mb-4 font-mono text-sm tracking-widest text-amethyst-400">
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
      >
        {children}
        {accent ? <span className="text-gradient"> {accent}</span> : null}
      </Tag>

      <div
        aria-hidden="true"
        className="gradient-brand mx-auto mt-5 h-[3px] w-20 rounded-full"
      />

      {subtitle ? (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
