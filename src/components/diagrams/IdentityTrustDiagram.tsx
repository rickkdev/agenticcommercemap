export default function IdentityTrustDiagram() {
  const layers = [
    {
      label: "Agent Identity",
      color: "#f43f5e",
      items: ["ERC-8004", "World AgentKit"],
      desc: "On-chain registration & proof of personhood",
    },
    {
      label: "Verification (KYA)",
      color: "#f59e0b",
      items: ["Sumsub", "Incode", "Prove", "Nuggets"],
      desc: "Operator verification, capability attestation & compliance",
    },
    {
      label: "Reputation",
      color: "#10b981",
      items: ["Cred Protocol", "On-chain History"],
      desc: "Transaction history, dispute rates & trust scores",
    },
    {
      label: "Real-Time Monitoring",
      color: "#6366f1",
      items: ["t54.ai", "Helixa", "HUMAN Security"],
      desc: "Behavior classification, anomaly detection & bot prevention",
    },
    {
      label: "Privacy & Credentials",
      color: "#a855f7",
      items: ["Self", "zauth", "Dock Labs", "AgentProof"],
      desc: "Zero-knowledge proofs, selective disclosure & attestations",
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
        Identity & Trust Verification Stack
      </h3>
      <div className="space-y-3">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${layer.color}30`,
              background: `${layer.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: layer.color }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">{layer.desc}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: `${layer.color}18`,
                    color: layer.color,
                    border: `1px solid ${layer.color}30`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-600">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2v12M8 12l-3-3M8 12l3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Each layer catches threats that the others miss
      </div>
    </div>
  );
}
