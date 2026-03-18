// Companies that should be shown at lower opacity because:
// - No info found / no verifiable agentic commerce presence
// - Description doesn't clearly tie to agentic commerce specifically
// - Generic infra/tool without a specific agentic commerce initiative

const lowRelevance = new Set([
  // NO INFO FOUND AT ALL (not in companyInfo)
  "MetEngine",
  "twit.sh",
  "WURK",
  "Pawr.link",
  "Valiron",
  "Nava",
  "REP",
  "ClawdVine",
  "Armory",
  "MAIN",
  "Fluid",
  "Singularity Layer",
  "Delx",
  "render_self",
  "Agonx402",
  "Invoica",
  "AsterPay",
  "Mithril",
  "FabricBloc",
  "EmblemAI",
  "Para",
  "Obul",
  "Unforgettable",
  "Stable",

  // HAS INFO BUT NOT CLEARLY AGENTIC COMMERCE
  "Quotient",        // Generic portfolio analytics, no agentic commerce initiative
  "Octav",           // Web3 financial data aggregation, not agent-specific
  "growthepie",      // L2 analytics, tangential to agentic commerce
  "Grok",            // General AI chatbot, tool-calling is generic not commerce-specific
  "Gizmolab",        // Generic Web3 dev studio, not specifically agentic commerce
  "Cred Protocol",   // On-chain credit scoring, general DeFi not agent-specific
  "Avocado",         // Multi-chain superwallet, general DeFi tool
  "Dynamic",         // MPC wallets, general infra not specifically for agents
  "fxUSD",           // Generic DeFi stablecoin, no specific agentic commerce tie
  "Ace Data Cloud",  // Generic API platform, not specifically agentic commerce
  "Kimi Moonshot",   // Foundation model with agent swarm, but not commerce-focused
  "Rei Labs",        // Minimal info, vague reference
  "HandlPay",       // "Exploring" AI agent integrations -- not there yet
  "Droyd",           // Trading agent platform, more trading than commerce
  "Silverback",      // Web3 automation bots, general tooling not agent commerce
  "Autoincentive",   // Listed as facilitator but minimal unique info
  "Nous Research",   // Open-source AI models, infra not commerce
  "Tator Trader",    // Conversational crypto trading, more DeFi than agentic commerce
  "Zyfai",           // DeFi yield automation, not agentic commerce per se
  "Fere AI",         // Autonomous trading agents, more trading than commerce
]);

export default lowRelevance;
