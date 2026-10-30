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
      <div className="container-page flex min-h-28 items-center justify-between gap-6">
        <Link href="/" aria-label="CEO SUITE home" className="shrink-0">
          <Image src={asset("1-15587-imgVector.png")} alt="CEO SUITE" width={199} height={48} priority />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {product ? <><Link href="/" className="font-bold text-brand">Home</Link><Link href="/#spaces">Workspaces</Link></> : links.map(link => <Link key={link.label} href={link.href} className="text-sm font-medium hover:text-brand">{link.label}</Link>)}
        </nav>
        {product ? <span className="hidden text-sm text-muted xl:block">Jane Doe <span aria-hidden="true">⌄</span></span> : <div className="hidden items-center gap-3 xl:flex"><span className="text-sm text-brand">Sign In</span><span className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white">Sign Up</span></div>}
        <button type="button" className="rounded-lg border px-3 py-2 text-brand xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-page flex flex-col gap-4 border-t py-5 xl:hidden">{links.map(link => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
    </header>
  );
}
