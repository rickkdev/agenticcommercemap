import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center py-8 text-xs text-gray-600 space-y-3">
      <p>Agentic Commerce Market Map — Interactive Explorer</p>
      <p>
        <a href="https://github.com/rickkdev/agenticcommercemap/issues/new?title=Suggestion:+[Your+Suggestion]&body=**What+would+you+like+to+change?**%0A%0A" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Suggest Changes</a>
        <span className="mx-2">·</span>
        <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        <span className="mx-2">·</span>
        <Link href="/legal" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
        <span className="mx-2">·</span>
        <Link href="/legal" className="hover:text-gray-400 transition-colors">Imprint</Link>
      </p>
      <a
        href="https://x.com/rickkdev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-gray-400 transition-colors"
        aria-label="Twitter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </footer>
  );
}
