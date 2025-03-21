"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import clsx from "clsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full lg:py-10 max-lg:py-6",
        isScrolled && "bg-s2/90 backdrop-blur-lg h-16 lg:h-[90px]"
      )}
    >
      <div
        className={clsx(
          "container-base flex items-center w-full absolute left-0 right-0 z-30 max-lg:justify-between max-lg:px-5 lg:py-5 transition-all duration-500",
          isScrolled ? "lg:py-2 top-0 max-lg:top-3" : "lg:py-5 top-6"
        )}
      >
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
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
