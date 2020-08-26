import React from 'react';
import ProjectCard from './ProjectCard'
import "./Projects.css";

function Projects(){
    return(
        <div>
            <h1 className="project_heading">Work & projects</h1>
            <div className="card_section">
                <ProjectCard 
                    title="3D Visualizer"
                    description="3D Visualizer draws 5G measurements in 3D environment
                    that helps to analyze the results and locate problems. I was one of two developers in this project. Software was made using Unity.
                    3D Visualizer also supports Oculus virtual reality headsets."
                    link="https://www.youtube.com/watch?v=AkBXC9Wb8V8"
                    linkDestination ="youtube"
                />
                <ProjectCard 
                    title="SpiderLand"
                    description="Personal project made with Unity.
                    Giant spider that utilizes inverted kinematics for leg placements. 
                    Bird flock system that tries to simulate how birds move in flocks. 
                    Interactive environment, that includes falling trees and breakable rocks."
                    link="https://www.youtube.com/watch?v=AkBXC9Wb8V8"
                    linkDestination ="youtube"
                />
                <ProjectCard 
                    title="Curve Bullet"
                    description="Mobilegame created while studying in Oulu GameLab. I was working as lead programmer. +1000 downloads."
                    link="https://play.google.com/store/apps/details?id=com.HumbleHombres.CurveBullet&hl=fi"
                    linkDestination ="googleplay"
                />
                
            </div>
        </div>
        
    )
}

export default Projects;