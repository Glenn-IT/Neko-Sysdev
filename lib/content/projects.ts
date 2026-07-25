export type Project = {
  title: string;
  /** Optional one-line description shown above the technology list. */
  summary?: string;
  /** Lines rendered under the "Technologies:" label, exactly as on the original site. */
  tech: string[];
};

/** Capstone Projects — 21 web-based systems, in the original order. */
export const webProjects: Project[] = [
  {
    title: "Doctor/Dentist Appointment System",
    summary:
      "Schedule appointments with doctors or dentists, includes SMS/Email reminders for patients",
    tech: ["PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, SMS/Email API"],
  },
  {
    title: "Barangay Information Management System",
    tech: [
      "Frontend: HTML, CSS, Bootstrap, JavaScript",
      "Backend: PHP (Laravel or Core PHP)",
      "Database: MySQL (phpMyAdmin)",
      "Tools: XAMPP, VS Code",
    ],
  },
  {
    title: "Barangay Health Center Patient Record System",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP (Laravel)",
      "Database: MySQL",
      "Extras: QR Code (patient ID)",
    ],
  },
  {
    title: "Online Appointment & Queue Management System (SSS / LGU)",
    tech: [
      "Frontend: HTML, CSS, JS, AJAX",
      "Backend: PHP (Laravel)",
      "Database: MySQL",
      "Real-time: Pusher / WebSockets (optional)",
    ],
  },
  {
    title: "Disaster Response & Evacuation Management System",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP",
      "Database: MySQL",
      "Maps: Google Maps API",
      "SMS Alerts: Twilio / Semaphore",
    ],
  },
  {
    title: "Police Blotter & Incident Reporting System",
    tech: [
      "Frontend: HTML, Bootstrap",
      "Backend: PHP (OOP)",
      "Database: MySQL",
      "Security: Role-based access",
    ],
  },
  {
    title: "School Enrollment & Student Information System",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP (Laravel)",
      "Database: MySQL",
      "Reports: TCPDF / DomPDF",
    ],
  },
  {
    title: "Scholarship Management System (LGU)",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Extras: File upload (requirements), PDF reports",
    ],
  },
  {
    title: "Traffic Violation & E-Ticketing System",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP (Laravel API)",
      "Database: MySQL",
      "Mobile: Android (Java / Kotlin)",
      "QR Code scanning",
    ],
  },
  {
    title: "Healthcare Appointment & Medical Record System",
    tech: [
      "Frontend: HTML, CSS, JS",
      "Backend: PHP",
      "Database: MySQL",
      "Calendar: FullCalendar JS",
    ],
  },
  {
    title: "Water Billing & Consumer Management System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Charts: Chart.js",
      "Billing Reports: PDF export",
    ],
  },
  {
    title: "Solid Waste Management & Collection Monitoring",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP",
      "Database: MySQL",
      "GIS: Google Maps API",
    ],
  },
  {
    title: "Online Voting System (Barangay / Student Council)",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Security: Hashing, OTP, Audit logs",
    ],
  },
  {
    title: "Local Employment Matching System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Search: AJAX, Filters",
      "Resume Upload: PDF parser (basic)",
    ],
  },
  {
    title: "Prison / Jail Management System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP (OOP / Laravel)",
      "Database: MySQL",
      "Modules: Inmate, Visits, Records",
    ],
  },
  {
    title: "Tourism Information & Booking System (LGU)",
    tech: [
      "Frontend: Bootstrap, JavaScript",
      "Backend: PHP",
      "Database: MySQL",
      "Maps: Google Maps",
      "Payment: GCash (simulation)",
    ],
  },
  {
    title: "Small Business POS & Inventory System",
    tech: [
      "Frontend: HTML, Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Barcode: Barcode Scanner API",
    ],
  },
  {
    title: "Community Complaint & Request Tracking System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Notifications: Email / SMS",
    ],
  },
  {
    title: "Agriculture Crop Monitoring & Farmer Registry",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "Charts: Chart.js",
      "Optional: IoT data input",
    ],
  },
  {
    title: "Donation & Relief Goods Distribution System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP",
      "Database: MySQL",
      "QR Code tracking",
      "Reports: PDF",
    ],
  },
  {
    title: "Bids and Awards Committee (BAC) Management System",
    tech: [
      "Frontend: Bootstrap",
      "Backend: PHP (Laravel)",
      "Database: MySQL",
      "Role-based access",
      "Document uploads",
    ],
  },
];

/** Mobile Application Capstone Projects — 10 Android / Flutter apps. */
export const mobileProjects: Project[] = [
  {
    title: "Barangay Services Mobile App",
    summary:
      "Residents can request certificates, submit complaints, and receive announcements.",
    tech: [
      "Mobile: Android (Java / Kotlin)",
      "Backend: PHP (Laravel / REST API)",
      "Database: MySQL",
      "Notifications: Firebase Cloud Messaging (FCM)",
    ],
  },
  {
    title: "Barangay Health Monitoring Mobile App",
    summary:
      "Tracks patient visits, vaccination schedules, and health alerts.",
    tech: [
      "Mobile: Android (Kotlin)",
      "Backend: PHP REST API",
      "Database: MySQL",
      "QR Code: ZXing",
      "Charts: MPAndroidChart",
    ],
  },
  {
    title: "Disaster Alert & Evacuation Mobile App",
    summary: "Sends real-time disaster alerts and shows evacuation centers.",
    tech: [
      "Mobile: Android (Java/Kotlin)",
      "Backend: PHP",
      "Database: MySQL",
      "Maps: Google Maps API",
      "Alerts: Firebase Push Notifications",
    ],
  },
  {
    title: "Traffic Violation E-Ticketing Mobile App",
    summary: "Used by traffic enforcers to issue digital tickets.",
    tech: [
      "Mobile: Android",
      "Backend: PHP (Laravel API)",
      "Database: MySQL",
      "QR Code Scanner",
      "Camera API",
    ],
  },
  {
    title: "Healthcare Appointment Booking Mobile App",
    summary: "Patients can book and track medical appointments.",
    tech: [
      "Mobile: Android / Flutter",
      "Backend: PHP REST API",
      "Database: MySQL",
      "Calendar: Android Calendar API",
    ],
  },
  {
    title: "Local Job Finder Mobile App",
    summary: "Matches barangay residents with local job opportunities.",
    tech: [
      "Mobile: Flutter (Android & iOS)",
      "Backend: PHP",
      "Database: MySQL",
      "Search & Filters",
      "File Upload (Resumes)",
    ],
  },
  {
    title: "Tourism Guide & Booking Mobile App (LGU)",
    summary: "Shows tourist spots, routes, and booking info.",
    tech: [
      "Mobile: Flutter",
      "Backend: PHP",
      "Database: MySQL",
      "Maps: Google Maps",
      "Offline Mode (basic)",
    ],
  },
  {
    title: "Waste Collection Schedule & Complaint Mobile App",
    summary: "Residents receive garbage schedules and report issues.",
    tech: [
      "Mobile: Android",
      "Backend: PHP",
      "Database: MySQL",
      "Push Notifications",
      "Camera Upload",
    ],
  },
  {
    title: "Emergency Reporting Mobile App",
    summary: "Allows citizens to report crimes or emergencies.",
    tech: [
      "Mobile: Android",
      "Backend: PHP",
      "Database: MySQL",
      "GPS Location",
      "Image Capture",
      "SMS API (optional)",
    ],
  },
  {
    title: "Small Business POS Mobile App",
    summary: "Mobile-based sales and inventory for sari-sari stores.",
    tech: [
      "Mobile: Android",
      "Backend: PHP",
      "Database: MySQL",
      "Barcode Scanner",
      "Offline Sync (basic)",
    ],
  },
];

export const allProjects = [...webProjects, ...mobileProjects];
