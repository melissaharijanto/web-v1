import React, { useState, useEffect } from 'react';
import PosterOne from '../../images/mini_gallery/1.svg';
import PosterTwo from '../../images/mini_gallery/2.svg';
import PosterThree from '../../images/mini_gallery/3.svg';
import PosterFour from '../../images/mini_gallery/4.svg';
import PosterFive from '../../images/mini_gallery/5.svg';
import PosterSix from '../../images/mini_gallery/6.svg';
import Email from '../Email';
import GallerySkeleton from './GallerySkeleton';


const GalleryDisplay = ({width}) => {

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [loading4, setLoading4] = useState(true);
    const [loading5, setLoading5] = useState(true);
    const [loading6, setLoading6] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
        setTimeout(() => {
            setLoading2(false);
        }, 2750)
        setTimeout(() => {
            setLoading3(false);
        }, 3000)
        setTimeout(() => {
            setLoading4(false);
        }, 3250)
        setTimeout(() => {
            setLoading5(false);
        }, 3500)
        setTimeout(() => {
            setLoading6(false);
        }, 3750)
    }, [])

    return (
        <div className='vertical-center'>
            <div className='horizontal-display'>
                {loading ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterOne} className="gallery-image" alt="1"/>    
                )}

                {loading2 ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterThree} className="gallery-image" alt="2"/>
                )}
                
                {loading3 ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterTwo} className="gallery-image" alt="3"/>
                )}
            </div>
            <div className='horizontal-display'>
                    
                {loading4 ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterFour} className="gallery-image" alt="4"/>
                )}
            
                {loading5 ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterFive} className="gallery-image" alt="5"/>
                )}

                {loading6 ? (
                    <GallerySkeleton/>
                ) : (
                    <img src={PosterSix} className="gallery-image" alt="6"/>
                )}
            </div>

            <text className='very-small-top-spacing'></text>

            { width >= 1024? (
            <div className='horizontal-display'>
                <button className="other-works button" onClick={() => window.open("https://www.behance.net/melisara/")}>
                    <text className='button-text'>visit my gallery</text>
                </button>
            </div>
            ) : null
            }
        </div>
    );
}

export default GalleryDisplay;