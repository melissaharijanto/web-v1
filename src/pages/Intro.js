import React from 'react';
import '../styles.css';
import Github from '../components/Github';
import Linkedin from '../components/Linkedin';
import IntroWindow from '../components/IntroWindow';
import Behance from '../components/Behance';
import Email from '../components/Email';
const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='padding-horizontal'>
                <IntroWindow/>
            </div>
                
            <div className='flex-row'>
                <div className='small-right-spacing small-top-spacing'>
                    <Github/>
                </div>
                <div className='small-right-spacing small-top-spacing'>
                    <Linkedin/>
                </div>
                <div className='small-right-spacing small-top-spacing'>
                    <Email/>
                </div>
                <div className='small-top-spacing'>
                    <Behance/>
                </div>
                
            </div>
        </div>
    )
}

export default Intro;