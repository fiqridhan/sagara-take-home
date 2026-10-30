"use client";

import { useState } from "react";
import { questions } from "@/data/content";

export function Faq() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="section-space" id="faq"><div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
    <div><h2 className="section-heading max-w-xs">Frequently Asked Questions</h2><p className="section-copy max-w-md">Everything You Need to Know About CEO SUITE Services &amp; Facilities!</p><div className="mt-16 rounded-xl bg-blush p-7"><p className="font-semibold text-brand">Haven&apos;t answered your question?</p><span className="mt-4 inline-flex rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white">Contact Us</span></div></div>
    <div>{questions.map((item, index) => <div key={item.question} className="border-b border-[#e9e9e9]">{item.answer ? <button type="button" aria-expanded={active === index} className="flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-semibold md:text-base" onClick={() => setActive(active === index ? null : index)}><span>{item.question}</span><span aria-hidden="true" className="text-xl text-muted">{active === index ? "−" : "+"}</span></button> : <p className="flex items-center justify-between gap-5 py-6 text-sm font-semibold md:text-base"><span>{item.question}</span><span aria-hidden="true" className="text-xl text-muted">⌄</span></p>}{active === index && item.answer && <p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{item.answer}</p>}</div>)}</div>
  </div></section>;
}
