/**
 * Single source of truth for identity, contact details and navigation.
 * Every value here is carried over verbatim from the original Dev-Portfolio site.
 */

export const siteConfig = {
  name: "NeKo-SysDev",
  legalName: "NeKo System Developers Team",
  /** Canonical origin. Override in Vercel with NEXT_PUBLIC_SITE_URL if the domain changes. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://neko-sysdev.online",
  tagline: "Capstone System Developers in the Philippines",
  description:
    "NeKo-SysDev - Professional capstone system developers offering web, mobile, and desktop application solutions for students and businesses in the Philippines. Expert in PHP, Laravel, Android, Flutter, and more.",
  keywords: [
    "capstone projects",
    "web development",
    "mobile apps",
    "PHP",
    "Laravel",
    "Android",
    "Flutter",
    "Philippines",
    "system developers",
    "student projects",
    "business applications",
    "Santo Niño Cagayan",
  ],
  authors: ["Glenard Pagurayan", "Lucky Padua"],
  foundingYear: 2025,
} as const;

export const contact = {
  emails: ["glenard2308@gmail.com", "luckypadua4@gmail.com"],
  phones: [
    { display: "+63 955 799 7409", href: "tel:+639557997409" },
    { display: "+63 987 654 3210", href: "tel:+639876543210" },
  ],
  address: {
    street: "Zone 04, Centro Sur",
    locality: "Santo Niño",
    region: "Cagayan",
    country: "Philippines",
    postalCode: "3525",
    lines: ["Zone 04, Centro Sur", "Santo Niño, Cagayan", "Philippines, 3525"],
  },
  messenger: "https://m.me/glenard.pagurayan",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "FaFacebookF" | "FaGithub";
};

export const socials: SocialLink[] = [
  {
    label: "Glenard Pagurayan",
    href: "https://www.facebook.com/glenard.pagurayan",
    icon: "FaFacebookF",
  },
  { label: "Glenn-IT", href: "https://github.com/Glenn-IT", icon: "FaGithub" },
  {
    label: "Lucky Padua",
    href: "https://www.facebook.com/Luckybaltazar21/",
    icon: "FaFacebookF",
  },
  {
    label: "LuckyPadua-web",
    href: "https://github.com/LuckyPadua-web",
    icon: "FaGithub",
  },
];

/**
 * Header navigation. The original four links are preserved; Services, Projects and
 * Contact now point at real routes instead of fragments so each one can rank on its own.
 */
export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
