"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { asset } from "@/data/content";

const links = [
  { label: "Workspaces", href: "/#spaces" },
  { label: "Services", href: "/#why-ceo-suite" },
  { label: "Package", href: "/#packages" },
  { label: "Promotions & Deals!", href: "/#promotions" },
  { label: "News", href: "/#news" },
];

export function Header({
  product = false,
  loggedIn = false,
  onLogin,
}: {
  product?: boolean;
  loggedIn?: boolean;
  onLogin?: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`relative z-30 bg-white shadow-[0_2px_6px_rgba(57,57,57,.06)] ${product ? "product-header" : ""}`}
    >
      <div
        className={`container-page flex h-20 items-center justify-between gap-6 md:h-24 min-[1440px]:h-[112px] ${product ? "" : "landing-header-inner"}`}
      >
        <Link
          href="/"
          aria-label="CEO SUITE home"
          className={`flex h-12 w-[199px] shrink-0 items-center ${product ? "" : "landing-header-logo"}`}
        >
          <Image
            src={asset("1-15587-imgVector.png")}
            alt="CEO SUITE"
            width={199}
            height={48}
            priority
            className="block h-auto w-full"
          />
        </Link>
        {product ? (
          <nav
            aria-label="Main navigation"
            className="product-header-nav hidden items-center gap-14 text-base font-medium leading-[1.2] min-[900px]:flex"
          >
            <Link href="/" className="font-bold text-brand">
              Home
            </Link>
            <span className="text-[#5d5d5d]">My Booking</span>
            <span className="flex items-center gap-3 text-[#5d5d5d]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a15293] text-white">
                JD
              </span>
              Jane Doe
              <Image
                src={asset("1-15587-imgIconMingcuteDownLine.svg")}
                alt=""
                width={24}
                height={24}
              />
            </span>
          </nav>
        ) : (
          <nav
            aria-label="Main navigation"
            className={`landing-header-nav hidden h-12 shrink-0 items-center text-[20px] font-medium leading-6 min-[1440px]:grid ${loggedIn ? "landing-header-logged-in w-[987px] grid-cols-[121px_83px_84px_194px_54px_171px] gap-x-14" : "w-[1094px] grid-cols-[121px_83px_84px_194px_54px_278px] gap-x-14"}`}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[#5d5d5d] hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            {loggedIn ? (
              <button
                type="button"
                className="landing-user-menu flex items-center gap-3 text-[#5d5d5d]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a15293] text-base text-white">
                  JD
                </span>
                Jane Doe
                <Image
                  src={asset("1-15587-imgIconMingcuteDownLine.svg")}
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            ) : (
              <div className="landing-header-actions flex h-12 items-center gap-3">
                <button
                  type="button"
                  onClick={onLogin}
                  className="landing-header-action flex h-12 w-[133px] items-center justify-center text-brand"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={onLogin}
                  className="landing-header-action flex h-12 w-[133px] items-center justify-center rounded-lg bg-brand text-white"
                >
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        )}
        <button
          type="button"
          className={`rounded-lg border px-3 py-2 text-brand ${product ? "min-[900px]:hidden" : "min-[1440px]:hidden"}`}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container-page flex flex-col gap-4 border-t py-5"
        >
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
