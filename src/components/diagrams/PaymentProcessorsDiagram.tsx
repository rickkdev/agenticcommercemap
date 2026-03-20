export default function PaymentProcessorsDiagram() {
  const categories = [
    {
      label: "Crypto-Native",
      color: "#8b5cf6",
      companies: ["Coinbase", "Skyfire", "PayAI", "Dexter"],
      desc: "Built on blockchain rails, x402 & stablecoins",
    },
    {
      label: "Traditional Finance",
      color: "#3b82f6",
      companies: ["Stripe", "Visa", "Mastercard", "PayPal", "Adyen"],
      desc: "Card networks & bank rails extending to agents",
    },
    {
      label: "Hybrid / Bridge",
      color: "#10b981",
      companies: ["Gnosis Pay", "Immersve", "Wirex", "Meridian"],
      desc: "Crypto wallets to card networks & cross-chain routing",
    },
    {
      label: "Specialized / Vertical",
      color: "#f59e0b",
      companies: ["Kobaru", "CodeNut", "AurraCloud", "RelAI"],
      desc: "Compute, API access, AI-optimized routing",
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
        Payment Processor Landscape
      </h3>
      <div className="space-y-3">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${cat.color}30`,
              background: `${cat.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">{cat.desc}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.companies.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: `${c === "Coinbase" || c === "Stripe" ? cat.color : cat.color}18`,
                    color: cat.color,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-600">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 5v3l2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Convergence point: stablecoins as settlement layer across all categories
      </div>
    </div>
  );
}
