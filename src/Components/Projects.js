import React from 'react';
import ProjectCard from './ProjectCard'
import "./Projects.css";

function Projects(){
    return(
        <div className="card_section">
            <ProjectCard 
                title="ProjectName"
                description="Description of project"
            />
            <ProjectCard 
                title="ProjectName"
                description="Description of project"
            />
            <ProjectCard 
                title="ProjectName"
                description="Description of project"
            />
            <ProjectCard 
                title="ProjectName"
                description="Description of project"
            />
        </div>
    )
}

export default Projects;