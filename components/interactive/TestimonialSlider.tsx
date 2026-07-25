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
      <div className="mx-auto flex max-w-[900px] items-center gap-4 sm:gap-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="gradient-brand flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full text-white shadow-[0_5px_20px_rgba(79,70,229,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)]"
        >
          <Icon name="FaChevronLeft" className="text-[1.2rem]" />
        </button>

        <div
          className="relative w-full overflow-hidden py-5"
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
                className={`card-surface rounded-[20px] border border-brand/20 px-6 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 sm:px-10 sm:py-12 ${
                  active
                    ? "relative translate-x-0 opacity-100"
                    : "pointer-events-none absolute inset-x-0 top-5 translate-x-full opacity-0"
                }`}
              >
                <div className="mb-6 flex justify-center gap-2">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Icon
                      key={star}
                      name="FaStar"
                      className="text-[1.3rem] text-star drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]"
                    />
                  ))}
                  <span className="sr-only">
                    {testimonial.rating} out of 5 stars
                  </span>
                </div>

                <blockquote className="relative px-5 text-center text-[1.1rem] leading-[1.8] text-nav italic before:absolute before:-top-5 before:-left-2.5 before:font-serif before:text-[4rem] before:text-brand/30 before:content-['“']">
                  {testimonial.text}
                </blockquote>

                <figcaption className="mt-8 flex items-center justify-center gap-5">
                  <div className="gradient-brand flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full">
                    <Icon name="FaUser" className="text-[1.8rem] text-white" />
                  </div>
                  <div className="text-left">
                    <p className="mb-1 text-[1.2rem] font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-[0.95rem] text-muted">
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
          className="gradient-brand flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full text-white shadow-[0_5px_20px_rgba(79,70,229,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)]"
        >
          <Icon name="FaChevronRight" className="text-[1.2rem]" />
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
              i === index
                ? "gradient-brand w-[35px] rounded-[10px]"
                : "w-3 bg-brand/30 hover:bg-brand/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
