export default function UserInterfacesDiagram() {
  const channels = [
    {
      name: "Telegram",
      type: "Messaging",
      color: "#0088cc",
      reach: "900M+ users",
      strengths: "Permissive Bot API, crypto-native, inline payments",
      commerce: "Default for x402 & crypto commerce bots",
    },
    {
      name: "WhatsApp",
      type: "Messaging",
      color: "#25d366",
      reach: "2B+ users",
      strengths: "Global scale, built-in trust, E2E encryption",
      commerce: "Mass-market, emerging markets, fiat-first",
    },
    {
      name: "Discord",
      type: "Messaging",
      color: "#5865f2",
      reach: "200M+ users",
      strengths: "Slash commands, token-gating, community servers",
      commerce: "Crypto communities, group buying, NFT drops",
    },
    {
      name: "Slack",
      type: "Enterprise",
      color: "#e01e5a",
      reach: "40M+ daily",
      strengths: "SSO, workflows, role-based access, App Directory",
      commerce: "B2B procurement, vendor management, approvals",
    },
    {
      name: "X",
      type: "Social",
      color: "#a3a3a3",
      reach: "500M+ users",
      strengths: "Public discovery, algorithmic reach, Farcaster frames",
      commerce: "Deal broadcasts, proactive agent outreach",
    },
    {
      name: "Rabbit R1",
      type: "Hardware",
      color: "#f97316",
      reach: "Dedicated device",
      strengths: "Always-on, LAM navigation, hardware security",
      commerce: "Platform-independent, visual app interaction",
    },
  ];

  const paradigm = [
    { label: "Browse & Click", items: ["Search bars", "Category pages", "Add to cart", "Checkout forms"], color: "#ef4444" },
    { label: "Ask & Confirm", items: ["State intent", "Agent finds options", "Review summary", "Tap to confirm"], color: "#22c55e" },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
        UI Channel Map: Agentic Commerce Surfaces
      </h3>

      {/* Channel cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="rounded-lg border p-4"
            style={{
              borderColor: `${ch.color}30`,
              background: `${ch.color}08`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: ch.color }}
              />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: ch.color }}
              >
                {ch.name}
              </span>
              <span className="text-[10px] text-gray-500 border border-white/10 rounded px-1.5 py-0.5">
                {ch.type}
              </span>
            </div>

            <div className="text-[11px] text-gray-500 mb-1">
              Reach: <span className="text-gray-300 font-medium">{ch.reach}</span>
            </div>
            <div className="text-[11px] text-gray-500 mb-1">
              Strengths: <span className="text-gray-300">{ch.strengths}</span>
            </div>
            <div className="text-[11px] text-gray-500">
              Commerce fit: <span className="text-gray-300">{ch.commerce}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Paradigm shift comparison */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
          The Paradigm Shift
        </div>
        <div className="grid grid-cols-2 gap-3">
          {paradigm.map((p) => (
            <div key={p.label} className="text-center">
              <div
                className="text-[11px] font-semibold mb-2"
                style={{ color: p.color }}
              >
                {p.label}
              </div>
              <div className="space-y-1">
                {p.items.map((item, i) => (
                  <div
                    key={item}
                    className="text-[10px] text-gray-400 rounded border border-white/10 bg-white/[0.03] px-2 py-1"
                  >
                    <span className="text-gray-500 mr-1">{i + 1}.</span> {item}
                  </div>
                ))}
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
        The winning interface disappears. Users forget they are using a commerce
        tool and simply experience an agent that understands what they want.
      </div>
    </div>
  );
}
