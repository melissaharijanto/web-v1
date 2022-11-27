import React, { useState, useEffect } from 'react';
import GetButton from "./GetButton";
import WebsiteButton from "./WebsiteButton";

const ProjectContainer = ({projectName, teamName, iconSource, techStack, getLink, webLink}) => {

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
       return width < 1200? "project-container-two" : "project-container";
    }

    let techStackList = "";

    const listTechStack = () => {
        if (techStack != null) {
            for (let i = 0; i < techStack.length; i++) {
                techStackList += techStack[i];
                if (i != techStack.length - 1) {
                    techStackList += " " + String.fromCharCode("0x00B7") + " ";
                }
            }
            return techStackList;
        } 
        return "No data provided.";
    }

    return (
        <div className={stylePicker()}>
            <div className="horizontal-display">
                <img src={iconSource} className="app-icon"/>
                <div className="vertical-display-left-align app-left-spacing">
                    <text className="app-heading">{projectName}</text>
                    <text className="app-subheading">{teamName}</text>
                    <div className="horizontal-display">
                    <GetButton link={getLink}/>
                    <WebsiteButton link={webLink}/>
                    </div>
                    <text className="app-techstack">
                        {listTechStack()}
                    </text>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default ProjectContainer;