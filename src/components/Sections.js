import React from "react";
import ChannelsSection from "./ChannelsSection";
import ServerSection from "./ServerSection";
import CommunitySection from "./CommunitySection";
import VoiceVideoSection from "./VoiceVideoSection";
import DownloadSection from "./DownloadSection";

function Sections() {
  return (
    <div>
      <ServerSection />
      <ChannelsSection />
      <CommunitySection />
      <VoiceVideoSection />
      <DownloadSection />
    </div>
  );
}

export default Sections;
