import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Plain part of the heading. */
  children: ReactNode;
  /** Portion rendered in the indigo→violet gradient, matching the original markup. */
  accent?: ReactNode;
  subtitle?: ReactNode;
  /** Render as <h1> on pages where this heading is the page title. */
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  children,
  accent,
  subtitle,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className="relative z-10 text-center">
      <Tag
        id={id}
        className="text-[2.2rem] font-bold text-white sm:text-[2.6rem] lg:text-[3rem]"
      >
        {children}
        {accent ? <span className="text-gradient"> {accent}</span> : null}
      </Tag>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-[1.1rem]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
