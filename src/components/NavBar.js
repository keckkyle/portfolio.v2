import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faArchive } from '@fortawesome/free-solid-svg-icons'

const about = <FontAwesomeIcon icon={faPortrait} />
const project = <FontAwesomeIcon icon={faArchive} />

const NavBar = (props) => {
    const image = {
        backgroundImage: `url(${props.image})`,
    }
    return(
        <div className="NavBar" onClick={props.setDetails}>
            <NavItem icon={about}>
                About
            </NavItem>
            <NavItem icon={project}>
                Projects
            </NavItem>
            <div className="nav-image-item">
                <Link to="/">
                    <p className="hidden-text">profile</p>
                    <div style={image} className="nav-image"></div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar