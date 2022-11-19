import '../styles.css';
import Logo from '../images/logo.png';
const NavigationBar = () => {
    return (
        <div className='topbar'>
            <img src={Logo} alt="melissaharijanto" className='logo'/>
            <div className='navigation-bar'>
            <a href="#about" className='navigation-link'>about</a>
            <a href="#projects" className='navigation-link'>projects</a>
            <a href="#placeholder" className='navigation-link'>contact</a>
            <a href="https://drive.google.com/file/d/1L8POkttcbFa-k3ISztDwkUAnVZtyVIe6/view?usp=sharing" className='navigation-link'>resume</a>
        </div>
        </div>
    );
}

export default NavigationBar;