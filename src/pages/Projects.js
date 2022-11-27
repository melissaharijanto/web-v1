import React from 'react';
import ProjectContainer from '../components/project_container/ProjectContainer';
import '../styles.css';
import TravelLogIcon from '../images/project_icon/travellog.svg'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <ProjectContainer 
                teamName="ERC11PM" 
                projectName="TravelLog" 
                iconSource={TravelLogIcon}
                techStack = {["Javascript", "React Native", "Google Maps API", "Node.js", "Firebase", "RN Testing Library", "Jest"]}
                getLink="https://drive.google.com/file/d/1btqUkEVeYYCeM1tJqklh7v3JmKq8REor/view"
                webLink="https://melissaharijanto.github.io/Travel-Log/"
                />
        </div>
    )
}

export default Projects;