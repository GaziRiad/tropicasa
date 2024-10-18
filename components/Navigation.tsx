import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between pt-7 pb-6">
      <Logo />
      <nav>
        <ul>
          <li>
            <Link
              href="#"
              className="text-sm rounded-full bg-black border-[1.5px] border-[#a6a6a6] transition-all text-white py-2 px-4 hover:bg-black/85"
            >
              Post SEO resource
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
