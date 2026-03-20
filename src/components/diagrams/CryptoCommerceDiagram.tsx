export default function CryptoCommerceDiagram() {
  const sectors = [
    {
      label: "Marketplaces & Aggregators",
      color: "#8b5cf6",
      desc: "Discovery, curation, and multi-vendor comparison",
      companies: ["List402", "Agoragentic", "RelAI"],
    },
    {
      label: "Physical Goods & Agent Stores",
      color: "#06b6d4",
      desc: "Real-world products via machine-readable interfaces",
      companies: ["agentshops.xyz", "x402-store", "x402 Shopify Commerce"],
    },
    {
      label: "Digital Goods & Services",
      color: "#10b981",
      desc: "Pay-per-use content, APIs, gift cards, and financial tools",
      companies: ["Bitrefill", "Laso Finance", "x402wall", "Postera", "payable.link"],
    },
    {
      label: "Bridges to Traditional Retail",
      color: "#f59e0b",
      desc: "Connecting 50M+ merchants to crypto-native agents",
      companies: ["AEON", "Stripe"],
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Crypto Commerce: Four-Sector Breakdown
      </h3>

      {/* Sector rows */}
      <div className="space-y-3 mb-6">
        {sectors.map((sector) => (
          <div
            key={sector.label}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${sector.color}30`,
              background: `${sector.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: sector.color }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: sector.color }}
                >
                  {sector.label}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">{sector.desc}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {sector.companies.map((company) => (
                <span
                  key={company}
                  className="rounded-md px-2.5 py-1 text-[11px] font-medium border"
                  style={{
                    borderColor: `${sector.color}40`,
                    background: `${sector.color}15`,
                    color: sector.color,
                  }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Payment flow */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
          Agent Purchase Flow (x402)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { step: "1", label: "Request", desc: "Agent sends HTTP request" },
            { step: "2", label: "402 Response", desc: "Merchant returns price & terms" },
            { step: "3", label: "Pay On-Chain", desc: "Agent signs USDC transaction" },
            { step: "4", label: "Fulfill", desc: "Merchant verifies & delivers" },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-md border border-white/10 bg-white/[0.03] p-2.5 text-center"
            >
              <div className="text-[11px] font-semibold text-purple-400 mb-0.5">
                {s.step}. {s.label}
              </div>
              <div className="text-[10px] text-gray-500">{s.desc}</div>
            </div>
          ))}
        </div>
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
        13 companies across 4 sectors, from crypto-native marketplaces to traditional retail bridges.
      </div>
    </div>
  );
}
