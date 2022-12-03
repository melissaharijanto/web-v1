import '../styles.css';
import React, { useState, useEffect }from 'react';
import ProjectContainer from '../components/project_container/ProjectContainer';
import TravelLogIcon from '../images/project_icon/travellog.svg';
import TrackOIcon from '../images/project_icon/tracko.svg';
import IsaraIcon from '../images/project_icon/isara.svg';
import HomeContainer from '../components/project_container/HomeContainer';

const Projects = () => {

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

    const fontSizeContentPicker = () =>{
        if (width > 0 && width <= 600) {
            return "mobile-paragraph-content"
        } else if (width > 600 && width <= 1550){
            return "paragraph-content-2";
        } else {
            return "paragraph-content";
        }
    }

    const [displayTravelLog, setDisplayTravelLog] = useState(false);
    const [displayTrackO, setDisplayTrackO] = useState(false);
    const [displayIsara, setDisplayIsara] = useState(false);
    const [displayHome, setDisplayHome] = useState(true);

    const showTravelLog = () => {
        setDisplayTravelLog(true);
        setDisplayTrackO(false);
        setDisplayIsara(false);
        setDisplayHome(false);
        document.getElementById("travelLog").focus();
    }

    const showHome = () => {
        setDisplayTravelLog(false);
        setDisplayTrackO(false);
        setDisplayIsara(false);
        setDisplayHome(true);
        document.getElementById("home").focus();
    }

    const showTrackO = () => {
        setDisplayTravelLog(false);
        setDisplayTrackO(true);
        setDisplayIsara(false);
        setDisplayHome(false);
        document.getElementById("trackO").focus();
    }

    const showIsara = () => {
        setDisplayTravelLog(false);
        setDisplayTrackO(false);
        setDisplayIsara(true);
        setDisplayHome(false);
        document.getElementById("isara").focus();
    }

    useEffect(() => {
        document.getElementById("home").focus();
    }, [])

    const travelLogDescription = "TravelLog is an application where you can plan your itineraries and view other users' itineraries. Built "
            + "with Firebase as a non-SQL database and for user authentication, as well as Google Maps API."

    const travelLogContributions = () => {
        return (
            <ul className={fontSizeContentPicker()}>
                <li>Set up Firebase dependencies on the project, as well as implementing user authentication.</li>
                <li>Set up Google Maps API (Autocomplete for reverse-geocoding for users to input their accommodations into the application), as well as the maps to show users recommendations of places to go.</li>
                <li>Implement form authentication using Formik validation and Yup libraries.</li>
                <li>Wrote 100+ unit test cases with RN Testing Library and Jest and conducted user testing with 10+ university students.</li>
                <li>For more contributions, please view the <a href="https://docs.google.com/spreadsheets/d/1mYGnZncCnt-LIcZ3JnWp9C4aTH9PHHvQ91TdY70SNvM/edit?usp=sharing">project log</a>.</li>
            </ul>
        );
    }

    const trackODescription = "TrackO is a CLI-based desktop application, paired with a GUI for home-based business owners to track their inventory and their customers' orders. Built with Java and JavaFX.";

    const trackOContributions = () => {
        return (
            <ul className={fontSizeContentPicker()}>
                <li>Implement the UI of the application with JavaFX.</li>
                <li>Write JUnit test cases for 10 classes.</li>
                <li>Contribute to the base model of one of the major components of the application.</li>
                <li>Contribute 3.7k lines of Java code to the project.</li>
                <li>Implement 5 features for the application.</li>
                <li>For more information, please view the following <a href="https://ay2223s1-cs2103t-w15-3.github.io/tp/team/melissaharijanto.html">document</a>.</li>
            </ul>
        );
    }

    const isaraDescription = "Isara Chatbot is a chatbot that mainly helps you in managing your tasks. This application is built with Java "
    + "for its functionalities and JavaFX for its GUI."

    const isaraContributions = () => {
        return (
            <ul className={fontSizeContentPicker()}>
                <li>Implement various features related to task-managing, such as marking and unmarking a task, 
                    rescheduling, etc. For more information, visit the project website linked above by pressing 
                    the red button.</li>
                <li>Designed and implemented the GUI with JavaFX. Images can be seen in the project website as well.</li>
            </ul>
        )
    }

    return (
        <div className='projects' id='projects'>
            <div className="grid-bar">
                <div className='grid-button'>
                <button onClick={showHome} id="home" className="project-bar-button leftmost">Home</button>
                </div>
                <div className='grid-button'>
                    <button onClick={showTravelLog} id="travelLog" className="project-bar-button">TravelLog</button>
                </div>
                <div className='grid-button'>
                    <button onClick={showTrackO} id="trackO"className="project-bar-button">TrackO</button>
                </div>
                <div className='grid-button rightmost'>
                    <button onClick={showIsara} id="isara" className="project-bar-button rightmost">Isara</button>
                </div>
                
            </div>

            {displayHome
                ? <HomeContainer 
                    newestProjectFunction={showTrackO}
                    appFunctionOne={showTravelLog}
                    appFunctionTwo={showIsara}
                    />
                : null }

            {displayTravelLog 
                ? <ProjectContainer 
                    showHome={showHome}
                    teamName="ERC11PM" 
                    projectName="TravelLog" 
                    iconSource={TravelLogIcon}
                    techStack = {["Javascript", "React Native", "Google Maps API", "Node.js", "Firebase", "RN Testing Library", "Jest"]}
                    getLink="https://drive.google.com/file/d/1btqUkEVeYYCeM1tJqklh7v3JmKq8REor/view"
                    webLink="https://melissaharijanto.github.io/Travel-Log/"
                    repoLink="https://github.com/melissaharijanto/Travel-Log"
                    description={travelLogDescription}
                    duration="May - August 2022"
                    contributions={travelLogContributions()} /> 
                : null
            }
            
            { displayTrackO
                ? <ProjectContainer 
                    showHome={showHome}
                    teamName="TrackO Dev Team" 
                    projectName="TrackO" 
                    iconSource={TrackOIcon}
                    techStack = {["Java", "JavaFX", "JUnit5", "Jackson", "Gradle"]}
                    getLink="https://github.com/AY2223S1-CS2103T-W15-3/tp/releases/tag/v1.4"
                    webLink="https://ay2223s1-cs2103t-w15-3.github.io/tp/"
                    repoLink="https://github.com/ay2223S1-CS2103T-w15-3/tp"
                    description={trackODescription}
                    duration="September - November 2022"
                    contributions={trackOContributions()}/>
                : null
            }

            { displayIsara
                ? <ProjectContainer 
                    showHome={showHome}
                    teamName="Melissa Anastasia Harijanto" 
                    projectName="Isara Chatbot" 
                    iconSource={IsaraIcon}
                    techStack={["Java", "JavaFX", "JUnit5", "Gradle"]}
                    getLink="https://github.com/melissaharijanto/ip/releases/tag/A-Release"
                    webLink="https://melissaharijanto.github.io/ip/"
                    repoLink="https://github.com/melissaharijanto/ip"
                    description={isaraDescription}
                    duration="August - September 2022"
                    contributions={isaraContributions()}/>
                : null
            }
        </div>
    )
}

export default Projects;