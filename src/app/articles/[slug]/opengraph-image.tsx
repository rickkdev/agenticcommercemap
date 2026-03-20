import { ImageResponse } from "next/og";
import { articles } from "@/data/articles";

export const runtime = "edge";
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

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #0a0a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "sans-serif",
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
