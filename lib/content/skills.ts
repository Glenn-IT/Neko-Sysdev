import type { IconName } from "@/components/ui/Icon";

export type Skill = {
  icon: IconName;
  title: string;
  text: string;
  category?: "frontend" | "backend" | "mobile" | "database" | "iot" | "tools";
};

export const skills: Skill[] = [
  {
    icon: "SiNextdotjs",
    title: "Next.js",
    text: "Server-side rendering, static generation, and high-performance React architectures.",
    category: "frontend",
  },
  {
    icon: "FaReact",
    title: "React",
    text: "Component-driven, interactive user interfaces with modern hooks and state systems.",
    category: "frontend",
  },
  {
    icon: "SiTypescript",
    title: "TypeScript",
    text: "Strongly typed JavaScript for robust, scalable, and bug-resistant codebases.",
    category: "frontend",
  },
  {
    icon: "SiTailwindcss",
    title: "Tailwind CSS",
    text: "Utility-first, responsive design with customized modern design systems.",
    category: "frontend",
  },
  {
    icon: "FaLaravel",
    title: "Laravel",
    text: "Modern PHP framework for building robust web applications, MVC systems, and APIs.",
    category: "backend",
  },
  {
    icon: "FaPhp",
    title: "PHP",
    text: "Backend development, database integration, server logic, and API endpoints.",
    category: "backend",
  },
  {
    icon: "FaMobileAlt",
    title: "Flutter",
    text: "Cross-platform mobile development delivering sleek iOS and Android experiences.",
    category: "mobile",
  },
  {
    icon: "FaAndroid",
    title: "Android Native",
    text: "Native mobile apps built with Java/Kotlin tailored for student thesis & enterprise.",
    category: "mobile",
  },
  {
    icon: "SiArduino",
    title: "Arduino & IoT",
    text: "Microcontroller programming, sensor integration, GSM/SMS modules, and automation.",
    category: "iot",
  },
  {
    icon: "FaPython",
    title: "Python",
    text: "Automation, data processing, backend scripting, and intelligent algorithms.",
    category: "backend",
  },
  {
    icon: "FaNodeJs",
    title: "Node.js",
    text: "Asynchronous event-driven JavaScript runtime for scalable backend services.",
    category: "backend",
  },
  {
    icon: "FaDatabase",
    title: "MySQL",
    text: "Relational database schema design, indexing, queries, and transaction management.",
    category: "database",
  },
  {
    icon: "FaFire",
    title: "Firebase",
    text: "Real-time database, cloud authentication, Firestore, and push notifications.",
    category: "database",
  },
  {
    icon: "FaServer",
    title: "REST APIs",
    text: "Designing, securing, and integrating scalable JSON REST web services.",
    category: "backend",
  },
  {
    icon: "FaMapMarkedAlt",
    title: "Google Maps API",
    text: "Interactive location tracking, geofencing, GPS coordinates, and mapping.",
    category: "tools",
  },
  {
    icon: "FaChartLine",
    title: "Chart.js",
    text: "Visual data dashboards, dynamic charts, analytics, and thesis reporting graphics.",
    category: "frontend",
  },
  {
    icon: "FaJs",
    title: "JavaScript",
    text: "Dynamic client-side scripting, DOM manipulation, and asynchronous workflows.",
    category: "frontend",
  },
  {
    icon: "FaBootstrap",
    title: "Bootstrap",
    text: "Responsive grid systems, fast UI styling, and legacy portal maintenance.",
    category: "frontend",
  },
  {
    icon: "FaHtml5",
    title: "HTML5",
    text: "Accessible, semantic web structure optimized for search crawlers and screen readers.",
    category: "frontend",
  },
  {
    icon: "FaCss3Alt",
    title: "CSS3",
    text: "Advanced Flexbox, CSS Grid layouts, animations, and custom styling rules.",
    category: "frontend",
  },
  {
    icon: "FaCopyright",
    title: "C++",
    text: "High-performance programming for embedded systems, hardware, and desktop apps.",
    category: "iot",
  },
  {
    icon: "FaCode",
    title: "C#",
    text: "Object-oriented software development for Windows desktop and enterprise tools.",
    category: "backend",
  },
  {
    icon: "FaLaptopCode",
    title: "Visual Basic .NET",
    text: "Desktop applications, point-of-sale systems, and rapid institutional prototypes.",
    category: "tools",
  },
  {
    icon: "FaGithub",
    title: "Git & GitHub",
    text: "Version control, branching, collaboration, and continuous deployment workflows.",
    category: "tools",
  },
];
