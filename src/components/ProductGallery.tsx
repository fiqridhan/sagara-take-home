"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset, productPhotos } from "@/data/content";

export function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <><div className="grid gap-6 md:grid-cols-[2fr_1fr]"><button type="button" className="relative aspect-[1.5] overflow-hidden rounded-xl md:aspect-auto" onClick={() => setOpen(true)} aria-label="Open photo gallery"><Image src={asset(productPhotos[selected])} alt={`Wisma GKBI Boardroom photo ${selected + 1}`} fill priority sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" /></button><div className="grid grid-cols-2 gap-4">{productPhotos.slice(1).map((photo, index) => <button type="button" key={photo} onClick={() => { setSelected(index + 1); if (index === 3) setOpen(true); }} className="relative aspect-[1.15] overflow-hidden rounded-xl focus-visible:z-10 md:aspect-auto md:h-[241px]" aria-label={`Show photo ${index + 2}`}><Image src={asset(photo)} alt="" fill sizes="(max-width: 768px) 50vw, 16vw" className="object-cover" />{index === 3 && <span className="absolute bottom-4 right-4 rounded bg-white px-3 py-2 text-xs font-semibold">Show All Photos</span>}</button>)}</div></div>
    {open && <div role="dialog" aria-modal="true" aria-label="Wisma GKBI Boardroom photos" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"><button type="button" autoFocus onClick={() => setOpen(false)} className="absolute right-6 top-6 rounded-lg bg-white px-5 py-3 font-semibold">Close</button><div className="relative h-[70vh] w-full max-w-5xl"><Image src={asset(productPhotos[selected])} alt={`Wisma GKBI Boardroom photo ${selected + 1}`} fill sizes="100vw" className="object-contain" /></div><div className="mt-5 flex flex-wrap justify-center gap-2">{productPhotos.map((_, index) => <button type="button" key={index} onClick={() => setSelected(index)} aria-label={`Show photo ${index + 1}`} aria-pressed={selected === index} className={`h-3 w-3 rounded-full ${selected === index ? "bg-white" : "bg-white/40"}`} />)}</div></div>}
  </>;
}
