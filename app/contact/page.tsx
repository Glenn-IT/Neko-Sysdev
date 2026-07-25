import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/ui/JsonLd";
import { contact } from "@/lib/content/siteConfig";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact NeKo-SysDev — Capstone Developers in Santo Niño, Cagayan",
  description: `Talk to NeKo-SysDev about your capstone system, website, or mobile app. Email ${contact.emails[0]}, call ${contact.phones[0].display}, or meet us in ${contact.address.locality}, ${contact.address.region}. Google Meet, TeamViewer and AnyDesk also available.`,
  path: "/contact",
  keywords: [
    "contact capstone developer Philippines",
    "hire system developer Cagayan",
    "capstone consultation",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Contact headingLevel="h1" />
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
