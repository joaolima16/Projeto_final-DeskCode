import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon} from "./Servercss";

const ChannelButton = () => {
  return(
    <Container>
      <div>
        <HashtagIcon />
        <span>General</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>    

    </Container>
  )
}

export default ChannelButton;