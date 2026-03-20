export default function HostingCloudComputeDiagram() {
  const tiers = [
    {
      name: "Hyperscale Cloud",
      color: "#3B82F6",
      cost: "$1,000–5,000+/mo",
      privacy: "Low",
      control: "Low",
      companies: ["Google Cloud", "AWS"],
      strengths: ["Managed AI", "Compliance certs", "Global scale"],
    },
    {
      name: "Edge Computing",
      color: "#06B6D4",
      cost: "<$50/mo",
      privacy: "Medium",
      control: "Medium",
      companies: ["Cloudflare"],
      strengths: ["x402 native", "Low latency", "Pay-per-request"],
    },
    {
      name: "Traditional Hosting",
      color: "#8B5CF6",
      cost: "$50–500/mo",
      privacy: "High",
      control: "High",
      companies: ["Hetzner", "DigitalOcean", "Contabo", "OVHcloud", "Hostinger"],
      strengths: ["Dedicated GPU", "EU sovereignty", "Self-managed"],
    },
    {
      name: "Decentralized Compute",
      color: "#F59E0B",
      cost: "$200–800/mo",
      privacy: "High",
      control: "High",
      companies: ["Akash", "Heurist", "Bittensor"],
      strengths: ["85% cheaper", "Censorship-resistant", "Open marketplace"],
    },
    {
      name: "Privacy Infrastructure",
      color: "#10B981",
      cost: "Varies",
      privacy: "Maximum",
      control: "High",
      companies: ["Venice.ai", "Treza Labs"],
      strengths: ["No query logging", "ZK-KYC", "Token-based"],
    },
    {
      name: "Local Inference",
      color: "#EF4444",
      cost: "$25–50/mo*",
      privacy: "Maximum",
      control: "Maximum",
      companies: ["Mac Mini M4", "Rabbit R1"],
      strengths: ["No recurring fees", "Data never leaves", "Full control"],
    },
  ];

  const dataInfra = [
    { name: "Dune", role: "On-chain analytics", color: "#F59E0B" },
    { name: "Allium", role: "Enterprise data feeds", color: "#3B82F6" },
    { name: "SQD", role: "Decentralized indexing", color: "#8B5CF6" },
    { name: "Alchemy", role: "Web3 dev platform", color: "#06B6D4" },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
        Agent Hosting Infrastructure Spectrum
      </h3>

      {/* Cost / Privacy spectrum arrow */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-blue-400 font-medium">$$$ Higher Cost</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-500">Less Privacy</span>
        </div>
        <div className="flex-1 mx-3 h-px bg-gradient-to-r from-blue-500/40 via-gray-600/30 to-red-500/40" />
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="text-gray-500">More Privacy</span>
          <span className="text-gray-600">|</span>
          <span className="text-red-400 font-medium">$ Lower Cost</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-lg p-4"
            style={{
              border: `1px solid ${tier.color}30`,
              background: `${tier.color}08`,
            }}
          >
            <div className="mb-3">
              <span
                className="text-base font-bold"
                style={{ color: tier.color }}
              >
                {tier.name}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-xs mb-3">
              <div>
                <span className="text-gray-600">Cost</span>
                <div className="text-gray-300 font-medium">{tier.cost}</div>
              </div>
              <div>
                <span className="text-gray-600">Privacy</span>
                <div className="text-gray-300 font-medium">{tier.privacy}</div>
              </div>
              <div>
                <span className="text-gray-600">Control</span>
                <div className="text-gray-300 font-medium">{tier.control}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {tier.companies.map((c) => (
                <span
                  key={c}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tier.strengths.map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: `${tier.color}15`,
                    border: `1px solid ${tier.color}30`,
                    color: tier.color,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Data Infrastructure layer */}
      <div className="mt-5 pt-4 border-t border-white/5">
        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
          Data Infrastructure Layer
        </h4>
        <div className="flex flex-wrap gap-2">
          {dataInfra.map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: `${d.color}08`,
                border: `1px solid ${d.color}20`,
              }}
            >
              <span className="font-medium" style={{ color: d.color }}>
                {d.name}
              </span>
              <span className="text-gray-500">{d.role}</span>
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
          *Local inference cost is amortized over 2 years ($500–800 hardware + electricity).
          Most production deployments use a hybrid of multiple tiers.
        </span>
      </div>
    </div>
  );
}
