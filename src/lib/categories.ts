import data from "@/data/market-map-data.json";

export type Company = {
  name: string;
  logoUrl: string;
};

export type Subcategory = {
  name: string;
  companies: Company[];
};

export type CategoryData = {
  count: number;
  companies: Company[];
  subcategories?: Subcategory[];
};

export const categories = data.categories as Record<string, CategoryData>;
export const categoryNames = Object.keys(categories);

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function fromSlug(slug: string): string | undefined {
  return categoryNames.find((name) => toSlug(name) === slug);
}

export const categoryShortDescriptions: Record<string, string> = {
  "User Interfaces": "where humans interact with agents",
  "Agent Harness": "the agents themselves",
  "Agent Frameworks & Tooling": "how agents are built",
  "Agent Networks": "how agents connect & collaborate",
  "Discovery": "finding products & services",
  "Crypto Commerce": "buying & selling with crypto",
  "Identity & Trust": "who you are & can you be trusted",
  "Wallets & Tooling": "managing keys & agent wallets",
  "Payment Processors": "processing transactions",
  "Payment Infrastructure": "rails for moving money",
  "Stablecoins": "the money layer",
  "Universal Balance & Account Abstraction": "accounts & cross-chain balances",
  "Proprietary Models": "closed-source AI brains",
  "Open Source Models": "self-hostable AI brains",
  "Blockchains": "settlement & consensus",
  "Hosting / Cloud / Compute": "where agents run",
  "Standards & Protocols": "the foundation everything is built on",
};

export const categoryLongDescriptions: Record<string, string> = {
  "User Interfaces": `User Interfaces are the front doors of agentic commerce — the platforms where humans give instructions to AI agents and receive results. Today's dominant interfaces are messaging apps like Telegram, WhatsApp, Discord, and Slack, where agent bots execute trades, manage wallets, and complete purchases through conversational commands. Social platforms like X and Farcaster are emerging as commerce surfaces where agents operate via posts and DMs. Hardware-first approaches like Rabbit's R1 device represent a bet that agentic commerce needs its own dedicated form factor, not just a chat window inside an existing app. The key trend is that commerce is moving from "browsing and clicking" to "asking and confirming" — users describe what they want in natural language, and agents handle the rest.`,

  "Agent Harness": `Agent Harnesses are the autonomous agents themselves — software systems that can plan, reason, and take actions across the web and blockchain without step-by-step human guidance. This category spans the spectrum from developer-focused coding agents (Claude Code, Cursor, Devin) to general-purpose autonomous assistants (Manus, OpenAI Operator, Claude Cowork) to crypto-native agent frameworks (OpenClaw, ElizaOS, NemoClaw). The defining feature of an agent harness is autonomy: these systems don't just answer questions — they browse websites, execute transactions, write and deploy code, and coordinate with other agents. The competitive landscape is heating up rapidly, with Google's Project Mariner, Perplexity Computer, and Simular AI all racing to build the most capable browser-based agents.`,

  "Agent Frameworks & Tooling": `Agent Frameworks & Tooling encompasses the developer infrastructure for building, deploying, and connecting AI agents. At the protocol level, Anthropic's MCP (Model Context Protocol), Google's A2A (Agent-to-Agent), and standards like AXTP provide the interoperability layers that let agents discover and use external tools. At the platform level, companies like thirdweb, Cloudflare, and Blockrun provide full-stack infrastructure with wallets, payment rails, and chain connectivity. The tooling layer also includes specialized frameworks for specific use cases: Bankr for social crypto trading, Starkbot Cloud for autonomous Rust-based agents, and Phantom's MCP server for wallet operations. This is the picks-and-shovels layer of the agentic commerce gold rush.`,

  "Agent Networks": `Agent Networks are the coordination layers that enable AI agents to discover, communicate, and transact with each other. Virtuals Protocol leads with the Agent Commerce Protocol (ACP) and an economy of 18,000+ agents generating $470M+ in aGDP. Bittensor operates a decentralized network of 129+ subnets where agents produce and consume AI services. Moltbook has become "the front page of the agent internet" — an AI-only social forum with 1.5M+ agents that was acquired by Meta. These networks represent a fundamental shift: commerce is no longer just human-to-business or human-to-agent, but increasingly agent-to-agent, with AI systems autonomously hiring, negotiating with, and paying other AI systems.`,

  "Discovery": `Discovery in agentic commerce solves a critical problem: how do AI agents find the products, services, APIs, and other agents they need? This category includes agent-native marketplaces like Moltlaunch (hire agents like freelancers on Base) and x402jobs (decentralized agent-to-agent job marketplace). Discovery platforms like ClawIndex, 402.bot, and Pawr.link serve as directories for the agent ecosystem. Ecosystem explorers like x402scan and 8004scan help agents and developers monitor real-time transaction flows and agent registries, while Valoria provides x402 market intelligence. Task platforms like WURK and 0xWork connect agents with work opportunities. The fundamental challenge is building a "Google for agents" — searchable, trustworthy, and machine-readable product catalogs that AI can navigate without human-designed UIs.`,

  "Crypto Commerce": `Crypto Commerce covers the actual buying and selling of goods and services using cryptocurrency and agent-native payment protocols. This category breaks down into four sub-sectors: Marketplaces & Aggregators (List402 with 760+ verified x402 merchants, Agoragentic for agent-to-agent services), Physical Goods & Agent Stores (agentshops.xyz selling candles and coffee, x402-store for merch), Digital Goods & Services (Bitrefill for gift cards, Postera for pay-per-article content, x402wall for digital ad slots), and Bridges to Traditional Retail (AEON connecting agents to 50M+ real-world merchants, Stripe's infrastructure). The space is rapidly moving beyond crypto-native niches into mainstream commerce, with AI agents serving as the bridge between stablecoin payments and traditional retail.`,

  "Identity & Trust": `Identity & Trust is the verification layer that answers critical questions in agentic commerce: Who is this agent? Who does it represent? Can it be trusted? ERC-8004 is emerging as the Ethereum standard for on-chain agent identity and reputation. Startups like t54.ai provide "Know Your Agent" (KYA) verification covering developer KYB, model provenance, and intent attestation. Cascade implements ERC-8004 on Solana for agent identity and reputation at scale. The space also includes human-identity bridges like World's AgentKit (proving an agent is backed by a verified human via zero-knowledge proofs) and Incode's deepfake-resistant biometric verification. Sumsub and Prove bring enterprise-grade agent verification, while HUMAN Security's AgenticTrust classifies agent behavior in real-time. As agents handle increasingly high-value transactions, the identity and trust layer becomes the critical enabler — or bottleneck — of the entire ecosystem.`,

  "Wallets & Tooling": `Wallets & Tooling provides the key management and transaction infrastructure that AI agents need to hold, send, and receive digital assets. Unlike human wallets, agent wallets require programmable spending policies, delegated access, and autonomous signing capabilities. Turnkey leads with hardware-backed infrastructure offering sub-100ms signing. Coinbase, MetaMask, and Fireblocks bring enterprise-grade MPC and smart account solutions. Privy provides server-side wallet provisioning with configurable guardrails. The category also includes security tooling: Varlock for AI-safe environment variable management and mlld for secure LLM scripting that prevents private key leakage. Rhinestone's ERC-7579 modular smart accounts enable fine-grained permission scoping — giving trading bots access to swap functions while blocking withdrawal capabilities.`,

  "Payment Processors": `Payment Processors handle the actual verification, routing, and settlement of agentic transactions. This is the most crowded category in the market map with 31+ players, reflecting the massive opportunity. Coinbase is the anchor with its x402 protocol reference implementation. PayAI is the second-largest facilitator with 28M transactions processed on Solana. Traditional giants Stripe, Visa, Mastercard, PayPal, and Adyen are all building agentic payment capabilities. A long tail of specialized processors serve different niches: x402-rs (Rust implementation), OpenFacilitator (no-code), AsterPay (EUR settlement), and Ultravioleta DAO (Latin American gasless payments). The defining trend is convergence: crypto-native processors are adding fiat rails while traditional processors are adding crypto capabilities.`,

  "Payment Infrastructure": `Payment Infrastructure provides the underlying rails, protocols, and plumbing that payment processors build on top of. The x402 protocol (HTTP 402 "Payment Required") by Coinbase enables pay-per-use USDC micropayments. OpenAI and Stripe's ACP (Agentic Commerce Protocol) defines how agents search products and complete purchases. Google's AP2 uses cryptographic "mandates" for secure agent payments, backed by 60+ organizations. Crossmint provides agents with wallets and virtual Visa cards to pay across 1B+ items on Amazon and Shopify. The infrastructure layer also includes compliance (Cleared for BSA/OFAC screening), streaming payments (Superfluid for per-second subscriptions), and management dashboards (ampersend by Edge & Node). This layer is where the fundamental design decisions about agent payment architecture are being made.`,

  "Stablecoins": `Stablecoins are the money layer of agentic commerce — the digital currencies that AI agents actually transact in. USDC by Circle is the primary stablecoin for x402 payments, with Circle building dedicated micropayment infrastructure (transfers as small as $0.000001 with zero gas fees). USDT by Tether is positioning for massive scale, with CEO predictions of 1 trillion AI agents using USDT. CASH by Phantom, launched through Stripe's Open Issuance platform, represents a new breed of application-specific stablecoins designed for seamless cross-rail commerce. Stablecoins solve the fundamental problem of AI agent payments: they provide price stability (unlike volatile crypto), programmability (unlike fiat), and instant settlement (unlike bank transfers).`,

  "Universal Balance & Account Abstraction": `Universal Balance & Account Abstraction simplifies the complex multi-chain, multi-token reality of blockchain commerce into a single coherent experience for AI agents. Polygon's Agent CLI toolkit provides session-scoped smart contract wallets where agents pay only in USDC regardless of the underlying chain's gas token. ERC-4337, the Ethereum account abstraction standard with 40M+ smart accounts deployed, enables programmable wallet logic that lets agents execute transactions via automated scripts without managing raw private keys. This layer is critical for making agentic commerce practical at scale — agents shouldn't need to manage gas tokens across 20 different chains just to complete a purchase.`,

  "Proprietary Models": `Proprietary Models are the closed-source AI brains that power the most capable autonomous agents. Claude by Anthropic drives MCP-enabled agentic commerce with context retention across sessions. GPT by OpenAI powers the Agentic Commerce Protocol with Stripe and Instant Checkout in ChatGPT. Gemini by Google powers Project Mariner, AP2, and UCP. Grok by xAI offers frontier tool-calling with 2M-token context. Command by Cohere focuses on enterprise deployments with best-in-class tool-use accuracy in 23 languages. Nova by Amazon provides native MCP support with Bedrock AgentCore for policy enforcement. The competitive dynamic is clear: each major model provider is building its own agentic commerce stack, and the model you choose increasingly determines which payment protocols and commerce ecosystems you plug into.`,

  "Open Source Models": `Open Source Models provide self-hostable AI capabilities for developers and organizations that need data sovereignty, customization, or cost control. Meta's Llama family leads adoption for self-hosted agent deployments. DeepSeek's MIT-licensed MoE models integrate reasoning into tool-use with efficient 7B/14B variants. Qwen offers Apache 2.0 models with native MCP support running on consumer GPUs. Hermes by Nous Research provides agent-first models with persistent memory and skill learning. The open-source tier matters enormously for agentic commerce: organizations processing sensitive financial transactions or operating in regulated markets often cannot send data to third-party model providers, making self-hosted inference a requirement rather than a preference.`,

  "Blockchains": `Blockchains provide the settlement and consensus layer where agentic commerce transactions are recorded and finalized. Base (Coinbase's L2) is the primary settlement chain for x402 with gasless trading and TEE-secured agent wallets. Solana offers native x402 support with 400ms finality and $0.00025 transaction costs, having processed 35M+ x402 transactions. Ethereum is positioning as the settlement layer for the machine economy through its dAI Team and ERC-8004 standard. Newer entrants like Tempo (Stripe + Paradigm, 100K+ TPS), SKALE (gas-free), and Radius (2.5M TPS) are optimizing specifically for high-frequency agent micropayments. The blockchain landscape for agentic commerce is consolidating around a few key requirements: sub-second finality, near-zero fees, native stablecoin support, and x402/ERC-8004 compatibility.`,

  "Hosting / Cloud / Compute": `Hosting, Cloud & Compute covers where AI agents physically run — from hyperscale clouds to personal hardware. Google Cloud and AWS are building enterprise agentic commerce stacks (AP2, Bedrock AgentCore). Cloudflare co-founded the x402 Foundation and is building authentication for agentic commerce with Visa and Mastercard. Decentralized alternatives like Akash (1,000+ GPUs, 85% cheaper than hyperscalers) and Heurist provide censorship-resistant AI infrastructure. Nous Research contributes open-source models trained on distributed Solana compute. The self-hosting tier is significant: Hetzner, DigitalOcean, Contabo, and OVHcloud offer affordable VPS/GPU servers for running OpenClaw and open-source models. Even Apple's Mac Mini with M4 chips can run local LLMs and agent harnesses. Venice.ai bridges both worlds with privacy-first inference and a VVV token economy for staking compute capacity. Treza Labs adds ZK-KYC and privacy infrastructure using secure enclaves for agents that need cryptographic proof of execution.`,

  "Standards & Protocols": `Standards & Protocols are the foundational specifications that everything else in the agentic commerce ecosystem is built upon. x402 revives HTTP 402 "Payment Required" for internet-native micropayments. ERC-8004 defines on-chain agent identity and reputation. MCP by Anthropic standardizes how agents connect to external tools. A2A by Google (now Linux Foundation) enables cross-organizational agent collaboration. ACP by OpenAI/Stripe defines agent shopping flows. AP2 by Google secures agent payments with cryptographic mandates. UCP standardizes agent-driven product discovery. ERC-4337 provides account abstraction for programmable wallets. MPP (Machine Payments Protocol) by Stripe enables internet-native agent-to-agent payments. These standards are the invisible infrastructure that determines interoperability — which agents can talk to which services, and how payments flow between them.`,
};

// Base color name per category (single source of truth for all derived styles)
export const categoryColors: Record<string, string> = {
  "User Interfaces": "violet",
  "Discovery": "amber",
  "Payment Processors": "emerald",
  "Identity & Trust": "rose",
  "Agent Networks": "orange",
  "Agent Frameworks & Tooling": "indigo",
  "Payment Infrastructure": "green",
  "Stablecoins": "teal",
  "Wallets & Tooling": "purple",
  "Universal Balance & Account Abstraction": "sky",
  "Hosting / Cloud / Compute": "fuchsia",
  "Proprietary Models": "red",
  "Open Source Models": "emerald",
  "Blockchains": "blue",
  "Standards & Protocols": "yellow",
  "Agent Harness": "lime",
  "Crypto Commerce": "pink",
};

// Tailwind class maps — static so Tailwind's scanner can detect all class names
export const categoryGradients: Record<string, string> = {
  "User Interfaces": "from-violet-500/20 to-violet-500/0 border-violet-500/30 text-violet-300",
  "Discovery": "from-amber-500/20 to-amber-500/0 border-amber-500/30 text-amber-300",
  "Payment Processors": "from-emerald-500/20 to-emerald-500/0 border-emerald-500/30 text-emerald-300",
  "Identity & Trust": "from-rose-500/20 to-rose-500/0 border-rose-500/30 text-rose-300",
  "Agent Networks": "from-orange-500/20 to-orange-500/0 border-orange-500/30 text-orange-300",
  "Agent Frameworks & Tooling": "from-indigo-500/20 to-indigo-500/0 border-indigo-500/30 text-indigo-300",
  "Payment Infrastructure": "from-green-500/20 to-green-500/0 border-green-500/30 text-green-300",
  "Stablecoins": "from-teal-500/20 to-teal-500/0 border-teal-500/30 text-teal-300",
  "Wallets & Tooling": "from-purple-500/20 to-purple-500/0 border-purple-500/30 text-purple-300",
  "Universal Balance & Account Abstraction": "from-sky-500/20 to-sky-500/0 border-sky-500/30 text-sky-300",
  "Hosting / Cloud / Compute": "from-fuchsia-500/20 to-fuchsia-500/0 border-fuchsia-500/30 text-fuchsia-300",
  "Proprietary Models": "from-red-500/20 to-red-500/0 border-red-500/30 text-red-300",
  "Open Source Models": "from-emerald-400/20 to-emerald-400/0 border-emerald-400/30 text-emerald-300",
  "Blockchains": "from-blue-500/20 to-blue-500/0 border-blue-500/30 text-blue-300",
  "Standards & Protocols": "from-yellow-500/20 to-yellow-500/0 border-yellow-500/30 text-yellow-300",
  "Agent Harness": "from-lime-500/20 to-lime-500/0 border-lime-500/30 text-lime-300",
  "Crypto Commerce": "from-pink-500/20 to-pink-500/0 border-pink-500/30 text-pink-300",
};

export const categoryAccents: Record<string, string> = {
  "User Interfaces": "border-violet-500/40 shadow-violet-500/20",
  "Discovery": "border-amber-500/40 shadow-amber-500/20",
  "Payment Processors": "border-emerald-500/40 shadow-emerald-500/20",
  "Identity & Trust": "border-rose-500/40 shadow-rose-500/20",
  "Agent Networks": "border-orange-500/40 shadow-orange-500/20",
  "Agent Frameworks & Tooling": "border-indigo-500/40 shadow-indigo-500/20",
  "Payment Infrastructure": "border-green-500/40 shadow-green-500/20",
  "Stablecoins": "border-teal-500/40 shadow-teal-500/20",
  "Wallets & Tooling": "border-purple-500/40 shadow-purple-500/20",
  "Universal Balance & Account Abstraction": "border-sky-500/40 shadow-sky-500/20",
  "Hosting / Cloud / Compute": "border-fuchsia-500/40 shadow-fuchsia-500/20",
  "Proprietary Models": "border-red-500/40 shadow-red-500/20",
  "Open Source Models": "border-emerald-400/40 shadow-emerald-400/20",
  "Blockchains": "border-blue-500/40 shadow-blue-500/20",
  "Standards & Protocols": "border-yellow-500/40 shadow-yellow-500/20",
  "Agent Harness": "border-lime-500/40 shadow-lime-500/20",
  "Crypto Commerce": "border-pink-500/40 shadow-pink-500/20",
};

export const categoryBadges: Record<string, string> = {
  "User Interfaces": "bg-violet-500/15 text-violet-300",
  "Discovery": "bg-amber-500/15 text-amber-300",
  "Payment Processors": "bg-emerald-500/15 text-emerald-300",
  "Identity & Trust": "bg-rose-500/15 text-rose-300",
  "Agent Networks": "bg-orange-500/15 text-orange-300",
  "Agent Frameworks & Tooling": "bg-indigo-500/15 text-indigo-300",
  "Payment Infrastructure": "bg-green-500/15 text-green-300",
  "Stablecoins": "bg-teal-500/15 text-teal-300",
  "Wallets & Tooling": "bg-purple-500/15 text-purple-300",
  "Universal Balance & Account Abstraction": "bg-sky-500/15 text-sky-300",
  "Hosting / Cloud / Compute": "bg-fuchsia-500/15 text-fuchsia-300",
  "Proprietary Models": "bg-red-500/15 text-red-300",
  "Open Source Models": "bg-emerald-400/15 text-emerald-300",
  "Blockchains": "bg-blue-500/15 text-blue-300",
  "Standards & Protocols": "bg-yellow-500/15 text-yellow-300",
  "Agent Harness": "bg-lime-500/15 text-lime-300",
  "Crypto Commerce": "bg-pink-500/15 text-pink-300",
};

// Hex values for OG images and non-Tailwind contexts
export const categoryHex: Record<string, string> = {
  cyan: "#06b6d4",
  violet: "#8b5cf6",
  amber: "#f59e0b",
  emerald: "#10b981",
  rose: "#f43f5e",
  orange: "#f97316",
  indigo: "#6366f1",
  green: "#22c55e",
  teal: "#14b8a6",
  purple: "#a855f7",
  sky: "#0ea5e9",
  fuchsia: "#d946ef",
  red: "#ef4444",
  blue: "#3b82f6",
  yellow: "#eab308",
  lime: "#84cc16",
  pink: "#ec4899",
};

// Layout for the main map grid
export const layout: { row: string[] }[] = [
  { row: ["User Interfaces"] },
  { row: ["Agent Harness"] },
  { row: ["Agent Frameworks & Tooling", "Agent Networks"] },
  { row: ["Discovery", "Crypto Commerce"] },
  { row: ["Identity & Trust", "Wallets & Tooling"] },
  { row: ["Payment Processors", "Payment Infrastructure"] },
  { row: ["Stablecoins", "Universal Balance & Account Abstraction"] },
  { row: ["Proprietary Models", "Open Source Models"] },
  { row: ["Blockchains", "Hosting / Cloud / Compute"] },
  { row: ["Standards & Protocols"] },
];
