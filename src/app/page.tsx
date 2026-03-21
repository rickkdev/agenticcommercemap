"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import companyInfoMap, { type CompanyInfo } from "@/data/company-info";
import lowRelevance from "@/data/low-relevance";
import {
  categories,
  toSlug,
  categoryShortDescriptions,
  categoryLongDescriptions,
  categoryGradients,
  categoryAccents,
  categoryBadges,
  layout,
  type Company,
  type CategoryData,
} from "@/lib/categories";
import { Footer } from "@/components/footer";

function KbdShortcut() {
  const [prefix, setPrefix] = useState("⌘");
  useEffect(() => {
    setPrefix(/Mac/.test(navigator.userAgent) ? "⌘" : "Ctrl+");
  }, []);
  return (
    <kbd className="text-[10px] text-gray-600 bg-white/5 border border-white/10 rounded px-1.5 py-0.5">
      {prefix}K
    </kbd>
  );
}

function CompanyChip({
  company,
  category,
  onClick,
  isHighlighted,
  isDimmed,
}: {
  company: Company;
  category: string;
  onClick: (company: Company, category: string) => void;
  isHighlighted: boolean;
  isDimmed: boolean;
}) {
  const info = companyInfoMap[company.name];
  const hasInfo = !!info;
  const isLowRelevance = lowRelevance.has(company.name);
  return (
    <button
      onClick={() => onClick(company, category)}
      className={`chip inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs transition-all duration-200 ${
        isHighlighted
          ? "highlighted"
          : isDimmed
          ? "dimmed"
          : isLowRelevance
          ? "opacity-30"
          : ""
      }`}
    >
      <span className="inline-block w-[20px] h-[20px] rounded-full overflow-hidden shrink-0 bg-white/5 ring-1 ring-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.logoUrl}
          alt={company.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </span>
      <span className="text-gray-300">{company.name}</span>
      {hasInfo && (
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 pulse-dot" />
      )}
    </button>
  );
}

function CategoryCard({
  name,
  data,
  onCompanyClick,
  searchQuery,
}: {
  name: string;
  data: CategoryData;
  onCompanyClick: (company: Company, category: string) => void;
  searchQuery: string;
}) {
  const colors = categoryGradients[name] || "from-indigo-500/20 to-indigo-500/0 border-indigo-500/30 text-indigo-300";
  const hasSearch = searchQuery.length > 0;

  const matchCount = hasSearch
    ? data.companies.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length
    : 0;

  return (
    <div data-category={name} className={`category-card glow-border overflow-hidden ${hasSearch && matchCount === 0 ? "opacity-30" : ""} transition-opacity duration-300`}>
      {/* Category header with gradient */}
      <div className={`bg-gradient-to-r ${colors} border-b border-white/5 px-4 py-2.5 flex items-center justify-between`}>
        <h3 className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
          <a
            href={`/category/${toSlug(name)}`}
            className="hover:underline underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            {name}
          </a>
          {categoryShortDescriptions[name] && (
            <span className="text-[10px] font-normal normal-case tracking-normal opacity-60">
              — {categoryShortDescriptions[name]}
            </span>
          )}
          {name === "Open Source Models" && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full normal-case tracking-normal">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              self-host for privacy
            </span>
          )}
        </h3>
        <span className="count-badge">{data.count}</span>
      </div>
      {/* Companies */}
      <div className="p-3">
        {data.subcategories ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.subcategories.map((sub) => (
              <div key={sub.name} className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5 px-1 border-b border-white/5 pb-1.5">
                  {sub.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sub.companies.map((company) => {
                    const isMatch =
                      hasSearch &&
                      company.name.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <CompanyChip
                        key={`${name}-${sub.name}-${company.name}`}
                        company={company}
                        category={name}
                        onClick={onCompanyClick}
                        isHighlighted={isMatch}
                        isDimmed={hasSearch && !isMatch}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {data.companies.map((company) => {
              const isMatch =
                hasSearch &&
                company.name.toLowerCase().includes(searchQuery.toLowerCase());
              return (
                <CompanyChip
                  key={`${name}-${company.name}`}
                  company={company}
                  category={name}
                  onClick={onCompanyClick}
                  isHighlighted={isMatch}
                  isDimmed={hasSearch && !isMatch}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Modal({
  company,
  category,
  info,
  onClose,
}: {
  company: Company;
  category: string;
  info: CompanyInfo | undefined;
  onClose: () => void;
}) {
  const accent = categoryAccents[category] || "border-indigo-500/40 shadow-indigo-500/20";
  const badge = categoryBadges[category] || "bg-indigo-500/15 text-indigo-300";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`modal-content rounded-2xl max-w-lg w-full mx-4 overflow-hidden animate-slide-up ${accent} shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-white/5">
          <span className="inline-block w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-white/5 ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={company.logoUrl}
              alt={company.name}
              className="w-full h-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-white truncate">
              {company.name}
            </h2>
            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 ${badge}`}>
              {category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {info ? (
            <>
              <p className="text-sm text-gray-300 leading-relaxed">
                {info.description}
                {info.url && (
                  <>
                    {" "}
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
                    >
                      [reference]
                    </a>
                  </>
                )}
              </p>

              <div className="mt-5">
                {info.website ? (
                  <a
                    href={info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-indigo-500/30 hover:border-indigo-500/50 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M1.5 7h11M7 1.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5M7 1.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Visit Website
                  </a>
                ) : info.url ? (
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-indigo-500/30 hover:border-indigo-500/50 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <path d="M5.25 2.33H2.33v9.34h9.34V8.75M8.17 1.17h4.66v4.66M8.17 5.83L12.83 1.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Visit Website
                  </a>
                ) : null}
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500 italic">
              No additional information available for this project yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const totalCompanies = useMemo(
    () =>
      Object.values(categories).reduce((acc, cat) => {
        cat.companies.forEach((c) => acc.add(c.name));
        return acc;
      }, new Set<string>()).size,
    []
  );

  const totalCategories = Object.keys(categories).length;
  const withInfo = useMemo(
    () =>
      Object.values(categories).reduce((acc, cat) => {
        cat.companies.forEach((c) => {
          if (companyInfoMap[c.name]) acc.add(c.name);
        });
        return acc;
      }, new Set<string>()).size,
    []
  );

  return (
    <div className="hidden md:flex items-center gap-6 text-xs text-gray-500">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-indigo-500/60" />
        <span><strong className="text-gray-300">{totalCompanies}</strong> companies</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-purple-500/60" />
        <span><strong className="text-gray-300">{totalCategories}</strong> categories</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
        <span><strong className="text-gray-300">{withInfo}</strong> with details</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<{
    company: Company;
    category: string;
  } | null>(null);
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Cmd/Ctrl+K to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        if (selectedCompany) {
          setSelectedCompany(null);
        } else if (search) {
          setSearch("");
          searchRef.current?.blur();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedCompany, search]);

  // Auto-scroll to first matching category
  useEffect(() => {
    if (!search) return;
    const q = search.toLowerCase();
    for (const row of layout) {
      for (const catName of row.row) {
        const cat = categories[catName];
        if (cat?.companies.some((c) => c.name.toLowerCase().includes(q))) {
          const el = document.querySelector(`[data-category="${catName}"]`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          return;
        }
      }
    }
  }, [search]);

  const matchCount = useMemo(() => {
    if (!search) return 0;
    const q = search.toLowerCase();
    const matched = new Set<string>();
    Object.values(categories).forEach((cat) => {
      cat.companies.forEach((c) => {
        if (c.name.toLowerCase().includes(q)) matched.add(c.name);
      });
    });
    return matched.size;
  }, [search]);

  const handleCompanyClick = (company: Company, category: string) => {
    setSelectedCompany({ company, category });
  };

  // JSON-LD structured data for SEO and LLM queryability
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Agentic Commerce Market Map",
    description: `Interactive market map of ${Object.values(categories).reduce((acc, cat) => { cat.companies.forEach((c) => acc.add(c.name)); return acc; }, new Set<string>()).size}+ companies building the agentic commerce ecosystem across ${Object.keys(categories).length} categories.`,
    url: "https://agenticcommercemap.com",
    mainEntity: {
      "@type": "ItemList",
      name: "Agentic Commerce Categories",
      numberOfItems: Object.keys(categories).length,
      itemListElement: Object.entries(categories).map(
        ([catName, catData], i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CollectionPage",
            name: catName,
            description: categoryLongDescriptions[catName] || categoryShortDescriptions[catName] || "",
            url: `https://agenticcommercemap.com/category/${toSlug(catName)}`,
            numberOfItems: catData.count,
          },
        })
      ),
    },
  };

  return (
    <div className="min-h-screen bg-mesh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-20 header-blur px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center ring-1 ring-indigo-500/30">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                <path d="M3 26 L9 6 L15 26" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="5" y1="19" x2="13" y2="19" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M28 10 C25 5, 19 6, 19 16 C19 26, 25 27, 28 22" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight">
                Agentic Commerce
              </h1>
              <p className="text-[10px] text-gray-500 -mt-0.5 tracking-wide uppercase">Market Map</p>
            </div>
          </div>

          {/* Search - order-1 on desktop to appear after logo, order-4 on mobile to go below */}
          <div className="relative w-full sm:max-w-md sm:flex-1 order-4 sm:order-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input w-full pl-9 pr-16 py-2 rounded-lg text-sm text-gray-200 placeholder-gray-600"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {search && (
                <span className="text-[10px] text-indigo-400 font-medium">
                  {matchCount} found
                </span>
              )}
              <KbdShortcut />
            </div>
          </div>

          <StatsBar />

          <div className="flex items-center gap-4 shrink-0 order-3 sm:order-last">
            <a
              href="https://github.com/rickkdev/agenticcommercemap/issues/new?title=Add+Company:+[Company+Name]&body=**Company+Name:**%0A%0A**Website:**%0A%0A**Logo+/+Icon+URL:**%0A(Link+to+company+logo,+icon,+or+favicon.+Preferably+a+square+image,+e.g.+Twitter/X+profile+picture+or+company+favicon)%0A%0A**Category:**%0A%0A**Short+Description:**%0A(Please+describe+exactly+how+your+company+interacts+with+agentic+commerce+%E2%80%94+e.g.+what+products+or+services+you+offer+that+enable+AI+agents+to+transact,+discover,+or+operate+autonomously)%0A%0A----%0A%0A**Reference+Articles:**%0A(Link+any+blog+posts+or+articles+your+company+has+published+about+agentic+commerce)%0A-+%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              + Add Company
            </a>
          </div>
        </div>
      </header>

      {/* Map */}
      <main className="max-w-[1600px] mx-auto px-4 py-6 space-y-3">
        {layout.map((row, i) => (
          <div
            key={i}
            className="grid gap-3 row-animate map-row"
            style={{
              animationDelay: `${i * 60}ms`,
              gridTemplateColumns:
                row.row.length === 1
                  ? "1fr"
                  : row.row
                      .map((name) => {
                        const count = categories[name]?.count || 1;
                        return `${count}fr`;
                      })
                      .join(" "),
            }}
          >
            {row.row.map((catName) => {
              const cat = categories[catName];
              if (!cat) return null;
              return (
                <CategoryCard
                  key={catName}
                  name={catName}
                  data={cat}
                  onCompanyClick={handleCompanyClick}
                  searchQuery={search}
                />
              );
            })}
          </div>
        ))}
      </main>

      <Footer />

      {/* Modal */}
      {selectedCompany && (
        <Modal
          company={selectedCompany.company}
          category={selectedCompany.category}
          info={companyInfoMap[selectedCompany.company.name]}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
