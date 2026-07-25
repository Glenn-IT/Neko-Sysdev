"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through the kinds of systems we build, typing and deleting each one.
 *
 * The full list is also rendered into the HTML (visually hidden) by the caller,
 * so the phrases are readable by crawlers even though only one is on screen.
 */
export function TypingHeadline({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  // Seeded with the first phrase already complete, so the server-rendered <h1>
  // reads in full ("We build Capstone Systems in the Philippines") instead of
  // shipping an empty heading to crawlers. The cycle then picks up from there.
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);
  const [chars, setChars] = useState(phrases[0].length);
  const [enabled, setEnabled] = useState(true);
  // The blinking cursor is client-only, so it never lands in the crawled markup
  // between the phrase and the rest of the heading.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(false);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const current = phrases[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && chars < current.length) {
      timer = setTimeout(() => {
        setText(current.slice(0, chars + 1));
        setChars((c) => c + 1);
      }, 70);
    } else if (deleting && chars > 0) {
      timer = setTimeout(() => {
        setText(current.slice(0, chars - 1));
        setChars((c) => c - 1);
      }, 35);
    } else if (!deleting && chars === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [chars, deleting, index, phrases, enabled]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient font-bold">{text}</span>
      {mounted && enabled ? (
        <span
          aria-hidden="true"
          className="ml-1 animate-pulse font-light text-amethyst-400"
        >
          |
        </span>
      ) : null}
    </span>
  );
}
