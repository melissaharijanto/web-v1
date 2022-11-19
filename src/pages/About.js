import React, { useState, useEffect } from 'react';
import GalleryDisplay from '../components/mini_gallery/GalleryDisplay';
import Phone from '../components/phone/Phone';
import '../styles.css';
const About = () => {

    const [width, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => { 

      updateDimensions();

      window.addEventListener("resize", updateDimensions);
      return () => 
        window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    }

    const stylePicker = () => {
       return width < 1024? "vertical-display" : "horizontal-display";
    }

    const addSpacing = () => {
        return width < 1024? "very-small-top-spacing" : "very-small-right-spacing";
    }


    return (
        <div className='about' id='about'>
            <div className={stylePicker()}>
                <Phone/>
                <text className={addSpacing()}></text>
                <GalleryDisplay/>
            </div>
        </div>
    )
}

export default About;