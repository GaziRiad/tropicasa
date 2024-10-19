import React from "react";
import { FiFileText } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import FormModal from "../FormModal";

export default function ShareBanner() {
  return (
    <div className="mx-5 mb-14 flex flex-col items-start justify-start gap-3 rounded-3xl bg-gradient-to-r from-[#5de0e6] to-[#004aad] px-5 pb-9 pt-14 text-white lg:mx-0 lg:mb-36 lg:flex-row lg:gap-14 lg:rounded-[64px] lg:px-14">
      <div className="text-5xl lg:text-[120px]">
        <FiFileText />
      </div>
      <div>
        <h2 className="mb-6 max-w-3xl font-display text-2xl font-bold leading-[1.03] lg:text-[57px]">
          Share your SEO resource with us!
        </h2>
        <p className="mb-8 max-w-lg text-lg lg:text-xl">
          Be sure to post it, our community would greatly appreciate it!
        </p>

        <FormModal>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-4 text-sm font-semibold text-[#4dbbff] transition-all hover:bg-white/95">
            <span>Share resource</span>
            <span>
              <GoArrowRight size={18} />
            </span>
          </button>
        </FormModal>
      </div>
    </div>
  );
}
