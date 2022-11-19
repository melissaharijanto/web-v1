import LinkedinImage from '../images/linkedin.png';
import '../styles.css'
const Linkedin = () => {
    const onClick = () => {
        window.open("https://www.linkedin.com/in/melissaharijanto/");
    } 

    return (
    <button className='linkedin button' onClick={onClick}>
        <div className='horizontal-display'>
            <div className='icon'>
                <img src={LinkedinImage} alt="LinkedIn" className='icon'/>
            </div>
            <div className='button-text-two'>
                <text>linkedin</text>
            </div>
            </div>
    </button>
    );
}

export default Linkedin;