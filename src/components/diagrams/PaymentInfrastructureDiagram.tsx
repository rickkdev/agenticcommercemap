export default function PaymentInfrastructureDiagram() {
  const layers = [
    {
      label: "Protocol Layer",
      color: "#a78bfa",
      items: [
        { name: "x402", detail: "HTTP-native micropayments" },
        { name: "ACP", detail: "Shopping flows (OpenAI/Stripe)" },
        { name: "AP2", detail: "Cryptographic mandates (Google)" },
        { name: "MPP", detail: "Session-based payments (Stripe/Tempo)" },
      ],
    },
    {
      label: "Routing & Processing",
      color: "#60a5fa",
      items: [
        { name: "x402engine", detail: "x402 at scale" },
        { name: "HTTPayer", detail: "HTTP payment routing" },
        { name: "machines.cash", detail: "M2M settlement" },
        { name: "Merit Systems", detail: "Payment routing" },
        { name: "ampersend", detail: "Orchestration" },
        { name: "Stripe", detail: "Traditional + agent rails" },
      ],
    },
    {
      label: "Virtual Cards & Fiat Bridge",
      color: "#fbbf24",
      items: [
        { name: "Crossmint", detail: "Wallets + virtual Visa" },
        { name: "lobster.cash", detail: "Solana USDC + VIC" },
        { name: "Lithic", detail: "Card issuance APIs" },
        { name: "Rain", detail: "Corporate cards" },
        { name: "AgentCash", detail: "Agent-to-merchant" },
      ],
    },
    {
      label: "Streaming & Continuous",
      color: "#34d399",
      items: [
        { name: "Superfluid", detail: "Per-second token streams" },
        { name: "Conto", detail: "Continuous settlement" },
      ],
    },
    {
      label: "Compliance & Security",
      color: "#f87171",
      items: [
        { name: "Cleared", detail: "BSA/OFAC screening" },
        { name: "Basis Theory", detail: "Tokenization" },
        { name: "BVNK", detail: "Regulated infrastructure" },
      ],
    },
    {
      label: "Management & Commerce",
      color: "#22d3ee",
      items: [
        { name: "Reveel", detail: "Revenue splitting" },
        { name: "RevaPay AI", detail: "Payment management" },
        { name: "Meridian", detail: "Cross-border" },
        { name: "Moonpay", detail: "Stablecoin on-ramp" },
        { name: "Gwop", detail: "Agent-to-agent" },
        { name: "Firmly", detail: "Deterministic execution" },
        { name: "Rye", detail: "Multi-merchant" },
        { name: "Unicity Labs", detail: "Unique verification" },
      ],
    },
  ];

  const flow = [
    { step: "Agent", color: "#a78bfa" },
    { step: "Protocol (x402/ACP/AP2/MPP)", color: "#60a5fa" },
    { step: "Compliance (Cleared)", color: "#f87171" },
    { step: "Settlement (Base/Solana/Tempo)", color: "#34d399" },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Payment Infrastructure Architecture (30 Companies)
      </h3>

      {/* Flow diagram */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 py-3">
        {flow.map((item, i) => (
          <div key={item.step} className="flex items-center gap-2">
            <div
              className="px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap"
              style={{
                background: `${item.color}15`,
                color: item.color,
                border: `1px solid ${item.color}30`,
              }}
            >
              {item.step}
            </div>
            {i < flow.length - 1 && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-600 shrink-0"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Infrastructure layers */}
      <div className="space-y-2.5">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="rounded-lg border p-3"
            style={{
              borderColor: `${layer.color}25`,
              background: `${layer.color}06`,
            }}
          >
            <div
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: layer.color }}
            >
              {layer.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <span
                  key={item.name}
                  className="px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{
                    background: `${layer.color}15`,
                    color: layer.color,
                    border: `1px solid ${layer.color}25`,
                  }}
                  title={item.detail}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-600">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 5v3m0 2.5v.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Protocol choice locks in architecture. x402 (micropayments), ACP (shopping
        flows), AP2 (mandates), and MPP (sessions) are not interchangeable.
      </div>
    </div>
  );
}
