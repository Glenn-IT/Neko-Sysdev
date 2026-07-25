import { siteConfig } from "@/lib/content/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base px-[8%] py-8 text-center text-[0.95rem] text-muted">
      <p>
        © {siteConfig.foundingYear}{" "}
        <span className="font-semibold text-brand">{siteConfig.legalName}</span>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
