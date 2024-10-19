import Link from "next/link";
import React from "react";

const Topics = [
  { title: "What’s SEO?", link: "#" },
  { title: "On-Page SEO", link: "#" },
  { title: "Off-Page SEO", link: "#" },
  { title: "Keyword Research", link: "#" },
  { title: "Link Building", link: "#" },
  { title: "Technical SEO", link: "#" },
  { title: "Local SEO", link: "#" },
  { title: "Content SEO", link: "#" },
  { title: "SEO Tools", link: "#" },
  { title: "E-Com SEO", link: "#" },
  { title: "Trends & Updates", link: "#" },
];

export default async function HomeHero() {
  return (
    <div className="mx-5 mb-14 rounded-3xl bg-gradient-to-r from-[#1b1b1b] to-[#6c6c6c] px-4 pb-14 pt-12 text-center text-white lg:mx-0 lg:mb-20 lg:rounded-[36px] lg:px-24 lg:pb-28">
      <h1 className="mb-6 font-display text-2xl font-bold leading-[0.83] lg:text-[57px]">
        Free SEO Resources, for your sites success
      </h1>
      <p className="mb-8 text-lg">
        Your go-to library for top-notch SEO PDFs, completely free.
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-8 text-black lg:gap-9">
        {Topics.map((topic, index) => (
          <li key={index}>
            <Link
              href={""}
              className="w-fit rounded-full border-[1.5px] border-[#a6a6a6] bg-[#f2f3f4] px-6 py-3 text-xs transition-all hover:bg-[#f2f3f4]/80"
            >
              {topic.title}
            </Link>
          </li>
        ))}
        <li className="w-fit rounded-full border-[1.5px] border-[#a6a6a6] bg-[#ff914d] px-6 py-3 text-xs font-bold text-white transition-all">
          + more soon!
        </li>
      </ul>
    </div>
  );
}
