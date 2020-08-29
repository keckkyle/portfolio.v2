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
                    <img src={about[0]} />
                    <p>I grew up outside of Lansing, Michigan.</p>
                </div>
                <div className="about-item">
                    <img src={about[1]} />
                    <p>My parents enjoyed taking my sister and me on family trips as children. This cultivated my love of traveling and exploring new places.</p>
                </div>
                <div className="about-item">
                    <img src={about[2]} />
                    <p>In 2010, I graduated from Michigan State University with a Bachelor of Science in Park, Recreation and Tourism Resource Studies. While attending MSU, I built and ran the website for MSU's Modern Greek Club.</p>
                </div>
                <div className="about-item">
                    <img src={about[3]} />
                    <p>After graduating university, I worked in hotels. I moved to Las Vegas in 2011, where I worked as a front desk manager at The Mirage.</p>
                </div>
                <div className="about-item">
                    <img src={about[4]} />
                    <p>With my desire to travel and see the world, I quit my job in Las Vegas and went to Ecuador to where I studied to get a Certificate in Teaching English to Speakers of Other Languages (CELTA). After obtaining a CELTA, I took a job teaching in Taiwan, and later moved to teach in Thailand.</p>
                </div>
                <div className="about-item">
                    <img src={about[5]} />
                    <p>While living in Thailand, I began getting back into web development and started studying web development and building personal projects during my free time. In the summer of 2019, I went to Kuala Lumpur, Malaysia to attend <a href="https://www.nextacademy.com/" target="_blank" rel="noopener noreferrer">NEXT Academy</a>'s Full-Stack Web Developer course.</p>
                </div>
                {/* <p>
                    I grew up in Michigan in a family who wasn’t content to just sit at home. We took vacations to different parts of the world which made me interested in tourism. This interest led me study it at Michigan State University. While attending MSU, I started running the website for MSU’s Modern Greek Club. I enjoyed spending time on the project up until I graduated with my degree in tourism
                </p>
                <p>
                    Since university, I’ve worked in varying industries in different countries. I considered pursuing web design more seriously, but life always seemed to get in the way. While teaching in Thailand, I finally had the opportunity to make that desire a reality. I started learning all that I could through online bootcamps and anything else that would satiate my desire to learn more. I quickly decided that I wanted to be a Web Developer which motivated me to attend a Full-Stack Web Development bootcamp in Kuala Lumpur.
                </p>
                <p>
                    I’m always looking for more opportunities to become a better web developer and am pursuing a position to do so. I want to hone my skills and start this new chapter of my life exclusively as a Web Developer. I’m excited to overcome challenges and produce beautifully crafted pages and elements for others to experience and enjoy.
                </p> */}
            </section>
        </div>
    </div>
)

export default About