import Image from "next/image";

import { Link as LinkScroll } from "react-scroll";

import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <nav className="max-lg:hidden w-full">
      <ul className="flex items-center justify-between w-full">
        <li className="nav-li">
          <NavLink title="features" />
          <div className="dot" />
          <NavLink title="pricing" />
        </li>
        <li className="nav-logo">
          <LinkScroll
            to="hero"
            offset={-250}
            spy
            smooth
            className="transition-transform duration-500 cursor-pointer"
          >
            <Image src="/images/xora.svg" width={160} height={55} alt="logo" />
          </LinkScroll>
        </li>
        <li className="nav-li">
          <NavLink title="faq" />
          <div className="dot" />
          <NavLink title="download" />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
