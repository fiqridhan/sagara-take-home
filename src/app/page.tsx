import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSearch } from "@/components/HeroSearch";
import { SpaceCard } from "@/components/SpaceCard";
import { Faq } from "@/components/Faq";
import { asset, partnerOffers, promotions, spaces } from "@/data/content";

function Hero() {
  return <section className="hero-section container-page"><div className="hero-copy"><h1>Discover Your Perfect Workspace at CEO SUITE.</h1><p>Experience the ultimate in flexible, premium workspaces where luxury meets productivity—CEO SUITE offers an inspiring environment tailored to elevate your business success.</p></div><div className="hero-image"><Image src={asset("1-24278-imgImage10.png")} alt="Bright CEO SUITE workspace" fill priority sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover" /><div aria-hidden="true" className="hero-indicator"><span /><span /><span /><span /></div></div><HeroSearch /></section>;
}

const categories = [
  { title: "Private Offices", image: "1-24318-imgImage5.png", icon: "1-24318-imgIcomoonFreeOffice.svg" },
  { title: "Coworking Space", image: "1-24318-imgRectangle11.png", icon: "1-24318-imgPhLaptopFill.svg" },
  { title: "Meeting Room", image: "1-24318-imgRectangle12.png", icon: "1-24318-imgRiHomeOfficeFill.svg" },
];

function BrowseSpaces() {
  return <section id="spaces" className="browse-section"><div className="container-page"><h2 className="section-heading">Browse Spaces</h2><p className="section-copy">Find the perfect space for your next meeting or event.</p><div className="browse-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{categories.map(item => <Link href="/products/wisma-gkbi-boardroom" key={item.title} className="group"><div className="relative aspect-[1.03] overflow-hidden rounded-xl"><Image src={asset(item.image)} alt={item.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform group-hover:scale-105" /></div><div className="mt-6 flex items-center gap-3"><Image src={asset(item.icon)} alt="" width={24} height={24} /><h3 className="text-xl font-semibold">{item.title}</h3></div></Link>)}<Link href="/products/wisma-gkbi-boardroom" className="flex min-h-[413px] flex-col items-center justify-center rounded-xl bg-brand p-8 text-center text-white"><h3 className="text-3xl font-bold">All Space</h3><p className="mt-4 max-w-xs text-sm leading-6">Comfortable space, Full speed wifi, Free coffe &amp; Snack and many more</p><span className="mt-10 rounded-lg bg-[#f3a124] px-6 py-3 text-sm font-semibold">Check availability →</span></Link></div></div></section>;
}

function Recommendations() {
  return <section id="recommendations" className="recommendations-section bg-white"><div className="container-page"><h2 className="section-heading">Recommended For You</h2><p className="section-copy">Explore top-rated meeting rooms and workspaces.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[...spaces, ...spaces].map((space, index) => <SpaceCard key={index} space={space} />)}</div></div></section>;
}

function WhyCeoSuite() {
  const metrics = [
    { value: "11", label: "Vibrant Cities", icon: "1-24538-imgEarth1PlanetEarthGlobeWorld.svg", width: 45, height: 45 },
    { value: "22", label: "prime locations in Asia’s CBDs", icon: "1-24538-imgAiNavigationSparkMapLocationDirectionTravelArtificialIntelligenceAi.svg", width: 45, height: 45 },
    { value: "25", label: "years in business", icon: "1-24538-imgToolBoxBoxBriefcaseToolSettings.svg", width: 42, height: 41 },
    { value: "100%", label: "grade A+ Buildings", icon: "1-24538-imgFreeRemixMapTravelCityHallCityHallTravelPlaces.svg", width: 45, height: 45 },
    { value: "80,000+", label: "businesses served", icon: "1-24538-imgBusinessHandshakeDealContractBusinessMoneyPaymentAgreement.svg", width: 44, height: 33 },
  ];
  return <section id="why-ceo-suite" className="why-section"><div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20"><div className="grid grid-cols-2 content-center gap-x-5 gap-y-10">{metrics.map(metric => <div key={metric.value} className="flex items-start gap-5"><span className="flex h-12 w-12 shrink-0 items-center justify-center"><Image src={asset(metric.icon)} alt="" width={metric.width} height={metric.height} /></span><div><strong className="text-[clamp(25px,2.6vw,39px)] leading-[1.2] text-[#10375c]">{metric.value}</strong><p className="mt-2 text-[clamp(14px,1.3vw,20px)] leading-[1.2] text-[#9a9a9a]">{metric.label}</p></div></div>)}</div><div className="bg-brand p-9 text-white md:p-14"><p className="text-lg">Why CEO SUITE?</p><h2 className="mt-6 max-w-xl text-[clamp(30px,3vw,49px)] font-bold leading-[1.2]">We revolutionize your workspace</h2><p className="mt-7 leading-7 text-white/90">In today’s fast-paced business environment, finding the right workspace solution is crucial to your company’s success. CEO SUITE offers an unparalleled workplace experience that combines premium locations, flexibility, top-notch amenities, and exceptional service to meet the needs of modern businesses.</p><p className="mt-5 leading-7 text-white/90">As Asia’s leading serviced office provider, CEO SUITE stands out as the ideal partner for companies seeking more than just office space—a place where business can thrive.</p></div></div></section>;
}

function EditorialCards({ items, partner = false }: { items: typeof promotions; partner?: boolean }) {
  return <div className={`grid gap-4 md:grid-cols-3 ${partner ? "mt-16" : "mt-6"}`}>{items.map(item => <article key={item.title} className={partner ? "" : "overflow-hidden rounded-lg bg-white shadow-[0_2px_6px_rgba(57,57,57,.06)]"}><div className={`relative overflow-hidden rounded-lg ${partner ? "aspect-[523/300]" : "aspect-[523/232]"}`}><Image src={asset(item.image)} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div><div className={partner ? "mt-6" : "px-4 py-8"}><h3 className={`font-bold leading-[1.2] ${partner ? "text-[25px] text-[#262626]" : "text-[20px] text-[#434343]"}`}>{item.title}</h3><p className={`mt-2 text-[#888] ${partner ? "text-[20px] leading-[1.4]" : "text-base leading-[1.2]"}`}>{item.description}</p></div></article>)}</div>;
}

function Promotions() {
  return <section id="promotions" className="section-space"><div className="container-page"><div className="flex flex-wrap items-end justify-between gap-5"><div><div className="flex items-center gap-6"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f6]"><Image src={asset("1-24599-imgAnnoncementMegaphone.svg")} alt="" width={19} height={22} /></span><h2 className="section-heading">Promotions</h2></div><p className="section-copy">Don’t miss this opportunity to elevate your workspace experience at unbeatable value.</p></div><a href="#deals" className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-[#f9e7e7] text-base font-medium text-brand">See All</a></div><EditorialCards items={promotions} /></div></section>;
}

function Deals() {
  return <section id="deals" className="section-space"><div className="container-page"><h2 className="section-heading">Best Deals</h2><p className="section-copy">Take advantage of our special promotions and enjoy exceptional savings on your workspace.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{[0, 1, 2].map(index => <article key={index} className="relative aspect-[2.17] overflow-hidden rounded-xl"><Image src={asset("1-24694-imgUnsplashYWwob8KwOCk.png")} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand via-brand/90 to-transparent px-7 pb-5 pt-12 text-white"><h3 className="font-semibold">Rp200,000 Voucher for Office!</h3><p className="mt-1 text-xs">Valid until 31 August 2024</p></div></article>)}</div></div></section>;
}

function Packages() {
  const photos = ["1-24676-imgScreenshot20241127At1139362.png", "1-24676-imgCeoSuite11.png", "1-24676-imgCeoSuite91.png", "1-24676-imgCeoSuite61.png"];
  return <section id="packages" className="section-space"><div className="container-page grid items-center gap-12 lg:grid-cols-2"><div className="grid grid-cols-2 gap-4">{photos.map((photo, index) => <div key={photo} className={`relative aspect-[1.15] overflow-hidden rounded-xl ${index % 2 ? "translate-y-8" : ""}`}><Image src={asset(photo)} alt={`CEO SUITE meeting room ${index + 1}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>)}</div><div className="lg:pl-10"><h2 className="section-heading">Meeting Room Package</h2><p className="section-copy mt-6">Elevate your meetings with CEO SUITE&apos;s premium meeting rooms, now available at an exclusive special rate.</p><p className="section-copy">Whether you&apos;re hosting a team brainstorming session, client presentations, or strategic workshops, our fully-equipped meeting spaces offer the perfect blend of professionalism and comfort.</p><Link href="/products/wisma-gkbi-boardroom" className="mt-8 inline-flex rounded-lg bg-brand px-8 py-4 font-semibold text-white">Browse Packages →</Link></div></div></section>;
}

function Partners() {
  return <section className="section-space"><div className="container-page"><div className="flex flex-wrap items-end justify-between gap-5"><div><h2 className="section-heading">Our Corporate Partners</h2><p className="section-copy">Exclusive benefits and promotions tailored to meet the needs of businesses of all sizes.</p></div><span className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-[#f9e7e7] text-base font-medium text-brand">See All</span></div><EditorialCards items={partnerOffers} partner /></div></section>;
}

function Trusted() {
  const logos = ["1-24728-imgCompanyLogo.svg", "1-24728-imgG3460.svg", "1-24728-imgG3464.svg", "1-24728-imgSamsungLogo1.svg", "1-24728-imgLogoNike1.svg", "1-24728-imgG34.svg", "1-24728-imgGroup.svg", "1-24728-imgCiscoLogoBlue20161.svg", "1-24728-imgBpHeliosLogo1.svg"];
  return <section className="section-space bg-[#fcfcfd] text-center"><div className="container-page"><h2 className="text-3xl font-semibold">Trusted by <strong className="text-brand">80,000+</strong> customers</h2><div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50">{logos.map(logo => <Image key={logo} src={asset(logo)} alt="Customer logo" width={100} height={60} className="max-h-12 w-auto" />)}</div></div></section>;
}

function News() {
  const headlines = ["Does productivity increase when working remotely ?", "Morning routine to boost your mood", "5+ tips to find comfortable co-working space"];
  return <section id="news" className="section-space"><div className="container-page"><h2 className="section-heading">News, events and insights for you</h2><div className="mt-9 grid gap-10 lg:grid-cols-2"><div className="grid gap-7">{headlines.map(title => <article key={title} className="border-b pb-6"><p className="text-xs text-muted">Race98 - 03 June 2023</p><h3 className="mt-3 text-xl font-semibold">{title}</h3></article>)}</div><article className="flex min-h-[480px] flex-col justify-end rounded-xl bg-[#555] p-8 text-white"><span className="w-fit rounded border px-4 py-2 text-sm">TIPS</span><p className="mt-12 text-sm">Debits - 03 June 2023</p><h3 className="mt-3 text-4xl font-bold">Minimal workspace for inspirations</h3></article></div></div></section>;
}

function StoreBadge({ store }: { store: "app" | "play" }) {
  const app = store === "app";
  return <span className={`relative block h-[66px] rounded-[10px] bg-[#090909] ${app ? "w-[181px]" : "w-[177px]"}`} aria-label={app ? "App Store" : "Google Play"}><Image src={asset(app ? "1-24785-imgLogo.svg" : "1-24785-imgLogo1.svg")} alt="" width={app ? 29 : 30} height={app ? 36 : 34} className="absolute left-[17px] top-[15px]" /><Image src={asset(app ? "1-24785-imgTexto.svg" : "1-24785-imgTexto1.svg")} alt="" width={app ? 110 : 105} height={app ? 36 : 34} className="absolute left-[54px] top-4" /></span>;
}

function AppPromo() {
  return <section className="overflow-hidden bg-gradient-to-b from-[#fcf4f4] to-[#f9e7e7]"><div className="container-page grid min-h-[570px] items-center gap-8 py-14 lg:grid-cols-2"><div><h2 className="text-[clamp(30px,3vw,39px)] font-bold leading-[1.2] text-[#9f3636]">Download the CEO SUITE App Now!</h2><p className="mt-4 max-w-[858px] text-[clamp(18px,1.8vw,25px)] font-medium leading-[1.2] text-[#888]">Simplify your meeting planning with our app. Download now to enjoy seamless booking and more.</p><div className="mt-16 flex flex-wrap gap-[14px]"><StoreBadge store="app" /><StoreBadge store="play" /></div></div><div className="flex min-h-[480px] items-end justify-center gap-4"><div className="relative -mb-28 h-[460px] w-[210px] overflow-hidden rounded-[34px] border-[10px] border-[#222] bg-white shadow-2xl"><Image src={asset("1-24785-imgScreenChangeMe3.png")} alt="CEO SUITE app booking screen" fill sizes="210px" className="object-cover object-top" /></div><div className="relative -mb-40 h-[500px] w-[230px] overflow-hidden rounded-[36px] border-[10px] border-[#222] bg-white shadow-2xl"><Image src={asset("1-24785-imgScreenChangeMe1.png")} alt="CEO SUITE app room screen" fill sizes="230px" className="object-cover object-top" /></div></div></div></section>;
}

export default function HomePage() {
  return <><Header /><main><Hero /><BrowseSpaces /><Recommendations /><WhyCeoSuite /><Promotions /><Deals /><Packages /><Partners /><Trusted /><News /><Faq /><AppPromo /></main><Footer /></>;
}
