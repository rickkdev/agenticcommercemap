"use client";

import { useState } from "react";
import data from "@/data/market-map-data.json";
import companyInfoMap, { type CompanyInfo } from "@/data/company-info";
import lowRelevance from "@/data/low-relevance";

type Company = {
  name: string;
  logoUrl: string;
};

type CategoryData = {
  count: number;
  companies: Company[];
};

const categories = data.categories as Record<string, CategoryData>;

const layout: { row: string[]; style?: string }[] = [
  { row: ["Data & Analytics"] },
  { row: ["User Interfaces"] },
  { row: ["Discovery", "Facilitators", "Identity & Trust"] },
  { row: ["Agent Networks", "Agent Frameworks & Tooling"] },
  { row: ["Payment Infrastructure", "Stablecoins"] },
  { row: ["Wallets", "Universal Balance & Account Abstraction"] },
  { row: ["Hosting / Cloud / Compute", "Foundation Models"] },
  { row: ["Blockchains"] },
];

function CompanyChip({
  company,
  category,
  onClick,
}: {
  company: Company;
  category: string;
  onClick: (company: Company, category: string) => void;
}) {
  const info = companyInfoMap[company.name];
  const hasInfo = !!info;
  const isLowRelevance = lowRelevance.has(company.name);

  return (
    <button
      onClick={() => onClick(company, category)}
      className={`inline-flex items-center gap-1.5 rounded-full bg-white border px-2.5 py-1 text-xs transition-all ${
        isLowRelevance
          ? "border-gray-100 opacity-35 hover:opacity-70 cursor-pointer text-gray-400"
          : hasInfo
          ? "border-gray-100 hover:border-blue-300 hover:shadow-sm cursor-pointer text-gray-700"
          : "border-gray-100 hover:border-gray-300 hover:shadow-sm cursor-pointer text-gray-700"
      }`}
    >
      <span className="inline-block w-[18px] h-[18px] rounded-full overflow-hidden shrink-0 bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.logoUrl}
          alt={company.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </span>
      {company.name}
      {hasInfo && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
      )}
    </button>
  );
}

function CategoryCard({
  name,
  data,
  onCompanyClick,
}: {
  name: string;
  data: CategoryData;
  onCompanyClick: (company: Company, category: string) => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <h3 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {name}{" "}
        <span className="text-gray-400 font-normal">({data.count})</span>
      </h3>
      <div className="flex flex-wrap gap-1.5 justify-center">
        {data.companies.map((company) => (
          <CompanyChip
            key={`${name}-${company.name}`}
            company={company}
            category={name}
            onClick={onCompanyClick}
          />
        ))}
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-100">
          <span className="inline-block w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={company.logoUrl}
              alt={company.name}
              className="w-full h-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900 truncate">
              {company.name}
            </h2>
            <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-1">
              {category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
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
              <p className="text-sm text-gray-600 leading-relaxed">
                {info.description}
                {info.url && (
                  <>
                    {" "}
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 underline underline-offset-2"
                    >
                      [reference]
                    </a>
                  </>
                )}
              </p>

              {/* Website link */}
              <div className="mt-5">
                {info.website ? (
                  <a
                    href={info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
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
                    className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
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
            <p className="text-sm text-gray-400 italic">
              No additional information available for this project yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<{
    company: Company;
    category: string;
  } | null>(null);

  const totalCompanies = Object.values(categories).reduce(
    (acc, cat) => {
      cat.companies.forEach((c) => acc.add(c.name));
      return acc;
    },
    new Set<string>()
  ).size;

  const handleCompanyClick = (company: Company, category: string) => {
    setSelectedCompany({ company, category });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900">
          Agentic Commerce Market Map
        </h1>
        <span className="text-sm text-gray-500">
          Total: {totalCompanies} companies
        </span>
      </header>

      {/* Map */}
      <main className="max-w-[1400px] mx-auto px-4 py-6 space-y-4">
        {layout.map((row, i) => (
          <div
            key={i}
            className="grid gap-4"
            style={{
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
                />
              );
            })}
          </div>
        ))}
      </main>

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
