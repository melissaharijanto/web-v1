import "../../styles.css";

const ChatBubble = ({text}) => {
    return (
        <div className="chat-bubble">
            <text>{text}</text>
        </div>
    );
}

export default ChatBubble;