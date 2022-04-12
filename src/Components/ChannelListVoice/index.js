import React from "react";
import ChannelButton from "../ChannelButton"

import { Container, Category, AddCategoryIcon } from "./Servercss";


const ChannelList = () => {
  
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="General" />
      <ChannelButton channelName="Música" />
      <ChannelButton channelName="Bate-Papo" />
      <ChannelButton channelName="Bot" />
      <ChannelButton channelName="Fun" />
      <CategorySpeaker>
        <span>Canais de Voz</span>
        <AddCategoryIcon />
      </CategorySpeaker>
    </Container>
  )
}

export default ChannelList;