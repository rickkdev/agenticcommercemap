export default function AgentFrameworksDiagram() {
  const tiers = [
    {
      name: "Protocol Layer",
      color: "#8b5cf6",
      description: "Communication standards all tooling builds on",
      companies: ["MCP", "A2A", "AXTP"],
    },
    {
      name: "Platform Layer",
      color: "#3b82f6",
      description: "Managed infrastructure for agent deployment",
      companies: ["thirdweb", "Cloudflare", "Blockrun", "Visa", "NEAR"],
    },
    {
      name: "Development Layer",
      color: "#22c55e",
      description: "IDEs and coding agents for building agents",
      companies: [
        "Claude Code",
        "Cursor",
        "Devin",
        "Windsurf",
        "OpenHands",
        "Cline",
        "Goose",
        "Codex CLI",
        "GitHub Copilot",
        "Replit Agent",
        "Droyd",
        "twit.sh",
      ],
    },
    {
      name: "Specialized Layer",
      color: "#f59e0b",
      description: "Domain-specific frameworks and tooling",
      companies: [
        "Bankr",
        "Starkbot Cloud",
        "RevaPay AI",
        "Beep",
        "Fluid",
        "Frames",
        "Quick Intel",
        "t54.ai",
        "Corbits",
        "Questflow",
        "OpenServ",
        "ClawHub",
        "Daydreams",
        "Conway Research",
        "Dexter",
        "Arcade.dev",
      ],
    },
  ];

  const flow = [
    { label: "Choose Protocols", detail: "MCP + A2A + AXTP" },
    { label: "Pick Platform", detail: "thirdweb / Cloudflare / Blockrun" },
    { label: "Select Dev Tools", detail: "Claude Code / Cursor / Devin" },
    { label: "Add Specialization", detail: "Bankr / Corbits / Questflow" },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        Agent Frameworks Stack: 36 Companies Across 4 Tiers
      </h3>

      {/* Tier cards */}
      <div className="space-y-3 mb-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${tier.color}30`,
              background: `${tier.color}08`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: tier.color }}
              />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: tier.color }}
              >
                {tier.name}
              </span>
              <span className="text-[10px] text-gray-500 border border-white/10 rounded px-1.5 py-0.5">
                {tier.companies.length} companies
              </span>
            </div>
            <div className="text-[11px] text-gray-500 mb-2">
              {tier.description}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tier.companies.map((company) => (
                <span
                  key={company}
                  className="text-[10px] rounded px-2 py-0.5 border"
                  style={{
                    color: tier.color,
                    borderColor: `${tier.color}40`,
                    background: `${tier.color}15`,
                  }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Build flow */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
          Framework Selection Flow
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {flow.map((step, i) => (
            <div key={step.label} className="text-center">
              <div className="text-[11px] font-semibold text-white mb-1">
                <span className="text-gray-500 mr-1">{i + 1}.</span>
                {step.label}
              </div>
              <div className="text-[10px] text-gray-400 rounded border border-white/10 bg-white/[0.03] px-2 py-1.5">
                {step.detail}
              </div>
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
        The picks-and-shovels layer profits regardless of which protocols,
        blockchains, or agent harnesses win.
      </div>
    </div>
  );
}
