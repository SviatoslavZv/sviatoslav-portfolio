import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { notes } from "@/constants/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/notes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...notes.map((note) => ({
      url: `${siteConfig.url}/notes/${note.slug}`,
      lastModified: new Date(note.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}