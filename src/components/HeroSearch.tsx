"use client";

import { useState } from "react";

export function HeroSearch() {
  const [city, setCity] = useState("Jakarta");
  const [type, setType] = useState("All Space");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" });
    setMessage("Browse recommended spaces below.");
  }

  return <form onSubmit={search} className="card-shadow relative z-10 w-full max-w-[698px] rounded-xl bg-blush p-8 md:p-9">
    <h2 className="text-2xl font-bold md:text-3xl">Find your space now</h2>
    <div className="mt-6 grid gap-4">
      <label className="grid gap-2 text-sm font-semibold">Select City<select value={city} onChange={event => setCity(event.target.value)} className="h-14 rounded-lg border border-[#e6dada] bg-white px-4 font-normal"><option>Jakarta</option></select></label>
      <label className="grid gap-2 text-sm font-semibold">Select Date<input type="date" value={date} onChange={event => setDate(event.target.value)} className="h-14 rounded-lg border border-[#e6dada] bg-white px-4 font-normal" /></label>
      <label className="grid gap-2 text-sm font-semibold">Space Type<select value={type} onChange={event => setType(event.target.value)} className="h-14 rounded-lg border border-[#e6dada] bg-white px-4 font-normal"><option>All Space</option><option>Private Offices</option><option>Coworking Space</option><option>Meeting Room</option></select></label>
    </div>
    <div className="mt-6 flex justify-end"><button type="submit" className="rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark">Search</button></div>
    {message && <p role="status" className="mt-4 text-sm text-brand">{message}</p>}
  </form>;
}
