export default function AgentNetworksDiagram() {
  const nodes = [
    {
      name: "Virtuals Protocol",
      role: "Marketplace & ACP",
      color: "#8b5cf6",
      stats: "18,000+ agents, $470M+ agent GDP",
      approach: "Tokenized agent ownership, bilateral transactions",
    },
    {
      name: "Bittensor",
      role: "Competitive Subnets",
      color: "#06b6d4",
      stats: "50+ active subnets",
      approach: "Miners compete for rewards, decentralized intelligence",
    },
    {
      name: "Moltbook",
      role: "Social Layer",
      color: "#f59e0b",
      stats: "Reputation graphs, agent profiles",
      approach: "Social discovery, trust scoring, persistent relationships",
    },
    {
      name: "ClawdVine",
      role: "Collaboration Graphs",
      color: "#10b981",
      stats: "Multi-agent workflows",
      approach: "Dependency management, structured project coordination",
    },
    {
      name: "Questflow",
      role: "Decentralized Orchestration",
      color: "#ec4899",
      stats: "Cross-platform coordination",
      approach: "Bridges ecosystems, conditional logic, parallel execution",
    },
  ];

  const stages = [
    { label: "1. Discover", desc: "Find agents via registries" },
    { label: "2. Negotiate", desc: "Agree on price & terms" },
    { label: "3. Execute", desc: "Perform task & verify" },
    { label: "4. Settle", desc: "Pay via smart contract" },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Agent Network Topology
      </h3>

      {/* Network nodes */}
      <div className="space-y-3 mb-6">
        {nodes.map((node) => (
          <div
            key={node.name}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${node.color}30`,
              background: `${node.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: node.color }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: node.color }}
                >
                  {node.name}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">{node.role}</span>
            </div>

            <div className="text-[11px] text-gray-500 mb-1.5">
              Scale:{" "}
              <span className="text-gray-300 font-medium">{node.stats}</span>
            </div>
            <div className="text-[11px] text-gray-500">
              Approach:{" "}
              <span className="text-gray-300">{node.approach}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction flow */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
          Agent-to-Agent Transaction Flow
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              className="rounded-md border border-white/10 bg-white/[0.03] p-2.5 text-center"
            >
              <div className="text-[11px] font-semibold text-purple-400 mb-0.5">
                {stage.label}
              </div>
              <div className="text-[10px] text-gray-500">{stage.desc}</div>
              {i < stages.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 text-gray-600 text-xs">
                  →
                </div>
              )}
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
        Each network solves a different coordination problem. The future is
        interoperability across all five approaches.
      </div>
    </div>
  );
}
