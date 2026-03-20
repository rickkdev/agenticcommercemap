import { categoryNames, toSlug } from "@/lib/categories";
import { articles } from "@/data/articles";

const BASE_URL = "https://agenticcommercemap.com";

export function GET() {
  const articleLines = articles
    .map((a) => `- ${a.title}: ${BASE_URL}/articles/${a.slug}`)
    .join("\n");

  const categoryLines = categoryNames
    .map((name) => `- ${name}: ${BASE_URL}/category/${toSlug(name)}`)
    .join("\n");

  const text = `# Agentic Commerce Market Map
> An interactive market map and guide to the companies, protocols, and infrastructure powering AI agent commerce.

## Site
- Homepage: ${BASE_URL}
- Guides: ${BASE_URL}/articles
- RSS Feed: ${BASE_URL}/feed.xml

## Articles
${articleLines || "No articles published yet."}

## Categories
${categoryLines}
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
