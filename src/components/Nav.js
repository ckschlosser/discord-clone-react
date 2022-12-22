import React from "react";
import DiscordImg from "./icons/DiscordImg";

function Nav() {
  return (
    <nav className="container min-w-full px-6 md:px-10 h-20 flex justify-between items-center bg-heroBlue z-30 font-cabin">
      <div className="flex">
        <a href="/#">
          <DiscordImg fill="white" />
        </a>
      </div>
      <div className="flex items-center">
        <button className="py-[0.6rem] px-4 mr-4 rounded-3xl bg-white text-black text-sm font-extralight">
          Login
        </button>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
export default Nav;
