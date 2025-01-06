import '../assets/styles/Message.css'
import Messages from "../Components/Messages";
import Wrapper from "../Components/Wrapper";
import { messagesData } from '../data/MessagesData.jsx';

const Message = () => {
    return (
        <Wrapper>
            <Messages messagesData={messagesData} />
        </Wrapper>
    )
}

export default Message