import type { Metadata } from "next";
import { siteConfig } from "@/lib/content/siteConfig";

type BuildMetadataArgs = {
  /** Full <title> text. Written out per route rather than templated, so each one reads naturally. */
  title: string;
  description: string;
  /** Route path, e.g. "/services". Use "/" for the homepage. */
  path: string;
  keywords?: string[];
};

/**
 * Per-route metadata: unique title and description, a self-referencing canonical,
 * plus Open Graph and Twitter cards. The original site shipped one set of tags for
 * the whole domain, so every URL competed with itself.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: { absolute: title },
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_PH",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
