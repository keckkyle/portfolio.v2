import React from 'react';
import Image from './ProfileImage'
import IconLink from './IconLink'
import NavBar from './NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const linkedin = <FontAwesomeIcon icon={faLinkedin} title="LinkedIn"/>
const github = <FontAwesomeIcon icon={faGithub} title="GitHub"/>
const mail = <FontAwesomeIcon icon={faEnvelope} title="email"/>
const file = <FontAwesomeIcon icon={faFile} title="file"/>

const UserDetails = (props) => {
    let classes = ""
    if(!props.show){
        classes = "UserDetails HiddenDetails"
    } else {
        classes = "UserDetails"
    }

    return(
        <div className={classes}>
            <div className="UserInfo">
                <Image img={props.image}/>
                <div className="UserText">
                    <h1>Kyle Andrew Keck</h1>
                    <h2>Web Developer</h2>
                    <p>"Once a year, go someplace you've never been before." -Dalai Lama</p>
                </div>
                <div className = "ContactTypes">
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
                <IconLink 
                    icon={file} 
                    link="https://www.keckkyle.com/files/06.20.pdf" 
                />
                </div>
            </div>
            <NavBar setDetails={props.setDetails} image={props.image}/>
        </div>
    )
}

export default UserDetails