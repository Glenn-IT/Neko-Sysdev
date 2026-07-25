"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/content/projects";

/**
 * Project grid. Below 768px each card collapses to its title and expands on tap —
 * the same behaviour the old script.js produced by moving DOM nodes at runtime.
 * Here it is a native <details>, rendered open on the server so the technology
 * lists are present and expanded in the initial HTML for crawlers.
 */
export function ProjectAccordion({
  projects,
  headingLevel = "h3",
}: {
  projects: Project[];
  headingLevel?: "h2" | "h3";
}) {
  const [collapsible, setCollapsible] = useState(false);
  const Title = headingLevel;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const sync = () => setCollapsible(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div className="grid gap-9 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <details
          key={project.title}
          open={!collapsible}
          className="top-bar card-surface rounded-2xl border border-brand/10 p-7 text-left shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2.5 hover:border-brand/30 hover:shadow-[0_15px_40px_rgba(79,70,229,0.25)]"
        >
          <summary
            className={`list-none text-[1.3rem] leading-[1.4] font-semibold text-white [&::-webkit-details-marker]:hidden ${
              collapsible ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <Title className="inline">{project.title}</Title>
          </summary>

          <div className="mt-4">
            {project.summary ? (
              <p className="mb-2 text-[0.95rem] leading-[1.7] text-muted">
                {project.summary}
              </p>
            ) : null}

            <p className="mt-4 mb-2 block font-semibold text-accent">
              Technologies:
            </p>
            <ul>
              {project.tech.map((line) => (
                <li
                  key={line}
                  className="mb-2 text-[0.95rem] leading-[1.7] text-muted"
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
