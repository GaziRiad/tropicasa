import Image from "next/image";
import React from "react";
import Slider from "../Slider";

const Items = [
  {
    title: "Introduction to Search Engine Optimization (SEO)",
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
    title:
      "What SEO Is and Where Many SEO for Beginners PDF Guides Get Things Complicated",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "What Every Business Owner Should Know About SEO",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
  {
    title: "What is SEO? Everything You Need to Know.",
    description:
      "Serving as a comprehensive guide on SEO techniques, this manual aims to enhance the visibility and searchability of websites. It explains how search engines function and how they interact with web content",
    img: "/images/messi.jpg",
  },
];

export default function GirdSection() {
  return (
    <div>
      <h2>Getting Started</h2>
      <p>
        Start your SEO journey here – the foundational insights you need to
        know.
      </p>
      <Slider slides={Items} />
    </div>
  );
}
