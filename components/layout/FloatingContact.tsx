import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function FloatingContact() {
  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="animate-float-pulse gradient-brand fixed right-6 bottom-6 z-[999] flex h-[60px] w-[60px] items-center justify-center rounded-full text-2xl text-white shadow-[0_8px_25px_rgba(79,70,229,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_35px_rgba(79,70,229,0.6)]"
    >
      <Icon name="FaCommentDots" className="animate-icon-bounce" />
    </Link>
  );
}
