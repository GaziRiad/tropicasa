import React from "react";
import { FiFileText } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

export default function ShareBanner() {
  return (
    <div className="bg-gradient-to-r mb-14 lg:mb-36 from-[#5de0e6] to-[#004aad] rounded-3xl lg:rounded-[64px] mx-5 lg:mx-0 px-5 lg:px-14 pt-14 pb-9 text-white lg:flex-row flex-col flex items-start gap-3 lg:gap-14 justify-start">
      <div className="lg:text-[120px] text-5xl">
        <FiFileText />
      </div>
      <div>
        <h2 className="font-bold font-display text-2xl lg:text-[57px] mb-6 leading-[1.03] max-w-3xl">
          Share your SEO resource with us!
        </h2>
        <p className="lg:text-xl text-lg max-w-lg mb-8">
          Be sure to post it, our community would greatly appreciate it!
        </p>

        <button className="flex items-center transition-all hover:bg-white/95 justify-center bg-white  text-[#4dbbff] gap-2 text-sm rounded-xl font-semibold px-4 py-4">
          <span>Share resource</span>
          <span>
            <GoArrowRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
}
