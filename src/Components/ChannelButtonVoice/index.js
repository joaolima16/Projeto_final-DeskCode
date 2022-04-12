import React from "react";

import { Container, InviteIcon, SettingsIcon, SpeakerIcon} from "./Servercss";

const ChannelButtonVoice = () => {
  return(
    <Container>
      <div>
        <SpeakerIcon />
        <span>Chat de Voz</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
      

    </Container>
  )
}

export default ChannelButtonVoice;