export default function TempoMPPDiagram() {
  const mppLayers = [
    {
      label: "Agent Layer",
      desc: "Agents open sessions, set budgets, consume services",
      color: "#6366f1",
      items: ["Claude", "GPT", "Custom Agents"],
    },
    {
      label: "MPP Protocol",
      desc: "Sessions, authorization, settlement, directory",
      color: "#8b5cf6",
      items: ["Payment Sessions", "Budget Management", "Service Discovery"],
    },
    {
      label: "Network Extensions",
      desc: "Pluggable payment rail adapters",
      color: "#f59e0b",
      items: ["Visa (Cards)", "Stripe (Wallets)", "Lightspark (Lightning)"],
    },
    {
      label: "Tempo Blockchain",
      desc: "100K+ TPS, sub-second finality, negligible fees",
      color: "#10b981",
      items: ["USDC", "Smart Contracts", "Compliance Hooks"],
    },
  ];

  const partners = [
    { name: "Stripe", role: "Co-builder", color: "#6366f1" },
    { name: "Paradigm", role: "Co-builder", color: "#6366f1" },
    { name: "Anthropic", role: "AI Lab", color: "#8b5cf6" },
    { name: "OpenAI", role: "AI Lab", color: "#8b5cf6" },
    { name: "Visa", role: "Card Network", color: "#f59e0b" },
    { name: "Mastercard", role: "Card Network", color: "#f59e0b" },
    { name: "DoorDash", role: "Commerce", color: "#ef4444" },
    { name: "Shopify", role: "Commerce", color: "#ef4444" },
    { name: "Nubank", role: "Banking", color: "#10b981" },
    { name: "Revolut", role: "Banking", color: "#10b981" },
    { name: "Lightspark", role: "Bitcoin", color: "#f97316" },
    { name: "UBS", role: "Banking", color: "#10b981" },
  ];

  const comparison = [
    {
      chain: "Base",
      protocol: "x402",
      tps: "~100",
      model: "Per-request",
      strength: "Coinbase ecosystem",
      color: "#3b82f6",
    },
    {
      chain: "Solana",
      protocol: "x402",
      tps: "~4,000",
      model: "Per-request",
      strength: "Speed + DeFi",
      color: "#9333ea",
    },
    {
      chain: "Tempo",
      protocol: "MPP",
      tps: "100,000+",
      model: "Session-based",
      strength: "Enterprise + TradFi",
      color: "#10b981",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        borderRadius: "16px",
        padding: "32px",
        margin: "32px 0",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#e2e8f0",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "8px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Tempo & MPP Architecture
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        How the Machine Payments Protocol connects agents to services through
        sessions and network extensions
      </p>

      {/* MPP Layer Stack */}
      <div style={{ marginBottom: "32px" }}>
        {mppLayers.map((layer, i) => (
          <div
            key={layer.label}
            style={{
              background: `${layer.color}15`,
              border: `1px solid ${layer.color}40`,
              borderRadius: i === 0 ? "12px 12px 0 0" : i === mppLayers.length - 1 ? "0 0 12px 12px" : "0",
              padding: "16px 20px",
              borderTop: i > 0 ? "none" : undefined,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: layer.color,
                  }}
                >
                  {layer.label}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    marginLeft: "12px",
                  }}
                >
                  {layer.desc}
                </span>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {layer.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background: `${layer.color}25`,
                      color: layer.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chain Comparison */}
      <h4
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#ffffff",
          marginBottom: "12px",
        }}
      >
        Chain Comparison for Agent Payments
      </h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        {comparison.map((c) => (
          <div
            key={c.chain}
            style={{
              background: `${c.color}10`,
              border: `1px solid ${c.color}30`,
              borderRadius: "10px",
              padding: "14px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: c.color,
                marginBottom: "8px",
              }}
            >
              {c.chain}
            </div>
            <div style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: 1.6 }}>
              <div>
                <span style={{ color: "#64748b" }}>Protocol:</span> {c.protocol}
              </div>
              <div>
                <span style={{ color: "#64748b" }}>TPS:</span> {c.tps}
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Model:</span> {c.model}
              </div>
              <div>
                <span style={{ color: "#64748b" }}>Strength:</span> {c.strength}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Launch Partners */}
      <h4
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#ffffff",
          marginBottom: "12px",
        }}
      >
        Launch Partners
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {partners.map((p) => (
          <span
            key={p.name}
            style={{
              fontSize: "12px",
              padding: "4px 10px",
              borderRadius: "8px",
              background: `${p.color}15`,
              border: `1px solid ${p.color}30`,
              color: p.color,
            }}
          >
            {p.name}{" "}
            <span style={{ fontSize: "10px", color: "#64748b" }}>
              {p.role}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
