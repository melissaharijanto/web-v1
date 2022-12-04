import '../styles.css';
import Logo from '../images/logo.png';
const NavigationBar = () => {
    return (
        <div className='topbar'>
            <a href="#intro">
                <img src={Logo} alt="melissaharijanto" className='logo'/>
            </a>
            <div className='navigation-bar'>
                <a href="#intro" className='navigation-link'>home</a>
                <a href="#about" className='navigation-link'>about</a>
                <a href="#projects" className='navigation-link'>projects</a>
                <a href="https://drive.google.com/file/d/1L8POkttcbFa-k3ISztDwkUAnVZtyVIe6/view?usp=sharing" className='navigation-link'>resume</a>
            </div>
        </div>
    );
}

export default NavigationBar;