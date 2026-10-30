import Image from "next/image";
import Link from "next/link";
import { asset, type Space } from "@/data/content";

export function SpaceCard({ space }: { space: Space }) {
  return <Link href="/products/wisma-gkbi-boardroom" className="card-shadow group overflow-hidden rounded-xl bg-white transition-transform hover:-translate-y-1">
    <div className="relative aspect-[1.62]"><Image src={asset(space.image)} alt={space.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
    <div className="p-5"><h3 className="text-base font-bold group-hover:text-brand">{space.name}</h3><div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted"><span className="rounded-full bg-[#fff0f6] px-2 py-1 text-[#9e1068]">{space.type}</span><span>{space.people}</span></div>
      <div className="mt-5 border-t pt-4 text-xs text-muted"><span>Daily</span><p className="mt-1 font-bold text-brand">{space.daily}</p><span className="mt-2 block">Hourly</span><p className="mt-1 font-bold text-brand">{space.hourly}</p></div>
    </div>
  </Link>;
}
