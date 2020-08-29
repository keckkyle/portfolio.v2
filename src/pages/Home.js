import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Home.css';
import { skills, about } from '../Constants'

const moreStyle = {
    display: "block",
    textDecoration: "none",
    fontWeight: 700,
    color: "#013d61",
    padding: "0.5em 0"
}
const readStyle = {
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    fontWeight: 700,
    color: "#013d61",
}

const Home = (props) => {
    return(
        <div className="home">
            <div className="content">
                <section>
                    <h3>Skills</h3>
                    <div className="images">
                        {skills.map(item => 
                            <img key={item} className="tech-logo" src={item[1]} alt="technology logo"/>
                        )}
                    </div>
                    <h3>About Me</h3>
                    <div className="images">
                        {about.map(item => 
                            <img key={item} className="about-img" src={item} alt={item}/>
                        )}
                    </div>
                    <Link to="/about" style={readStyle}>Read about me</Link>
                </section>
                <section>
                    <h3>Projects</h3>
                    {props.projects.length === 0 ? 
                        <p>Loading...</p> 
                    :
                        <div>
                            {props.projects.map(item =>
                                <div className="proj" key={item.title}>
                                    <h4>{item.title}</h4>
                                    <p>Technologies: {item.technologies}</p>
                                </div>
                            )}
                            <Link to="/projects" style={moreStyle}>View more</Link>
                        </div>
                    }
                </section>
                <section>
                    <p>This site is built using React.js and deployed with AWS Amplify. Photos are stored in AWS S3, and project information is pulled from AWS DynamoDB using Lambda and AWS APIGateway. </p>
                </section>
            </div>
        </div>
    )
}

export default Home;