import React from "react";
import Nav from "./Nav";
import LeftHero from "./icons/LeftHero";

function Hero() {
  return (
    <header className=" bg-heroBlue">
      <Nav />
      <div className="container text-white px-6 py-14">
        <h1 className="text-3xl font-sans font-black leading-[85%]">
          IMAGINE A PLACE...
        </h1>
        <p className="mt-6 leading-6">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="container ">
          <button className="flex text-left items-center mt-6 mr-6 rounded-3xl py-4 px-8 text-xl bg-white text-black leading-6">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Download for Mac
          </button>
          <button className="mt-6 rounded-3xl py-4 px-8 bg-darkGrey text-xl leading-6">
            Open Discord in your browser
          </button>
        </div>
      </div>
      <div className="block w-full max-w-[880px] relative z-10 -ml-20">
        <LeftHero />
      </div>
    </header>
  );
}
export default Hero;
