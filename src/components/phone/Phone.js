import "../../styles.css";
import ChatWindow from "./ChatWindow";
import Input from "./Input";
import Island from "./Island";

const Phone = () => {
    return (
        <div className='phone'>
            <div className='screen'>
                <Island/>
                <ChatWindow/>
                <Input/>
            </div>
        </div>
    );
}

export default Phone;