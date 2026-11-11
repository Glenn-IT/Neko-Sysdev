import { Icon } from "@/components/ui/Icon";
import { skills } from "@/lib/content/skills";

type TechMarqueeProps = {
  className?: string;
  doubleRow?: boolean;
};

export function TechMarquee({
  className = "",
  doubleRow = true,
}: TechMarqueeProps) {
  // Split into two balanced sets for dual-directional flow
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  // Duplicated arrays to ensure a seamless infinite CSS loop
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <div
      className={`relative w-full overflow-hidden py-4 ${className}`}
      aria-label="Technologies and frameworks marquee"
    >
      {/* Left and right gradient fade masks for smooth entrance/exit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-base-deep via-base-deep/90 to-transparent sm:w-40 lg:w-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-base-deep via-base-deep/90 to-transparent sm:w-40 lg:w-64"
      />

      {/* Row 1: Scrolling Left */}
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-5 py-2 group-hover:[animation-play-state:paused]">
          {row1Items.map((skill, i) => (
            <div
              key={`${skill.title}-r1-${i}`}
              className="card-surface group/item flex items-center gap-3.5 rounded-2xl border border-white/10 bg-base-mid/70 px-6 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amethyst-400/50 hover:bg-amethyst-500/15 hover:shadow-[0_0_25px_rgba(155,89,182,0.35)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl text-amethyst-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-white">
                <Icon name={skill.icon} />
              </div>
              <span className="font-mono text-base font-bold text-white whitespace-nowrap">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right (Reverse) */}
      {doubleRow && (
        <div className="group mt-5 flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-5 py-2 group-hover:[animation-play-state:paused]">
            {row2Items.map((skill, i) => (
              <div
                key={`${skill.title}-r2-${i}`}
                className="card-surface group/item flex items-center gap-3.5 rounded-2xl border border-white/10 bg-base-mid/70 px-6 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-klein-400/50 hover:bg-klein-500/15 hover:shadow-[0_0_25px_rgba(53,120,245,0.35)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl text-klein-300 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-white">
                  <Icon name={skill.icon} />
                </div>
                <span className="font-mono text-base font-bold text-white whitespace-nowrap">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
