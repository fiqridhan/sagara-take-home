"use client";

import Image from "next/image";
import { useState } from "react";
import { asset, questions } from "@/data/content";

export function Faq() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="py-12 min-[1400px]:pb-10 min-[1400px]:pt-20" id="faq"><div className="container-page grid gap-10 min-[1400px]:grid-cols-[500px_1fr] min-[1400px]:gap-[120px]">
    <div className="flex flex-col justify-between min-[1400px]:min-h-[1232px]"><div><h2 className="max-w-[500px] text-[clamp(32px,4vw,48px)] font-semibold leading-[1.23] text-[#262626]">Frequently Asked Questions</h2><p className="mt-5 max-w-[500px] text-lg leading-[23px] text-[#888]">Everything You Need to Know About CEO SUITE Services &amp; Facilities!</p></div><div className="relative mt-12 overflow-hidden rounded-[20px] bg-[#fcf4f4] px-6 py-10"><Image src={asset("1-24764-imgCommunicationChat1Line.svg")} alt="" width={164} height={164} className="absolute right-[-23px] top-[-20px] opacity-20" /><p className="relative text-2xl font-medium leading-[30px] text-[#9f3636]">Haven&apos;t answered your question?</p><span className="relative mt-9 inline-flex h-[52px] items-center gap-2 rounded-xl bg-[#9f3636] px-6 text-base font-semibold text-white"><Image src={asset("1-24764-imgCommunicationChat3Line.svg")} alt="" width={20} height={20} />Contact Us</span></div></div>
    <div>{questions.map((item, index) => <div key={item.question} className="border-b border-[#d1d1d1]">{item.answer ? <button type="button" aria-expanded={active === index} className="flex w-full items-start justify-between gap-5 py-6 text-left text-lg font-medium leading-[30px] text-[#262626] min-[1400px]:py-10 min-[1400px]:text-2xl" onClick={() => setActive(active === index ? null : index)}><span>{item.question}</span><Image src={asset(active === index ? "1-24764-imgArrowArrowUpSLine.svg" : "1-24764-imgArrowArrowDownSLine.svg")} alt="" width={32} height={32} className="shrink-0" /></button> : <p className="flex items-start justify-between gap-5 py-6 text-lg font-medium leading-[30px] text-[#262626] min-[1400px]:py-10 min-[1400px]:text-2xl"><span>{item.question}</span><Image src={asset("1-24764-imgArrowArrowDownSLine.svg")} alt="" width={32} height={32} className="shrink-0" /></p>}{active === index && item.answer && <p className="max-w-3xl pb-10 pr-9 text-lg leading-7 text-[#4f4f4f]">{item.answer}</p>}</div>)}</div>
  </div></section>;
}
