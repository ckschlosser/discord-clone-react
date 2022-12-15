import React from "react";
import ChannelsImg from "./icons/ChannelsImg";

function ChannelsSection() {
  return (
    <section className="container grid px-6 py-14 bg-lightGrey">
      <ChannelsImg />
      <h2 className="text-xl mt-5">Where hanging out is easy</h2>
      <p className="mt-6 leading-7">
        Grab a seat in a voice channel when you’re free. Friends in your server
        can see you’re around and instantly pop in to talk without having to
        call.
      </p>
    </section>
  );
}

export default ChannelsSection;
