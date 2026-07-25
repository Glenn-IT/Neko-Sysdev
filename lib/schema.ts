import { formatPeso, services } from "@/lib/content/services";
import { mobileProjects, webProjects } from "@/lib/content/projects";
import { averageRating, testimonials } from "@/lib/content/testimonials";
import { contact, siteConfig, socials } from "@/lib/content/siteConfig";
import { team } from "@/lib/content/team";

const abs = (path: string) => new URL(path, siteConfig.url).toString();

/**
 * JSON-LD builders. The original site had no structured data at all, so nothing
 * told a search engine or an AI crawler what this business is, what it sells,
 * what it costs, or that it has five-star reviews.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": abs("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    email: contact.emails[0],
    telephone: contact.phones.map((p) => p.display),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: "PH",
    },
    areaServed: { "@type": "Country", name: "Philippines" },
    priceRange: `${formatPeso(services[0].price)}+`,
    knowsLanguage: ["en", "fil", "ilo"],
    sameAs: socials.map((s) => s.href),
    founder: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": abs("/#organization") },
    inLanguage: "en-PH",
  };
}

export function offerCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Development Packages",
    url: abs("/services"),
    provider: { "@id": abs("/#organization") },
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: service.title,
      description: service.features.join(", "),
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "PHP",
        minPrice: service.price,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: service.title,
        serviceType: "Software development",
        provider: { "@id": abs("/#organization") },
        areaServed: { "@type": "Country", name: "Philippines" },
      },
    })),
  };
}

export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": abs("/#organization"),
    name: siteConfig.name,
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: testimonial.author },
      reviewBody: testimonial.text,
    })),
  };
}

export function projectListSchema() {
  const all = [
    ...webProjects.map((p) => ({ ...p, category: "Web-based system" })),
    ...mobileProjects.map((p) => ({ ...p, category: "Mobile application" })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Capstone project types built by NeKo-SysDev",
    numberOfItems: all.length,
    itemListElement: all.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary ?? project.tech.join(" · "),
        genre: project.category,
        keywords: project.tech.join(", "),
      },
    })),
  };
}

export function peopleSchema() {
  return team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.description,
    email: member.email,
    image: abs(member.image),
    worksFor: { "@id": abs("/#organization") },
    sameAs: member.links.map((link) => link.href),
  }));
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: abs("/contact"),
    name: "Contact NeKo-SysDev",
    mainEntity: { "@id": abs("/#organization") },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a capstone system cost in the Philippines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `NeKo-SysDev packages start at ${formatPeso(services[0].price)} for a 1-page website, ${formatPeso(services[1].price)} for a budget-friendly system with up to 5 pages or basic modules, and ${formatPeso(services[2].price)} for a full capstone or small business system. Pricing may vary depending on system complexity and scope.`,
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use to build capstone projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PHP and Laravel on the backend, MySQL for the database, HTML5, CSS3, JavaScript and Bootstrap on the frontend, plus Android (Java/Kotlin), Flutter, Firebase, REST APIs, Google Maps API and Chart.js depending on the system.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with thesis defense and documentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We pre-install the tools you need, give step-by-step training on the system, help you understand it for documentation, and guide you through your presentation and final defense.",
        },
      },
      {
        "@type": "Question",
        name: "Where is NeKo-SysDev located and can we meet in person?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `We are based in ${contact.address.street}, ${contact.address.locality}, ${contact.address.region}, ${contact.address.country} ${contact.address.postalCode}. We meet through Google Meet, in person around Santo Niño, Cagayan, or remotely via TeamViewer and AnyDesk.`,
        },
      },
    ],
  };
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}
