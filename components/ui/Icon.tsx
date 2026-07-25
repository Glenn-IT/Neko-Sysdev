import type { ComponentType, SVGProps } from "react";
import {
  FaAndroid,
  FaBars,
  FaBookOpen,
  FaBootstrap,
  FaBriefcase,
  FaCalendarAlt,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaChartLine,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaCommentDots,
  FaComments,
  FaCopy,
  FaCopyright,
  FaCss3Alt,
  FaDatabase,
  FaDesktop,
  FaEnvelope,
  FaFacebookF,
  FaFileCode,
  FaFire,
  FaGithub,
  FaGoogle,
  FaGraduationCap,
  FaHandshake,
  FaHandsHelping,
  FaHeadset,
  FaHtml5,
  FaInfoCircle,
  FaJs,
  FaLaptop,
  FaLaptopCode,
  FaLaravel,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaPhp,
  FaRocket,
  FaServer,
  FaStar,
  FaSyncAlt,
  FaTimes,
  FaTools,
  FaUser,
  FaUserCheck,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

/**
 * Icon registry. The original site pulled Font Awesome 6 from a CDN on every page
 * load; these are the same glyphs shipped as tree-shaken React components instead,
 * so there is no render-blocking third-party request.
 */
const icons = {
  FaAndroid,
  FaBars,
  FaBookOpen,
  FaBootstrap,
  FaBriefcase,
  FaCalendarAlt,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaChartLine,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaCommentDots,
  FaComments,
  FaCopy,
  FaCopyright,
  FaCss3Alt,
  FaDatabase,
  FaDesktop,
  FaEnvelope,
  FaFacebookF,
  FaFileCode,
  FaFire,
  FaGithub,
  FaGoogle,
  FaGraduationCap,
  FaHandshake,
  FaHandsHelping,
  FaHeadset,
  FaHtml5,
  FaInfoCircle,
  FaJs,
  FaLaptop,
  FaLaptopCode,
  FaLaravel,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaPhp,
  FaRocket,
  FaServer,
  FaStar,
  FaSyncAlt,
  FaTimes,
  FaTools,
  FaUser,
  FaUserCheck,
  FaUsers,
  FaVideo,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  title?: string;
};

export function Icon({ name, className, title }: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph
      className={className}
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
    </Glyph>
  );
}
