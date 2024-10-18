import GirdSection from "@/components/home/GirdSection";
import HomeHero from "@/components/home/HomeHero";
import React from "react";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto">
      <HomeHero />
      <GirdSection />
    </div>
  );
}
