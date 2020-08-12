import React from 'react';
import '../css/About.css';

import github from '../images/github.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import js from '../images/js.svg';
import logoReact from '../images/react.svg';
import python from '../images/python.svg';
import java from '../images/java.svg';
import swift from '../images/swift.svg';
import sqlite from '../images/sqlite.svg';
import postgresql from '../images/postgresql.svg';

const About = (props) => (
    <div className="page">
        <div className="about">
            <section>
                <h3>Skills</h3>
                <ul>
                    <li>
                        <img src={html} alt="Technology logo"/>
                        HTML
                    </li>
                    <li>
                        <img src={css} alt="Technology logo"/>
                        CSS
                    </li>
                    <li>
                        <img src={logoReact} alt="Technology logo"/>
                        React.js
                    </li>
                    <li>
                        <img src={js} alt="Technology logo"/>
                        JavaScript
                    </li>
                    <li>
                        <img src={python} alt="Technology logo"/>
                        Python
                    </li>
                    <li>
                        <img src={java} alt="Technology logo"/>
                        Java
                    </li>                
                    <li>
                        <img src={swift} alt="Technology logo"/>   
                        Swift
                    </li>
                    <li>
                        <img src={sqlite} alt="Technology logo"/>
                        SQLite
                    </li>
                    <li>
                        <img src={postgresql} alt="Technology logo"/>
                        PostgreSQL
                    </li>
                    <li>
                        <img src={github} alt="Technology logo"/>
                        Github
                    </li>
                </ul>
            </section>
            <section>
                <h3>My Story</h3>
                <p>
                    I grew up in Michigan in a family who wasn’t content to just sit at home. We took vacations to different parts of the world which made me interested in tourism. This interest led me study it at Michigan State University. While attending MSU, I started running the website for MSU’s Modern Greek Club. I enjoyed spending time on the project up until I graduated with my degree in tourism
                </p>
                <p>
                    Since university, I’ve worked in varying industries in different countries. I considered pursuing web design more seriously, but life always seemed to get in the way. While teaching in Thailand, I finally had the opportunity to make that desire a reality. I started learning all that I could through online bootcamps and anything else that would satiate my desire to learn more. I quickly decided that I wanted to be a Web Developer which motivated me to attend a Full-Stack Web Development bootcamp in Kuala Lumpur.
                </p>
                <p>
                    I’m always looking for more opportunities to become a better web developer and am pursuing a position to do so. I want to hone my skills and start this new chapter of my life exclusively as a Web Developer. I’m excited to overcome challenges and produce beautifully crafted pages and elements for others to experience and enjoy.
                </p>
            </section>
        </div>
    </div>
)

export default About