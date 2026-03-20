export default function BlockchainsDiagram() {
  const chains = [
    {
      name: "Base",
      builder: "Coinbase",
      color: "#3B82F6",
      type: "L2",
      tps: "1,000+",
      finality: "<1s",
      fees: "Sub-cent",
      stablecoin: "USDC (deep)",
      strengths: ["x402 native", "Gasless trading", "AgentKit SDK"],
    },
    {
      name: "Solana",
      builder: "Solana Labs",
      color: "#9945FF",
      type: "L1",
      tps: "4,000+",
      finality: "400ms",
      fees: "$0.00025",
      stablecoin: "USDC (SPL)",
      strengths: ["35M+ x402 txns", "DeFi ecosystem", "Phantom MCP"],
    },
    {
      name: "Ethereum",
      builder: "Ethereum Foundation",
      color: "#627EEA",
      type: "L1",
      tps: "~30",
      finality: "12s",
      fees: "$1-50",
      stablecoin: "USDC / USDT",
      strengths: ["Settlement layer", "ERC standards", "Security anchor"],
    },
    {
      name: "Tempo",
      builder: "Stripe / Paradigm",
      color: "#10B981",
      type: "L1",
      tps: "100K+",
      finality: "<1s",
      fees: "Near-zero",
      stablecoin: "Multi-method",
      strengths: ["MPP protocol", "Visa/Stripe", "Enterprise partners"],
    },
    {
      name: "SKALE",
      builder: "SKALE Labs",
      color: "#F59E0B",
      type: "L1 Network",
      tps: "High",
      finality: "<1s",
      fees: "Zero",
      stablecoin: "USDC",
      strengths: ["Gas-free", "Subscription model", "EVM compatible"],
    },
    {
      name: "Radius",
      builder: "Radius",
      color: "#EF4444",
      type: "Sequencing",
      tps: "2.5M",
      finality: "<1s",
      fees: "Varies",
      stablecoin: "Cross-chain",
      strengths: ["Shared sequencing", "Cross-chain atomic", "2.5M TPS"],
    },
  ];

  const nextGen = [
    { name: "Keeta", focus: "Regulated enterprise", color: "#8B5CF6" },
    { name: "Sei", focus: "DeFi / trading", color: "#EC4899" },
    { name: "Story", focus: "IP licensing", color: "#06B6D4" },
    { name: "Arbitrum", focus: "DeFi ecosystem", color: "#3B82F6" },
    { name: "Polygon", focus: "Agent CLI toolkit", color: "#8B5CF6" },
    { name: "Avalanche", focus: "Custom subnets", color: "#EF4444" },
    { name: "NEAR", focus: "Chain abstraction", color: "#10B981" },
    { name: "Stellar", focus: "Cross-border", color: "#F59E0B" },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
        Blockchain Comparison for Agent Commerce
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chains.map((chain) => (
          <div
            key={chain.name}
            className="rounded-lg p-4"
            style={{
              border: `1px solid ${chain.color}30`,
              background: `${chain.color}08`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span
                  className="text-base font-bold"
                  style={{ color: chain.color }}
                >
                  {chain.name}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {chain.builder}
                </span>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: `${chain.color}15`,
                  border: `1px solid ${chain.color}30`,
                  color: chain.color,
                }}
              >
                {chain.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs mb-3">
              <div>
                <span className="text-gray-600">TPS</span>
                <div className="text-gray-300 font-medium">{chain.tps}</div>
              </div>
              <div>
                <span className="text-gray-600">Finality</span>
                <div className="text-gray-300 font-medium">{chain.finality}</div>
              </div>
              <div>
                <span className="text-gray-600">Fees</span>
                <div className="text-gray-300 font-medium">{chain.fees}</div>
              </div>
              <div>
                <span className="text-gray-600">Stablecoin</span>
                <div className="text-gray-300 font-medium">{chain.stablecoin}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {chain.strengths.map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: `${chain.color}15`,
                    border: `1px solid ${chain.color}30`,
                    color: chain.color,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/5">
        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
          Broader Ecosystem
        </h4>
        <div className="flex flex-wrap gap-2">
          {nextGen.map((chain) => (
            <div
              key={chain.name}
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: `${chain.color}08`,
                border: `1px solid ${chain.color}20`,
              }}
            >
              <span className="font-medium" style={{ color: chain.color }}>
                {chain.name}
              </span>
              <span className="text-gray-500">{chain.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 text-[11px] text-gray-600">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="mt-0.5 shrink-0"
        >
          <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
          <text
            x="6"
            y="9"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8"
            fontWeight="bold"
          >
            i
          </text>
        </svg>
        <span>
          The multi-chain future means agents will route to the optimal chain
          based on cost, speed, and protocol requirements. No single chain wins all use cases.
        </span>
      </div>
    </div>
  );
}
