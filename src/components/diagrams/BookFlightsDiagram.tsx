export default function BookFlightsDiagram() {
  const steps = [
    {
      num: "1",
      label: "Set Up OpenClaw",
      detail: "Install locally, configure LLM",
      color: "#6366f1",
    },
    {
      num: "2",
      label: "Create Virtual Card",
      detail: "Lobster.cash / CreditClaw / Privacy.com",
      color: "#8b5cf6",
    },
    {
      num: "3",
      label: "Write Travel Prompt",
      detail: "Dates, airports, budget, preferences",
      color: "#a855f7",
    },
    {
      num: "4",
      label: "Agent Searches",
      detail: "Google Flights, Kayak, Skyscanner",
      color: "#f59e0b",
    },
    {
      num: "5",
      label: "Agent Compares",
      detail: "Price, layovers, airlines",
      color: "#f97316",
    },
    {
      num: "6",
      label: "Agent Books",
      detail: "Fill forms, enter virtual card",
      color: "#ef4444",
    },
    {
      num: "7",
      label: "Confirmation",
      detail: "Booking number, itinerary, charge",
      color: "#10b981",
    },
  ];

  const securityLayers = [
    {
      label: "Spending Limit",
      desc: "Capped at card balance",
      icon: "$",
    },
    {
      label: "Single-Use",
      desc: "Invalid after transaction",
      icon: "1",
    },
    {
      label: "Merchant Lock",
      desc: "Restricted to one site",
      icon: "🔒",
    },
    {
      label: "Instant Revoke",
      desc: "Freeze card any time",
      icon: "⏹",
    },
  ];

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-1 uppercase tracking-wider">
        Flight Booking Flow with OpenClaw & Virtual Cards
      </h3>
      <p className="text-[11px] text-gray-500 mb-5">
        Step-by-step process from setup to confirmed booking
      </p>

      {/* Flow steps */}
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 mb-6">
        {steps.map((step, i) => (
          <div key={step.num} className="flex sm:flex-col items-center gap-2 sm:gap-0">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: step.color }}
            >
              {step.num}
            </div>
            {i < steps.length - 1 && (
              <div className="hidden sm:block w-full h-px mt-0 mb-0" style={{ background: `linear-gradient(to right, ${step.color}60, ${steps[i + 1].color}60)` }} />
            )}
            <div className="sm:text-center sm:mt-2">
              <div className="text-[11px] font-semibold text-white leading-tight">
                {step.label}
              </div>
              <div className="text-[9px] text-gray-500 leading-tight mt-0.5">
                {step.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security layers */}
      <div className="border-t border-white/5 pt-4 mt-2">
        <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Virtual Card Security Layers
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {securityLayers.map((layer) => (
            <div
              key={layer.label}
              className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-3"
            >
              <div className="text-lg mb-1">{layer.icon}</div>
              <div className="text-[11px] font-semibold text-emerald-400">
                {layer.label}
              </div>
              <div className="text-[9px] text-gray-500 mt-0.5">
                {layer.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compatible providers */}
      <div className="border-t border-white/5 pt-4 mt-4">
        <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Virtual Card Providers
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Lobster.cash", note: "USDC → Visa" },
            { name: "CreditClaw", note: "Agent-native" },
            { name: "Privacy.com", note: "Merchant lock" },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-full border border-purple-500/30 bg-purple-500/[0.06] px-3 py-1 text-[11px]"
            >
              <span className="text-purple-300 font-medium">{p.name}</span>
              <span className="text-gray-500 ml-1.5">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
