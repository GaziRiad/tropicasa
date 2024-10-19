import React from "react";
import Logo from "./Logo";
import FormModal from "./FormModal";

export default function Navigation() {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between pt-7 pb-6 px-5 lg:px-0">
      <Logo />
      <nav>
        <ul>
          <li>
            <FormModal />
          </li>
        </ul>
      </nav>
    </header>
  );
}
