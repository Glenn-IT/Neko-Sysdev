import type { IconName } from "@/components/ui/Icon";

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
  links: { label: string; href: string; icon: IconName }[];
};

export const team: TeamMember[] = [
  {
    name: "Glenard Pagurayan",
    role: "Lead Developer",
    description: "Full Stack Developer",
    image: "/img/Glenn1.webp",
    email: "glenard2308@gmail.com",
    links: [
      {
        label: "Facebook",
        href: "https://m.me/glenard.pagurayan",
        icon: "FaFacebookF",
      },
      { label: "GitHub", href: "https://github.com/Glenn-IT", icon: "FaGithub" },
    ],
  },
  {
    name: "Lucky Padua",
    role: "Co-Developer",
    description: "UI/UX & Frontend Specialist",
    image: "/img/Lucky1.webp",
    email: "luckypadua4@gmail.com",
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/Luckybaltazar21/",
        icon: "FaFacebookF",
      },
      {
        label: "GitHub",
        href: "https://github.com/LuckyPadua-web",
        icon: "FaGithub",
      },
    ],
  },
];
