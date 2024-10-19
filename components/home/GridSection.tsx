import React from "react";
import Slider from "../Slider";
import { SEOResource } from "@/types/types";

type GirdSectionProps = {
  content: {
    title: string;
    description: string;
    items: SEOResource[];
  };
};

export default function GridSection({ content }: GirdSectionProps) {
  if (!content) return null;

  return (
    <div className="mb-24 px-5 text-center lg:mb-36 lg:px-0 lg:text-left">
      <h2 className="mb-2 font-display text-3xl font-bold capitalize text-[#1b1b1b] lg:mb-4 lg:text-6xl">
        {content.title}
      </h2>
      <p className="mb-4 max-w-lg text-lg text-[#1b1b1b]">
        Start your SEO journey here – the foundational insights you need to
        know.
      </p>
      <Slider slides={content.items} />
    </div>
  );
}
