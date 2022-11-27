import '../styles.css';
import React, { useState }from 'react';
import ProjectContainer from '../components/project_container/ProjectContainer';
import TravelLogIcon from '../images/project_icon/travellog.svg';
import TrackOIcon from '../images/project_icon/tracko.svg';
import IsaraIcon from '../images/project_icon/isara.svg';

const Projects = () => {

    const [displayTravelLog, setDisplayTravelLog] = useState(true);
    const [displayTrackO, setDisplayTrackO] = useState(false);
    const [displayIsara, setDisplayIsara] = useState(false);

    const showTravelLog = () => {
        setDisplayTravelLog(true);
        setDisplayTrackO(false);
        setDisplayIsara(false);
    }

    const showTrackO = () => {
        setDisplayTravelLog(false);
        setDisplayTrackO(true);
        setDisplayIsara(false);
    }

    const showIsara = () => {
        setDisplayTravelLog(false);
        setDisplayTrackO(false);
        setDisplayIsara(true);
    }

    return (
        <div className='projects' id='projects'>
            <div>
                <button onClick={showTravelLog}>TravelLog</button>
                <button onClick={showTrackO}>TrackO</button>
                <button onClick={showIsara}>Isara</button>
            </div>

            {displayTravelLog 
                ? <ProjectContainer 
                    teamName="ERC11PM" 
                    projectName="TravelLog" 
                    iconSource={TravelLogIcon}
                    techStack = {["Javascript", "React Native", "Google Maps API", "Node.js", "Firebase", "RN Testing Library", "Jest"]}
                    getLink="https://drive.google.com/file/d/1btqUkEVeYYCeM1tJqklh7v3JmKq8REor/view"
                    webLink="https://melissaharijanto.github.io/Travel-Log/"
                    repoLink="https://github.com/melissaharijanto/Travel-Log"
                    contributions="" /> 
                : null
            }
            
            { displayTrackO
                ? <ProjectContainer 
                    teamName="TrackO Dev Team" 
                    projectName="TrackO" 
                    iconSource={TrackOIcon}
                    techStack = {["Java", "JavaFX", "JUnit5", "Jackson", "Gradle"]}
                    getLink="https://github.com/AY2223S1-CS2103T-W15-3/tp/releases/tag/v1.4"
                    webLink="https://ay2223s1-cs2103t-w15-3.github.io/tp/"
                    repoLink="https://github.com/ay2223S1-CS2103T-w15-3/tp"
                    contributions=""/>
                : null
            }

            { displayIsara
                ? <ProjectContainer 
                    teamName="Melissa Anastasia Harijanto" 
                    projectName="Isara Task Manager" 
                    iconSource={IsaraIcon}
                    techStack = {["Java", "JavaFX", "JUnit5", "Gradle"]}
                    getLink="https://github.com/melissaharijanto/ip/releases/tag/A-Release"
                    webLink="https://melissaharijanto.github.io/ip/"
                    repoLink="https://github.com/melissaharijanto/ip"
                    contributions=""/>
                : null
            }
        </div>
    )
}

export default Projects;