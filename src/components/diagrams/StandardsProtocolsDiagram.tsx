export default function StandardsProtocolsDiagram() {
  const layers = [
    {
      label: "Identity Layer",
      color: "#f43f5e",
      protocols: ["ERC-8004"],
      desc: "On-chain agent registration & verification",
    },
    {
      label: "Discovery Layer",
      color: "#f59e0b",
      protocols: ["MCP", "A2A"],
      desc: "Find tools, services & other agents",
    },
    {
      label: "Payment Layer",
      color: "#10b981",
      protocols: ["x402", "ACP", "AP2", "MPP"],
      desc: "Micropayments, shopping flows, mandates & sessions",
    },
    {
      label: "Infrastructure Layer",
      color: "#6366f1",
      protocols: ["ERC-4337", "UCP", "AXTP"],
      desc: "Smart wallets, protocol bridging & attestation",
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
        Agentic Commerce Protocol Stack
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
              {layer.protocols.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: `${layer.color}18`,
                    color: layer.color,
                    border: `1px solid ${layer.color}30`,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-600">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2v12M2 8h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        A single agent transaction may traverse all four layers
      </div>
    </div>
  );
}
