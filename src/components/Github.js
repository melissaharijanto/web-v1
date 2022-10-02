import GithubImage from '../images/github.png';
import '../styles.css'
const Github = () => {
    const onClick = () => {
        window.open("https://www.github.com/melissaharijanto");
    } 

    return (
    <button className='github button' onClick={onClick}>
        <div className='horizontal-display'>
            <div className='icon'>
                <img src={GithubImage} alt="Github" className='icon'/>
            </div>
            <div className='button-text'>
                <text>github</text>
            </div>
        </div>
    </button>
    );
}

export default Github;