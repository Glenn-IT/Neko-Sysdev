import type { IconName } from "@/components/ui/Icon";

export type Benefit = {
  icon: IconName;
  title: string;
  text: string;
};

/** "Why Choose Us?" — five items, wording untouched (including the Taglish line). */
export const benefits: Benefit[] = [
  {
    icon: "FaBriefcase",
    title: "Real Industry Experience",
    text: "Working knowledge from actual projects and real-world solutions.",
  },
  {
    icon: "FaGraduationCap",
    title: "Thesis-Focused",
    text: "Not overkill, not kulang — perfectly balanced for academic requirements.",
  },
  {
    icon: "FaComments",
    title: "Student-Friendly Language",
    text: "Explained in simple terms you can understand and defend with confidence.",
  },
  {
    icon: "FaHandsHelping",
    title: "Guidance Until Final Defense",
    text: "We stay with you through deployment, documentation, and presentation.",
  },
  {
    icon: "FaUserCheck",
    title: "No Disappearing Developer",
    text: "Reliable support and communication from start to finish — we're here!",
  },
];
