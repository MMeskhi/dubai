"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import NewsCard from "@/components/NewsCard";

type Filter = "all" | "dental" | "skincare";

const PAGE_SIZE = 8;

export default function MediaPageClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    filter === "all"
      ? articles
      : articles.filter((a) => a.category === filter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilter = (f: Filter) => {
    setFilter(f);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12 max-[768px]:mb-8">
        {(["all", "dental", "skincare"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => handleFilter(f)}
            className={`px-6 py-3 rounded-full text-base font-medium border transition-all ${
              filter === f
                ? "bg-sepia border-stroke text-ink"
                : "bg-white border-stroke text-ink hover:bg-sepia/60"
            }`}
          >
            {f === "all"
              ? "All Media"
              : f === "dental"
                ? "Dental"
                : "Skincare"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12 text-left max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
        {visible.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            className="btn-pill"
          >
            <span>Load More</span>
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5F413D"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
