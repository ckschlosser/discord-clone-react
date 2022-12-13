import React from "react";
import CommunityImg from "./icons/CommunityImg";

function CommunitySection() {
  return (
    <section className="container grid px-6 py-14 bg-lightGrey">
      <CommunityImg />
      <h2 className="text-xl ">From few to a fandom</h2>
      <p>
        Get any community running with moderation tools and custom member
        access. Give members special powers, set up private channels, and more.
      </p>
    </section>
  );
}

export default CommunitySection;
