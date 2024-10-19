import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="font-bold text-[#4dbbff] text-3xl">
      <Image src={logo} alt="Logo" className=" w-36" />
    </Link>
  );
}
