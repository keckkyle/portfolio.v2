import React from 'react';
import Image from './ProfileImage'
import IconLink from './IconLink'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const github = <FontAwesomeIcon icon={faGithub} />
const mail = <FontAwesomeIcon icon={faEnvelope} />
const file = <FontAwesomeIcon icon={faFile} />

const UserDetails = (props) => {
    let classes = ""
    if(!props.show){
        classes = "UserDetails HiddenDetails"
    } else {
        classes = "UserDetails"
    }
    const profileImage = <Image img={props.image} setDetails={props.showDetails}/>
    return(
    <div className={classes}>
        { props.smallScreen ? <Link to="/">{profileImage}</Link> : <>{profileImage}</>}
        <div className="UserInfo">
            <div className="UserText">
                <h1>Kyle Andrew Keck</h1>
                <h2>Web Developer</h2>
                <p>"Once a year, go someplace you've never been before." -Dalai Lama</p>
            </div>
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
        <NavBar showDetails={props.setDetails}/>
    </div>
)}

export default UserDetails