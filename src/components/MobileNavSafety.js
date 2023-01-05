import React, { useState } from "react";
import CarrotRight from "./icons/CarrotRight";
import MobileNavBtn from "./icons/MobileNavBtn";
import MobileNav from "./MobileNav";

function MobileNavSafety() {
  const [closeSafety, setCloseSafety] = useState(false);

  let back;

  if (closeSafety) {
    back = <MobileNav />;
  }

  return (
    <div className="fixed top-0 right-0 box-border w-[330px] overflow-hidden z-[60] bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll font-sans text-navGrey">
      <nav className="flex mb-8 text-darkGrey cursor-pointer">
        <div className="flex" onClick={() => setCloseSafety(true)}>
          <CarrotRight className="rotate-90" />
          Back
        </div>
      </nav>
      <div className="flex flex-col leading-9">
        <h3 className="text-xl text-darkGrey">Safety Center</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          Overview
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Controlling Your Experience</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          Four steps to a super save account
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Four steps to a super save server
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Role of administrators and moderators on Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Reporting problems to Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Mental health on Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Age-Restricted Content on Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Tips against spam and hacking
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Parents & Educators</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          What is Discord?
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Discord's commitment to a safe and trusted experience
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Helping your teen stay safe on Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Talking about online safety with your teen
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Answering parents' and educators' top questions
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          If your teen encounters an issue
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Working with CARU to protect users on Discord
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">How We Enforce Rules</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          Our policies
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Enforcing our rules
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          How we investigate
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          What actions we take
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          How you can appeal our actions
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Discord's Transparency Report
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          Working with law enforcement
        </a>
      </div>

      <div className="fixed right-0 bottom-0 p-6 h-[120px] w-[330px] flex justify-center flex-col z-[80] bg-white rounded-bl-lg">
        <MobileNavBtn />
      </div>
      {back}
    </div>
  );
}
export default MobileNavSafety;
