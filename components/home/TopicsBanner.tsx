import Link from "next/link";
import React from "react";

export default function TopicsBanner() {
  return (
    <div className="bg-[#d9d9d9] mb-14 lg:mb-36 rounded-3xl mx-5 lg:mx-0 lg:rounded-[64px] px-14 pt-14 pb-9 text-black text-center">
      <div>
        <h2 className="font-bold font-display text-2xl lg:text-[57px] mb-6 leading-[1.03]">
          And more <span className="text-[#ff914d]">topics</span> on{" "}
          <span className="text-[#ff914d]">SEO</span>!
        </h2>
        <p className="text-xl text-[#1b1b1b] mb-12 max-w-lg mx-auto">
          Browse through our collection of topics and specialised resources on
          SEO
        </p>
        <Link
          href="#"
          className="text-sm rounded-full bg-black border-[1.5px] border-[#a6a6a6] transition-all text-white py-3 px-4 hover:bg-black/85"
        >
          Browse all resources
        </Link>
      </div>
    </div>
  );
}
