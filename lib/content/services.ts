import type { IconName } from "@/components/ui/Icon";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  features: string[];
  note: { label: string; text: string };
  price: number;
  priceLabel: string;
  featured: boolean;
  badge?: string;
};

/** The three packages, verbatim from the original "What We Offer" section. */
export const services: Service[] = [
  {
    id: "one-page-website",
    icon: "FaFileCode",
    title: "1-Page Website",
    features: [
      "1-Page Website Package",
      "Mobile-Responsive Design",
      "Clean & Simple Layout",
      "Smooth Scrolling Navigation",
      "Contact Form or Direct Contact Link",
    ],
    note: {
      label: "Ideal for:",
      text: "Personal pages, portfolios, and simple business landing pages.",
    },
    price: 3000,
    priceLabel: "Starting at",
    featured: false,
  },
  {
    id: "budget-friendly-package",
    icon: "FaLaptopCode",
    title: "Budget-Friendly Package",
    features: [
      "Simple Website or Basic System",
      "Up to 5 Pages or Basic Modules",
      "Mobile-Responsive Design",
      "Basic Database (CRUD)",
      "Login System with User Roles",
    ],
    note: {
      label: "Best for:",
      text: "Students, school projects, and small organizations.",
    },
    price: 5000,
    priceLabel: "Starting at",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "capstone-system-small-business",
    icon: "FaRocket",
    title: "Capstone System / Small Business",
    features: [
      "Web-Based Systems",
      "Mobile Applications",
      "Standalone (Desktop) Applications",
      "Admin & User Dashboard",
      "Reports & Basic Analytics",
      "Secure Authentication",
      "Mobile-Responsive UI",
    ],
    note: {
      label: "Note:",
      text: "Pricing may vary depending on system complexity and scope.",
    },
    price: 15000,
    priceLabel: "Starting at",
    featured: false,
  },
];

export const formatPeso = (amount: number) =>
  `₱${amount.toLocaleString("en-PH")}`;
