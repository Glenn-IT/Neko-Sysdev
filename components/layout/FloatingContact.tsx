import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function FloatingContact() {
  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="gradient-brand animate-glow fixed right-6 bottom-6 z-[999] flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <Icon name="FaCommentDots" className="animate-icon-bounce" />
    </Link>
  );
}
