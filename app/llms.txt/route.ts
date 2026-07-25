import { benefits } from "@/lib/content/benefits";
import { mobileProjects, webProjects } from "@/lib/content/projects";
import { formatPeso, services } from "@/lib/content/services";
import { contact, siteConfig } from "@/lib/content/siteConfig";
import { skills } from "@/lib/content/skills";
import { team } from "@/lib/content/team";
import { averageRating, testimonials } from "@/lib/content/testimonials";
import {
  meetingOptions,
  providedFeatures,
} from "@/lib/content/workProcess";

export const dynamic = "force-static";

/**
 * /llms.txt — the emerging convention for AI agents: a single plain-text summary of
 * the business, generated from the same content the pages render, so it can never
 * drift out of sync with the site.
 */
export function GET() {
  const url = (path: string) => new URL(path, siteConfig.url).toString();

  const body = `# ${siteConfig.name} (${siteConfig.legalName})

> ${siteConfig.tagline}. We build web-based systems, mobile applications, and desktop
> applications for students defending a capstone or thesis and for small businesses in
> the Philippines — and we stay involved through documentation, training, and the final defense.

Website: ${siteConfig.url}
Location: ${contact.address.street}, ${contact.address.locality}, ${contact.address.region}, ${contact.address.country} ${contact.address.postalCode}
Area served: Philippines (nationwide, remote or in person around Santo Niño, Cagayan)
Languages: English, Filipino, Ilocano
Team: ${team.map((m) => `${m.name} (${m.role} — ${m.description})`).join("; ")}

## Contact

Email: ${contact.emails.join(", ")}
Phone: ${contact.phones.map((p) => p.display).join(", ")}
Facebook Messenger: ${contact.messenger}
Meeting options: ${meetingOptions.map((o) => o.title).join(", ")}

## Packages and pricing (Philippine peso)

${services
  .map(
    (service) => `### ${service.title} — ${service.priceLabel.toLowerCase()} ${formatPeso(service.price)}${service.badge ? ` (${service.badge})` : ""}
${service.features.map((f) => `- ${f}`).join("\n")}
${service.note.label} ${service.note.text}`,
  )
  .join("\n\n")}

## What clients get

${providedFeatures.map((f) => `- ${f.title}: ${f.text}`).join("\n")}

## Why clients choose us

${benefits.map((b) => `- ${b.title}: ${b.text}`).join("\n")}

## Technologies (${skills.length})

${skills.map((s) => `- ${s.title}: ${s.text}`).join("\n")}

## Capstone project types we build (${webProjects.length} web-based)

${webProjects.map((p) => `- ${p.title} — ${p.tech.join("; ")}`).join("\n")}

## Mobile application capstone projects (${mobileProjects.length})

${mobileProjects.map((p) => `- ${p.title}${p.summary ? ` — ${p.summary}` : ""} — ${p.tech.join("; ")}`).join("\n")}

## Reviews

Average rating ${averageRating.toFixed(1)} out of 5 from ${testimonials.length} clients.
${testimonials.map((t) => `- "${t.text}" — ${t.author}, ${t.role}`).join("\n")}

## Pages

- ${url("/")}: Home — all sections
- ${url("/services")}: Packages and pricing
- ${url("/projects")}: ${webProjects.length + mobileProjects.length} capstone project types with technology stacks
- ${url("/about")}: Team, how we work, client reviews
- ${url("/contact")}: Contact details and meeting options
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
