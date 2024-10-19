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

// const fetchSheetsData = async () => {
//   return "";
// };

export default async function HomeHero() {
  return (
    <div className="bg-gradient-to-r from-[#1b1b1b] to-[#6c6c6c] pt-12 pb-14 lg:pb-28 px-4 lg:px-24 rounded-3xl lg:rounded-[36px] text-white text-center mb-14 lg:mb-20 mx-5 lg:mx-0">
      <h1 className="font-bold font-display text-2xl lg:text-[57px] mb-6 leading-[0.83]">
        Free SEO Resources, for your sites success
      </h1>
      <p className="mb-8 text-lg">
        Your go-to library for top-notch SEO PDFs, completely free.
      </p>
      <ul className="text-black flex items-center gap-8 lg:gap-9 flex-wrap justify-center">
        {Topics.map((topic, index) => (
          <li key={index}>
            <Link
              href={""}
              className="bg-[#f2f3f4] transition-all hover:bg-[#f2f3f4]/80 border-[1.5px] border-[#a6a6a6] text-xs w-fit rounded-full py-3 px-6"
            >
              {topic.title}
            </Link>
          </li>
        ))}
        <li className="bg-[#ff914d] text-white font-bold transition-all border-[1.5px] border-[#a6a6a6] text-xs w-fit rounded-full py-3 px-6">
          + more soon!
        </li>
      </ul>
    </div>
  );
}
