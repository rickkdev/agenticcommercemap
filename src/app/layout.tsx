import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenticcommercemap.com"),
  title: {
    default: "Agentic Commerce Market Map — 215+ Companies Building the Agent Economy",
    template: "%s | Agentic Commerce Market Map",
  },
  description:
    "Interactive market map of 215+ companies building the agentic commerce ecosystem across 18 categories — from payment processors and AI agent frameworks to identity, wallets, and blockchains.",
  keywords: [
    "agentic commerce",
    "AI agents",
    "x402",
    "agent payments",
    "autonomous agents",
    "MCP",
    "agent economy",
    "AI commerce",
    "crypto payments",
    "stablecoins",
    "USDC",
    "agent wallets",
    "ERC-8004",
    "market map",
  ],
  authors: [{ name: "Agentic Commerce" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic Commerce Market Map",
    title: "Agentic Commerce Market Map — 215+ Companies Building the Agent Economy",
    description:
      "Interactive market map of 215+ companies across 18 categories building the infrastructure for AI agent commerce — payments, identity, wallets, blockchains, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Commerce Market Map",
    description:
      "215+ companies building the agentic commerce ecosystem. Explore payment processors, AI agent frameworks, identity, wallets, blockchains, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://agenticcommercemap.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased bg-[#0a0a0f]`}>{children}</body>
    </html>
  );
}
