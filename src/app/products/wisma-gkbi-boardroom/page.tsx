import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { BookingPanel } from "@/components/BookingPanel";
import { BookingFlowProvider } from "@/components/BookingFlow";
import { SpaceCard } from "@/components/SpaceCard";
import { addOns, asset, spaces } from "@/data/content";

export const metadata: Metadata = {
  title: "Wisma GKBI Boardroom | CEO SUITE",
  description: "Meeting room with South Jakarta view at Wisma GKBI.",
};

function ProductSummary() {
  const capacities = [
    { icon: "figcraft-capacity-people.png", label: "20 people" },
    { icon: "figcraft-capacity-chairs.png", label: "20 chairs" },
    { icon: "figcraft-capacity-desks.png", label: "20 desks" },
  ];
  const secondaryPrices = [
    { period: "Hourly", amount: "Rp400,000" },
    { period: "Weekly", amount: "Rp13,350,000" },
    { period: "Monthly", amount: "Rp44,500,000" },
  ];
  return (
    <div className="product-summary grid gap-10 lg:grid-cols-[minmax(0,1011fr)_minmax(0,525fr)] lg:gap-16">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-[31px] font-bold leading-[1.2]">Wisma GKBI Boardroom</h1>
            <span className="mt-4 inline-block rounded-full bg-[#fff0f6] px-3 py-1 text-xs font-medium text-[#9e1068]">
              Meeting Room
            </span>
          </div>
          <p className="flex items-center gap-[2px] font-semibold text-[#c17820]">
            <Image
              src={asset("1-15587-imgMaterialSymbolsLightStar.svg")}
              alt=""
              width={32}
              height={32}
            />
            4.8/5
          </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-3 text-base font-medium text-[#5d5d5d]">
            <Image
              src={asset("1-15587-imgCarbonLocationFilled.svg")}
              alt=""
              width={24}
              height={24}
            />
            Wisma GKBI, Jakarta
          </p>
          <div className="flex h-12 w-[210px] items-center justify-center gap-3 rounded-full border border-[#f0f0f0]">
            {capacities.map((item) => (
              <span key={item.label} className="flex items-center gap-1 text-[13px] text-[#888]">
                <Image src={asset(item.icon)} alt={item.label} width={24} height={24} />
                20
              </span>
            ))}
          </div>
        </div>
        <h2 className="mt-10 text-[25px] font-bold">Price</h2>
        <div className="product-price mt-4 min-h-[176px] rounded-xl border border-[#f9e7e7] bg-[linear-gradient(70deg,#f8eeee,#fff)] px-6 py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base text-[#888]">Daily</span>
            <strong className="text-[20px] text-brand">Rp2,400,000</strong>
            <span className="ml-auto flex h-8 items-center rounded-full bg-[#d1fadf] px-4 text-[13px] font-bold text-[#027a48]">
              Best Deal
            </span>
          </div>
          <div className="mt-3 border-t border-[#e5e5e5] pt-2">
            {secondaryPrices.map((item) => (
              <p key={item.period} className="flex gap-3 text-[13px] leading-5">
                <span className="w-12 text-[#888]">{item.period}</span>
                <strong className="text-brand">{item.amount}</strong>
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-[#e7e7e7] pt-10">
          <h2 className="text-[25px] font-bold">Details</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Meeting room with South Jakarta view, with fully amneties and fullboard facilities.
          </p>
        </div>
        <AddOns />
      </div>
      <div id="booking">
        <BookingPanel />
      </div>
    </div>
  );
}

function AddOns() {
  const icons = [
    "figcraft-corkage.png",
    "1-15587-imgIcTwotoneFastfood.svg",
    "1-15587-imgIcTwotoneFastfood.svg",
    "figcraft-coffee.png",
    "figcraft-coffee.png",
    "figcraft-flip-chart.png",
    "figcraft-projector.png",
    "figcraft-projector.png",
  ];
  return (
    <section className="product-addons mt-6 border-t border-[#e7e7e7] pt-10">
      <h2 className="text-[25px] font-bold">Add Ons</h2>
      <p className="mt-4 text-base leading-[1.2] text-[#888]">
        Enhance your booking experience with a variety of add-ons, including catering, equipment
        rentals, and personalized services.
      </p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {addOns.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="min-h-[145px] rounded-lg border border-[#e7e7e7] p-6"
          >
            <Image src={asset(icons[index])} alt="" width={32} height={32} />
            <h3 className="mt-3 text-[13px] font-medium text-[#6d6d6d]">{item.name}</h3>
            <p className="mt-1 text-base font-bold leading-[1.2]">
              {item.price}
              <span className="block text-[10px] font-normal text-muted">{item.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="product-location mt-14 border-t pt-10">
      <h2 className="text-xl font-bold">Location</h2>
      <div className="relative mt-6 aspect-[2.2] overflow-hidden rounded-xl lg:aspect-[1600/432]">
        <Image
          src={asset("1-15587-imgScreenshot20240822At1311151.png")}
          alt="Map showing Wisma GKBI in Jakarta"
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-6 font-semibold">Wisma GKBI, Jakarta</h3>
      <p className="mt-2 text-sm text-muted">
        Jl. Jend. Sudirman No.28, RT.14/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta
        Pusat, Daerah Khusus Ibukota Jakarta 10210
      </p>
    </section>
  );
}

function SimilarSpaces() {
  return (
    <section className="product-similar bg-[#fcfcfd] py-20">
      <div className="container-page">
        <h2 className="section-heading">Similar Spaces</h2>
        <p className="section-copy !mt-2">
          Check out these spaces with similar features to the ones you&apos;ve been looking at.
        </p>
        <div className="product-similar-grid mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {spaces.map((space, index) => (
            <SpaceCard key={index} space={space} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <Header product />
      <main className="product-page">
        <BookingFlowProvider>
          <section className="product-gallery-section bg-[#fcfcfd] py-12">
            <div className="container-page">
              <ProductGallery />
            </div>
          </section>
          <section className="product-content-section bg-white py-[72px]">
            <div className="container-page">
              <ProductSummary />
              <Location />
            </div>
          </section>
          <SimilarSpaces />
        </BookingFlowProvider>
      </main>
      <Footer product />
    </>
  );
}
