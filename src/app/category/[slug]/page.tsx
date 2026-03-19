import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  categoryNames,
  categoryShortDescriptions,
  categoryLongDescriptions,
  categoryColors,
  toSlug,
  fromSlug,
} from "@/lib/categories";
import companyInfoMap from "@/data/company-info";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categoryNames.map((name) => ({ slug: toSlug(name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = fromSlug(slug);
  if (!name) return {};
  const cat = categories[name];
  const short = categoryShortDescriptions[name] || "";

  return {
    title: `${name} — Agentic Commerce Market Map`,
    description: `Explore ${cat.count} companies in ${name} (${short}). Detailed profiles, descriptions, and links for every project in the agentic commerce ecosystem.`,
    openGraph: {
      title: `${name} — Agentic Commerce Market Map`,
      description: `${cat.count} companies building ${short}. Part of the agentic commerce ecosystem with 215+ projects across 18 categories.`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — Agentic Commerce Market Map`,
      description: `${cat.count} companies building ${short}.`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = fromSlug(slug);
  if (!name) notFound();

  const cat = categories[name];
  const color = categoryColors[name] || "indigo";
  const short = categoryShortDescriptions[name] || "";
  const longDesc = categoryLongDescriptions[name] || "";

  // Get all unique companies with their info
  const allCompanies = cat.companies.map((c) => ({
    ...c,
    info: companyInfoMap[c.name],
  }));

  // JSON-LD structured data for this category
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${name} — Agentic Commerce Market Map`,
    description: longDesc || `${cat.count} companies in ${name}: ${short}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Agentic Commerce Market Map",
      url: "https://agenticcommercemap.com",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: cat.count,
      itemListElement: allCompanies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Organization",
          name: c.name,
          ...(c.info?.website ? { url: c.info.website } : {}),
          ...(c.info?.description ? { description: c.info.description } : {}),
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-mesh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 header-blur px-6 py-3">
        <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L14.9282 5V11L8 15L1.0718 11V5L8 1Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight">
                Agentic Commerce
              </h1>
              <p className="text-[10px] text-gray-500 -mt-0.5 tracking-wide uppercase">
                Market Map
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Map
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-4 py-10">
        {/* Category header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block w-3 h-3 rounded-full bg-${color}-500`}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {short}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
          <p className="text-lg text-gray-400">
            {cat.count} companies in this category
          </p>
        </div>

        {/* Long description */}
        {longDesc && (
          <section className="mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-base">
                {longDesc}
              </p>
            </div>
          </section>
        )}

        {/* Subcategories if they exist */}
        {cat.subcategories && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-6">
              Subcategories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.subcategories.map((sub) => (
                <div
                  key={sub.name}
                  className="category-card glow-border p-4 rounded-xl"
                >
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {sub.companies.map((c) => c.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All companies */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-6">
            All Companies ({cat.count})
          </h2>
          <div className="space-y-4">
            {allCompanies.map((company) => (
              <article
                key={company.name}
                className="category-card glow-border rounded-xl p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-block w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white/5 ring-1 ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {company.name}
                    </h3>
                    {company.info ? (
                      <>
                        <p className="text-sm text-gray-400 leading-relaxed mt-1">
                          {company.info.description}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          {company.info.website && (
                            <a
                              href={company.info.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="shrink-0"
                              >
                                <circle
                                  cx="7"
                                  cy="7"
                                  r="5.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="M1.5 7h11M7 1.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5M7 1.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                              Website
                            </a>
                          )}
                          {company.info.url && (
                            <a
                              href={company.info.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-400 transition-colors"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="shrink-0"
                              >
                                <path
                                  d="M5.25 2.33H2.33v9.34h9.34V8.75M8.17 1.17h4.66v4.66M8.17 5.83L12.83 1.17"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Reference
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-gray-600 italic mt-1">
                        No additional information available yet.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Related categories */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-white mb-6">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categoryNames
              .filter((n) => n !== name)
              .map((catName) => (
                <Link
                  key={catName}
                  href={`/category/${toSlug(catName)}`}
                  className="category-card glow-border rounded-xl p-4 hover:border-indigo-500/40 transition-all group"
                >
                  <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {catName}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {categories[catName].count} companies —{" "}
                    {categoryShortDescriptions[catName]}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-600">
        <p>Agentic Commerce Market Map — Interactive Explorer</p>
      </footer>
    </div>
  );
}
