import React, { useState, useEffect } from 'react';
import NewestProject from './NewestProject';
import TrackOBanner from '../../images/banners/tracko_banner.svg'
import TravelLogLogo from '../../images/project_icon/travellog.svg'
import IsaraLogo from '../../images/project_icon/isara.svg'

const HomeContainer = ({newestProjectFunction, appFunctionOne, appFunctionTwo}) => {

    const [width, setWindowWidth] = useState(window.innerWidth);

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
        if (width > 0 && width <= 600) {
            return "project-container-two";
        } else if (width > 600 && width <= 1200) {
            return "project-container-three";
        } else if (width > 1200 && width <= 1450) {
            return "project-container-two";
        } else {
            return "project-container";
        }
    }

    const getCurrentDateAndTime = () => {
        var currentDate = new Date();
        var month = monthArray[currentDate.getMonth()];
        var date = currentDate.getDate();
        var year = currentDate.getFullYear();
        var day = dayArray[currentDate.getDay()];
        console.log(day + ", " + date + " " + month + " " + year);
        return day + ", " + date + " " + month + " " + year;
        
    }

    return (
        <div className={stylePicker()}>
            <div className="left-align">
                <text className='app-subheading'>{getCurrentDateAndTime()}</text>
                <br/>
                <text className='app-heading'> Welcome to My Software Projects.</text>
                <hr/>
                <text className='app-subheading'>Latest Release</text>
                <NewestProject image={TrackOBanner} newestProjectFunction={newestProjectFunction}/>
                <text className='app-subheading'>Featured projects by the same developer</text>
                <div className='horizontal-display'>
                    <div className='vertical-display-left-align'>
                        <button className='transparent-button' onClick={appFunctionOne}>
                            <img src={TravelLogLogo} className="app-icon-two"></img>
                        </button>
                        <text className='app-subheading-two full-opacity very-small-top-spacing'>TravelLog</text>
                    </div>
                    <div className='vertical-display-left-align'>
                        <button className='tra-button' onClick={appFunctionTwo}>
                            <img src={IsaraLogo} className="app-icon-two"></img>
                        </button>
                        <text className='app-subheading-two full-opacity very-small-top-spacing'>Isara Chatbot</text>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default HomeContainer;