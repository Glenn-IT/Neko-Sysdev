"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { type Testimonial, testimonials } from "@/lib/content/testimonials";

const AUTOPLAY_MS = 6000;

/**
 * Enhanced TestimonialSlider with interactive Proof Lightbox.
 * Displays client feedback along with their defense celebration photo
 * and Messenger conversation proof, maintaining strict academic privacy.
 */
export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalData, setModalData] = useState<{
    testimonial: Testimonial;
    view: "chat" | "defense";
  } | null>(null);

  const touchStartX = useRef<number | null>(null);

  const count = testimonials.length;
  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Close modal on Escape key
  useEffect(() => {
    if (!modalData) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData]);

  // Autoplay management
  useEffect(() => {
    if (paused || modalData !== null) return;
    const timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, paused, modalData, go]);

  const navButton =
    "glass flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl text-amethyst-400 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst-500/40 hover:bg-amethyst-500/20 hover:text-white";

  return (
    <>
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
              const delta =
                event.changedTouches[0].clientX - touchStartX.current;
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
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Verification CTA Buttons */}
                  {(testimonial.chatProof || testimonial.defensePhoto) && (
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      {testimonial.chatProof && (
                        <button
                          type="button"
                          onClick={() =>
                            setModalData({
                              testimonial,
                              view: "chat",
                            })
                          }
                          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-amethyst-500/30 bg-amethyst-500/10 px-3.5 py-1.5 text-xs font-semibold text-amethyst-200 transition-all duration-300 hover:border-amethyst-400 hover:bg-amethyst-500/25 hover:text-white hover:shadow-[0_0_15px_rgba(155,89,182,0.3)]"
                        >
                          <Icon
                            name="FaCommentDots"
                            className="text-amethyst-400"
                          />
                          <span>View Chat Proof</span>
                        </button>
                      )}

                      {testimonial.defensePhoto && (
                        <button
                          type="button"
                          onClick={() =>
                            setModalData({
                              testimonial,
                              view: "defense",
                            })
                          }
                          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/25 hover:text-white hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                        >
                          <Icon
                            name="FaGraduationCap"
                            className="text-amber-300"
                          />
                          <span>Defense Photo</span>
                        </button>
                      )}
                    </div>
                  )}

                  <figcaption className="mt-8 flex items-center justify-center gap-4">
                    {testimonial.defensePhoto ? (
                      <button
                        type="button"
                        onClick={() =>
                          setModalData({
                            testimonial,
                            view: "defense",
                          })
                        }
                        title="Click to view full defense photo"
                        className="group relative h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 border-amethyst-500/40 shadow-[0_0_20px_rgba(155,89,182,0.3)] transition-transform hover:scale-105 hover:border-amber-400"
                      >
                        <Image
                          src={testimonial.defensePhoto}
                          alt={`${testimonial.author} thesis defense`}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <Icon
                            name="FaExpand"
                            className="text-xs text-white"
                          />
                        </div>
                      </button>
                    ) : (
                      <div className="gradient-brand flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(155,89,182,0.4)]">
                        <Icon name="FaUser" className="text-xl text-white" />
                      </div>
                    )}

                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-white">
                          {testimonial.author}
                        </p>
                        <span className="inline-flex items-center gap-1 rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-semibold text-success">
                          <Icon name="FaCheck" className="text-[8px]" />
                          Passed
                        </span>
                      </div>
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

      {/* Proof Lightbox Modal */}
      {modalData && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Proof of Defense & Conversation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-base-deep/90 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setModalData(null)}
        >
          <div
            className="card-surface relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-base-deep shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h3 className="font-bold text-white sm:text-lg">
                  Verification Proof — {modalData.testimonial.author}
                </h3>
                <p className="text-xs text-muted">
                  {modalData.testimonial.role}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalData(null)}
                aria-label="Close proof preview"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon name="FaTimes" />
              </button>
            </div>

            {/* View Selector Tabs (if both proofs exist) */}
            {modalData.testimonial.chatProof &&
              modalData.testimonial.defensePhoto && (
                <div className="flex border-b border-white/10 bg-black/20 p-2">
                  <button
                    type="button"
                    onClick={() =>
                      setModalData({ ...modalData, view: "chat" })
                    }
                    className={`flex-1 cursor-pointer rounded-xl py-2 text-xs font-semibold transition-all ${
                      modalData.view === "chat"
                        ? "bg-amethyst-500/30 text-white shadow-sm"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    💬 Messenger Conversation
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setModalData({ ...modalData, view: "defense" })
                    }
                    className={`flex-1 cursor-pointer rounded-xl py-2 text-xs font-semibold transition-all ${
                      modalData.view === "defense"
                        ? "bg-amber-400/20 text-amber-200 shadow-sm"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    🎓 Defense Selfie / Photo
                  </button>
                </div>
              )}

            {/* Modal Body: The Image */}
            <div className="relative flex flex-1 items-center justify-center overflow-auto p-4 sm:p-6">
              {modalData.view === "chat" && modalData.testimonial.chatProof ? (
                <div className="relative max-h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                  <Image
                    src={modalData.testimonial.chatProof}
                    alt={`Conversation screenshot from ${modalData.testimonial.author}`}
                    width={800}
                    height={1000}
                    className="h-auto max-h-[60vh] w-full object-contain"
                  />
                </div>
              ) : modalData.view === "defense" &&
                modalData.testimonial.defensePhoto ? (
                <div className="relative max-h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                  <Image
                    src={modalData.testimonial.defensePhoto}
                    alt={`Defense celebration photo from ${modalData.testimonial.author}`}
                    width={800}
                    height={1000}
                    className="h-auto max-h-[60vh] w-full object-contain"
                  />
                </div>
              ) : (
                <p className="text-sm text-muted">
                  No preview available for this view.
                </p>
              )}
            </div>

            {/* Modal Footer: Privacy Guarantee */}
            <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-6 py-3.5">
              <p className="text-[11px] text-muted">
                🛡️ Identifying details are obscured to respect student academic
                privacy.
              </p>
              <button
                type="button"
                onClick={() => setModalData(null)}
                className="cursor-pointer text-xs font-semibold text-amethyst-400 hover:text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
