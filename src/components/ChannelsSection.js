import React from "react";
import ChannelImg from "./images/channel-img.png";

function ChannelsSection() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20 lg:py-[120px] bg-lightGrey">
      <div className="grid gap-x-5 md:grid-cols-8 lg:grid-cols-12 xl:container xl:mx-auto xl:items-center">
        <div className="mt-6 md:mt-0 md:col-span-4 md:col-start-5 lg:col-start-6 lg:col-span-full">
          <img src={ChannelImg} alt="Showing Channel example" />
        </div>
        <div className="md:col-span-4 md:col-start-1 md:row-start-1">
          <h2 className="text-xl md:text-5xl leading-6 md:leading-tight mt-5 md:mt-0">
            Where hanging out is easy
          </h2>
          <p className="mt-6 leading-7 lg:text-xl lg:leading-8">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChannelsSection;
