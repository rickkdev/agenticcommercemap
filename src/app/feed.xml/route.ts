import { categories, categoryNames, categoryShortDescriptions, categoryLongDescriptions, toSlug } from "@/lib/categories";

const BASE_URL = "https://agenticcommercemap.com";

export function GET() {
  const totalCompanies = Object.values(categories).reduce((acc, cat) => {
    cat.companies.forEach((c) => acc.add(c.name));
    return acc;
  }, new Set<string>()).size;

  const items = categoryNames
    .map(
      (name) => `    <item>
      <title>${escapeXml(name)} — ${categories[name].count} Companies</title>
      <link>${BASE_URL}/category/${toSlug(name)}</link>
      <guid>${BASE_URL}/category/${toSlug(name)}</guid>
      <description>${escapeXml(
        categoryLongDescriptions[name] ||
          `${categories[name].count} companies in ${name}: ${categoryShortDescriptions[name] || ""}`
      )}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Agentic Commerce Market Map</title>
    <link>${BASE_URL}</link>
    <description>Interactive market map of ${totalCompanies}+ companies building the agentic commerce ecosystem across ${categoryNames.length} categories.</description>
    <language>en-us</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
