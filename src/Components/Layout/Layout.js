import ChannelData from "../ChannelData/channelData";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import ChannelList from "../ChannelList";
import ServerList from "../ServerList/ServerList";
import ServerName from "../ServerName";
import UserList from "../User/users";
import UserInfo from "../UserInfo";
import { Grid } from "./Styles";


export default function Layout(){
    return(
        <Grid>
            <ServerList/>
            <ServerName />
            <ChannelList />
            <UserInfo />
            <ChannelInfo/>
            <ChannelData />
            <UserList/>
        </Grid>
    );
}