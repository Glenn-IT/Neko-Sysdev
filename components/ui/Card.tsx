import type { ElementType, ReactNode } from "react";

/**
 * The shared card surface used across every section: 135° indigo-navy gradient,
 * 16px radius, faint indigo border that brightens on hover.
 */
export function Card({
  as: Tag = "div" as ElementType,
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={`card-surface rounded-2xl border border-brand/10 transition-all duration-300 ${className}`}
    >
      {children}
    </Tag>
  );
}
