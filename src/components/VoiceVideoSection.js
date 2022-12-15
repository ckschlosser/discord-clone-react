import React from "react";
import VoiceVideo from "./icons/VoiceVideoImg";

function VoiceVideoSection() {
  return (
    <section className="container grid px-6 py-14 bg-lightGrey">
      <h2 className="font-sans text-2xl font-black text-darkGrey leading-[85%]">
        RELIABLE TECH FOR STAYING CLOSE
      </h2>
      <p className="mt-6 leading-7">
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <VoiceVideo />
    </section>
  );
}

export default VoiceVideoSection;
