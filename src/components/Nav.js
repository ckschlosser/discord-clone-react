import React, { useState } from "react";
import DiscordImg from "./icons/DiscordImg";
import MobileNav from "./MobileNav";
import CloseX from "./icons/CloseImg";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  showMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  let menu;
  let menuMask;
  let close;

  if (showMenu) {
    menu = <MobileNav />;
    menuMask = (
      <div
        className="z-50 top-0 left-0 bg-black/30 w-full h-full fixed"
        onClick={() => setShowMenu(false)}
      ></div>
    );
    close = (
      <button
        className="fixed top-0 right-0 m-6 z-[100]"
        onClick={() => setShowMenu(false)}
      >
        <CloseX />
      </button>
    );
  }

  return (
    <nav className="container min-w-full px-6 md:px-10 h-20 flex justify-between items-center bg-heroBlue z-30 font-cabin">
      <div className="flex">
        <a href="https://discord.com">
          <DiscordImg fill="white" />
        </a>
      </div>
      <ul className="hidden lg:flex lg:text-white lg:gap-x-12">
        <a href="https://discord.com/download" className="hover:underline">
          <li>Download</li>
        </a>
        <a href="https://discord.com/nitro" className="hover:underline">
          <li>Nitro</li>
        </a>
        <a href="https://discord.com/servers" className="hover:underline">
          <li>Discover</li>
        </a>
        <a href="https://discord.com/safetycenter" className="hover:underline">
          <li>Safety</li>
        </a>
        <a
          href="https://support.discord.com/hc/en-us"
          className="hover:underline"
        >
          <li>Support</li>
        </a>
        <a href="https://discord.com/blog" className="hover:underline">
          <li>Blog</li>
        </a>
        <a href="https://discord.com/careers" className="hover:underline">
          <li>Careers</li>
        </a>
      </ul>
      <div className="flex items-center">
        <button className="hidden py-[0.6rem] px-4 mr-4 rounded-3xl bg-white text-black text-sm font-extralight lg:block">
          Login
        </button>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="lg:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
          ></path>
        </svg>
      </div>
      {menuMask}
      {menu}
      {close}
    </nav>
  );
}
export default Nav;
