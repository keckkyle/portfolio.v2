import React from 'react'
import NavItem from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faArchive, faHome } from '@fortawesome/free-solid-svg-icons'

const about = <FontAwesomeIcon icon={faPortrait} />
const project = <FontAwesomeIcon icon={faArchive} />
const home = <FontAwesomeIcon icon={faHome} />

const NavBar = (props) => {
    const image = {
        backgroundImage: `url(${props.image})`,
    }
    return(
        <div className="NavBar">
            <NavItem icon={props.current === "/about" ? home : about}>
                {props.current === "/about" ? "Home" : "About"}
            </NavItem>
            <NavItem icon={props.current === "/projects" ? home : project}>
                {props.current === "/projects" ? "Home" : "Projects"}
            </NavItem>
            <div className="nav-image-item">
                <div style={image} className="nav-image" onClick={props.toggle}></div>
            </div>
        </div>
    )
}

export default NavBar