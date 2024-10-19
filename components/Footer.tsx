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
    <footer className="w-full bg-primary px-5 lg:px-0">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-y-10 pb-6 pt-11 lg:grid-cols-2 lg:gap-y-0">
        <div className="flex flex-col gap-48">
          <Logo />
          <p className="hidden text-xs text-white lg:block">
            All rights reserved. All content is owned by its respective owners.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-y-8">
          {Topics.map((topic, index) => (
            <Link
              href={topic.link}
              key={index}
              className="text-xs text-white underline-offset-2 transition-all hover:underline"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </div>
      <p className="pb-6 text-xs text-white lg:hidden">
        All rights reserved. All content is owned by its respective owners.{" "}
      </p>
    </footer>
  );
}
