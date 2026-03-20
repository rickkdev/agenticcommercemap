export default function StablecoinsDiagram() {
  const coins = [
    {
      name: "USDC",
      issuer: "Circle",
      color: "#2775ca",
      marketCap: "Largest regulated",
      chains: "Base, Solana, Ethereum, Arbitrum +",
      agentAdoption: "Dominant (x402 default)",
      strength: "Regulatory clarity & x402 integration",
      features: [
        "x402 standard currency",
        "CCTP cross-chain transfers",
        "Programmable wallets",
        "Enterprise compliance",
      ],
    },
    {
      name: "USDT",
      issuer: "Tether",
      color: "#26a17b",
      marketCap: "Largest overall",
      chains: "All major chains & exchanges",
      agentAdoption: "Growing (global reach)",
      strength: "Global liquidity & availability",
      features: [
        "Broadest chain coverage",
        "Deepest exchange liquidity",
        "DeFi ecosystem integration",
        "Emerging market reach",
      ],
    },
    {
      name: "PYUSD",
      issuer: "PayPal",
      color: "#0070ba",
      marketCap: "Emerging",
      chains: "Ethereum, Solana",
      agentAdoption: "Early (merchant bridge)",
      strength: "400M+ PayPal merchant network",
      features: [
        "Traditional merchant access",
        "PayPal brand trust",
        "Fiat on/off ramps",
        "Institutional familiarity",
      ],
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Stablecoin Comparison for Agent Commerce
      </h3>

      <div className="space-y-4">
        {coins.map((coin) => (
          <div
            key={coin.name}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${coin.color}30`,
              background: `${coin.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: coin.color }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: coin.color }}
                >
                  {coin.name}
                </span>
                <span className="text-[11px] text-gray-500">
                  by {coin.issuer}
                </span>
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
              {[
                { label: "Market Cap", value: coin.marketCap },
                { label: "Chains", value: coin.chains },
                { label: "Agent Adoption", value: coin.agentAdoption },
              ].map((stat) => (
                <div key={stat.label} className="text-[11px]">
                  <span className="text-gray-500">{stat.label}: </span>
                  <span className="text-gray-300">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Strength */}
            <div className="text-[11px] text-gray-500 mb-2">
              Key Strength:{" "}
              <span className="text-gray-300 font-medium">
                {coin.strength}
              </span>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-1.5">
              {coin.features.map((f) => (
                <span
                  key={f}
                  className="px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{
                    background: `${coin.color}18`,
                    color: coin.color,
                    border: `1px solid ${coin.color}25`,
                  }}
                >
                  {f}
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
        All three stablecoins are pegged 1:1 to the US dollar. Agent adoption
        driven by protocol defaults (x402 → USDC), liquidity depth, and merchant
        network reach.
      </div>
    </div>
  );
}
