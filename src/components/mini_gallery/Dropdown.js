import React, {useState} from 'react';
import GalleryDisplay from './GalleryDisplay.js';
const Dropdown = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (!open) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    if (!open) {
        return (
            <div>
                <button onClick={handleOpen} className='gallery-button'>
                    <text className='gallery-text'>&#9660; view my posters</text>
                </button>
            </div>
        )
    } else {
        return (
            <div className='center-vertical-view'>
                <button onClick={handleOpen} className='gallery-button'>
                    <text className='gallery-text'>&#9650; hide my posters</text>
                </button>
                <GalleryDisplay/>
                <button className="behance button" onClick={() => window.open("https://www.behance.net/melisara/")}>
                    <text className='button-text'>other works</text>
                </button>
            </div>
        )
    }

}

export default Dropdown;