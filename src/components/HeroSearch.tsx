"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/data/content";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

export function HeroSearch() {
  const [city, setCity] = useState("Jakarta");
  const [type, setType] = useState("All Space");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [dateOpen, setDateOpen] = useState(false);
  const [message, setMessage] = useState("");
  const dateLabel = start && end ? `${formatDate(start)} - ${formatDate(end)}` : "Mon, 17 August 2024 - Tue, 18 August 2024";

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" });
    setMessage("Browse recommended spaces below.");
  }

  return <form onSubmit={search} className="hero-search card-shadow relative z-10 flex w-full max-w-[698px] flex-col items-end gap-6 rounded-2xl bg-[#f9e7e7] p-8">
    <h2 className="w-full text-[27px] font-bold leading-[1.2] text-[#262626] md:text-[31px]">Find your space now</h2>
    <div className="flex w-full flex-col gap-4">
      <label className="flex flex-col gap-4 text-base font-normal leading-[1.2] text-[#434343] md:text-xl">Select City<span className="relative block"><Image src={asset("1-24278-imgMdiLocation.svg")} alt="" width={24} height={24} className="pointer-events-none absolute left-3 top-4 z-10" /><select value={city} onChange={event => setCity(event.target.value)} className="h-14 w-full appearance-none rounded-lg border border-[#e7e7e7] bg-white pl-[52px] pr-3 text-base text-[#4f4f4f]"><option>Jakarta</option></select></span></label>
      <div className="relative flex flex-col gap-4"><span className="text-base font-normal leading-[1.2] text-[#434343] md:text-xl">Select Date</span><button type="button" aria-expanded={dateOpen} onClick={() => setDateOpen(!dateOpen)} className="flex h-14 w-full items-center gap-4 rounded-lg border border-[#e7e7e7] bg-white px-3 text-left text-base font-medium text-[#4f4f4f]"><Image src={asset("1-24278-imgCalendarMonthStreamlineRoundedMaterialSymbolsSvg.svg")} alt="" width={24} height={24} /><span className="truncate">{dateLabel}</span></button>{dateOpen && <div className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-3 rounded-lg border bg-white p-4 shadow-lg sm:grid-cols-2"><label className="grid gap-1 text-sm">From<input type="date" value={start} onChange={event => setStart(event.target.value)} className="w-full rounded border p-2" /></label><label className="grid gap-1 text-sm">To<input type="date" min={start} value={end} onChange={event => setEnd(event.target.value)} className="w-full rounded border p-2" /></label></div>}</div>
      <label className="flex flex-col gap-4 text-base font-normal leading-[1.2] text-[#434343] md:text-xl">Space Type<span className="relative block"><Image src={asset("1-24278-imgFluentConferenceRoom24Regular.svg")} alt="" width={24} height={24} className="pointer-events-none absolute left-3 top-4 z-10" /><select value={type} onChange={event => setType(event.target.value)} className="h-14 w-full appearance-none rounded-lg border border-[#e7e7e7] bg-white pl-[52px] pr-12 text-base font-medium text-[#4f4f4f]"><option>All Space</option><option>Private Offices</option><option>Coworking Space</option><option>Meeting Room</option></select><Image src={asset("1-24278-imgIconMingcuteDownLine.svg")} alt="" width={24} height={24} className="pointer-events-none absolute right-3 top-4" /></span></label>
    </div>
    <button type="submit" className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-brand text-base font-medium text-white hover:bg-brand-dark">Search</button>
    {message && <p role="status" className="text-sm text-brand">{message}</p>}
  </form>;
}
