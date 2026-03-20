import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — submit a GitHub issue or send an email.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300">
      <header className="sticky top-0 z-20 header-blur px-6 py-3">
        <div className="max-w-[900px] mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center ring-1 ring-indigo-500/30">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                <path
                  d="M3 26 L9 6 L15 26"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <line
                  x1="5"
                  y1="19"
                  x2="13"
                  y2="19"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M28 10 C25 5, 19 6, 19 16 C19 26, 25 27, 28 22"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                Agentic Commerce
              </span>
              <p className="text-[10px] text-gray-500 -mt-0.5 tracking-wide uppercase">
                Market Map
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-[700px] mx-auto px-6 py-12 space-y-10">
        <section>
          <h1 className="text-2xl font-bold text-white mb-2">Contact</h1>
          <p className="text-sm leading-relaxed text-gray-400">
            Have a question, suggestion, or want to add a company? Here are the
            best ways to reach us.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* GitHub Issue */}
          <a
            href="https://github.com/rickkdev/agenticcommercemap/issues/new?title=Contact:+[Subject]&body=**Message:**%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="category-card glow-border p-6 flex flex-col gap-3 hover:border-indigo-500/40 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div>
              <h2 className="text-base font-semibold text-white">
                GitHub Issue
              </h2>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Open an issue for suggestions, bug reports, or to add a company.
                We review these quickly.
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:mail@rick.build"
            className="category-card glow-border p-6 flex flex-col gap-3 hover:border-indigo-500/40 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            <div>
              <h2 className="text-base font-semibold text-white">Email</h2>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                For personal questions, reach out directly at{" "}
                <span className="text-indigo-400">mail@rick.build</span>
              </p>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
