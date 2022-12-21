import React from "react";
import DiscordImg from "./icons/DiscordImg";
import CloseX from "./icons/CloseImg";
import CarrotRight from "./icons/CarrotRight";
import MobileNavBtn from "./icons/MobileNavBtn";

function MobileNavMA() {
  return (
    <div className="relative box-border max-w-[330px] w-screen overflow-hidden z-50 bg-white h-screen rounded-tl-lg rounded-bl-lg pl-6 pt-6 pr-12 pb-[120px] overflow-y-scroll -left-2.5 font-sans text-navGrey">
      <nav className="flex mb-8 text-darkGrey ">
        <div className="flex">
          <CarrotRight className="rotate-90" />
          Back
        </div>
      </nav>
      <div className="flex flex-col leading-9">
        <h3 className="text-xl text-darkGrey">Moderator Academy</h3>
        <a href="#" className="py-2 px-4">
          Overview
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Basics</h3>
        <a href="#" className="py-2 px-4">
          100: An Intro to the DMA
        </a>
        <a href="#" className="py-2 px-4">
          103: Basic Channel Setup
        </a>
        <a href="#" className="py-2 px-4">
          104: How to Report Content to Discord
        </a>
        <a href="#" className="py-2 px-4">
          110: Moderator Etiquette
        </a>
        <a href="#" className="py-2 px-4">
          111: Your Responsibilities as a Moderator
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Setup and Function</h3>
        <a href="#" className="py-2 px-4">
          201: Permissions on Discord
        </a>
        <a href="#" className="py-2 px-4">
          202: Handling Difficult Scenarios
        </a>
        <a href="#" className="py-2 px-4">
          203: Developing Server Rules
        </a>
        <a href="#" className="py-2 px-4">
          204: Ban Appeals
        </a>
        <a href="#" className="py-2 px-4">
          205: Utilizing Role Colors
        </a>
        <a href="#" className="py-2 px-4">
          206: Best Practices for Reporting Tools
        </a>
        <a href="#" className="py-2 px-4">
          210: Moderator Recruitment
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Advanced Community Management</h3>
        <a href="#" className="py-2 px-4">
          301: Implementing Verification Gates
        </a>
        <a href="#" className="py-2 px-4">
          302: Developing Moderator Guidelines
        </a>
        <a href="#" className="py-2 px-4">
          303: Facilitating Positive Environments
        </a>
        <a href="#" className="py-2 px-4">
          310: Managing Moderation Teams
        </a>
        <a href="#" className="py-2 px-4">
          311: Understanding and Avoiding Moderator Burnout
        </a>
        <a href="#" className="py-2 px-4">
          312: Internal Conflict Resolution
        </a>
        <a href="#" className="py-2 px-4">
          313: How to Moderate Voice Channels
        </a>
        <a href="#" className="py-2 px-4">
          314: Training and Onboarding New Moderators
        </a>
        <a href="#" className="py-2 px-4">
          321: Auto Moderation in Discord
        </a>
        <a href="#" className="py-2 px-4">
          322: Usage and Benefits of Webhooks and Embeds
        </a>
        <a href="#" className="py-2 px-4">
          323: Usage of XP Systems
        </a>
        <a href="#" className="py-2 px-4">
          331: Community Engagement
        </a>
        <a href="#" className="py-2 px-4">
          332: Fostering Healthy Communities
        </a>
        <a href="#" className="py-2 px-4">
          333: Planning Community Events
        </a>
        <a href="#" className="py-2 px-4">
          334: Community Partnerships
        </a>
        <a href="#" className="py-2 px-4">
          341: Understanding Your Community Through Insights
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Moderation Seminars</h3>
        <a href="#" className="py-2 px-4">
          401: Transparency in Moderation
        </a>
        <a href="#" className="py-2 px-4">
          403: Sensitive Topics
        </a>
        <a href="#" className="py-2 px-4">
          405: Practicalities of Moderating Adult Channels
        </a>
        <a href="#" className="py-2 px-4">
          407: Managing Exponential Membership Growth
        </a>
        <a href="#" className="py-2 px-4">
          432: Internationalization of a Community
        </a>
        <a href="#" className="py-2 px-4">
          441: Community Governance Structures
        </a>
        <a href="#" className="py-2 px-4">
          442: Using Insights to Improve Community Growth and Engagement
        </a>
        <a href="#" className="py-2 px-4">
          443: Ban Evasion and Advanced Harassment
        </a>
        <a href="#" className="py-2 px-4">
          451: Reddit x Discord
        </a>
        <a href="#" className="py-2 px-4">
          452: Twitch x Discord
        </a>
        <a href="#" className="py-2 px-4">
          453: Patreon x Discord
        </a>
        <a href="#" className="py-2 px-4">
          454: Bringing Other Communities To Discord
        </a>
        <a href="#" className="py-2 px-4">
          455: Schools x Discord
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Graduate Courses</h3>
        <a href="#" className="py-2 px-4">
          531: Parasocial Relationships
        </a>
      </div>
      <div className="border-t-[1px] border-lightGrey mt-6 mb-4"></div>
      <div className="flex flex-col leading-6">
        <h3 className="text-xl text-darkGrey">Author Credits</h3>
        <a href="#" className="py-2 px-4">
          Author Credits
        </a>
      </div>
      <div className="fixed top-0 right-0 m-6">
        <CloseX />
      </div>
      <MobileNavBtn />
    </div>
  );
}
export default MobileNavMA;
