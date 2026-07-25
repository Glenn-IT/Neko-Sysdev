"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/lib/content/projects";

/**
 * Project grid. Below 768px each card collapses to its title and expands on tap —
 * the same behaviour the old script.js produced by moving DOM nodes at runtime.
 * Here it is a native <details>, rendered open on the server so the technology
 * lists are present and expanded in the initial HTML for crawlers.
 */
export function ProjectAccordion({
  projects,
  category,
}: {
  projects: Project[];
  /** Mono pill shown on each card, e.g. "Web System". */
  category: string;
}) {
  const [collapsible, setCollapsible] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const sync = () => setCollapsible(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <details
          key={project.title}
          open={!collapsible}
          className="card-surface card-hover top-bar group rounded-2xl p-6 text-left"
        >
          <summary
            className={`list-none [&::-webkit-details-marker]:hidden ${
              collapsible ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <span className="mb-3 inline-block rounded-md border border-amethyst-500/20 bg-amethyst-500/10 px-2 py-0.5 font-mono text-xs text-amethyst-400">
              {category}
            </span>
            <span className="flex items-start justify-between gap-3">
              <h3 className="text-lg leading-tight font-bold text-white transition-colors duration-300 group-hover:text-amethyst-300">
                {project.title}
              </h3>
              {collapsible ? (
                <Icon
                  name="FaChevronDown"
                  className="mt-1 shrink-0 text-sm text-amethyst-400 transition-transform duration-300 group-open:rotate-180"
                />
              ) : null}
            </span>
          </summary>

          <div className="mt-4">
            {project.summary ? (
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            ) : null}

            <p className="mb-2 font-mono text-xs tracking-widest text-amethyst-400 uppercase">
              Technologies:
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((line) => (
                <li
                  key={line}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-nav"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
