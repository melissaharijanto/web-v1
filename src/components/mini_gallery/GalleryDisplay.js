import React from 'react';
import PosterOne from '../../images/mini_gallery/1.svg';
import PosterTwo from '../../images/mini_gallery/2.svg';
import PosterThree from '../../images/mini_gallery/3.svg';
import PosterFour from '../../images/mini_gallery/4.svg';
import PosterFive from '../../images/mini_gallery/5.svg';
import PosterSix from '../../images/mini_gallery/6.svg';
import Email from '../Email';

const GalleryDisplay = () => {
    return (
        <div className='vertical-center'>
            <div className='horizontal-display'>
                <img src={PosterOne} className="gallery-image" alt="1"/>
                <img src={PosterThree} className="gallery-image" alt="2"/>
                <img src={PosterTwo} className="gallery-image" alt="3"/>
            </div>
            <div className='horizontal-display'>
                <img src={PosterFour} className="gallery-image" alt="4"/>
                <img src={PosterFive} className="gallery-image" alt="5"/>
                <img src={PosterSix} className="gallery-image" alt="6"/>
            </div>

            <text className='very-small-top-spacing'></text>

            <div className='horizontal-display'>
                <Email/>
                <text className='very-small-right-spacing'></text>
                <button className="behance button">
                    <text className='button-text'>other works</text>
                </button>
            </div>
        </div>
    );
}

export default GalleryDisplay;