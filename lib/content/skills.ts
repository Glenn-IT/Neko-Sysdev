import type { IconName } from "@/components/ui/Icon";

export type Skill = {
  icon: IconName;
  title: string;
  text: string;
};

/** Nineteen technologies, in the original order. */
export const skills: Skill[] = [
  {
    icon: "FaHtml5",
    title: "HTML5",
    text: "Semantic, accessible, and SEO-friendly structure for the web.",
  },
  {
    icon: "FaCss3Alt",
    title: "CSS3",
    text: "Responsive designs with modern layout systems (Flexbox & Grid).",
  },
  {
    icon: "FaJs",
    title: "JavaScript",
    text: "Interactive, dynamic front-end experiences and animations.",
  },
  {
    icon: "FaBootstrap",
    title: "Bootstrap",
    text: "Rapid UI development with responsive grid system and components.",
  },
  {
    icon: "FaPhp",
    title: "PHP",
    text: "Backend development, database integration, and logic handling.",
  },
  {
    icon: "FaLaravel",
    title: "Laravel",
    text: "Modern PHP framework for building robust web applications and APIs.",
  },
  {
    icon: "FaDatabase",
    title: "MySQL",
    text: "Relational database management for data storage and retrieval.",
  },
  {
    icon: "FaServer",
    title: "REST API",
    text: "Building scalable web services and backend APIs for applications.",
  },
  {
    icon: "FaAndroid",
    title: "Android Development",
    text: "Native mobile apps using Java and Kotlin for Android platform.",
  },
  {
    icon: "FaMobileAlt",
    title: "Flutter",
    text: "Cross-platform mobile development for iOS and Android.",
  },
  {
    icon: "FaSyncAlt",
    title: "AJAX",
    text: "Asynchronous data loading for dynamic web applications.",
  },
  {
    icon: "FaMapMarkedAlt",
    title: "Google Maps API",
    text: "Location services, mapping, and geolocation features.",
  },
  {
    icon: "FaFire",
    title: "Firebase",
    text: "Cloud services, real-time database, and push notifications.",
  },
  {
    icon: "FaChartLine",
    title: "Chart.js",
    text: "Interactive data visualizations and analytics dashboards.",
  },
  {
    icon: "FaCopyright",
    title: "C++",
    text: "Powerful programming for software development and performance-critical applications.",
  },
  {
    icon: "FaCode",
    title: "C#",
    text: "Object-oriented programming for building powerful Windows and web applications.",
  },
  {
    icon: "FaLaptopCode",
    title: "Visual Basic .NET",
    text: "Developing user-friendly applications with strong UI design and logic.",
  },
  {
    icon: "FaPhp",
    title: "XAMPP",
    text: "Local server stack for creating a full-featured testing and development environment on a personal computer.",
  },
  {
    icon: "FaGithub",
    title: "Git & GitHub",
    text: "Version control and collaborative development workflows.",
  },
];
