"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { asset } from "@/data/content";

const landingLinks = [
  { label: "Home", href: "/" },
  { label: "Workspaces", href: "/#spaces" },
  { label: "Services", href: "/#why-ceo-suite" },
  { label: "Promotion & Deals!", href: "/#promotions" },
  { label: "News", href: "/#news" },
  { label: "Careers", href: "/careers" },
  { label: "Help", href: "/help" },
  { label: "Privacy", href: "/privacy" },
];

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Booking", href: "/products/wisma-gkbi-boardroom" },
  { label: "Workspaces", href: "/#spaces" },
];

export function Footer({ product = false }: { product?: boolean }) {
  const [message, setMessage] = useState("");

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Newsletter subscription is unavailable in this demo.");
  }

  return (
    <footer className={`bg-[#f6f6f6] pb-12 pt-16 ${product ? "product-footer" : "landing-footer"}`}>
      <div className="container-page px-4 sm:px-8">
        <Link href="/" aria-label="CEO SUITE home" className="block w-fit">
          <Image
            src={asset("1-15587-imgVector1.png")}
            alt="CEO SUITE"
            width={132}
            height={32}
            className="block"
          />
        </Link>
        <nav
          aria-label="Footer navigation"
          className="footer-navigation mt-8 flex flex-wrap gap-x-8 gap-y-4 text-base leading-[19px] text-[#667085]"
        >
          {(product ? productLinks : landingLinks).map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom mt-16 border-t border-[#eaecf0] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            <form onSubmit={subscribe} className="flex max-w-full flex-wrap items-center gap-4">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="h-11 w-[280px] max-w-full rounded-lg border border-[#d0d5dd] bg-white px-3 text-base text-[#667085] shadow-sm"
              />
              <button
                type="submit"
                className="h-[43px] w-[133px] rounded-lg bg-brand text-base font-medium text-white"
              >
                Subscribe
              </button>
            </form>
            <p className="text-base leading-[19px] text-[#98a2b3]">
              © 1997-2024 CEO Suite. All rights reserved.
            </p>
          </div>
          {message && (
            <p role="status" className="mt-3 text-sm text-[#667085]">
              {message}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
