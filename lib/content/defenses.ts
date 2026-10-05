export type StudentDefense = {
  id: number;
  studentName: string;
  projectTitle: string;
  category: string;
  school: string;
  defenseStatus: string;
  defenseDate: string;
  image: string;
  quote?: string;
  gradeBadge?: string;
};

export const studentDefenses: StudentDefense[] = [
  {
    id: 1,
    studentName: "Group Alpha — BSIT",
    projectTitle: "Smart Door Automation System with Face & RFID Verification (SDASFC)",
    category: "IoT & Hardware Integration",
    school: "Cagayan State University",
    defenseStatus: "Successfully Defended — Passed with Distinction",
    defenseDate: "October 2026",
    image: "/img/defenses/defense-1.svg",
    quote: "Agyaman Kuya! Success and Finally passed our thesis defense. Thank you sa supporta!",
    gradeBadge: "Grade: 1.0 (Passed)",
  },
  {
    id: 2,
    studentName: "Group Beta — BSCpE",
    projectTitle: "Web-Based Automatic Controller for Solar-Powered Irrigation (WBACFSPWI)",
    category: "Full-Stack Web & Automation",
    school: "Cagayan State University",
    defenseStatus: "Successfully Defended — Best Capstone Nominee",
    defenseDate: "September 2026",
    image: "/img/defenses/defense-2.svg",
    quote: "Kuya Success ti Defense mi! Agyaman kami unay!",
    gradeBadge: "100% Panel Approved",
  },
  {
    id: 3,
    studentName: "Group Gamma — BSIT",
    projectTitle: "Online Disaster Management Information System (ODMIS)",
    category: "GIS & Cloud Disaster Response",
    school: "Cagayan State University",
    defenseStatus: "Successfully Defended — Zero Major Revisions",
    defenseDate: "September 2026",
    image: "/img/defenses/defense-3.svg",
    quote: "Kuya Thank you ta tinulungan na kami nga agprepare para iti defense mi.",
    gradeBadge: "Zero Major Revisions",
  },
  {
    id: 4,
    studentName: "Group Delta — BSCS",
    projectTitle: "Plastic Bottle Coin Exchanger & Recycler System (PCBCES)",
    category: "Embedded Microcontrollers & Web",
    school: "Cagayan State University",
    defenseStatus: "Successfully Defended — Unanimous Approval",
    defenseDate: "August 2026",
    image: "/img/defenses/defense-4.svg",
    quote: "Buti nalang kuya sika naguide kanya mi, nalpas mi metla ti thesis!",
    gradeBadge: "Unanimous Panel Approval",
  },
];
