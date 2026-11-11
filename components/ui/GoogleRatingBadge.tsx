import { Icon } from "@/components/ui/Icon";
import { contact } from "@/lib/content/siteConfig";

type GoogleRatingBadgeProps = {
  variant?: "compact" | "card" | "hero";
  className?: string;
};

export function GoogleRatingBadge({
  variant = "compact",
  className = "",
}: GoogleRatingBadgeProps) {
  if (variant === "compact") {
    return (
      <a
        href={contact.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        title="View NeKo-SysDev 5.0 Rating on Google Maps"
        aria-label="5.0 out of 5 stars rating on Google Maps. Opens in new tab."
        className={`group inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-200 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] ${className}`}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] text-neutral-900 shadow-sm">
          <Icon name="FaGoogle" className="text-neutral-800" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-white">5.0</span>
          <div className="flex text-star" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="FaStar"
                className="text-[11px] text-star drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
              />
            ))}
          </div>
        </div>
        <span className="text-white/80 transition-colors group-hover:text-white">
          Google Rating
        </span>
        <Icon
          name="FaArrowRight"
          className="text-[9px] text-amber-300/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
        />
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <a
        href={contact.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        title="NeKo-SysDev Google Maps Profile"
        aria-label="5.0 Rating on Google Reviews. Verified Capstone System Developers."
        className={`group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-base-deep/80 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-amber-400/40 hover:bg-amethyst-500/10 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] ${className}`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-base shadow-md">
          <Icon name="FaGoogle" className="text-neutral-900" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-bold text-white">5.0</span>
            <div className="flex text-star" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="FaStar"
                  className="text-xs text-star drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                />
              ))}
            </div>
            <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
              Verified
            </span>
          </div>
          <p className="font-mono text-xs text-muted group-hover:text-white">
            Google Maps Reviews &rarr;
          </p>
        </div>
      </a>
    );
  }

  return (
    <div
      className={`card-surface mx-auto flex max-w-xl flex-col items-center justify-between gap-4 rounded-2xl border border-amber-400/25 bg-gradient-to-r from-amber-500/10 via-amethyst-500/10 to-base-deep/80 p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:flex-row sm:text-left ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl text-neutral-900 shadow-md">
          <Icon name="FaGoogle" className="text-neutral-900" />
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="font-mono text-lg font-bold text-white">5.0</span>
            <div className="flex text-star" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="FaStar"
                  className="text-sm text-star drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted">
            Verified Business Profile on Google Maps
          </p>
        </div>
      </div>

      <a
        href={contact.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold text-amber-200 transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/25 hover:text-white hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"
      >
        <span>View Google Reviews</span>
        <Icon name="FaArrowRight" className="text-[10px]" />
      </a>
    </div>
  );
}
