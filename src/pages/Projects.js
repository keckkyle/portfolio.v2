import React from 'react';
import Project from '../components/Project'

const Projects = (props) => (
    <div className="Page">
        <div className="Projects">
            <h2>Projects</h2>
            {props.projects.map(item =>
                <Project key={item.id} title={item.title} image={item.image}>
                    {item.description}
                </Project>
            )}                
        </div>
    </div>
)

export default Projects