import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { categories, categoryNames } from "@/lib/categories";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const totalCompanies = Object.values(categories).reduce((acc, cat) => {
  cat.companies.forEach((c) => acc.add(c.name));
  return acc;
}, new Set<string>()).size;

const totalCategories = categoryNames.length;

export const metadata: Metadata = {
  metadataBase: new URL("https://agenticcommercemap.com"),
  title: {
    default: `Agentic Commerce Market Map — ${totalCompanies}+ Companies Building the Agent Economy`,
    template: "%s | Agentic Commerce Market Map",
  },
  description: `Interactive market map of ${totalCompanies}+ companies building the agentic commerce ecosystem across ${totalCategories} categories — from payment processors and AI agent frameworks to identity, wallets, and blockchains.`,
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
    title: `Agentic Commerce Market Map — ${totalCompanies}+ Companies Building the Agent Economy`,
    description: `Interactive market map of ${totalCompanies}+ companies across ${totalCategories} categories building the infrastructure for AI agent commerce — payments, identity, wallets, blockchains, and more.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Commerce Market Map",
    description: `${totalCompanies}+ companies building the agentic commerce ecosystem. Explore payment processors, AI agent frameworks, identity, wallets, blockchains, and more.`,
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
    types: {
      "application/rss+xml": "https://agenticcommercemap.com/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://unavatar.io" />
        <link rel="preconnect" href="https://pbs.twimg.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://unavatar.io" />
        <link rel="dns-prefetch" href="https://pbs.twimg.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
      </head>
      <body className={`${geistSans.variable} antialiased bg-[#0a0a0f]`}>
        {children}
        <Script src="https://tinylytics.app/embed/KsCzNyh-bzrRj3Mquqix.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
