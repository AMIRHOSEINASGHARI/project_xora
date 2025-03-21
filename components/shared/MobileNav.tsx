import Image from "next/image";

import clsx from "clsx";

import NavLink from "./NavLink";
import { Dispatch, SetStateAction } from "react";

const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={clsx(
        "lg:hidden sidebar-before bg-s2 transition-opacity max-lg:overflow-hidden h-screen absolute w-full top-0 z-20 flex flex-col justify-center px-16",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="relative z-2">
        <ul>
          <li className="nav-li">
            <NavLink title="features" onClick={() => setOpen(false)} />
          </li>
          <li className="nav-li">
            <NavLink title="pricing" onClick={() => setOpen(false)} />
          </li>
          <li className="nav-li">
            <NavLink title="faq" onClick={() => setOpen(false)} />
          </li>
          <li className="nav-li">
            <NavLink title="download" onClick={() => setOpen(false)} />
          </li>
        </ul>
      </nav>
      <div className="absolute -left-[290px] w-[968px] rotate-90 z-1">
        <Image
          src="/images/bg-outlines.svg"
          alt="outline"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="absolute -left-[290px] w-[968px] rotate-90 opacity-5">
        <Image
          src="/images/bg-outlines-fill.png"
          alt="fill"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MobileNav;
