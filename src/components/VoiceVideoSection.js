import React from "react";
import VoiceVideo from "./icons/VoiceVideoImg";

function VoiceVideoSection() {
  return (
    <section className="container grid px-6 py-14 bg-lightGrey">
      <h2 className="text-xl ">RELIABLE TECH FOR STAYING CLOSE</h2>
      <p>
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <VoiceVideo />
    </section>
  );
}

export default VoiceVideoSection;
