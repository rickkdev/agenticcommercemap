export default function OpenSourceModelsDiagram() {
  const models = [
    {
      name: "Llama",
      provider: "Meta",
      color: "#3B82F6",
      license: "Llama License",
      params: "400B (MoE)",
      context: "10M tokens",
      strengths: ["Broadest ecosystem", "MoE efficiency", "Tool calling"],
      agentFit: "General-purpose default",
    },
    {
      name: "DeepSeek",
      provider: "DeepSeek AI",
      color: "#10B981",
      license: "MIT",
      params: "671B (MoE)",
      context: "128K tokens",
      strengths: ["Cost-efficient", "Chain-of-thought", "Zero restrictions"],
      agentFit: "Cost-sensitive operations",
    },
    {
      name: "Qwen",
      provider: "Alibaba",
      color: "#F59E0B",
      license: "Apache 2.0",
      params: "72B / MoE",
      context: "128K tokens",
      strengths: ["Native MCP", "29+ languages", "Consumer hardware"],
      agentFit: "MCP-first deployments",
    },
    {
      name: "Hermes",
      provider: "Nous Research",
      color: "#8B5CF6",
      license: "Apache 2.0",
      params: "70B (tuned)",
      context: "128K tokens",
      strengths: ["Persistent memory", "Skill learning", "Autonomous workflows"],
      agentFit: "Long-running agents",
    },
    {
      name: "Mistral",
      provider: "Mistral AI",
      color: "#EF4444",
      license: "Apache 2.0",
      params: "MoE variants",
      context: "128K tokens",
      strengths: ["EU compliance", "Efficiency/FLOP", "Enterprise tier"],
      agentFit: "European deployments",
    },
    {
      name: "Gemma",
      provider: "Google",
      color: "#06B6D4",
      license: "Gemma License",
      params: "2B-27B",
      context: "8K tokens",
      strengths: ["Edge-optimized", "Small footprint", "DeepMind research"],
      agentFit: "Edge / IoT agents",
    },
    {
      name: "Phi",
      provider: "Microsoft",
      color: "#EC4899",
      license: "MIT",
      params: "3.8B-14B",
      context: "128K tokens",
      strengths: ["Ultra-lightweight", "Subsecond inference", "Structured output"],
      agentFit: "Micropayment agents",
    },
    {
      name: "GPT-OSS",
      provider: "OpenAI",
      color: "#22C55E",
      license: "Open weights",
      params: "Varies",
      context: "128K tokens",
      strengths: ["API familiarity", "Migration path", "OpenAI ecosystem"],
      agentFit: "GPT-to-self-host migration",
    },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
        Open Source Model Comparison
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <div
            key={model.name}
            className="rounded-lg p-4"
            style={{
              border: `1px solid ${model.color}30`,
              background: `${model.color}08`,
            }}
          >
            <div className="mb-2">
              <span
                className="text-base font-bold"
                style={{ color: model.color }}
              >
                {model.name}
              </span>
              <span className="text-xs text-gray-500 ml-2">
                {model.provider}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs mb-3">
              <div>
                <span className="text-gray-600">License</span>
                <div className="text-gray-300 font-medium">{model.license}</div>
              </div>
              <div>
                <span className="text-gray-600">Parameters</span>
                <div className="text-gray-300 font-medium">{model.params}</div>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                Best For
              </span>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: model.color }}
              >
                {model.agentFit}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {model.strengths.map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: `${model.color}15`,
                    border: `1px solid ${model.color}30`,
                    color: `${model.color}`,
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
          Deployment Spectrum
        </h4>
        <div className="flex flex-col sm:flex-row gap-3">
          {[
            {
              tier: "Edge / Local",
              color: "#EC4899",
              models: "Phi, Gemma, Qwen (small)",
              hardware: "Laptop / Mac Mini / Phone",
            },
            {
              tier: "Single GPU",
              color: "#F59E0B",
              models: "Qwen, Hermes, Mistral",
              hardware: "1x A100 / H100",
            },
            {
              tier: "Multi-GPU",
              color: "#3B82F6",
              models: "Llama 4, DeepSeek R1",
              hardware: "2-8x A100 / H100",
            },
            {
              tier: "GPU Cluster",
              color: "#10B981",
              models: "Llama 4 Maverick (full)",
              hardware: "Cloud / bare-metal fleet",
            },
          ].map((tier) => (
            <div
              key={tier.tier}
              className="flex-1 rounded-lg p-3 text-xs"
              style={{
                border: `1px solid ${tier.color}25`,
                background: `${tier.color}06`,
              }}
            >
              <div className="font-semibold mb-1" style={{ color: tier.color }}>
                {tier.tier}
              </div>
              <div className="text-gray-400">{tier.models}</div>
              <div className="text-gray-600 mt-1">{tier.hardware}</div>
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
          Open protocols like x402 and MCP work identically across all models.
          Qwen has native MCP support; others use community integrations.
        </span>
      </div>
    </div>
  );
}
