import React, { useState, useEffect } from 'react';
import GetButton from "./GetButton";
import WebsiteButton from "./WebsiteButton";
import Github from '../../images/github.png';
import { vmin } from '../../functions/UnitConverter.js'

const ProjectContainer = ({projectName, teamName, iconSource, techStack, getLink, webLink, repoLink, contributions}) => {

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

    const getButtonHeight = () => {
        return vmin(1.75) + (2 * vmin(0.5)) + vmin(0.15);
    }

    const openRepo = (link) => () => {
        window.open(link);
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
                        <button className="repo-button" onClick={openRepo(repoLink)}>
                            <img src={Github} width={getButtonHeight()} height={getButtonHeight()} className="git-repo-img"/>
                        </button>
                    </div>
                    
                    <text className="app-techstack">
                        {listTechStack()}
                    </text>
                </div>
            </div>
            <hr></hr>
            <p>Description</p>
            <p>{contributions}</p>
        </div>
    )
}

export default ProjectContainer;