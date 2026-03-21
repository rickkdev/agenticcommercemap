import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { Footer } from "@/components/footer";

const SITE_URL = "https://agenticcommercemap.com";
const ARTICLES_PER_PAGE = 12;

const sortedArticles = [...articles].sort(
  (a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);

export const metadata: Metadata = {
  title: "Guides — Agentic Commerce Market Map",
  description:
    "In-depth guides explaining every category of the agentic commerce ecosystem — from payment processors and AI agent frameworks to identity, wallets, and blockchains.",
  alternates: {
    canonical: "https://agenticcommercemap.com/articles",
  },
  openGraph: {
    title: "Guides — Agentic Commerce Market Map",
    description:
      "In-depth guides explaining every category of the agentic commerce ecosystem.",
    type: "website",
  },
};

function ArticlesItemListJsonLd() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: article.title,
      url: `${SITE_URL}/articles/${article.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  );
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const currentPage = Math.max(
    1,
    Math.min(totalPages, Number(pageParam) || 1)
  );
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const pageArticles = sortedArticles.slice(start, start + ARTICLES_PER_PAGE);

  return (
    <div className="min-h-screen bg-mesh">
      <ArticlesItemListJsonLd />
      {/* Header */}
      <header className="sticky top-0 z-20 header-blur px-6 py-3">
        <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center ring-1 ring-indigo-500/30">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                <path
                  d="M3 26 L9 6 L15 26"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <line
                  x1="5"
                  y1="19"
                  x2="13"
                  y2="19"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M28 10 C25 5, 19 6, 19 16 C19 26, 25 27, 28 22"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
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
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              Map
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Guides</h1>
          <p className="text-lg text-gray-400">
            In-depth articles explaining every corner of the agentic commerce
            ecosystem.
          </p>
        </div>

        {pageArticles.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Articles coming soon. Check back later.
          </p>
        ) : (
          <div className="space-y-4">
            {pageArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="category-card glow-border rounded-xl overflow-hidden block hover:border-indigo-500/40 transition-all group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/articles/${article.slug}/opengraph-image`}
                  alt=""
                  className="w-full aspect-[1200/630] object-cover"
                />
                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-indigo-500/15 text-indigo-300">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readingTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {article.metaDescription}
                    </p>
                    <time
                      dateTime={article.publishedDate}
                      className="text-xs text-gray-600 mt-2 block"
                    >
                      {new Date(article.publishedDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 mt-1 text-gray-600 group-hover:text-indigo-400 transition-colors"
                  >
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={
                  currentPage === 2
                    ? "/articles"
                    : `/articles?page=${currentPage - 1}`
                }
                rel="prev"
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-colors"
              >
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/articles" : `/articles?page=${p}`}
                className={`w-10 h-10 rounded-lg text-sm flex items-center justify-center transition-colors ${
                  p === currentPage
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                    : "text-gray-500 hover:text-white border border-white/10 hover:border-indigo-500/40"
                }`}
              >
                {p}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={`/articles?page=${currentPage + 1}`}
                rel="next"
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-colors"
              >
                Next
              </Link>
            )}
          </nav>
        )}
      </main>

      <Footer />
    </div>
  );
}
