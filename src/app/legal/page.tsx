import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy policy, disclaimer, and imprint for Agentic Commerce Market Map.",
};

export default function LegalPage() {
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

      <main className="max-w-[700px] mx-auto px-6 py-12 space-y-12">
        {/* Privacy Policy */}
        <section>
          <h1 className="text-2xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              This website is operated by Patch 42 UG. We take your privacy
              seriously and are committed to keeping things simple and
              transparent.
            </p>
            <h2 className="text-lg font-semibold text-white pt-2">
              Analytics
            </h2>
            <p>
              We use{" "}
              <a
                href="https://tinylytics.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Tinylytics
              </a>{" "}
              for basic, privacy-friendly website analytics. Tinylytics does not
              use cookies, does not collect personal data, and does not track you
              across websites. It only records anonymous page view counts.
            </p>
            <h2 className="text-lg font-semibold text-white pt-2">Cookies</h2>
            <p>
              This website does not use cookies. No tracking cookies, no
              session cookies, no third-party cookies.
            </p>
            <h2 className="text-lg font-semibold text-white pt-2">
              External Images
            </h2>
            <p>
              Company logos are loaded from external services (e.g., unavatar.io,
              GitHub, Cloudinary). When these images load, your browser makes
              requests to those servers, which may log your IP address according
              to their own privacy policies.
            </p>
            <h2 className="text-lg font-semibold text-white pt-2">
              Data Collection
            </h2>
            <p>
              We do not collect, store, or process any personal data. There are
              no accounts, no forms, and no newsletter signups on this site.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <h1 className="text-2xl font-bold text-white mb-4">Disclaimer</h1>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              The information provided on this website is for general
              informational purposes only. All company listings, descriptions,
              and categorizations are provided on an &ldquo;as is&rdquo; basis
              without any warranties of completeness, accuracy, or timeliness.
            </p>
            <p>
              Inclusion in this market map does not constitute an endorsement,
              recommendation, or affiliation with any listed company.
            </p>
            <p>
              All company names, logos, and trademarks displayed on this website
              are the property of their respective owners. Their use here is
              purely for identification purposes and does not imply any
              affiliation with or endorsement by this website.
            </p>
            <p>
              We reserve the right to add, remove, or recategorize companies at
              any time without notice.
            </p>
          </div>
        </section>

        {/* Imprint */}
        <section>
          <h1 className="text-2xl font-bold text-white mb-4">
            Imprint <span className="text-gray-500 text-base font-normal">(Impressum)</span>
          </h1>
          <div className="space-y-3 text-sm leading-relaxed">
            <div>
              <p className="font-semibold text-white">Patch 42 UG</p>
              <p>Rheinsberger Str. 76/77</p>
              <p>D-10115 Berlin, Germany</p>
            </div>
            <div>
              <p>
                <span className="text-gray-500">Managing Director:</span>{" "}
                Riccardo Lamanna
              </p>
            </div>
            <div>
              <p>
                <span className="text-gray-500">Registry:</span> Amtsgericht
                Charlottenburg (Berlin) HRB 239181 B
              </p>
              <p>
                <span className="text-gray-500">EUID:</span>{" "}
                DEF1103R.HRB239181B
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
