import React from "react";
import VoiceVideo from "./icons/VoiceVideoImg";

function VoiceVideoSection() {
  return (
    <section className="container grid gap-x-5 md:grid-cols-8 px-6 py-14 md:px-10 md:py-20 bg-lightGrey">
      <div className="md:col-span-full md:">
        <h2 className="font-sans text-2xl md:text-4xl md:px-5 md:text-center font-black text-darkGrey leading-[85%] md:leading-8">
          RELIABLE TECH FOR STAYING CLOSE
        </h2>
        <p className="mt-6 leading-7 md:text-center">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div className="mt-6 md:col-span-full">
        <VoiceVideo />
      </div>
    </section>
  );
}

export default VoiceVideoSection;
