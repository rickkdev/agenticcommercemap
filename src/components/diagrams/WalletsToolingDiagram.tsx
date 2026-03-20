export default function WalletsToolingDiagram() {
  const humanWallet = {
    label: "Human Wallet",
    color: "#6366f1",
    traits: [
      { aspect: "Interface", value: "Visual UI, touch/face ID" },
      { aspect: "Signing", value: "Manual confirmation per tx" },
      { aspect: "Key Storage", value: "Device / browser extension" },
      { aspect: "Spending Limits", value: "Self-discipline / bank limits" },
      { aspect: "Access Control", value: "Password / biometrics" },
      { aspect: "Revocation", value: "Freeze card, call support" },
    ],
  };

  const agentWallet = {
    label: "Agent Wallet",
    color: "#22d3ee",
    traits: [
      { aspect: "Interface", value: "API-driven, headless" },
      { aspect: "Signing", value: "Programmatic, policy-gated" },
      { aspect: "Key Storage", value: "HSM / secure enclave / MPC" },
      { aspect: "Spending Limits", value: "Smart contract policies (ERC-7579)" },
      { aspect: "Access Control", value: "Session keys / delegation" },
      { aspect: "Revocation", value: "Instant on-chain policy update" },
    ],
  };

  const companies = [
    {
      tier: "Key Management & Custody",
      color: "#a78bfa",
      names: ["Turnkey", "Fireblocks", "Coinbase", "Privy"],
    },
    {
      tier: "Smart Accounts & Policies",
      color: "#34d399",
      names: ["Rhinestone", "Openfort", "thirdweb"],
    },
    {
      tier: "Consumer Wallets (Agent-Ready)",
      color: "#fbbf24",
      names: ["MetaMask", "Phantom"],
    },
    {
      tier: "Security & Monitoring",
      color: "#f87171",
      names: ["Varlock", "mlld", "AgentCard"],
    },
    {
      tier: "Fiat Bridge",
      color: "#60a5fa",
      names: ["Crossmint"],
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Human Wallet vs Agent Wallet
      </h3>

      {/* Comparison table */}
      <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[auto_1fr_1fr] gap-0 rounded-lg border border-white/10 overflow-hidden mb-6">
        {/* Header row */}
        <div className="hidden sm:block bg-white/[0.03] p-2.5 border-b border-r border-white/10" />
        <div
          className="p-2.5 text-[11px] font-bold uppercase tracking-wider border-b border-r border-white/10"
          style={{ color: humanWallet.color, background: `${humanWallet.color}08` }}
        >
          {humanWallet.label}
        </div>
        <div
          className="p-2.5 text-[11px] font-bold uppercase tracking-wider border-b border-white/10"
          style={{ color: agentWallet.color, background: `${agentWallet.color}08` }}
        >
          {agentWallet.label}
        </div>

        {/* Data rows */}
        {humanWallet.traits.map((trait, i) => (
          <div key={trait.aspect} className="contents">
            <div
              className={`hidden sm:block p-2.5 text-[11px] text-gray-400 font-medium border-r border-white/10 bg-white/[0.02] ${i < humanWallet.traits.length - 1 ? "border-b" : ""}`}
            >
              {trait.aspect}
            </div>
            <div
              className={`p-2.5 text-[11px] text-gray-300 border-r border-white/10 ${i < humanWallet.traits.length - 1 ? "border-b" : ""}`}
            >
              <span className="sm:hidden text-gray-500 block text-[10px] mb-0.5">
                {trait.aspect}
              </span>
              {trait.value}
            </div>
            <div
              className={`p-2.5 text-[11px] text-gray-300 ${i < agentWallet.traits.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <span className="sm:hidden text-gray-500 block text-[10px] mb-0.5">
                {agentWallet.traits[i].aspect}
              </span>
              {agentWallet.traits[i].value}
            </div>
          </div>
        ))}
      </div>

      {/* Company landscape */}
      <h4 className="text-[11px] font-semibold text-gray-400 mb-3 uppercase tracking-wider">
        Agent Wallet Infrastructure Landscape (13 Companies)
      </h4>
      <div className="space-y-2.5">
        {companies.map((tier) => (
          <div
            key={tier.tier}
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
              {tier.tier}
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
        Agent wallets are API-driven, policy-enforced, and auditable. No single
        company covers the full stack; composability across layers is the norm.
      </div>
    </div>
  );
}
