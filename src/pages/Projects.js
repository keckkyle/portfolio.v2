import React from 'react';
import Project from '../components/Project'

const Projects = (props) => (
    <div className="Page">
        <div className="Projects">
            <h2>Projects</h2>
            <Project title="Cultivation Digital Marketing" image="https://www.keckkyle.com/images/cultivationdm.jpg">
                I built this project using React.js to replace the previous site of a digital marketer. He gave me his idea for his site and I made them into reality. The rebuild of his included adding a blog feature where he could add articles to his site. I build a PostgreSQL database and used Python with Flask to build a backend to allow the client to add new content to the blog. Then I added API endpoints to display the posts on the main website.
            </Project>
            <Project title="Werkoot" image="https://www.keckkyle.com/images/werkoot.jpg">
                This project was the final project for my Full Stack Quantum Degree program at Next Academy. This project was build in a group of four with the theme 'Hacking Fitness'. For this web app, I build the muscle measure tool using the opencv library for Python to process the image and calculate the circumference of someone's bicep using a photo. Along with this I helped work on the front end design and build the databases.
            </Project>
            <Project title="Picture Me" image="https://www.keckkyle.com/images/picture-me.jpg">
                This photo sharing app was built using Python and Flask. This is my first full stack project which challenged me to learn how to create and interact with databases.
            </Project>
            <Project title="Photophēmi" image="https://www.keckkyle.com/images/photophemi.jpg">
                This is a front end project built using react.js with API connections to the database I build for Picture Me.
            </Project>
            
        </div>
    </div>
)

export default Projects