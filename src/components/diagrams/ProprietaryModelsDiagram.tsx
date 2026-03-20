export default function ProprietaryModelsDiagram() {
  const models = [
    {
      name: "Claude",
      provider: "Anthropic",
      color: "#D97706",
      protocol: "MCP",
      context: "1M tokens",
      strengths: ["Tool-calling reliability", "Safety alignment", "Extended context"],
      commerceStack: "MCP + x402",
    },
    {
      name: "GPT",
      provider: "OpenAI",
      color: "#10B981",
      protocol: "ACP + Stripe",
      context: "128K tokens",
      strengths: ["Largest ecosystem", "Instant Checkout", "Operator agent"],
      commerceStack: "ACP + Stripe",
    },
    {
      name: "Gemini",
      provider: "Google",
      color: "#3B82F6",
      protocol: "AP2 / UCP",
      context: "2M tokens",
      strengths: ["Vertical integration", "Crypto mandates", "Multimodal"],
      commerceStack: "AP2 + UCP + A2A",
    },
    {
      name: "Grok",
      provider: "xAI",
      color: "#EF4444",
      protocol: "Protocol-agnostic",
      context: "2M tokens",
      strengths: ["Largest context", "Real-time X data", "Flexibility"],
      commerceStack: "x402 / MCP / custom",
    },
    {
      name: "Command",
      provider: "Cohere",
      color: "#8B5CF6",
      protocol: "Interoperable",
      context: "128K tokens",
      strengths: ["23 languages", "On-premise", "Enterprise RAG"],
      commerceStack: "x402 / ACP / AP2",
    },
    {
      name: "Nova",
      provider: "Amazon",
      color: "#F59E0B",
      protocol: "MCP",
      context: "300K tokens",
      strengths: ["AWS integration", "Cost-competitive", "AgentCore"],
      commerceStack: "MCP + Bedrock",
    },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
        Proprietary Model Comparison Matrix
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <div
            key={model.name}
            className="rounded-lg p-4"
            style={{
              border: `1px solid ${model.color}30`,
              background: `${model.color}08`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
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
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs mb-3">
              <div>
                <span className="text-gray-600">Protocol</span>
                <div className="text-gray-300 font-medium">{model.protocol}</div>
              </div>
              <div>
                <span className="text-gray-600">Context</span>
                <div className="text-gray-300 font-medium">{model.context}</div>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                Commerce Stack
              </span>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: model.color }}
              >
                {model.commerceStack}
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
          Model → Commerce Stack Lock-in
        </h4>
        <div className="flex flex-col gap-2">
          {[
            { from: "Claude", to: "MCP ecosystem + x402 micropayments", color: "#D97706" },
            { from: "GPT", to: "ACP + Stripe merchant network", color: "#10B981" },
            { from: "Gemini", to: "AP2 mandates + UCP + Google Cloud", color: "#3B82F6" },
            { from: "Grok", to: "No lock-in (assemble your own stack)", color: "#EF4444" },
            { from: "Command", to: "Enterprise systems (SAP, Oracle, Workday)", color: "#8B5CF6" },
            { from: "Nova", to: "AWS services + Bedrock AgentCore", color: "#F59E0B" },
          ].map((row) => (
            <div key={row.from} className="flex items-center gap-2 text-xs">
              <span
                className="font-semibold w-20 text-right shrink-0"
                style={{ color: row.color }}
              >
                {row.from}
              </span>
              <span className="text-gray-600">→</span>
              <span className="text-gray-400">{row.to}</span>
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
          Open protocols (MCP, x402, A2A) can be used across models, but
          the deepest integrations come from each provider&apos;s native stack.
        </span>
      </div>
    </div>
  );
}
