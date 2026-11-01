"use client";

import { useState } from "react";
import { useBookingFlow } from "@/components/BookingFlow";

export function BookingPanel() {
  const { date, startTime, endTime } = useBookingFlow();
  const [message, setMessage] = useState("");
  const ready = Boolean(date && startTime && endTime);
  return (
    <div className="booking-panel card-shadow rounded-xl bg-white px-8 py-12">
      <div className="booking-panel-summary">
        <span className="block text-base text-[#888]">
          {ready ? "Total" : "Select date to Book"}
        </span>
        {ready && (
          <strong className="mt-3 block text-[25px] font-bold text-brand">Rp2,400,000</strong>
        )}
      </div>
      <button
        type="button"
        disabled={!ready}
        onClick={() => setMessage("Online booking is unavailable in this assessment demo.")}
        className="mt-6 h-[43px] w-full rounded-lg bg-brand px-6 font-medium text-white disabled:cursor-not-allowed disabled:bg-[#e7e7e7] disabled:text-[#aaa]"
      >
        Book
      </button>
      {message && (
        <p role="status" className="mt-4 text-sm text-muted">
          {message}
        </p>
      )}
    </div>
  );
}
