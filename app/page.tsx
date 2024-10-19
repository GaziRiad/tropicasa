import Footer from "@/components/Footer";
import AccordionSection from "@/components/home/AccordionSection";
import GirdSection from "@/components/home/GirdSection";
import HomeHero from "@/components/home/HomeHero";
import ShareBanner from "@/components/home/ShareBanner";
import TopicsBanner from "@/components/home/TopicsBanner";
import React from "react";

const CONTENT = {
  title: "Getting Started",
  description:
    "Start your SEO journey here – the foundational insights you need to know.",
  items: [
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
  ],
};

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <HomeHero />
        <GirdSection content={CONTENT} />
        <GirdSection content={CONTENT} />
        <ShareBanner />
        <GirdSection content={CONTENT} />
        <GirdSection content={CONTENT} />
        <GirdSection content={CONTENT} />
        <GirdSection content={CONTENT} />
        <GirdSection content={CONTENT} />
        <TopicsBanner />
        <AccordionSection />
      </div>
      <Footer />
    </>
  );
}
