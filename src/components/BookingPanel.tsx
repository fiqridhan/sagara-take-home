"use client";

import { useState } from "react";

export function BookingPanel() {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  return <div className="card-shadow rounded-xl bg-white p-7"><label className="block text-base font-medium text-[#5d5d5d]" htmlFor="booking-date">Select date to Book</label><input id="booking-date" type="date" min={new Date().toISOString().slice(0, 10)} value={date} onChange={event => { setDate(event.target.value); setMessage(""); }} className="booking-date-input mt-4 h-12 w-full rounded-lg border border-[#ddd] px-4" /><button type="button" disabled={!date} onClick={() => setMessage("Online booking is unavailable in this assessment demo.")} className="mt-5 w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#e7e7e7] disabled:text-[#aaa]">Book</button>{message && <p role="status" className="mt-4 text-sm text-muted">{message}</p>}</div>;
}
