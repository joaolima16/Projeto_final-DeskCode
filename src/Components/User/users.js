import React from 'react';
import {Avatar, Container, Role, User} from './style'

export default function UserList(){
    return( 
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Leozinho SK8" />
            
            <Role>Offline - 18</Role>
            <UserRow nickname="Kaike Carmona " isBot={true}/>
        </Container>
    );
}

function UserRow({nickname,isBot}){
    return(
        <>
            <User>
                <Avatar className={isBot?"bot":""}/>

                <strong>{nickname}</strong>     
                {isBot && <span>Bot</span>}
            </User>
        </>  
    );
}