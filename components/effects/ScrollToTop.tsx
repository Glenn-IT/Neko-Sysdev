"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`gradient-brand fixed right-6 bottom-26 z-[998] flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl text-white shadow-[0_0_20px_rgba(155,89,182,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(155,89,182,0.7)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="FaArrowUp" />
    </button>
  );
}
