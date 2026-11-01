"use client";

import Image from "next/image";
import { useState } from "react";
import { SpaceCard } from "@/components/SpaceCard";
import { asset, spaces } from "@/data/content";

const filters = ["All Space", "Meeting Room", "Office", "Co-Working Space"];

export function RecommendedSpaces() {
  const [filter, setFilter] = useState("All Space");
  const [open, setOpen] = useState(false);
  const visibleSpaces =
    filter === "All Space"
      ? [...spaces, ...spaces]
      : spaces.filter((space) => space.type === filter);

  return (
    <section id="recommendations" className="recommendations-section bg-white">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-heading">Recommended For You</h2>
            <p className="section-copy">Explore top-rated meeting rooms and workspaces.</p>
          </div>
          <div className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="space-filters"
              onClick={() => setOpen(!open)}
              className="recommendations-filter flex h-12 w-[131px] items-center gap-3 rounded-full border border-[#e7e7e7] bg-white px-6 text-base font-medium text-[#434343]"
            >
              <Image src={asset("recommendations-filter.png")} alt="" width={21} height={24} />
              Filter
            </button>
            {open && (
              <div
                id="space-filters"
                className="absolute right-0 top-full z-20 mt-2 w-48 rounded-lg border border-[#e7e7e7] bg-white p-2 shadow-lg"
              >
                {filters.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={filter === option}
                    onClick={() => {
                      setFilter(option);
                      setOpen(false);
                    }}
                    className="block w-full rounded px-3 py-2 text-left text-sm text-[#434343] hover:bg-[#f9e7e7] aria-pressed:bg-[#f9e7e7]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="recommendations-grid mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {visibleSpaces.map((space, index) => (
            <SpaceCard key={`${space.name}-${index}`} space={space} />
          ))}
        </div>
      </div>
    </section>
  );
}
