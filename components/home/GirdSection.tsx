import React from "react";
import Slider from "../Slider";

const Items = [
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "SEO - What is SEO?",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
];

export default function GirdSection() {
  return (
    <div className="mb-48 text-center lg:text-left px-5 lg:px-0">
      <h2 className="lg:text-6xl text-3xl font-bold capitalize mb-2 lg:mb-6 text-[#1b1b1b]">
        Getting Started
      </h2>
      <p className=" text-[#1b1b1b] text-lg mb-11 max-w-lg">
        Start your SEO journey here – the foundational insights you need to
        know.
      </p>
      <Slider slides={Items} />
    </div>
  );
}
