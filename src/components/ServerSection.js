import React from "react";
import ServerImg from "./icons/ServerImg";

function ServerSection() {
  return (
    <section className="container grid gap-x-5 md:grid-cols-8 px-6 py-14 md:px-10 md:py-20">
      <div className="mt-6 md:mt-0 md:col-span-4">
        <ServerImg />
      </div>
      <div className="md:col-start-5 md:col-span-4">
        <h2 className="text-xl md:text-5xl leading-6 md:leading-tight mt-5 md:mt-0">
          Create an invite-only place where you belong
        </h2>
        <p className="mt-6 leading-7">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </section>
  );
}

export default ServerSection;
