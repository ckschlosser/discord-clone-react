import React from "react";
import ServerImg from "./icons/ServerImg";

function ServerSection() {
  return (
    <section className="container grid px-6 py-14">
      <ServerImg />
      <h2 className="text-xl leading-6 mt-5">
        Create an invite-only place where you belong
      </h2>
      <p className="mt-6 leading-7">
        Discord servers are organized into topic-based channels where you can
        collaborate, share, and just talk about your day without clogging up a
        group chat.
      </p>
    </section>
  );
}

export default ServerSection;
