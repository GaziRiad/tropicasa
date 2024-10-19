import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Topics = [
  { title: "What’s SEO?", link: "#" },
  { title: "On-Page SEO", link: "#" },
  { title: "Off-Page SEO", link: "#" },
  { title: "Keyword Research", link: "#" },
  { title: "Link Building", link: "#" },
  { title: "Technical SEO", link: "#" },
  { title: "Local SEO", link: "#" },
  { title: "Content SEO", link: "#" },
  { title: "SEO Tools", link: "#" },
  { title: "E-Com SEO", link: "#" },
  { title: "Trends & Updates", link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="max-w-6xl grid grid-cols-2 pt-11 pb-6 mx-auto items-start">
        <div className="flex flex-col gap-48">
          <Logo />
          <p className="text-xs text-white">
            All rights reserved. All content is owned by its respective owners.{" "}
          </p>
        </div>
        <div className="grid grid-rows-4 grid-cols-3 gap-y-8">
          {Topics.map((topic, index) => (
            <Link
              href={topic.link}
              key={index}
              className=" text-xs text-white transition-all hover:underline underline-offset-2"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
