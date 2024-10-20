import Link from "next/link";
import React from "react";

export default function TopicsBanner() {
  return (
    <div className="mx-5 mb-14 rounded-3xl bg-[#d9d9d9] px-14 pb-9 pt-14 text-center text-black lg:mx-0 lg:mb-36 lg:rounded-[64px]">
      <div>
        <h2 className="mb-6 font-display text-2xl font-bold leading-[1.03] lg:text-[57px]">
          And more <span className="text-[#ff914d]">topics</span> on{" "}
          <span className="text-[#ff914d]">SEO</span>!
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-xl text-[#1b1b1b]">
          Browse through our collection of topics and specialised resources on
          SEO
        </p>
        <Link
          href="/What_is_SEO"
          className="rounded-full border-[1.5px] border-[#a6a6a6] bg-black px-4 py-3 text-sm text-white transition-all hover:bg-black/85"
        >
          Browse all resources
        </Link>
      </div>
    </div>
  );
}
