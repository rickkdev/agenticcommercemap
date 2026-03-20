export default function AgentHarnessDiagram() {
  const tiers = [
    {
      label: "Coding Agents",
      subtitle: "Deep autonomy, narrow domain",
      color: "#6366f1",
      items: ["Claude Cowork", "NemoClaw", "NanoClaw"],
      traits: "Read codebases, write code, run tests, deploy",
    },
    {
      label: "General-Purpose Assistants",
      subtitle: "Broad autonomy, human oversight",
      color: "#f59e0b",
      items: [
        "Manus",
        "OpenAI Operator",
        "Project Mariner",
        "Perplexity Computer",
        "Simular AI",
        "MultiOn",
      ],
      traits: "Browse the web, fill forms, compare products, navigate checkout",
    },
    {
      label: "Crypto-Native Frameworks",
      subtitle: "Full autonomy, on-chain commerce",
      color: "#10b981",
      items: ["OpenClaw", "IronClaw", "ElizaOS"],
      traits: "Wallets, x402 payments, DeFi, agent-to-agent transactions",
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-1 uppercase tracking-wider">
        The Agent Harness Autonomy Spectrum
      </h3>
      <p className="text-[11px] text-gray-500 mb-5">
        From constrained coding tools to fully autonomous on-chain agents
      </p>

      {/* Arrow showing increasing autonomy */}
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="text-[10px] text-gray-600 uppercase tracking-wider">
          Narrow scope
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 via-amber-500/40 to-emerald-500/40" />
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M1 5h7M6 2.5L8.5 5 6 7.5"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] text-gray-600 uppercase tracking-wider">
          Full autonomy
        </span>
      </div>

      <div className="space-y-3">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${tier.color}30`,
              background: `${tier.color}08`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: tier.color }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: tier.color }}
                >
                  {tier.label}
                </span>
              </div>
              <span className="text-[11px] text-gray-500">
                {tier.subtitle}
              </span>
            </div>
            <p className="text-[11px] text-gray-400 mb-3">{tier.traits}</p>
            <div className="flex flex-wrap gap-2">
              {tier.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: `${tier.color}18`,
                    color: tier.color,
                    border: `1px solid ${tier.color}30`,
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
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 5v3l2 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        12 companies across the spectrum, converging toward unified harnesses
      </div>
    </div>
  );
}
