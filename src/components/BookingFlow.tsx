"use client";

import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";
import { asset } from "@/data/content";

type BookingState = {
  date: Date | null;
  startTime: string;
  endTime: string;
};

const BookingContext = createContext<BookingState | null>(null);

export function useBookingFlow() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("Booking flow provider is missing");
  return context;
}

const timeSlots = Array.from({ length: 19 }, (_, index) => {
  const hour = 9 + Math.floor(index / 2);
  return `${String(hour).padStart(2, "0")}:${index % 2 ? "30" : "00"}`;
});

function CalendarMonth({
  month,
  selected,
  onSelect,
}: {
  month: Date;
  selected: Date | null;
  onSelect: (date: Date) => void;
}) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstWeekday = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  return (
    <div className="booking-calendar-month">
      <div className="booking-calendar-grid">
        {["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <span key={day}>{day}</span>
        ))}
        {Array.from({ length: 42 }, (_, index) => {
          const value = new Date(year, monthIndex, index - firstWeekday + 1);
          const active = selected?.toDateString() === value.toDateString();
          const outside = value.getMonth() !== monthIndex;
          return (
            <button
              key={value.toISOString()}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(value)}
              className={`${active ? "selected" : ""} ${outside ? "outside" : ""}`}
            >
              {value.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function BookingFlowProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<Date | null>(null);
  const [draftDate, setDraftDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState(1);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dateOpen, setDateOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [month, setMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1);
  const monthLabel = (value: Date) =>
    new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" }).format(value);

  function selectDate(value: Date) {
    setDate(value);
    setStartTime("");
    setEndTime("");
    setDateOpen(false);
    setTimeOpen(false);
  }

  function openCalendar() {
    if (!dateOpen) {
      setDraftDate(date);
      if (date) setMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    }
    setDateOpen(!dateOpen);
    setTimeOpen(false);
  }

  function selectTime(value: string) {
    if (!startTime || endTime || value <= startTime) {
      setStartTime(value);
      setEndTime("");
      return;
    }
    setEndTime(value);
    setTimeOpen(false);
  }

  return (
    <BookingContext.Provider value={{ date, startTime, endTime }}>
      <div className="product-date-strip bg-brand py-8 text-white">
        <div className="container-page product-date-fields">
          <div className="relative">
            <h2>Select Date</h2>
            <button
              type="button"
              className="product-date-control"
              onClick={openCalendar}
              aria-expanded={dateOpen}
              aria-label="Select date"
            >
              <Image
                src={asset("1-15587-imgCalendarMonthStreamlineRoundedMaterialSymbolsSvg.svg")}
                alt=""
                width={24}
                height={24}
              />
              {date
                ? new Intl.DateTimeFormat("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(date)
                : "Select Date"}
            </button>
            {dateOpen && (
              <div className="booking-calendar-popover">
                <div className="booking-calendar-toolbar">
                  <div>
                    <span className="booking-calendar-nav">
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear() - 1, month.getMonth(), 1))
                        }
                        aria-label="Previous year"
                      >
                        «
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
                        }
                        aria-label="Previous month"
                      >
                        ‹
                      </button>
                    </span>
                    <strong>{monthLabel(month)}</strong>
                    <span className="booking-calendar-nav muted">
                      <button
                        type="button"
                        onClick={() => setMonth(nextMonth)}
                        aria-label="Next month"
                      >
                        ›
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear() + 1, month.getMonth(), 1))
                        }
                        aria-label="Next year"
                      >
                        »
                      </button>
                    </span>
                  </div>
                  <div>
                    <span className="booking-calendar-nav muted">
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear() - 1, month.getMonth(), 1))
                        }
                        aria-label="Previous year"
                      >
                        «
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
                        }
                        aria-label="Previous month"
                      >
                        ‹
                      </button>
                    </span>
                    <strong>{monthLabel(nextMonth)}</strong>
                    <span className="booking-calendar-nav">
                      <button
                        type="button"
                        onClick={() => setMonth(nextMonth)}
                        aria-label="Next month"
                      >
                        ›
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setMonth(new Date(month.getFullYear() + 1, month.getMonth(), 1))
                        }
                        aria-label="Next year"
                      >
                        »
                      </button>
                    </span>
                  </div>
                </div>
                <div className="booking-calendar-months">
                  <CalendarMonth month={month} selected={draftDate} onSelect={setDraftDate} />
                  <CalendarMonth month={nextMonth} selected={draftDate} onSelect={setDraftDate} />
                </div>
                <div className="booking-calendar-shortcuts">
                  <div>
                    {[1, 7, 14, 30].map((days) => (
                      <button
                        type="button"
                        key={days}
                        className={duration === days ? "selected" : ""}
                        onClick={() => setDuration(days)}
                      >
                        {days} Day{days > 1 ? "s" : ""}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="booking-calendar-confirm"
                    onClick={() => selectDate(draftDate ?? new Date())}
                  >
                    Select Date
                  </button>
                </div>
              </div>
            )}
          </div>
          {date && (
            <div className="relative">
              <h2>Select Time</h2>
              <button
                type="button"
                className="product-date-control"
                onClick={() => {
                  setTimeOpen(!timeOpen);
                  setDateOpen(false);
                }}
                aria-expanded={timeOpen}
                aria-label="Select time"
              >
                <svg
                  className="booking-clock"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9.75" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M12 5.5V12l4.5 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {startTime && endTime
                  ? `${startTime.replace(":", ".")} - ${endTime.replace(":", ".")}`
                  : startTime
                    ? `${startTime} - Select end time`
                    : "Select Time"}
              </button>
              {timeOpen && (
                <div className="booking-time-popover">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => selectTime(slot)}
                      className={slot === startTime || slot === endTime ? "selected" : ""}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {children}
    </BookingContext.Provider>
  );
}
