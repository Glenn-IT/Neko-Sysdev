"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { DefenseSlideshow } from "@/components/interactive/DefenseSlideshow";
import { studentDefenses } from "@/lib/content/defenses";

export default function TestDefensePage() {
  // Customizer state so user can tweak values in real time!
  const [idleOpacity, setIdleOpacity] = useState(0.75);
  const [hoverScale, setHoverScale] = useState(1.04);
  const [hoverLiftPx, setHoverLiftPx] = useState(8);
  const [autoplayMs, setAutoplayMs] = useState(5000);
  const [enableAutoplay, setEnableAutoplay] = useState(true);

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute top-10 left-1/4 h-96 w-96 rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-amethyst-300 hover:text-white transition-colors"
          >
            <Icon name="FaChevronLeft" /> Back to Main Site
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amethyst-500/10 text-amethyst-300 border border-amethyst-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Interactive Sandbox Preview
          </div>
        </div>

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amethyst-400 font-semibold">
            Laboratory & Staging Component
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Student Defense Showcase <span className="text-gradient">Slideshow</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Test and fine-tune the slideshow behavior. When idle, the image opacity softly balances with the dark background. On hover, it moves forward, reveals full vibrant colors, and slightly zooms in.
          </p>
        </div>

        {/* Live Interactive Customizer Panel */}
        <div className="rounded-2xl p-5 sm:p-6 bg-[#0f0f2a]/80 border border-amethyst-500/20 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Icon name="FaTools" /> Live Visual Modifier
            </h2>
            <button
              type="button"
              onClick={() => {
                setIdleOpacity(0.75);
                setHoverScale(1.04);
                setHoverLiftPx(8);
                setAutoplayMs(5000);
                setEnableAutoplay(true);
              }}
              className="text-xs text-amethyst-400 hover:text-white underline cursor-pointer"
            >
              Reset to Defaults
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Idle Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Idle Opacity (Background Blend)</span>
                <span className="text-amethyst-400 font-mono">
                  {Math.round(idleOpacity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.4"
                max="0.95"
                step="0.05"
                value={idleOpacity}
                onChange={(e) => setIdleOpacity(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">
                Lower = blends deeper into dark navy.
              </p>
            </div>

            {/* Hover Zoom Scale */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Hover Zoom Scale</span>
                <span className="text-amethyst-400 font-mono">
                  {hoverScale.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="1.01"
                max="1.10"
                step="0.01"
                value={hoverScale}
                onChange={(e) => setHoverScale(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">
                Subtle zoom-in effect on hover.
              </p>
            </div>

            {/* Hover Lift */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Hover Lift (Forward Move)</span>
                <span className="text-amethyst-400 font-mono">{hoverLiftPx}px</span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="2"
                value={hoverLiftPx}
                onChange={(e) => setHoverLiftPx(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">
                Lifts card upward/forward toward viewer.
              </p>
            </div>

            {/* Autoplay Toggle */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Autoplay Timing</span>
                <span className="text-amethyst-400 font-mono">
                  {enableAutoplay ? `${autoplayMs / 1000}s` : "Disabled"}
                </span>
              </div>
              <div className="flex gap-2">
                {[3000, 5000, 8000].map((ms) => (
                  <button
                    key={ms}
                    type="button"
                    onClick={() => {
                      setAutoplayMs(ms);
                      setEnableAutoplay(true);
                    }}
                    className={`flex-1 py-1 text-xs rounded-lg transition-all ${
                      enableAutoplay && autoplayMs === ms
                        ? "bg-amethyst-500 text-white font-bold"
                        : "bg-white/5 text-slate-400 hover:text-white"
                    }`}
                  >
                    {ms / 1000}s
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setEnableAutoplay(!enableAutoplay)}
                  className={`px-2 py-1 text-xs rounded-lg transition-all ${
                    !enableAutoplay
                      ? "bg-rose-500/80 text-white font-bold"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {enableAutoplay ? "Pause" : "Resume"}
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Automatically pauses whenever mouse hovers.
              </p>
            </div>
          </div>
        </div>

        {/* The Live Slideshow Component Under Test */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amethyst-400" />
              Live Slideshow Preview
            </h2>
            <span className="text-xs text-slate-400">
              Hover over the image below to observe the effect
            </span>
          </div>

          <DefenseSlideshow
            config={{
              idleOpacity,
              hoverScale,
              hoverLiftPx,
              autoplayMs,
              enableAutoplay,
            }}
          />
        </div>

        {/* Side-by-Side Comparison Section */}
        <div className="pt-8 border-t border-white/10 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Visual State Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              See the exact contrast between how the image sits resting in the background vs when a visitor hovers it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Idle State Demo Card */}
            <div className="rounded-2xl p-4 bg-[#0f0f2a]/90 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400">
                  State 1: Rest / Idle
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                  opacity: {Math.round(idleOpacity * 100)}%
                </span>
              </div>
              <div
                className="relative aspect-[16/10] rounded-xl overflow-hidden"
                style={{
                  opacity: idleOpacity,
                  filter: "saturate(0.85) contrast(0.95)",
                }}
              >
                <Image
                  src={studentDefenses[0].image}
                  alt="Idle state demo"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent" />
              </div>
              <p className="text-xs text-slate-400">
                Smoothly recessed into the dark navy palette, non-distracting while scrolling.
              </p>
            </div>

            {/* Hover State Demo Card */}
            <div className="rounded-2xl p-4 bg-[#14143c] border border-amethyst-500/50 shadow-[0_15px_40px_rgba(155,89,182,0.3)] space-y-3 -translate-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amethyst-300">
                  State 2: Hovered (Active Focus)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  opacity: 100% • zoom: {hoverScale}x • lift: -{hoverLiftPx}px
                </span>
              </div>
              <div
                className="relative aspect-[16/10] rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  transform: `scale(${hoverScale})`,
                  filter: "saturate(1.05) contrast(1.02) brightness(1.02)",
                }}
              >
                <Image
                  src={studentDefenses[0].image}
                  alt="Hovered state demo"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-amethyst-200">
                Moves forward, pops out of the page with full vibrant colors, crystal clear picture, and radiant glow.
              </p>
            </div>
          </div>
        </div>

        {/* How to add actual student photos guide */}
        <div className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Icon name="FaGraduationCap" /> How to Add Your Real Student Defense Photos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <p className="font-semibold text-amethyst-300">1. Place Photos</p>
              <p className="text-slate-400">
                Save your student photos in <code className="text-amethyst-400">public/img/defenses/</code> (e.g., <code className="text-amethyst-300">student1.jpg</code> or <code className="text-amethyst-300">defense.webp</code>).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <p className="font-semibold text-amethyst-300">2. Update Content</p>
              <p className="text-slate-400">
                Open <code className="text-amethyst-400">lib/content/defenses.ts</code> and add their names, thesis project title, and photo path.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <p className="font-semibold text-amethyst-300">3. Push or Auto-deploy</p>
              <p className="text-slate-400">
                Run <code className="text-amethyst-400">npm run autopush</code> to commit and deploy automatically to Vercel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
