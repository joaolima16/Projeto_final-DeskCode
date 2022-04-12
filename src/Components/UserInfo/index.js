import React from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from "./Servercss";

export default function UserInfo(){
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>TechKoders</strong>
          <span>#5502</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}