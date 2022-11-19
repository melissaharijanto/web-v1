import BehanceImage from '../images/behance.png';
import '../styles.css'
const Behance = () => {
    const onClick = () => {
        window.open("https://www.behance.net/melisara/");
    } 

    return (
    <button className='behance button' onClick={onClick}>
        <div className='horizontal-display'>
            <div className='icon'>
                <img src={BehanceImage} alt="Behance" className='icon'/>
            </div>
            <div className='button-text'>
                <text>behance</text>
            </div>
        </div>
    </button>
    );
}

export default Behance;