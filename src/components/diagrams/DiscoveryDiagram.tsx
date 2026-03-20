export default function DiscoveryDiagram() {
  const categories = [
    {
      label: "Marketplaces",
      color: "#8b5cf6",
      desc: "Transaction-enabled storefronts for agents",
      companies: ["Moltlaunch", "x402jobs"],
    },
    {
      label: "Directories & Indexes",
      color: "#06b6d4",
      desc: "Searchable catalogs of the agent ecosystem",
      companies: ["ClawIndex", "402.bot", "Pawr.link", "Valoria"],
    },
    {
      label: "Ecosystem Explorers",
      color: "#10b981",
      desc: "On-chain transparency and verification",
      companies: ["x402scan", "8004scan"],
    },
    {
      label: "Task Platforms",
      color: "#f59e0b",
      desc: "Labor marketplaces for autonomous agents",
      companies: ["WURK", "0xWork"],
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Discovery Ecosystem Map
      </h3>

      {/* Category rows */}
      <div className="space-y-3 mb-6">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${cat.color}30`,
              background: `${cat.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">{cat.desc}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {cat.companies.map((company) => (
                <span
                  key={company}
                  className="rounded-md px-2.5 py-1 text-[11px] font-medium border"
                  style={{
                    borderColor: `${cat.color}40`,
                    background: `${cat.color}15`,
                    color: cat.color,
                  }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Infrastructure layer */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
          Underlying Standards
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "MCP", desc: "Tool & capability descriptions" },
            { name: "A2A", desc: "Agent card publishing" },
            { name: "x402", desc: "Payment-based discovery via 402 headers" },
          ].map((std) => (
            <div
              key={std.name}
              className="rounded-md border border-white/10 bg-white/[0.03] p-2.5 text-center"
            >
              <div className="text-[11px] font-semibold text-purple-400 mb-0.5">
                {std.name}
              </div>
              <div className="text-[10px] text-gray-500">{std.desc}</div>
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
        10 companies across 4 discovery layers, all built on shared machine-readable standards.
      </div>
    </div>
  );
}
