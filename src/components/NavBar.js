import React from 'react'
import NavItem from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faArchive } from '@fortawesome/free-solid-svg-icons'

const about = <FontAwesomeIcon icon={faPortrait} />
const project = <FontAwesomeIcon icon={faArchive} />

const NavBar = (props) => (
    <div className="NavBar" onClick={props.showDetails}>
        <NavItem icon={about}>
            About
        </NavItem>
        <NavItem icon={project}>
            Projects
        </NavItem>
    </div>
)

export default NavBar