import React, { useState } from "react";
import DiscordImg from "./icons/DiscordImg";
import CarrotRight from "./icons/CarrotRight";
import MobileNavBtn from "./icons/MobileNavBtn";
import MobileNavSafety from "./MobileNavSafety";
import MobileNavMA from "./MobileNavMA";

function MobileNav() {
  const [showSafety, setShowSafety] = useState(false);
  const [showModAcademy, setShowModAcademy] = useState(false);
  let safety;
  let modAcademy;

  if (showSafety) {
    safety = <MobileNavSafety />;
  }
  if (showModAcademy) {
    modAcademy = <MobileNavMA />;
  }

  return (
    <div className="fixed box-border w-[330px] overflow-hidden z-50 bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll top-0 right-0">
      <div className="w-full">
        <nav className="flex justify-between w-100%">
          <DiscordImg fill="#23272a" />
        </nav>
        <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
        <nav className="text-darkGrey font-sans font-light">
          <a
            href="#"
            className="flex py-2 px-4 text-lightestBlue bg-lightGrey rounded-md hover:underline"
          >
            Home
          </a>
          <a href="#" className="flex py-2 px-4 text-black hover:underline">
            Download
          </a>
          <a href="#" className="flex py-2 px-4 text-black hover:underline">
            Nitro
          </a>
          <a href="#" className="flex py-2 px-4 text-black hover:underline">
            Discover
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-black hover:underline"
            onClick={() => setShowSafety(true)}
          >
            <div className="flex">Safety</div>

            <CarrotRight className="-rotate-90 ml-2" />
          </a>
          <a
            href="#"
            className="flex py-2 px-4 text-black hover:underline"
            onClick={() => setShowModAcademy(true)}
          >
            <div className="flex">Mod Academy</div>
            <CarrotRight className="-rotate-90 ml-2" />
          </a>
          <a href="#" className="flex py-2 px-4 text-black hover:underline">
            Support
          </a>
          <a href="#" className="flex py-2 px-4 text-black">
            Blog
          </a>
          <a href="#" className="flex py-2 px-4 text-black hover:underline">
            Careers
          </a>
        </nav>

        <div className="fixed right-0 bottom-0 p-6 h-[120px] w-[330px] flex justify-center flex-col z-[80] bg-white rounded-bl-lg">
          <MobileNavBtn />
        </div>
      </div>
      {safety}
      {modAcademy}
    </div>
  );
}

export default MobileNav;
