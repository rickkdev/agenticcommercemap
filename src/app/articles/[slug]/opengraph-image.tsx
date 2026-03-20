import { ImageResponse } from "next/og";
import { articles } from "@/data/articles";
import {
  categories,
  categoryColors,
  categoryHex,
  categoryShortDescriptions,
} from "@/lib/categories";
import companyInfoMap from "@/data/company-info";

export const alt = "Article cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  const title = article?.title ?? "Agentic Commerce Market Map";
  const category = article?.category ?? "";

  // Check if this article's category exists in the market map
  const cat = category ? categories[category] : undefined;

  if (cat) {
    // Category-aware style matching category page OG image
    const color = categoryColors[category] || "indigo";
    const hex = categoryHex[color] || "#6366f1";
    const short = categoryShortDescriptions[category] || "";

    const companiesWithInfo = cat.companies
      .filter((c) => companyInfoMap[c.name])
      .slice(0, 8);

    return new ImageResponse(
      (
        <div
          style={{
            background:
              "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 40%, #1a0a2e 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "50px 60px",
            fontFamily: "system-ui, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Color glow */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-50px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${hex}22, transparent 70%)`,
              display: "flex",
            }}
          />

          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "14px", color: "#6b7280" }}>
              Agentic Commerce Market Map
            </span>
            <span style={{ fontSize: "14px", color: "#4b5563" }}>/</span>
            <span style={{ fontSize: "14px", color: "#9ca3af" }}>Guides</span>
            <span style={{ fontSize: "14px", color: "#4b5563" }}>/</span>
            <span style={{ fontSize: "14px", color: hex }}>{category}</span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: hex,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                maxWidth: "1000px",
              }}
            >
              {title}
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#9ca3af",
              marginBottom: "24px",
              display: "flex",
            }}
          >
            {cat.count} companies {short ? `\u2014 ${short}` : ""}
          </span>

          {/* Company pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              maxWidth: "1080px",
            }}
          >
            {companiesWithInfo.map((c) => (
              <div
                key={c.name}
                style={{
                  background: `${hex}18`,
                  border: `1px solid ${hex}40`,
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "14px",
                  color: "#d1d5db",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {c.name}
              </div>
            ))}
            {cat.count > 8 && (
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.08)",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "14px",
                  color: "#6b7280",
                  display: "flex",
                }}
              >
                +{cat.count - 8} more
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: "36px",
              left: "60px",
              right: "60px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "15px", color: "#6b7280" }}>
              agenticcommercemap.com
            </span>
            <span style={{ fontSize: "13px", color: "#4b5563" }}>
              Interactive Explorer
            </span>
          </div>
        </div>
      ),
      { ...size }
    );
  }

  // Non-category article: clean placeholder style
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0a0a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {category && (
          <div
            style={{
              color: "#818cf8",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 20,
            }}
          >
            {category}
          </div>
        )}
        <div
          style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#6b7280",
            fontSize: 22,
            marginTop: 40,
          }}
        >
          Agentic Commerce Market Map
        </div>
      </div>
    ),
    { ...size }
  );
}
