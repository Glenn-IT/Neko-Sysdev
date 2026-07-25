import type { IconName } from "@/components/ui/Icon";

export type MeetingOption = {
  icon: IconName;
  title: string;
  text: string;
};

export type ProvidedFeature = MeetingOption;

export const processIntro = {
  icon: "FaHandshake" as IconName,
  title: "Our Collaborative Approach",
  text: "We believe in working closely with you throughout the development process. Whether online or in-person, we make sure you understand every step and feel confident about your system.",
};

/** "Meeting & Discussion Options" — four cards. */
export const meetingOptions: MeetingOption[] = [
  {
    icon: "FaVideo",
    title: "Google Meet",
    text: "Virtual meetings for project discussions, demos, and training sessions",
  },
  {
    icon: "FaUsers",
    title: "Personal Meet-Up",
    text: "Face-to-face meetings in Santo Niño, Cagayan or your preferred location",
  },
  {
    icon: "FaDesktop",
    title: "TeamViewer",
    text: "Remote desktop support for live system demonstrations and guidance",
  },
  {
    icon: "FaLaptop",
    title: "AnyDesk",
    text: "Alternative remote access for seamless screen sharing and troubleshooting",
  },
];

/** "What We Provide" — six features. */
export const providedFeatures: ProvidedFeature[] = [
  {
    icon: "FaTools",
    title: "Pre-Installed Tools",
    text: "We'll pre-install all necessary software and tools on your system before we begin",
  },
  {
    icon: "FaChalkboardTeacher",
    title: "Step-by-Step Training",
    text: "Complete walkthrough on how to use and manage your system effectively",
  },
  {
    icon: "FaBookOpen",
    title: "Documentation Support",
    text: "Help with understanding your system for thesis defense and documentation",
  },
  {
    icon: "FaHeadset",
    title: "Continuous Guidance",
    text: "Regular check-ins and support throughout development and deployment",
  },
  {
    icon: "FaGraduationCap",
    title: "Defense Preparation",
    text: "Guide you through presentation and help you prepare for your thesis defense",
  },
  {
    icon: "FaComments",
    title: "24/7 Communication",
    text: "Always available via Facebook Messenger, email, or phone for urgent concerns",
  },
];

export const workCta = {
  title: "Ready to Get Started?",
  text: "Let's discuss your project and choose the best collaboration method for you",
  button: "Schedule a Meeting",
};

/** The five booking steps rendered inside the Schedule Meeting modal. */
export const scheduleSteps = [
  {
    number: 1,
    title: "Open Google Calendar",
    text: "Click the button below to open Google Calendar in a new tab",
    link: {
      href: "https://calendar.google.com/calendar/u/0/r/eventedit",
      label: "Open Google Calendar",
    },
  },
  {
    number: 2,
    title: "Create Your Event",
    text: "Fill in the event details:",
    list: [
      { strong: "Title:", rest: ' "Capstone/System Development Consultation"' },
      { strong: "Date & Time:", rest: " Choose your preferred schedule" },
      { strong: "Duration:", rest: " 30-60 minutes recommended" },
    ],
  },
  {
    number: 3,
    title: "Add Us as Guests",
    text: 'In the "Add guests" field, enter our email addresses:',
    emails: true,
  },
  {
    number: 4,
    title: "Add Meeting Details",
    text: "In the description, please include:",
    list: [
      { strong: "", rest: "Your name and school/organization" },
      {
        strong: "",
        rest: "Type of project you need (Capstone, Website, Mobile App)",
      },
      { strong: "", rest: "Brief description of your requirements" },
      {
        strong: "",
        rest: "Preferred meeting method (Google Meet, In-person, TeamViewer)",
      },
    ],
  },
  {
    number: 5,
    title: "Send Invitation",
    text: 'Click "Save" and Google Calendar will automatically send us an invitation. We\'ll confirm your meeting shortly!',
  },
] as const;
