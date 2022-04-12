import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChannelMessage, { Mention } from '../ChannelMessages/ChannelMessage';
import {Container, Messages, InputWrapper, Input, InputIcon} from './stylesCD'

const url = "https://mcdjkewzvzrltjxzgkow.supabase.co";
const annonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZGprZXd6dnpybHRqeHpna293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg0MDkyMTksImV4cCI6MTk2Mzk4NTIxOX0.cD1tABV73_VJSPIjBQ9U0HK2lkVn1HnAAag4B343HKo";
const clientDB = createClient(url,annonKey);

export default function ChannelData(){
    const [userMessages,setUserMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const params = useParams();
    useEffect(()=>{
        clientDB
            .from('messages')
            .select('*')
            .then(({data})=>{
                setUserMessages(data)
            })
            listeningMessages((newMessage)=>{
                setUserMessages((currentValue)=>[...currentValue, newMessage]);
                console.log(userMessages)
            })
    },[]);

    return(
        <>
            <Container>
                <Messages>
                    {userMessages.map((msg)=>{
                        const date = formatDate(msg.created_at);
                        const content = msg.content.concat(" ");
                        const checkContent = checkMention(content)
                        if(checkContent){
                            var startMention = content.indexOf("@");
                            var endMentionString = content.substring(startMention)
                            endMentionString = endMentionString.indexOf(" ");
                        }
                        return(
                            <ChannelMessage
                                key={msg.id}
                                author={msg.author}
                                date={date}
                                content={checkContent
                                    ?
                                    <>
                                        {content.substring(0,startMention)}
                                        <Mention>
                                            {content.substring(startMention,endMentionString + startMention)}
                                        </Mention>
                                        {content.substring(startMention + endMentionString)}
                                    </>
                                    :
                                    content
                                }
                            />
                        )
                    })}
                </Messages>
                <InputWrapper>
                    <Input type='text' 
                        value={inputValue}
                        placeholder='Conversar em #chat-livre'
                        onChange={(event)=>setInputValue(event.target.value)}
                        onKeyPress={(event)=>{
                            if(event.key === "Enter"){
                                insertMessage(params.userName, inputValue) //- User (login page)
                                setInputValue("");
                            }
                        }}
                        />
                    <InputIcon />
                </InputWrapper>
            </Container>
        </>
    );
}
function formatDate(dateTime){
    let date = dateTime.substring(0,dateTime.indexOf("T"));
    date = date.split("-").reverse();
    date = date.reduce((ac,pv)=>(`${ac}/` + pv));
    return date
}
function checkMention(contentMsg){
    if(contentMsg.indexOf("@") === -1){
        return false
    }else{
        return true
    }
}
function insertMessage(user,content){
    clientDB
        .from("messages")
        .insert([
            {
                author:user,
                content:content,
            }
        ])
        .then(()=>{})
}
function listeningMessages(updateList){
        clientDB
            .from("messages")
            .on("INSERT",(response)=>updateList((response.new)))
            .subscribe()
}