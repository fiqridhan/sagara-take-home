import Image from "next/image";
import Link from "next/link";
import { asset } from "@/data/content";

export function Footer() {
  return <footer className="bg-[#f6f6f6] py-14"><div className="container-page">
    <Link href="/" aria-label="CEO SUITE home"><Image src={asset("1-15587-imgVector.png")} alt="CEO SUITE" width={150} height={37} /></Link>
    <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-7 text-sm text-[#555]">
      <Link href="/">Home</Link><Link href="/products/wisma-gkbi-boardroom">Booking</Link><Link href="/#spaces">Workspaces</Link><Link href="/#promotions">Promotions & Deals!</Link><Link href="/#news">News</Link>
    </nav>
    <div className="mt-12 flex flex-wrap items-end justify-between gap-6 text-xs text-[#999]"><p>© 1997–2024 CEO Suite. All rights reserved.</p></div>
  </div></footer>;
}
