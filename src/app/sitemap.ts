import type { MetadataRoute } from "next";
import { categoryNames, toSlug } from "@/lib/categories";

const BASE_URL = "https://agenticcommercemap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages = categoryNames.map((name) => ({
    url: `${BASE_URL}/category/${toSlug(name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryPages,
  ];
}
