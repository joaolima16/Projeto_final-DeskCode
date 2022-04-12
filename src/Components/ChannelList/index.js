import React from "react";
import ChannelButton from "../ChannelButton"
import ChannelButtonVoice from "../ChannelButtonVoice";

import { Container, Category, AddCategoryIcon, CategorySpeaker, ExpandIcon} from "./Servercss";


export default function ChannelList() {
  
  return(
    <Container>
      <Category>
        <ExpandIcon />
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="General" />
      <ChannelButton channelName="Música" />
      <ChannelButton channelName="Bate-Papo" />
      <ChannelButton channelName="Bot" />
      <ChannelButton channelName="Fun" />
      <CategorySpeaker>
        <ExpandIcon />
        <span>Canais de voz</span>
        <AddCategoryIcon />
      </CategorySpeaker>
      <ChannelButtonVoice channelName="General" />
      <ChannelButtonVoice channelName="General" />
      <ChannelButtonVoice channelName="General" />
      <ChannelButtonVoice channelName="General" />
      <ChannelButtonVoice channelName="General" />
    </Container>
  )
}