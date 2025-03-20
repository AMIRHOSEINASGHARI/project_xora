"use client";

import { useState } from "react";

import Image from "next/image";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full lg:py-10 max-lg:py-6">
      <div className="container-base flex items-center w-full absolute top-6 left-0 right-0 z-30 max-lg:justify-between max-lg:px-5 lg:py-5">
        <a href="#" className="lg:hidden flex flex-1 w-full">
          <Image
            src="/images/xora.svg"
            alt="Xora Logo"
            width={115}
            height={55}
          />
        </a>
        <button
          className="lg:hidden size-10 rounded-full flex justify-center items-center border-2 border-s4/25"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={`/images/${open ? "close" : "magic"}.svg`}
            alt="icon"
            width={20}
            height={20}
          />
        </button>
        <DesktopNav />
      </div>
      <MobileNav open={open} />
    </header>
  );
};

export default Header;
