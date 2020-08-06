import React from 'react';
import { Link } from 'react-router-dom'
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

const style = {
    textDecoration: "none",
    fontWeight: 700,
    color: "#004650"
}

const Home = (props) => {
    const background={
        backgroundImage: "url(https://s3.amazonaws.com/keckkyle.com.images/walk.jpeg)"
    }
    const padding = {
        padding: "0"
    }

    return(
        <div style={padding} className="Page">
            <div style={background} className="Background-Image">
                <div className="opaque-background">
                    <div className="content">
                        <section>
                            <h3>Skills</h3>
                            <img className="tech-logo" src={html} alt="Technology logo"/>
                            <img className="tech-logo" src={css} alt="Technology logo"/>
                            <img className="tech-logo" src={logoReact} alt="Technology logo"/>
                            <img className="tech-logo" src={js} alt="Technology logo"/>
                            <img className="tech-logo" src={python} alt="Technology logo"/>
                            <img className="tech-logo" src={java} alt="Technology logo"/>
                            <img className="tech-logo" src={swift} alt="Technology logo"/>   
                            <img className="tech-logo" src={sqlite} alt="Technology logo"/>
                            <img className="tech-logo" src={postgresql} alt="Technology logo"/>
                            <img className="tech-logo" src={github} alt="Technology logo"/>
                        </section>
                        <section>
                            <h3>Projects</h3>
                            {props.project === undefined ? 
                                <p>Loading...</p> 
                            :
                                <div className="proj-preview">
                                    <div className="proj">
                                        <h4>{props.project.title}</h4>
                                        <p>Technologies: {props.project.technologies}</p>
                                    </div>
                                    <div className="proj">
                                        <h4>{props.project.title}</h4>
                                        <p>Technologies: {props.project.technologies}</p>
                                    </div>
                                    <p><Link to="/projects" style={style}>View more</Link></p>
                                </div>
                            }
                        </section>
                        <section>
                            <p>This site is built using React.js and deployed with AWS Amplify. Photos are stored in AWS S3, and project information is pulled from AWS DynamoDB using AWS APIGateway and Lambda. </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;