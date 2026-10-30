import Image from "next/image";
import Link from "next/link";
import { asset, type Space } from "@/data/content";

export function SpaceCard({ space }: { space: Space }) {
  const icon = space.type === "Office" ? "1-24374-imgIcomoonFreeOffice.svg" : space.type === "Meeting Room" ? "1-24374-imgRiHomeOfficeFill.svg" : "1-24374-imgPhLaptopFill.svg";
  const tagColor = space.type === "Office" ? "bg-[#e6f7ff] text-[#0050b3]" : space.type === "Meeting Room" ? "bg-[#fff0f6] text-[#9e1068]" : "bg-[#fcffe6] text-[#5b8c00]";
  return <Link href="/products/wisma-gkbi-boardroom" className="group flex flex-col gap-4 rounded-lg bg-white p-4 shadow-[0_4px_12.5px_rgba(57,57,57,.2)] transition-transform hover:-translate-y-1">
    <div className="relative h-[192px] overflow-hidden rounded"><Image src={asset(space.image)} alt={space.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
    <div className="flex flex-1 flex-col gap-4"><div className="flex items-start justify-between gap-2"><div><h3 className="text-[20px] font-bold leading-[1.2] text-[#3d3d3d] group-hover:text-brand">{space.name}</h3><span className={`mt-1 inline-flex items-center gap-2 rounded-full px-2 py-1 text-[13px] font-medium ${tagColor}`}><Image src={asset(icon)} alt="" width={14} height={14} />{space.type}</span></div><span className="flex shrink-0 items-center gap-1 text-base text-[#434343]"><Image src={asset("1-24374-imgGroupStreamlineRoundedMaterialSymbolsSvg.svg")} alt="" width={16} height={16} />{space.people}</span></div>
      <div className="mt-auto text-[13px]"><span className="font-bold text-brand">Daily</span><p className="mt-1 text-[20px] font-bold text-brand">{space.daily}</p><p className="mt-2 text-[#888]">Hourly <span className="font-medium text-[#434343]">{space.hourly}</span></p></div>
    </div>
  </Link>;
}
