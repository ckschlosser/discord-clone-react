import React from "react";
import DiscordImg from "./icons/DiscordImg";
import CloseX from "./icons/CloseImg";

import CarrotRight from "./icons/CarrotRight";

function MobileModal() {
  return (
    <div className="relative top-0 bottom-0 right-0 box-border w-[330px] overflow-hidden z-50 bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll translate-x-0 translate-y-0 -left-2.5">
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

            <CarrotRight />
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            <div className="flex">Mod Academy</div>
            <CarrotRight />
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
      </div>

      <button className="fixed top-0 right-0 m-6 z-[80]">
        <CloseX />
      </button>
      <div className="fixed left-0 right-0 bottom-0 p-6 h-[120px] flex flex-end flex-col z-[80] bg-white">
        <button className="flex justify-center rounded-3xl py-[7px] px-4 text-sm leading-6 bg-mainBlue text-white w-full">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <g fill="currentColor">
              <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
              <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
            </g>
          </svg>
          Download for Mac
        </button>
      </div>
    </div>
  );
}

export default MobileModal;
