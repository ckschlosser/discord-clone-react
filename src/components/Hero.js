import React from "react";
import Nav from "./Nav";
import LeftHero from "./icons/LeftHero";
import RightHero from "./icons/RightHero";
import HeroBG from "./icons/HeroBG";

function Hero() {
  return (
    <header className="bg-heroBlue z-0 relative overflow-x-hidden">
      <Nav />
      <div className="text-white container grid gap-x-5 md:grid-cols-8  px-6 py-14 md:px-10 md:py-20">
        <div className="col-span-4 md:col-span-5">
          <h1 className="text-3xl md:text-[56px] font-sans font-black leading-[85%] md:leading-[95%] ">
            IMAGINE A PLACE...
          </h1>
          <p className="mt-6 md:mt-10 leading-6 md:leading-7">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="container flex md:row-start-2 col-span-4">
          <button className="flex text-left items-center mt-6 rounded-3xl py-4 px-8 text-xl bg-white text-black leading-6">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Download from Google Play
          </button>
          {/* <button className="mt-6 rounded-3xl py-4 px-8 bg-darkGrey text-xl leading-6">
            Open Discord in your browser
          </button> */}
        </div>
      </div>

      {/* Need to have this bg-image centered at the bottom of the hero section <div className="absolute bottom-0 inset-x-0 -z-20">
        <HeroBG />
      </div> */}
      <div className="block w-full max-w-[880px] relative z-10 -ml-20 md:hidden">
        <LeftHero />
      </div>
    </header>
  );
}
export default Hero;
