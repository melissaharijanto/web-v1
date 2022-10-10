import '../styles.css';
import Logo from '../images/logo.png';
const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <a href="#about" className='navigation-link'>about</a>
            <a href="#placeholder" className='navigation-link'>projects</a>
            <a href="#placeholder" className='navigation-link'>contact</a>
            <a href="#placeholder" className='navigation-link'>resume</a>
        </div>
    );
}

export default NavigationBar;