import React from "react";
import Nav from "./Nav";
import LeftHero from "./icons/LeftHero";
import RightHero from "./icons/RightHero";
import HeroBG from "./icons/HeroBG";

function Hero() {
  return (
    <header className="bg-heroBlue z-0 relative overflow-hidden md:min-h-[708px]">
      <Nav />
      <div className="text-white container grid gap-x-5 md:grid-cols-8 lg:grid-cols-12 px-6 py-14 md:px-10 md:py-20 lg:py-[120px] min-w-full">
        <div className="col-span-4 md:col-span-5 lg:col-start-3 lg:col-span-8">
          <h1 className="text-3xl md:text-[56px] font-sans font-black leading-[85%] md:leading-[95%] lg:text-center">
            IMAGINE A PLACE...
          </h1>
          <p className="mt-6 md:mt-10 leading-6 md:leading-7 lg:text-xl lg:leading-9 lg:text-center">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="container flex md:row-start-2 col-span-4 lg:col-start-3 lg:col-span-8 lg:justify-center">
          <button className="flex text-left items-center mt-6 rounded-3xl py-4 px-8 text-xl bg-white text-black leading-6 md:hover:duration-500 md:hover:text-heroBlue md:hover:shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Download from Google Play
          </button>
        </div>
      </div>

      <div className="hidden md:absolute md:block top-20 bottom-0 left-2/4 ml-[-1320px] lg:ml-[-1280px] w-full h-full -z-20">
        <HeroBG />
      </div>
      <div className="hidden md:block md:absolute bottom-0 left-2/4 ml-[-70px] lg:ml-[370px]">
        <RightHero />
      </div>
      <div className="block w-full max-w-[880px] relative z-10 -ml-20 md:hidden lg:block lg:absolute lg:bottom-0 lg:left-2/4 lg:ml-[-1030px] lg:max-w-none lg:w-[689px] lg:h-[352px]">
        <LeftHero width="auto" height="auto" />
      </div>
    </header>
  );
}
export default Hero;
