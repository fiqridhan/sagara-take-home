import Image from "next/image";
import Link from "next/link";
import { asset, type Space } from "@/data/content";

export function SpaceCard({ space, compact = false }: { space: Space; compact?: boolean }) {
  const icon =
    space.type === "Office"
      ? "1-24374-imgIcomoonFreeOffice.svg"
      : space.type === "Meeting Room"
        ? "1-24374-imgRiHomeOfficeFill.svg"
        : "1-24374-imgPhLaptopFill.svg";
  const tagColor =
    space.type === "Office"
      ? "bg-[#e6f7ff] text-[#0050b3]"
      : space.type === "Meeting Room"
        ? "bg-[#fff0f6] text-[#9e1068]"
        : "bg-[#fcffe6] text-[#5b8c00]";
  return (
    <Link
      href="/products/wisma-gkbi-boardroom"
      className={`space-card group flex flex-col gap-4 rounded-lg bg-white p-4 shadow-[0_4px_12.5px_rgba(57,57,57,.2)] transition-transform hover:-translate-y-1 ${compact ? "" : "min-h-[388px]"}`}
    >
      <div
        className={`space-card-image ${!compact && space.type !== "Meeting Room" ? "space-card-image-tall" : ""} relative overflow-hidden rounded ${compact ? "h-[202px]" : space.type === "Meeting Room" ? "h-[192px]" : "h-[204px]"}`}
      >
        <Image
          src={asset(space.image)}
          alt={space.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="space-card-content flex flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              className={`space-card-title ${compact ? "text-[13px] font-medium leading-4" : "text-[20px] font-medium leading-[1.2]"} text-[#3d3d3d] group-hover:text-brand`}
            >
              {space.name}
            </h3>
            <span
              className={`space-card-type mt-1 inline-flex items-center gap-2 rounded-full px-2 py-1 text-[13px] font-medium ${tagColor}`}
            >
              <Image src={asset(icon)} alt="" width={14} height={14} />
              {space.type === "Co-Working Space" ? "Co-Working Space (Dedicated)" : space.type}
            </span>
          </div>
          <span
            className={`space-card-people shrink-0 text-[#434343] ${compact ? "text-[10px] leading-3" : "self-center text-base"}`}
          >
            {space.people}
          </span>
        </div>
        <div className="space-card-pricing mt-auto">
          <span
            className={`space-card-period text-brand ${compact ? "block text-[10px] leading-3" : "text-[13px]"}`}
          >
            {space.primaryPeriod}
          </span>
          {space.previousPrice && (
            <span className="space-card-previous block text-[10px] leading-3 text-[#aaa] line-through">
              {space.previousPrice}
            </span>
          )}
          <p
            className={`space-card-price text-brand ${compact ? "mt-1 text-[13px] leading-4" : "mt-1 text-[20px]"}`}
          >
            {space.primaryPrice}
          </p>
          <p
            className={`space-card-secondary mt-2 text-[#888] ${compact ? "text-[10px] leading-3" : "text-[13px]"}`}
          >
            {space.secondaryPeriod}{" "}
            <span className="font-medium text-[#434343]">{space.secondaryPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
