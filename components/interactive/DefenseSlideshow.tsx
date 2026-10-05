"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { studentDefenses, type StudentDefense } from "@/lib/content/defenses";

export type DefenseSlideshowConfig = {
  idleOpacity?: number; // e.g. 0.75
  hoverScale?: number; // e.g. 1.04
  hoverLiftPx?: number; // e.g. 8
  autoplayMs?: number; // e.g. 5000
  enableAutoplay?: boolean;
};

interface DefenseSlideshowProps {
  config?: DefenseSlideshowConfig;
  items?: StudentDefense[];
  showDetails?: boolean;
}

export function DefenseSlideshow({
  config = {},
  items = studentDefenses,
  showDetails = true,
}: DefenseSlideshowProps) {
  const {
    idleOpacity = 0.75,
    hoverScale = 1.04,
    hoverLiftPx = 8,
    autoplayMs = 5000,
    enableAutoplay = true,
  } = config;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = items.length;
  const go = useCallback(
    (next: number) => setCurrentIndex(((next % total) + total) % total),
    [total],
  );

  // Auto-play timer (pauses when hovering or user interacting)
  useEffect(() => {
    if (!enableAutoplay || isPaused || isHovered) return;
    const timer = setInterval(() => {
      go(currentIndex + 1);
    }, autoplayMs);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, isHovered, enableAutoplay, autoplayMs, go]);

  const current = items[currentIndex];

  return (
    <div
      className="relative mx-auto w-full max-w-5xl select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(currentIndex - 1);
        if (e.key === "ArrowRight") go(currentIndex + 1);
      }}
      aria-label="Student Capstone Defense Gallery"
      role="region"
    >
      {/* Main Slideshow Stage */}
      <div
        className="relative overflow-hidden rounded-3xl p-3 sm:p-5 backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(15, 15, 42, 0.7) 0%, rgba(26, 26, 74, 0.7) 100%)",
          border: "1px solid rgba(155, 89, 182, 0.2)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) {
            go(diff > 0 ? currentIndex + 1 : currentIndex - 1);
          }
          touchStartX.current = null;
        }}
      >
        {/* Subtle Decorative Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #9b59b6 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, #3578f5 0%, transparent 70%)" }}
        />

        {/* The Interactive Defense Card Container */}
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
          {/* Card Border & Lift wrapper */}
          <div
            className="relative transition-all duration-500 ease-out rounded-2xl overflow-hidden"
            style={{
              transform: isHovered
                ? `translateY(-${hoverLiftPx}px) scale(${hoverScale})`
                : "translateY(0px) scale(1)",
              boxShadow: isHovered
                ? "0 25px 60px -10px rgba(155, 89, 182, 0.45), 0 0 30px rgba(53, 120, 245, 0.3)"
                : "0 10px 30px rgba(0, 0, 0, 0.3)",
              border: isHovered
                ? "1.5px solid rgba(167, 139, 250, 0.7)"
                : "1px solid rgba(155, 89, 182, 0.15)",
            }}
          >
            {/* The Image Element with Opacity Balance & Color Reveal */}
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden transition-all duration-500 ease-out"
              style={{
                opacity: isHovered ? 1 : idleOpacity,
                filter: isHovered
                  ? "saturate(1.05) contrast(1.02) brightness(1.02)"
                  : "saturate(0.85) contrast(0.95)",
              }}
            >
              <Image
                src={current.image}
                alt={`${current.studentName} - ${current.projectTitle}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-cover transition-transform duration-700 ease-out"
              />

              {/* Dark subtle gradient overlay when idle to perfectly balance with dark background */}
              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10, 10, 26, 0.85) 0%, rgba(13, 13, 40, 0.3) 40%, transparent 80%)",
                  opacity: isHovered ? 0.35 : 0.7,
                }}
              />

              {/* Status Ribbon Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300"
                  style={{
                    backgroundColor: isHovered
                      ? "rgba(16, 185, 129, 0.25)"
                      : "rgba(15, 15, 42, 0.7)",
                    color: isHovered ? "#34d399" : "#a78bfa",
                    border: isHovered
                      ? "1px solid rgba(52, 211, 153, 0.5)"
                      : "1px solid rgba(167, 139, 250, 0.3)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {current.defenseStatus}
                </span>

                {current.gradeBadge && (
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amethyst-500/20 text-amethyst-300 border border-amethyst-500/30 backdrop-blur-md">
                    {current.gradeBadge}
                  </span>
                )}
              </div>

              {/* Slide Counter Badge */}
              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-lg text-xs font-mono bg-black/50 text-slate-300 border border-white/10 backdrop-blur-md">
                {currentIndex + 1} / {total}
              </div>

              {/* Bottom In-Image Title & Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-wider font-semibold text-amethyst-400 mb-1">
                  {current.category} • {current.school}
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                  {current.projectTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2">
                  <span className="font-semibold text-slateblue-300">
                    {current.studentName}
                  </span>
                  <span>•</span>
                  <span>{current.defenseDate}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Student Details & Testimonial Quote */}
        {showDetails && current.quote && (
          <div className="mt-4 px-2 sm:px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amethyst-500/20 text-amethyst-300">
                <Icon name="FaQuoteLeft" />
              </span>
              <p className="text-xs sm:text-sm text-slate-300 italic line-clamp-2">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-mono text-amethyst-400/80">
              Verified Defense
            </span>
          </div>
        )}

        {/* Navigation Arrows & Controls */}
        <div className="mt-5 flex items-center justify-between gap-4 px-2">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => go(currentIndex - 1)}
            aria-label="Previous Student Defense"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-white/5 border border-white/10 text-amethyst-300 transition-all duration-300 hover:scale-105 hover:bg-amethyst-500/20 hover:border-amethyst-500/40 hover:text-white"
          >
            <Icon name="FaChevronLeft" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group p-1 cursor-pointer transition-all"
              >
                <span
                  className="block h-2 rounded-full transition-all duration-300"
                  style={{
                    width: idx === currentIndex ? "24px" : "8px",
                    backgroundColor:
                      idx === currentIndex
                        ? "#a78bfa"
                        : "rgba(255, 255, 255, 0.2)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => go(currentIndex + 1)}
            aria-label="Next Student Defense"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-white/5 border border-white/10 text-amethyst-300 transition-all duration-300 hover:scale-105 hover:bg-amethyst-500/20 hover:border-amethyst-500/40 hover:text-white"
          >
            <Icon name="FaChevronRight" />
          </button>
        </div>
      </div>

      {/* Mini Thumbnails Strip */}
      <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4 px-1">
        {items.map((item, idx) => {
          const active = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className="relative overflow-hidden rounded-xl cursor-pointer text-left transition-all duration-300"
              style={{
                border: active
                  ? "2px solid #a78bfa"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                opacity: active ? 1 : 0.6,
                transform: active ? "translateY(-2px)" : "none",
              }}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={item.image}
                  alt={item.studentName}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-1.5 bg-[#0f0f2a]/90 text-[11px] truncate text-slate-300">
                {item.studentName}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
