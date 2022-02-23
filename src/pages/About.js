import React from 'react';
import '../css/About.css';
import {skills, about} from '../Constants'

const About = (props) => (
    <div className="page">
        <div className="about">
            <section>
                <h3>Skills</h3>
                <ul>
                    {skills.map( item =>
                        <li>
                            <img src={item[1]} alt="Technology logo" />
                            {item[0]}
                        </li>
                    )}   
                </ul>
            </section>
            <section className="about-me">
                <h3>About Me</h3>
                <div className="about-item">
                    <img src={about[0]} alt="Michigan"/>
                    <p>I grew up outside of Lansing, Michigan.</p>
                </div>
                <div className="about-item">
                    <img src={about[1]} alt="travel"/>
                    <p>My parents enjoyed taking my sister and me on family trips as children. This cultivated my love of traveling and exploring new places.</p>
                </div>
                <div className="about-item">
                    <img src={about[2]} alt="spartan"/>
                    <p>In 2010, I graduated from Michigan State University with a Bachelor of Science in Park, Recreation and Tourism Resource Studies. While attending MSU, I built and ran the website for MSU's Modern Greek Club.</p>
                </div>
                <div className="about-item">
                    <img src={about[3]} alt="vegas"/>
                    <p>After graduating university, I worked in hotels. I moved to Las Vegas in 2011, where I worked as a front desk manager at The Mirage.</p>
                </div>
                <div className="about-item">
                    <img src={about[4]} alt="teacher"/>
                    <p>With my desire to travel and see the world, I quit my job in Las Vegas and went to Ecuador to where I studied to get a Certificate in Teaching English to Speakers of Other Languages (CELTA). After obtaining a CELTA, I took a job teaching in Taiwan, and later moved to teach in Thailand.</p>
                </div>
                <div className="about-item">
                    <img src={about[5]} alt="Kuala Lumpur"/>
                    <p>While living in Thailand, I began getting back into web development and started studying web development and building personal projects during my free time. In the summer of 2019, I went to Kuala Lumpur, Malaysia to attend the Full-Stack Web Developer course at <a href="https://www.nextacademy.com/" target="_blank" rel="noopener noreferrer">NEXT Academy</a>.</p>
                </div>
            </section>
        </div>
    </div>
)

export default About