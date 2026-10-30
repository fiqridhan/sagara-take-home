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

export function Header({ product = false }: { product?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 bg-white shadow-[0_2px_3px_rgba(57,57,57,.06)]">
      <div className="container-page flex h-[112px] items-center justify-between gap-6">
        <Link href="/" aria-label="CEO SUITE home" className="shrink-0">
          <Image src={asset("1-15587-imgVector.png")} alt="CEO SUITE" width={199} height={48} priority />
        </Link>
        {product ? <nav aria-label="Main navigation" className="hidden items-center gap-14 text-base font-medium min-[900px]:flex"><Link href="/" className="font-bold text-brand">Home</Link><span className="text-[#5d5d5d]">My Booking</span><span className="flex items-center gap-3 text-[#5d5d5d]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a15293] text-white">JD</span>Jane Doe<Image src={asset("1-15587-imgIconMingcuteDownLine.svg")} alt="" width={24} height={24} /></span></nav> : <nav aria-label="Main navigation" className="hidden items-center gap-14 text-xl font-medium min-[1440px]:flex">{links.map(link => <Link key={link.label} href={link.href} className="whitespace-nowrap text-[#5d5d5d] hover:text-brand">{link.label}</Link>)}<div className="flex shrink-0 items-center gap-3 text-base"><span className="flex h-12 w-[133px] items-center justify-center text-brand">Sign In</span><span className="flex h-12 w-[133px] items-center justify-center rounded-lg bg-brand text-white">Sign Up</span></div></nav>}
        <button type="button" className={`rounded-lg border px-3 py-2 text-brand ${product ? "min-[900px]:hidden" : "min-[1440px]:hidden"}`} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-page flex flex-col gap-4 border-t py-5">{links.map(link => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
    </header>
  );
}
