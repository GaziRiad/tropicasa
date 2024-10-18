import React from "react";
import Slider from "../Slider";

type item = {
  title: string;
  description: string;
  img: string;
};

type GirdSectionProps = {
  content: {
    title: string;
    description: string;
    items: item[];
  };
};

export default function GirdSection({ content }: GirdSectionProps) {
  return (
    <div className="mb-36 text-center lg:text-left px-5 lg:px-0">
      <h2 className="lg:text-6xl text-3xl font-bold capitalize mb-2 lg:mb-4 text-[#1b1b1b]">
        Getting Started
      </h2>
      <p className=" text-[#1b1b1b] text-lg mb-11 max-w-lg">
        Start your SEO journey here – the foundational insights you need to
        know.
      </p>
      <Slider slides={content.items} />
    </div>
  );
}
