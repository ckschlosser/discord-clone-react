import React from "react";
import DiscordImg from "./icons/DiscordImg";
import CloseX from "./icons/CloseImg";
import CarrotRight from "./icons/CarrotRight";
import MobileNavBtn from "./icons/MobileNavBtn";

function MobileNav() {
  return (
    <div className="relative box-border w-[330px] overflow-hidden z-50 bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll -left-2.5">
      <div className="w-full">
        <nav className="flex justify-between w-100%">
          <DiscordImg fill="#23272a" />
        </nav>
        <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
        <nav className="text-darkGrey font-sans font-light">
          <a
            href="#"
            className="flex py-2 px-4 text-lightestBlue bg-lightGrey rounded-md"
          >
            Home
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Download
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Nitro
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Discover
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-black">
            <div className="flex">Safety</div>

            <CarrotRight className="-rotate-90 ml-2" />
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            <div className="flex">Mod Academy</div>
            <CarrotRight className="-rotate-90 ml-2" />
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Support
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Blog
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Careers
          </a>
        </nav>

        <button className="fixed top-0 right-0 m-6 z-[80]">
          <CloseX />
        </button>
        <MobileNavBtn />
      </div>
    </div>
  );
}

export default MobileNav;
