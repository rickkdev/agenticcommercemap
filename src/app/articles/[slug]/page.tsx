import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { toSlug } from "@/lib/categories";
import { Footer } from "@/components/footer";
import StandardsProtocolsDiagram from "@/components/diagrams/StandardsProtocolsDiagram";
import PaymentProcessorsDiagram from "@/components/diagrams/PaymentProcessorsDiagram";
import IdentityTrustDiagram from "@/components/diagrams/IdentityTrustDiagram";
import AgentHarnessDiagram from "@/components/diagrams/AgentHarnessDiagram";
import StablecoinsDiagram from "@/components/diagrams/StablecoinsDiagram";
import AgentNetworksDiagram from "@/components/diagrams/AgentNetworksDiagram";
import DiscoveryDiagram from "@/components/diagrams/DiscoveryDiagram";
import CryptoCommerceDiagram from "@/components/diagrams/CryptoCommerceDiagram";
import WalletsToolingDiagram from "@/components/diagrams/WalletsToolingDiagram";
import PaymentInfrastructureDiagram from "@/components/diagrams/PaymentInfrastructureDiagram";
import UserInterfacesDiagram from "@/components/diagrams/UserInterfacesDiagram";
import AgentFrameworksDiagram from "@/components/diagrams/AgentFrameworksDiagram";
import UniversalBalanceDiagram from "@/components/diagrams/UniversalBalanceDiagram";
import ProprietaryModelsDiagram from "@/components/diagrams/ProprietaryModelsDiagram";
import OpenSourceModelsDiagram from "@/components/diagrams/OpenSourceModelsDiagram";

const SITE_URL = "https://agenticcommercemap.com";

// Map article slugs to diagram components and where to insert them
const articleDiagrams: Record<
  string,
  { Component: ComponentType; afterSection: number }
> = {
  "standards-and-protocols-guide": {
    Component: StandardsProtocolsDiagram,
    afterSection: 0,
  },
  "payment-processors-guide": {
    Component: PaymentProcessorsDiagram,
    afterSection: 1,
  },
  "identity-and-trust-guide": {
    Component: IdentityTrustDiagram,
    afterSection: 0,
  },
  "agent-harness-guide": {
    Component: AgentHarnessDiagram,
    afterSection: 2,
  },
  "stablecoins-guide": {
    Component: StablecoinsDiagram,
    afterSection: 0,
  },
  "agent-networks-guide": {
    Component: AgentNetworksDiagram,
    afterSection: 1,
  },
  "discovery-guide": {
    Component: DiscoveryDiagram,
    afterSection: 1,
  },
  "crypto-commerce-guide": {
    Component: CryptoCommerceDiagram,
    afterSection: 0,
  },
  "wallets-and-tooling-guide": {
    Component: WalletsToolingDiagram,
    afterSection: 0,
  },
  "payment-infrastructure-guide": {
    Component: PaymentInfrastructureDiagram,
    afterSection: 0,
  },
  "user-interfaces-guide": {
    Component: UserInterfacesDiagram,
    afterSection: 1,
  },
  "agent-frameworks-and-tooling-guide": {
    Component: AgentFrameworksDiagram,
    afterSection: 0,
  },
  "universal-balance-and-account-abstraction-guide": {
    Component: UniversalBalanceDiagram,
    afterSection: 1,
  },
  "proprietary-models-guide": {
    Component: ProprietaryModelsDiagram,
    afterSection: 0,
  },
  "open-source-models-guide": {
    Component: OpenSourceModelsDiagram,
    afterSection: 0,
  },
};

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

  const canonicalUrl = `${SITE_URL}/articles/${article.slug}`;

  return {
    title: `${article.title} | Agentic Commerce Market Map`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Agentic Commerce Market Map`,
      description: article.metaDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
      section: article.category,
      siteName: "Agentic Commerce Market Map",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

function computeWordCount(article: (typeof articles)[number]): number {
  let text = article.title + " " + article.metaDescription;
  for (const section of article.contentSections) {
    text += " " + section.heading + " " + section.body;
  }
  for (const item of article.faq) {
    text += " " + item.question + " " + item.answer;
  }
  return text.split(/\s+/).filter(Boolean).length;
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const canonicalUrl = `${SITE_URL}/articles/${article.slug}`;
  const wordCount = computeWordCount(article);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Organization",
      name: "Agentic Commerce Market Map",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Agentic Commerce Market Map",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    articleSection: article.category,
    keywords: article.keywords,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: `${SITE_URL}/articles/${article.slug}/opengraph-image`,
    wordCount,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_URL}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

function renderContentBlock(block: string, key: number) {
  const lines = block.split("\n");
  const isBulletList = lines.length > 1 && lines.every((l) => /^[•\-]\s/.test(l));
  const isNumberedList =
    lines.length > 1 && lines.every((l) => /^\d+\.\s/.test(l));

  if (isBulletList) {
    return (
      <ul
        key={key}
        className="list-disc list-inside text-gray-300 text-sm leading-relaxed mb-4 space-y-1.5 pl-1"
      >
        {lines.map((line, i) => (
          <li key={i}>{line.replace(/^[•\-]\s/, "")}</li>
        ))}
      </ul>
    );
  }

  if (isNumberedList) {
    return (
      <ol
        key={key}
        className="list-decimal list-inside text-gray-300 text-sm leading-relaxed mb-4 space-y-1.5 pl-1"
      >
        {lines.map((line, i) => (
          <li key={i}>{line.replace(/^\d+\.\s/, "")}</li>
        ))}
      </ol>
    );
  }

  return (
    <p key={key} className="text-gray-300 leading-relaxed text-sm mb-4">
      {block}
    </p>
  );
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
  const diagram = articleDiagrams[slug];

  return (
    <div className="min-h-screen bg-mesh">
      <ArticleJsonLd slug={slug} />
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
          {/* Hero image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/articles/${article.slug}/opengraph-image`}
            alt=""
            className="w-full rounded-xl mb-8"
          />

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
            <div key={i}>
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                  {section.heading}
                </h2>
                {section.body
                  .split("\n\n")
                  .map((block, j) => renderContentBlock(block, j))}
              </section>
              {diagram && diagram.afterSection === i && (
                <diagram.Component />
              )}
            </div>
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

      <Footer />
    </div>
  );
}
