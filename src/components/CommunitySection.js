import React from "react";
import CommunityImg from "./icons/CommunityImg";

function CommunitySection() {
  return (
    <section className="container grid gap-x-5 md:grid-cols-8 px-6 py-14 md:px-10 md:py-20 bg-white">
      <div className="mt-6 md:mt-0 md:col-span-4">
        <CommunityImg />
      </div>
      <div className="md:col-start-5 md:col-span-4">
        <h2 className="text-xl md:text-5xl leading-6 md:leading-tight mt-5 md:mt-0">
          From few to a fandom
        </h2>
        <p className="mt-6 leading-7">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </section>
  );
}

export default CommunitySection;
