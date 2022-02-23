import React from 'react';
import Image from './ProfileImage';
import IconLink from './IconLink';
import NavBar from './NavBar';
import '../css/Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const linkedin = <FontAwesomeIcon icon={faLinkedin} title="LinkedIn"/>
const github = <FontAwesomeIcon icon={faGithub} title="GitHub"/>
const mail = <FontAwesomeIcon icon={faEnvelope} title="email"/>
// const file = <FontAwesomeIcon icon={faFile} title="file"/>

const UserDetails = (props) => {
    let classes = ""
    if(!props.show){
        classes = "user-details hidden-details"
    } else {
        classes = "user-details"
    }

    return(
        <div className={classes}>
            <div className="user-info">
                <div className="close" onClick={props.toggleDisplay}>
                    ×
                </div>
                <Image img={props.image}/>
                <div>
                    <h1>Kyle Andrew Keck</h1>
                    <h2>Web Developer</h2>
                    <p>"Once a year, go someplace you've never been before." -Dalai Lama</p>
                </div>
                <div className = "contact-types">
                <IconLink 
                    icon={linkedin} 
                    link="https://www.linkedin.com/in/kyle-keck-6246a831/" 
                />
                <IconLink 
                    icon={github} 
                    link="https://github.com/keckkyle" 
                />
                <IconLink 
                    icon={mail} 
                    link="mailto:keckkyle@gmail.com" 
                />
                {/* <IconLink 
                    icon={file} 
                    link="https://www.keckkyle.com/files/06.20.pdf" 
                /> */}
                </div>
            </div>
            <NavBar 
              setDetails={props.setDetails} 
              image={props.image} 
              current={props.current}
              toggle = {props.toggleDisplay}
            />
        </div>
    )
}

export default UserDetails