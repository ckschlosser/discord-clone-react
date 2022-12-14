import React, { useState } from "react";
import CarrotRight from "./icons/CarrotRight";
import MobileNavBtn from "./icons/MobileNavBtn";
import MobileNav from "./MobileNav";

function MobileNavMA() {
  const [closeModAcademy, setCloseModAcademy] = useState(false);

  let back;

  if (closeModAcademy) {
    back = <MobileNav />;
  }
  return (
    <div className="fixed top-0 right-0 box-border w-[330px] overflow-hidden z-[60] bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll font-sans text-navGrey">
      <nav className="flex mb-8 text-darkGrey cursor-pointer">
        <div className="flex" onClick={() => setCloseModAcademy(true)}>
          <CarrotRight className="rotate-90" />
          Back
        </div>
      </nav>
      <div className="flex flex-col leading-9">
        <h3 className="text-xl text-darkGrey">Moderator Academy</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          Overview
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Basics</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          100: An Intro to the DMA
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          103: Basic Channel Setup
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          104: How to Report Content to Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          110: Moderator Etiquette
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          111: Your Responsibilities as a Moderator
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Setup and Function</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          201: Permissions on Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          202: Handling Difficult Scenarios
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          203: Developing Server Rules
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          204: Ban Appeals
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          205: Utilizing Role Colors
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          206: Best Practices for Reporting Tools
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          210: Moderator Recruitment
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Advanced Community Management</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          301: Implementing Verification Gates
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          302: Developing Moderator Guidelines
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          303: Facilitating Positive Environments
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          310: Managing Moderation Teams
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          311: Understanding and Avoiding Moderator Burnout
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          312: Internal Conflict Resolution
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          313: How to Moderate Voice Channels
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          314: Training and Onboarding New Moderators
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          321: Auto Moderation in Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          322: Usage and Benefits of Webhooks and Embeds
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          323: Usage of XP Systems
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          331: Community Engagement
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          332: Fostering Healthy Communities
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          333: Planning Community Events
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          334: Community Partnerships
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          341: Understanding Your Community Through Insights
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Moderation Seminars</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          401: Transparency in Moderation
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          403: Sensitive Topics
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          405: Practicalities of Moderating Adult Channels
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          407: Managing Exponential Membership Growth
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          432: Internationalization of a Community
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          441: Community Governance Structures
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          442: Using Insights to Improve Community Growth and Engagement
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          443: Ban Evasion and Advanced Harassment
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          451: Reddit x Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          452: Twitch x Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          453: Patreon x Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          454: Bringing Other Communities To Discord
        </a>
        <a href="#" className="py-2 px-4 hover:underline">
          455: Schools x Discord
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Graduate Courses</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          531: Parasocial Relationships
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Author Credits</h3>
        <a href="#" className="py-2 px-4 hover:underline">
          Author Credits
        </a>
      </div>

      <div className="fixed right-0 bottom-0 p-6 h-[120px] w-[330px] flex justify-center flex-col z-[80] bg-white rounded-bl-lg">
        <MobileNavBtn />
      </div>
      {back}
    </div>
  );
}
export default MobileNavMA;
