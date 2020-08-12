import React from 'react';
import Project from '../components/Project'
import '../css/Projects.css';

const Projects = (props) => (
    <div className="page">
        <div className="Projects">
            <h3>Projects</h3>
            {props.projects.map(item =>
                <Project 
                  key={item.id} 
                  project={item}
                />
            )}                
        </div>
    </div>
)

export default Projects