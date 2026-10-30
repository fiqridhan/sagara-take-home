import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { BookingPanel } from "@/components/BookingPanel";
import { SpaceCard } from "@/components/SpaceCard";
import { addOns, asset, spaces } from "@/data/content";

export const metadata: Metadata = { title: "Wisma GKBI Boardroom | CEO SUITE", description: "Meeting room with South Jakarta view at Wisma GKBI." };

function DateStrip() {
  return <div className="bg-brand py-8 text-white"><div className="container-page"><h2 className="text-xl font-bold">Select Date</h2><a href="#booking" className="mt-4 flex h-14 max-w-[784px] items-center rounded-lg bg-white px-5 text-sm text-muted">Select Date</a></div></div>;
}

function ProductSummary() {
  return <div className="grid gap-10 lg:grid-cols-[1fr_370px]"><div><div className="flex flex-wrap items-start justify-between gap-4"><div><h1 className="text-3xl font-bold md:text-4xl">Wisma GKBI Boardroom</h1><span className="mt-4 inline-block rounded-full bg-[#fff0f6] px-3 py-1 text-xs font-medium text-[#9e1068]">Meeting Room</span></div><p className="font-semibold text-[#c17820]">★ 4.8/5</p></div><p className="mt-7 text-sm text-muted">⌖ &nbsp; Wisma GKBI, Jakarta</p><h2 className="mt-10 text-xl font-bold">Price</h2><div className="mt-4 rounded-xl border border-[#e5e5e5] p-6"><div className="flex flex-wrap items-center justify-between gap-3"><span className="text-sm text-muted">Daily</span><strong className="text-2xl text-brand">Rp2,400,000</strong><span className="rounded-full bg-[#d9f8e7] px-3 py-1 text-xs text-[#147541]">Best Deal</span></div><div className="mt-5 grid gap-3 border-t pt-5 text-sm text-muted sm:grid-cols-3"><p>Hourly <strong className="block text-brand">Rp400,000</strong></p><p>Weekly <strong className="block text-brand">Rp13,350,000</strong></p><p>Monthly <strong className="block text-brand">Rp44,500,000</strong></p></div></div><h2 className="mt-10 text-xl font-bold">Details</h2><p className="mt-4 text-sm leading-7 text-muted">Meeting room with South Jakarta view, with fully amneties and fullboard facilities.</p><AddOns /></div><div id="booking"><BookingPanel /></div></div>;
}

function AddOns() {
  return <section className="mt-10"><h2 className="text-xl font-bold">Add Ons</h2><p className="mt-4 text-sm leading-7 text-muted">Enhance your booking experience with a variety of add-ons, including catering, equipment rentals, and personalized services.</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{addOns.map((item, index) => <div key={`${item.name}-${index}`} className="min-h-32 rounded-lg border border-[#ececec] p-4"><span aria-hidden="true" className="text-xl text-brand">◇</span><h3 className="mt-3 text-xs font-medium text-muted">{item.name}</h3><p className="mt-1 text-sm font-bold">{item.price}<span className="font-normal text-muted">{item.unit}</span></p></div>)}</div></section>;
}

function Location() {
  return <section className="mt-14 border-t pt-10"><h2 className="text-xl font-bold">Location</h2><div className="relative mt-6 aspect-[2.2] overflow-hidden rounded-xl"><Image src={asset("1-15587-imgScreenshot20240822At1311151.png")} alt="Map showing Wisma GKBI in Jakarta" fill sizes="(max-width: 1024px) 100vw, 80vw" className="object-cover" /></div><h3 className="mt-6 font-semibold">Wisma GKBI, Jakarta</h3><p className="mt-2 text-sm text-muted">Jl. Jend. Sudirman No.28, RT.14/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210</p></section>;
}

function SimilarSpaces() {
  return <section className="section-space bg-[#fcfcfd]"><div className="container-page"><h2 className="section-heading">Similar Spaces</h2><p className="section-copy">Check out these spaces with similar features to the ones you&apos;ve been looking at.</p><div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{spaces.map((space, index) => <SpaceCard key={index} space={space} />)}</div></div></section>;
}

export default function ProductPage() {
  return <><Header product /><main className="bg-[#fcfcfd]"><DateStrip /><div className="container-page py-12"><ProductGallery /><div className="mt-12"><ProductSummary /></div><Location /></div><SimilarSpaces /></main><Footer /></>;
}
