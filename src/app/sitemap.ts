import type { MetadataRoute } from "next";
import { categoryNames, toSlug } from "@/lib/categories";
import { articles } from "@/data/articles";

const BASE_URL = "https://agenticcommercemap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages = categoryNames.map((name) => ({
    url: `${BASE_URL}/category/${toSlug(name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryPages,
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...articlePages,
  ];
}
