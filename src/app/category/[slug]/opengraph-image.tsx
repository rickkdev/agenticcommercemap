import { ImageResponse } from "next/og";
import {
  categories,
  categoryNames,
  categoryShortDescriptions,
  categoryColors,
  categoryHex,
  toSlug,
  fromSlug,
} from "@/lib/categories";
import companyInfoMap from "@/data/company-info";

export const alt = "Category — Agentic Commerce Market Map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return categoryNames.map((name) => ({ slug: toSlug(name) }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = fromSlug(slug);
  if (!name) {
    return new ImageResponse(
      <div style={{ background: "#0a0a1a", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "32px" }}>
        Category not found
      </div>,
      { ...size }
    );
  }

  const cat = categories[name];
  const color = categoryColors[name] || "indigo";
  const hex = categoryHex[color] || "#6366f1";
  const short = categoryShortDescriptions[name] || "";

  // Get companies with info for display
  const companiesWithInfo = cat.companies
    .filter((c) => companyInfoMap[c.name])
    .slice(0, 8);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 40%, #1a0a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <span style={{ fontSize: "14px", color: "#6b7280" }}>Agentic Commerce Market Map</span>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>/</span>
          <span style={{ fontSize: "14px", color: hex }}>{name}</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: hex,
              display: "flex",
            }}
          />
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>
            {name}
          </span>
        </div>

        <span style={{ fontSize: "22px", color: "#9ca3af", marginBottom: "30px", display: "flex" }}>
          {cat.count} companies — {short}
        </span>

        {/* Company names */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "1080px" }}>
          {companiesWithInfo.map((c) => (
            <div
              key={c.name}
              style={{
                background: `${hex}18`,
                border: `1px solid ${hex}40`,
                borderRadius: "20px",
                padding: "8px 16px",
                fontSize: "15px",
                color: "#d1d5db",
                display: "flex",
                alignItems: "center",
                gap: "6px",
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
                padding: "8px 16px",
                fontSize: "15px",
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
            bottom: "40px",
            left: "60px",
            right: "60px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "16px", color: "#6b7280" }}>agenticcommercemap.com</span>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>
            Interactive Explorer
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
