import React from "react";
import VoiceVideo from "./images/voice-video.png";

function VoiceVideoSection() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20 lg:pt-[120px] bg-lightGrey">
      <div className="grid gap-x-5 md:grid-cols-8 lg:grid-cols-12 xl:container xl:mx-auto xl:items-center">
        <div className="md:col-span-full lg:col-start-2 lg:col-end-12">
          <h2 className="font-sans text-2xl md:text-4xl lg:text-[40px] md:px-5 md:text-center font-black text-darkGrey leading-[85%] md:leading-8">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p className="mt-6 leading-7 md:text-center lg:text-xl lg:leading-8">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div className="mt-6 md:col-span-full lg:justify-self-center">
          <img src={VoiceVideo} alt="Voice and Video chat section" />
        </div>
      </div>
    </section>
  );
}

export default VoiceVideoSection;
