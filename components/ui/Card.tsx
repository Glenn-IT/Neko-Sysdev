import type { ElementType, ReactNode } from "react";

/**
 * The shared glass panel used across every section: translucent navy gradient,
 * faint amethyst edge, lifting on hover with an amethyst glow.
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
    <Tag className={`card-surface card-hover rounded-2xl ${className}`}>
      {children}
    </Tag>
  );
}
