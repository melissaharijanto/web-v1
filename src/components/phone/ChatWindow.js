import "../../styles.css";
import ChatBubble from "./ChatBubble";
import Icon from "../../images/chat-icon.png"

const ChatWindow = () => {

    const intro = () => {
        return (
            <text>
                Hello! My name is Melissa Anastasia Harijanto, and 
                I am currently a CS undergraduate in NUS. I am also a graphic design hobbyist, and
                the following posters are my personal projects. (Tip: If you are on mobile,
                click on the 'view my posters' button!)
            </text>
        )
    }

    const now = () => {
        return (
            <text>
                I am interested in web development. I am currently learning ways to make good applications through my
                Software Engineering modules, and through my projects which are featured below and in my <a href="https://www.github.com/melissaharijanto" className="dark-link-color">
                GitHub profile
                </a>.
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
                        <ChatBubble text={now()}/>
                    </td>
                </tr>
            </table>
            
        </div>
    );
}

export default ChatWindow;