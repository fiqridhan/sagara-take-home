"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSearch } from "@/components/HeroSearch";
import { RecommendedSpaces } from "@/components/RecommendedSpaces";
import { Faq } from "@/components/Faq";
import { asset, partnerOffers, promotions } from "@/data/content";

function Hero({ loggedIn }: { loggedIn: boolean }) {
  return (
    <section className={`hero-section container-page ${loggedIn ? "hero-logged-in" : ""}`}>
      <div className="hero-copy">
        {loggedIn ? (
          <>
            <h1>Elevate Your Workspace with Premium Work Places.</h1>
            <p>Discover the next generation of workspaces with our cutting-edge work places.</p>
          </>
        ) : (
          <>
            <h1>
              Discover Your Perfect{" "}
              <span className="min-[1280px]:block">Workspace at CEO SUITE.</span>
            </h1>
            <p>
              Experience the ultimate in flexible, premium workspaces where luxury meets
              productivity—CEO SUITE offers an inspiring environment tailored to elevate your
              business success.
            </p>
          </>
        )}
      </div>
      <div className="hero-image">
        <Image
          src={asset(loggedIn ? "1-24694-imgUnsplashYWwob8KwOCk.png" : "1-24278-imgImage10.png")}
          alt="Bright CEO SUITE workspace"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="hero-indicator">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <HeroSearch loggedIn={loggedIn} />
    </section>
  );
}

const categories = [
  {
    title: "Private Offices",
    image: "1-24318-imgImage5.png",
    icon: "1-24318-imgIcomoonFreeOffice.svg",
  },
  {
    title: "Coworking Space",
    image: "1-24318-imgRectangle11.png",
    icon: "1-24318-imgPhLaptopFill.svg",
  },
  {
    title: "Meeting Room",
    image: "1-24318-imgRectangle12.png",
    icon: "1-24318-imgRiHomeOfficeFill.svg",
  },
];

function BrowseSpaces() {
  return (
    <section id="spaces" className="browse-section">
      <div className="container-page">
        <h2 className="section-heading">Browse Spaces</h2>
        <p className="section-copy">Find the perfect space for your next meeting or event.</p>
        <div className="browse-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Link
              href="/products/wisma-gkbi-boardroom"
              key={item.title}
              className="browse-card group"
            >
              <div className="relative aspect-[370/363] overflow-hidden">
                <Image
                  src={asset(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <span className="browse-image-cta absolute bottom-0 left-0 flex h-[71px] w-[76px] items-center justify-center bg-[#9f3636]">
                  <Image src={asset("figcraft-chevron.png")} alt="" width={10} height={16} />
                </span>
              </div>
              <div className="browse-card-label mt-6 flex items-center gap-3">
                <Image src={asset(item.icon)} alt="" width={24} height={24} />
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
            </Link>
          ))}
          <Link
            href="/products/wisma-gkbi-boardroom"
            className="browse-all-card relative flex min-h-[426px] flex-col items-center overflow-hidden bg-[#843030] pt-[130px] text-center text-white shadow-[0_20px_30px_rgba(132,48,48,.28)]"
          >
            <Image
              src={asset("figcraft-stripes.png")}
              alt=""
              width={96}
              height={83}
              className="browse-stripes absolute right-4 top-4 opacity-40"
            />
            <h3 className="text-[31px] font-bold leading-[1.2]">All Space</h3>
            <p className="mt-4 max-w-[270px] text-base font-medium leading-[1.2]">
              Comfortable space, Full speed wifi,
              <br />
              Free coffe &amp; Snack
              <br />
              and many more
            </p>
            <span className="browse-all-button absolute bottom-0 left-0 flex h-[66px] w-[270px] max-w-full items-center justify-between bg-[#de5918] px-9 text-xl">
              Check availability
              <Image src={asset("figcraft-chevron.png")} alt="" width={10} height={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyCeoSuite() {
  const metrics = [
    {
      value: "11",
      label: "Vibrant Cities",
      icon: "1-24538-imgEarth1PlanetEarthGlobeWorld.svg",
      width: 45,
      height: 45,
    },
    {
      value: "22",
      label: "prime locations in Asia’s CBDs",
      icon: "1-24538-imgAiNavigationSparkMapLocationDirectionTravelArtificialIntelligenceAi.svg",
      width: 45,
      height: 45,
    },
    {
      value: "25",
      label: "years in business",
      icon: "1-24538-imgToolBoxBoxBriefcaseToolSettings.svg",
      width: 42,
      height: 41,
    },
    {
      value: "100%",
      label: "grade A+ Buildings",
      icon: "1-24538-imgFreeRemixMapTravelCityHallCityHallTravelPlaces.svg",
      width: 45,
      height: 45,
    },
    {
      value: "80,000+",
      label: "businesses served",
      icon: "1-24538-imgBusinessHandshakeDealContractBusinessMoneyPaymentAgreement.svg",
      width: 44,
      height: 33,
    },
  ];
  return (
    <section id="why-ceo-suite" className="why-section">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="why-metrics grid grid-cols-1 content-center gap-x-5 gap-y-10 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.value} className="why-metric flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={asset(metric.icon)}
                  alt=""
                  width={metric.width}
                  height={metric.height}
                />
              </span>
              <div>
                <strong className="text-[clamp(25px,2.6vw,39px)] leading-[1.2] text-[#10375c]">
                  {metric.value}
                </strong>
                <p className="mt-2 text-[clamp(14px,1.3vw,20px)] leading-[1.2] text-[#9a9a9a]">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="why-panel bg-brand p-9 text-white md:p-14">
          <div className="why-eyebrow flex items-center gap-5">
            <p className="text-lg">Why CEO SUITE?</p>
            <span aria-hidden="true" className="h-[3px] w-[97px] bg-white" />
          </div>
          <h2 className="mt-6 max-w-xl text-[clamp(30px,3vw,49px)] font-bold leading-[1.2]">
            We revolutionize your workspace
          </h2>
          <p className="mt-7 leading-7 text-white/90">
            In today’s fast-paced business environment, finding the right workspace solution is
            crucial to your company’s success. CEO SUITE offers an unparalleled workplace experience
            that combines premium locations, flexibility, top-notch amenities, and exceptional
            service to meet the needs of modern businesses.
          </p>
          <p className="mt-5 leading-7 text-white/90">
            As Asia’s leading serviced office provider, CEO SUITE stands out as the ideal partner
            for companies seeking more than just office space—a place where business can thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

type EditorialItem = { image: string; title: string; description: string; partnerLogo?: string };

function EditorialCards({ items, partner = false }: { items: EditorialItem[]; partner?: boolean }) {
  return (
    <div className={`editorial-grid grid gap-4 md:grid-cols-3 ${partner ? "mt-16" : "mt-6"}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className={`editorial-card ${
            partner
              ? ""
              : "overflow-hidden rounded-lg bg-white shadow-[0_2px_6px_rgba(57,57,57,.06)]"
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-lg ${partner ? "aspect-[523/300]" : "aspect-[523/232]"}`}
          >
            <Image
              src={asset(item.image)}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            {partner && (
              <>
                <Image
                  src={asset("1-24694-imgLayer0Copy1.png")}
                  alt="CEO SUITE"
                  width={77}
                  height={19}
                  className="absolute left-4 top-7"
                />
                {item.partnerLogo && (
                  <Image
                    src={asset(item.partnerLogo)}
                    alt=""
                    width={item.partnerLogo === "partner-mandiri.png" ? 111 : 84}
                    height={item.partnerLogo === "partner-mandiri.png" ? 63 : 48}
                    className={`absolute object-contain ${item.partnerLogo === "partner-mandiri.png" ? "left-[93px] top-0" : "left-[97px] top-3"}`}
                  />
                )}
              </>
            )}
          </div>
          <div className={`editorial-card-content ${partner ? "mt-6" : "px-4 py-8"}`}>
            <h3
              className={`editorial-card-title font-bold leading-[1.2] ${partner ? "text-[25px] text-[#262626]" : "text-[20px] text-[#434343]"}`}
            >
              {item.title}
            </h3>
            <p
              className={`editorial-card-description text-[#888] ${partner ? "mt-4 text-[20px] leading-[1.4]" : "mt-2 text-base leading-[1.2]"}`}
            >
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Promotions() {
  return (
    <section id="promotions" className="promotions-section section-space">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="promotions-heading-row flex items-center gap-6">
              <span className="promotions-icon flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f6]">
                <Image
                  src={asset("1-24599-imgAnnoncementMegaphone.svg")}
                  alt=""
                  width={19}
                  height={22}
                />
              </span>
              <h2 className="section-heading">Promotions</h2>
            </div>
            <p className="section-copy">
              Don’t miss this opportunity to elevate your workspace experience at unbeatable value.
            </p>
          </div>
          <a
            href="#deals"
            className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-[#f9e7e7] text-base font-medium text-brand"
          >
            See All
          </a>
        </div>
        <EditorialCards items={promotions} />
      </div>
    </section>
  );
}

function Deals() {
  return (
    <section id="deals" className="deals-section section-space">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <h2 className="section-heading">Best Deals</h2>
            <p className="section-copy">
              Take advantage of our special promotions and enjoy exceptional savings on your
              workspace.
            </p>
          </div>
          <span className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-[#f9e7e7] text-base font-medium text-brand">
            See All Deals
          </span>
        </div>
        <div className="deals-grid mt-8 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <article
              key={index}
              className="deal-card relative aspect-[2.17] overflow-hidden rounded-xl"
            >
              <Image
                src={asset("1-24694-imgUnsplashYWwob8KwOCk.png")}
                alt="Office interior"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="deal-card-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand via-brand/90 to-transparent px-7 pb-5 pt-12 text-white">
                <h3 className="font-semibold">Rp200,000 Voucher for Office!</h3>
                <p className="mt-1 text-xs">Valid until 31 August 2024</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const columns = [
    [
      { photo: "1-24676-imgScreenshot20241127At1139362.png", aspect: "aspect-[206/200]" },
      { photo: "1-24676-imgCeoSuite61.png", aspect: "aspect-[206/248]" },
    ],
    [
      { photo: "1-24676-imgCeoSuite11.png", aspect: "aspect-[206/248]" },
      { photo: "1-24676-imgCeoSuite91.png", aspect: "aspect-[206/200]" },
    ],
  ];
  return (
    <section id="packages" className="packages-section py-20">
      <div className="packages-layout container-page grid items-center gap-12 min-[1400px]:grid-cols-[437px_788px] min-[1400px]:justify-center min-[1400px]:gap-32">
        <div className="packages-collage mx-auto grid w-full max-w-[437px] grid-cols-2 gap-6">
          {columns.map((column, index) => (
            <div
              key={index}
              className={`packages-collage-column grid content-start gap-6 ${index === 1 ? "pt-6" : ""}`}
            >
              {column.map((item, photoIndex) => (
                <div
                  key={item.photo}
                  className={`relative overflow-hidden rounded-xl ${item.aspect}`}
                >
                  <Image
                    src={asset(item.photo)}
                    alt={`CEO SUITE meeting room ${index * 2 + photoIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 206px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="packages-content">
          <h2 className="section-heading">Meeting Room Package</h2>
          <p className="section-copy mt-6">
            Elevate your meetings with CEO SUITE&apos;s premium meeting rooms, now available at an
            exclusive special rate.
          </p>
          <p className="section-copy">
            Whether you&apos;re hosting a team brainstorming session, client presentations, or
            strategic workshops, our fully-equipped meeting spaces offer the perfect blend of
            professionalism and comfort.
          </p>
          <Link
            href="/products/wisma-gkbi-boardroom"
            className="mt-8 inline-flex rounded-lg bg-brand px-8 py-4 font-semibold text-white"
          >
            Browse Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners-section section-space">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="section-heading">Our Corporate Partners</h2>
            <p className="section-copy">
              Exclusive benefits and promotions tailored to meet the needs of businesses of all
              sizes.
            </p>
          </div>
          <span className="flex h-[43px] w-[164px] items-center justify-center rounded-lg bg-[#f9e7e7] text-base font-medium text-brand">
            See All
          </span>
        </div>
        <EditorialCards items={partnerOffers} partner />
      </div>
    </section>
  );
}

function Trusted() {
  const logos = [
    { name: "Uber", image: "1-24728-imgCompanyLogo.svg" },
    { name: "Dell", image: "trusted-dell.png" },
    { name: "Samsung", image: "1-24728-imgSamsungLogo1.svg" },
    { name: "Nike", image: "1-24728-imgLogoNike1.svg" },
    { name: "Etihad", image: "trusted-etihad.png" },
    { name: "Zurich", image: "trusted-zurich.png" },
    { name: "Cisco", image: "1-24728-imgCiscoLogoBlue20161.svg" },
    { name: "BP", image: "1-24728-imgBpHeliosLogo1.svg" },
    { name: "ExxonMobil", image: "1-24728-imgExxonMobilLogo1.svg" },
  ];
  return (
    <section className="trusted-section overflow-hidden bg-[#fcfcfd] pb-[107px] pt-[70px] text-center">
      <div className="container-page">
        <h2 className="relative mx-auto w-fit text-[clamp(28px,3vw,39px)] font-bold leading-[1.2] text-[#434343]">
          Trusted by <span className="text-[#be4444]">80,000+</span> customers
          <Image
            src={asset("trusted-underline.png")}
            alt=""
            width={216}
            height={74}
            className="absolute -left-8 top-[17px]"
          />
        </h2>
        <div className="trusted-logos mt-[52px] flex items-center gap-16 overflow-x-auto">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-[170px] w-32 shrink-0 items-center justify-center"
            >
              <Image
                src={asset(logo.image)}
                alt={logo.name}
                width={128}
                height={170}
                className="max-h-[170px] w-32 object-contain opacity-50 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const articles = [
    { title: "Does productivity increase when working remotely ?", image: "news-remote-work.png" },
    { title: "Morning routine to boost your mood", image: "news-morning-routine.png" },
    { title: "5+ tips to find comfortable co-working space", image: "news-coworking.png" },
  ];
  return (
    <section id="news" className="news-section bg-white pb-[77px] pt-[57px]">
      <div className="news-layout container-page grid gap-12 min-[1440px]:grid-cols-[minmax(0,782fr)_minmax(0,760fr)] min-[1440px]:gap-[58px]">
        <div className="news-list">
          <h2 className="section-heading">News, events and insights for you</h2>
          <div className="news-articles mt-[38px]">
            {articles.map((item, index) => (
              <article
                key={item.title}
                className={`news-article grid gap-6 sm:grid-cols-[312px_minmax(0,1fr)] sm:gap-[27px] ${index < articles.length - 1 ? "mb-[31px] border-b border-[#e7e7e7] pb-8" : ""}`}
              >
                <div className="relative aspect-[312/200] overflow-hidden rounded-lg">
                  <Image
                    src={asset(item.image)}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 312px"
                    className="object-cover"
                  />
                </div>
                <div className="news-article-copy pt-[19px]">
                  <p className="font-news text-[13.333px] font-medium leading-[1.009] text-[#262626]/60">
                    Race98 - 03 June 2023
                  </p>
                  <h3 className="mt-[5px] text-[25px] font-medium leading-[1.2] text-[#262626]">
                    {item.title}
                  </h3>
                  <p className="font-news mt-4 max-w-[319px] text-base leading-[1.239] text-[#696868]">
                    NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park
                    ahead of next week’s
                  </p>
                </div>
              </article>
            ))}
          </div>
          <span className="news-all-button mt-8 inline-flex h-[52px] w-[197px] items-center justify-center gap-5 rounded-lg bg-[#a33434] text-base font-semibold text-white">
            See All Updates
            <Image src={asset("news-arrow.png")} alt="" width={7} height={11} />
          </span>
        </div>
        <article className="news-feature relative min-h-[560px] overflow-hidden rounded-lg min-[1440px]:h-[812px]">
          <Image
            src={asset("news-feature.png")}
            alt="Minimal workspace with laptop"
            fill
            sizes="(max-width: 1440px) 100vw, 760px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <span className="news-feature-tag absolute left-6 top-10 flex h-12 w-[144px] items-center justify-center rounded border border-[#ebeef3] text-[25px] font-bold text-[#ebeef3] sm:left-12">
            TIPS
          </span>
          <div className="news-feature-copy absolute bottom-12 left-6 right-6 text-white sm:left-12 sm:right-8">
            <p className="font-news text-2xl font-semibold leading-none">Debits - 03 June 2023</p>
            <h3 className="mt-5 text-[clamp(32px,3vw,49px)] font-bold leading-[1.2]">
              Minimal workspace for inspirations
            </h3>
          </div>
        </article>
      </div>
    </section>
  );
}

function StoreBadge({ store }: { store: "app" | "play" }) {
  const app = store === "app";
  return (
    <span
      className={`relative block h-[66px] rounded-[10px] bg-[#090909] ${app ? "w-[181px]" : "w-[177px]"}`}
      aria-label={app ? "App Store" : "Google Play"}
    >
      <Image
        src={asset(app ? "1-24785-imgLogo.svg" : "1-24785-imgLogo1.svg")}
        alt=""
        width={app ? 29 : 30}
        height={app ? 36 : 34}
        className="absolute left-[17px] top-[15px]"
      />
      <Image
        src={asset(app ? "1-24785-imgTexto.svg" : "1-24785-imgTexto1.svg")}
        alt=""
        width={app ? 110 : 105}
        height={app ? 36 : 34}
        className="absolute left-[54px] top-4"
      />
    </span>
  );
}

function AppPromo() {
  return (
    <section className="app-promo-section relative overflow-hidden bg-gradient-to-b from-[#fcf4f4] to-[#f9e7e7] min-[1800px]:h-[573px]">
      <Image
        src={asset("app-promo-shape-left.png")}
        alt=""
        width={926}
        height={711}
        className="app-promo-shape app-promo-shape-left absolute hidden"
      />
      <Image
        src={asset("app-promo-shape-right.png")}
        alt=""
        width={926}
        height={711}
        className="app-promo-shape app-promo-shape-right absolute hidden"
      />
      <span aria-hidden="true" className="app-promo-glow absolute hidden" />
      <div className="app-promo-layout container-page grid min-h-[570px] items-center gap-8 py-14 lg:grid-cols-2 min-[1800px]:h-full min-[1800px]:min-h-0 min-[1800px]:py-0">
        <div className="app-promo-copy min-[1800px]:w-[858px]">
          <h2 className="text-[clamp(30px,3vw,39px)] font-bold leading-[1.2] text-[#9f3636]">
            Download the CEO SUITE App Now!
          </h2>
          <p className="mt-4 max-w-[858px] text-[clamp(18px,1.8vw,25px)] font-medium leading-[1.2] text-[#888]">
            Simplify your meeting planning with our app. Download now to enjoy seamless booking and
            more.
          </p>
          <div className="app-store-badges mt-16 flex flex-wrap gap-[14px]">
            <StoreBadge store="app" />
            <StoreBadge store="play" />
          </div>
        </div>
        <div className="app-promo-mobile-phones flex min-h-[360px] items-end justify-center gap-4 sm:min-h-[480px] min-[1800px]:hidden">
          <div className="relative -mb-20 h-[330px] w-[145px] shrink-0 overflow-hidden rounded-[28px] border-[8px] border-[#222] bg-white shadow-2xl sm:-mb-28 sm:h-[460px] sm:w-[210px] sm:rounded-[34px] sm:border-[10px]">
            <Image
              src={asset("1-24785-imgScreenChangeMe3.png")}
              alt="CEO SUITE app booking screen"
              fill
              sizes="(max-width: 640px) 145px, 210px"
              className="object-cover object-top"
            />
          </div>
          <div className="relative -mb-28 h-[360px] w-[160px] shrink-0 overflow-hidden rounded-[30px] border-[8px] border-[#222] bg-white shadow-2xl sm:-mb-40 sm:h-[500px] sm:w-[230px] sm:rounded-[36px] sm:border-[10px]">
            <Image
              src={asset("1-24785-imgScreenChangeMe1.png")}
              alt="CEO SUITE app room screen"
              fill
              sizes="(max-width: 640px) 160px, 230px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className="app-phone-home absolute left-[calc(50%+103px)] top-[160px] hidden h-[635px] w-[314px] overflow-hidden min-[1800px]:block">
        <Image
          src={asset("app-phone-home.png")}
          alt="CEO SUITE app home screen"
          width={669}
          height={995}
          className="absolute -left-[170px] -top-[170px] max-w-none"
        />
      </div>
      <div className="app-phone-product absolute left-[calc(50%+462px)] -top-[109px] hidden h-[654px] w-[327px] overflow-hidden min-[1800px]:block">
        <Image
          src={asset("app-phone-product.png")}
          alt="CEO SUITE app product screen"
          width={682}
          height={1014}
          className="absolute -left-[170px] -top-[170px] max-w-none"
        />
      </div>
    </section>
  );
}

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Header loggedIn={loggedIn} onLogin={() => setLoggedIn(true)} />
      <main>
        <Hero loggedIn={loggedIn} />
        {loggedIn ? (
          <>
            <RecommendedSpaces />
            <Promotions />
            <Deals />
          </>
        ) : (
          <>
            <BrowseSpaces />
            <RecommendedSpaces />
            <WhyCeoSuite />
            <Promotions />
            <Deals />
            <Packages />
            <Partners />
            <Trusted />
            <News />
            <Faq />
            <AppPromo />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
