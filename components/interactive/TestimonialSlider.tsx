"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/content/testimonials";

const AUTOPLAY_MS = 5000;

/**
 * Replaces the original script.js slider. Every testimonial stays mounted — inactive
 * slides are only visually hidden — so search engines and AI crawlers read all six
 * reviews in the initial HTML, which is what the Review schema claims.
 */
export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = testimonials.length;
  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, paused, go]);

  const navButton =
    "glass flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-amethyst-400 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20 hover:text-white";

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center gap-4 sm:gap-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className={navButton}
        >
          <Icon name="FaChevronLeft" />
        </button>

        <div
          className="relative w-full overflow-hidden py-4"
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) go(delta < 0 ? index + 1 : index - 1);
            touchStartX.current = null;
          }}
        >
          {testimonials.map((testimonial, i) => {
            const active = i === index;
            return (
              <figure
                key={testimonial.id}
                aria-hidden={!active}
                inert={!active}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                className={`card-surface rounded-2xl px-6 py-10 transition-all duration-500 sm:px-12 sm:py-12 ${
                  active
                    ? "relative translate-x-0 opacity-100"
                    : "pointer-events-none absolute inset-x-0 top-4 translate-x-full opacity-0"
                }`}
              >
                <Icon
                  name="FaQuoteLeft"
                  className="mx-auto mb-6 text-3xl text-amethyst-500/30"
                />

                <div className="mb-6 flex justify-center gap-1.5">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Icon
                      key={star}
                      name="FaStar"
                      className="text-star drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    />
                  ))}
                  <span className="sr-only">
                    {testimonial.rating} out of 5 stars
                  </span>
                </div>

                <blockquote className="text-center text-lg leading-relaxed text-nav italic sm:text-xl">
                  {testimonial.text}
                </blockquote>

                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <div className="gradient-brand flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(155,89,182,0.4)]">
                    <Icon name="FaUser" className="text-xl text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="font-mono text-xs text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className={navButton}
        >
          <Icon name="FaChevronRight" />
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-2.5">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
              i === index
                ? "gradient-brand w-8"
                : "w-2.5 bg-white/15 hover:bg-amethyst-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
