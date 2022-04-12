import {Container, Avatar, Message, Header, Content} from './stylesCM';
export { Mention } from './stylesCM';

export default function ChannelMessage({
    author,
    date,
    content,
    hasMention,
    isBot
}){
    return(
        <Container className={hasMention ? "metion": ""}>
            <Avatar className={isBot ? "bot" : ""} />
            <Message>
                <Header>
                    <strong>{author}</strong>
                    {isBot && <span>bot</span>}
                    <time>{date}</time>
                </Header>
                <Content>
                    {content}
                </Content>
            </Message>
        </Container>
    );
}