import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { toSlug } from "@/lib/categories";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Agentic Commerce Market Map`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://agenticcommercemap.com/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Agentic Commerce Market Map`,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedDate,
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = article.relatedArticleSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean);

  const categorySlug = toSlug(article.category);

  return (
    <div className="min-h-screen bg-mesh">
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
            <Link
              href="/articles"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Guides
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-4 py-10">
        <article>
          {/* Article header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={`/category/${categorySlug}`}
                className="inline-block px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-xs text-gray-500">
                {article.readingTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              {article.title}
            </h1>
            <time
              dateTime={article.publishedDate}
              className="text-sm text-gray-500"
            >
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          {/* Article content */}
          {article.contentSections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-gray-300 leading-relaxed text-sm mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* FAQ section */}
          {article.faq.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {article.faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-base font-medium text-white mb-2">
                      {item.question}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Category link */}
          <section className="mb-12">
            <Link
              href={`/category/${categorySlug}`}
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
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
              Explore all {article.category} companies on the market map
            </Link>
          </section>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-semibold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {relatedArticles.map((related) =>
                  related ? (
                    <Link
                      key={related.slug}
                      href={`/articles/${related.slug}`}
                      className="category-card glow-border rounded-xl p-4 hover:border-indigo-500/40 transition-all group"
                    >
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider bg-indigo-500/15 text-indigo-300 mb-2">
                        {related.category}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {related.readingTime}
                      </p>
                    </Link>
                  ) : null
                )}
              </div>
            </section>
          )}
        </article>
      </main>

      <footer className="text-center py-8 text-xs text-gray-600">
        <p>Agentic Commerce Market Map — Interactive Explorer</p>
      </footer>
    </div>
  );
}
