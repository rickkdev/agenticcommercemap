export default function UniversalBalanceDiagram() {
  const before = {
    label: "Without Account Abstraction",
    color: "#f87171",
    items: [
      { chain: "Ethereum", token: "ETH", issue: "Full private key, no limits" },
      { chain: "Base", token: "ETH", issue: "Separate EOA per chain" },
      { chain: "Polygon", token: "MATIC", issue: "Manual gas management" },
      { chain: "Solana", token: "SOL", issue: "No spending policies" },
      { chain: "Arbitrum", token: "ETH", issue: "Fragmented balances" },
    ],
  };

  const after = {
    label: "With Smart Accounts + Universal Balance",
    color: "#34d399",
    items: [
      { feature: "Session Keys", desc: "Scoped, time-limited permissions" },
      { feature: "Gas Abstraction", desc: "Pay gas in USDC everywhere" },
      { feature: "Batched Txns", desc: "Atomic multi-step operations" },
      { feature: "Spending Limits", desc: "On-chain policy enforcement" },
      { feature: "Unified Balance", desc: "One balance across all chains" },
    ],
  };

  const players = [
    {
      role: "Standards",
      color: "#a78bfa",
      names: ["ERC-4337", "ERC-7579"],
    },
    {
      role: "Smart Account Infrastructure",
      color: "#34d399",
      names: ["Openfort", "Biconomy", "Pimlico", "Rhinestone"],
    },
    {
      role: "Wallet Platforms",
      color: "#60a5fa",
      names: ["Coinbase", "Turnkey", "Fireblocks", "Privy", "thirdweb"],
    },
    {
      role: "Consumer Wallets",
      color: "#fbbf24",
      names: ["MetaMask", "Phantom"],
    },
    {
      role: "Chain Infrastructure",
      color: "#22d3ee",
      names: ["Polygon", "Base", "SKALE", "Tempo"],
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Before vs After: Account Abstraction for Agents
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Before */}
        <div
          className="rounded-lg border p-4"
          style={{
            borderColor: `${before.color}30`,
            background: `${before.color}06`,
          }}
        >
          <div
            className="text-[11px] font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: before.color }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {before.label}
          </div>
          <div className="space-y-2">
            {before.items.map((item) => (
              <div
                key={item.chain}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="px-1.5 py-0.5 rounded text-[10px] font-medium"
                    style={{
                      background: `${before.color}15`,
                      color: before.color,
                      border: `1px solid ${before.color}25`,
                    }}
                  >
                    {item.chain}
                  </span>
                  <span className="text-gray-500">{item.token}</span>
                </div>
                <span className="text-gray-400 text-[10px]">{item.issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div
          className="rounded-lg border p-4"
          style={{
            borderColor: `${after.color}30`,
            background: `${after.color}06`,
          }}
        >
          <div
            className="text-[11px] font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: after.color }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 8l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {after.label}
          </div>
          <div className="space-y-2">
            {after.items.map((item) => (
              <div
                key={item.feature}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0"
                  style={{
                    background: `${after.color}15`,
                    color: after.color,
                    border: `1px solid ${after.color}25`,
                  }}
                >
                  {item.feature}
                </span>
                <span className="text-gray-400 text-[10px]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company landscape */}
      <h4 className="text-[11px] font-semibold text-gray-400 mb-3 uppercase tracking-wider">
        Account Abstraction & Universal Balance Ecosystem
      </h4>
      <div className="space-y-2.5">
        {players.map((tier) => (
          <div
            key={tier.role}
            className="rounded-lg border p-3"
            style={{
              borderColor: `${tier.color}25`,
              background: `${tier.color}06`,
            }}
          >
            <div
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: tier.color }}
            >
              {tier.role}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tier.names.map((name) => (
                <span
                  key={name}
                  className="px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{
                    background: `${tier.color}15`,
                    color: tier.color,
                    border: `1px solid ${tier.color}25`,
                  }}
                >
                  {name}
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
            d="M8 5v3m0 2.5v.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        This is a cross-cutting topic spanning Wallets, Standards, and Blockchains
        categories. Companies listed operate across multiple market map segments.
      </div>
    </div>
  );
}
