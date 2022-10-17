import "../../styles.css";
import ChatBubble from "./ChatBubble";
import Icon from "../../images/chat-icon.png"

const ChatWindow = () => {

    const intro = () => {
        return (
            <text>
                Hello! My name is Melissa Anastasia Harijanto, and 
                I am currently a CS undergraduate in NUS.
            </text>
        )
    }

    const passion = () => {
        return (
            <text>
                I am interested in web development. My love for creating
                applications stemmed from my experience in learning HTML and CSS 
                in secondary school. 
            </text>
        )
    }

    const now = () => {
        return (
            <text>
                Now, I am learning ways to make good applications through my
                Software Engineering modules, and through my projects
                which are featured below and in my <a href="https://www.github.com/melissaharijanto">
                GitHub profile
                </a>.
            </text>
        )
    }

    const hobbies = () => {
        return (
            <text>
                One of my hobbies include graphic design, which is something I have been
                practicing since I was 12. To the right of the screen are some of my 
                personal projects.
            </text>
        )
    }


    return (
        <div className="chat-window">
            <table className="chat-layout">
                <tr>
                    <td className="chat-icon-cell">
                        <img src ={Icon} className="chat-icon" alt=""/>
                    </td>
                    <td>
                    <text className='display-name'>Melissa</text>
                        <ChatBubble text={intro()}/>
                        <div className="chat-bubble-spacing"/>
                        <ChatBubble text={passion()}/>
                        <div className="chat-bubble-spacing"/>
                        <ChatBubble text={now()}/>
                        <div className="chat-bubble-spacing"/>
                        <ChatBubble text={hobbies()}/>
                    </td>
                </tr>
            </table>
            
        </div>
    );
}

export default ChatWindow;