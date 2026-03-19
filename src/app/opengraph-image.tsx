import { ImageResponse } from "next/og";
import { categories, categoryNames } from "@/lib/categories";

const companyCount = Object.values(categories).reduce((acc, cat) => {
  cat.companies.forEach((c) => acc.add(c.name));
  return acc;
}, new Set<string>()).size;

export const alt = `Agentic Commerce Market Map — ${companyCount}+ companies building the agentic commerce ecosystem`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const totalCompanies = Object.values(categories).reduce((acc, cat) => {
    cat.companies.forEach((c) => acc.add(c.name));
    return acc;
  }, new Set<string>()).size;

  const totalCategories = categoryNames.length;

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
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
              <line x1="1" y1="5.5" x2="3.5" y2="5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35"/>
              <line x1="0.5" y1="8" x2="4" y2="8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/>
              <line x1="1" y1="10.5" x2="3.5" y2="10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35"/>
              <line x1="9.5" y1="2.5" x2="9.5" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
              <path d="M12 5 C12 3 7 3 7 5.5 C7 7.5 12 7.5 12 10.5 C12 13 7 13 7 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.9"/>
              <path d="M14 1.5 L14.3 2.7 L15.5 3 L14.3 3.3 L14 4.5 L13.7 3.3 L12.5 3 L13.7 2.7 Z" fill="white" fillOpacity="0.85"/>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>
              Agentic Commerce
            </span>
            <span style={{ fontSize: "18px", fontWeight: 500, color: "#9ca3af", letterSpacing: "4px", textTransform: "uppercase" as const }}>
              Market Map
            </span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#6366f1", display: "flex" }} />
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#e5e7eb" }}>{totalCompanies}+</span>
            <span style={{ fontSize: "20px", color: "#9ca3af" }}>companies</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#a855f7", display: "flex" }} />
            <span style={{ fontSize: "28px", fontWeight: 700, color: "#e5e7eb" }}>{totalCategories}</span>
            <span style={{ fontSize: "20px", color: "#9ca3af" }}>categories</span>
          </div>
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "40px", maxWidth: "1080px" }}>
          {categoryNames.slice(0, 14).map((name) => (
            <div
              key={name}
              style={{
                background: "rgba(99, 102, 241, 0.12)",
                border: "1px solid rgba(99, 102, 241, 0.25)",
                borderRadius: "20px",
                padding: "8px 18px",
                fontSize: "15px",
                color: "#c4b5fd",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {name}
              <span style={{ color: "#818cf8", fontSize: "13px" }}>
                {categories[name].count}
              </span>
            </div>
          ))}
          <div
            style={{
              background: "rgba(99, 102, 241, 0.08)",
              borderRadius: "20px",
              padding: "8px 18px",
              fontSize: "15px",
              color: "#818cf8",
              display: "flex",
            }}
          >
            +{categoryNames.length - 14} more
          </div>
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
          <span style={{ fontSize: "16px", color: "#6b7280" }}>
            agenticcommercemap.com
          </span>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>
            Interactive Explorer
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
