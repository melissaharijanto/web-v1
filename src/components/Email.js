import EmailImage from '../images/email.png';
import '../styles.css'
const Email = () => {
    const onClick = () => {
        window.open("mailto:melissaharijanto18@gmail.com");
    } 

    return (
    <button className='email button' onClick={onClick}>
        <div className='horizontal-display'>
            <div className='icon'>
                <img src={EmailImage} alt="Github" className='icon'/>
            </div>
            <div className='button-text'>
                <text>email</text>
            </div>
        </div>
    </button>
    );
}

export default Email;