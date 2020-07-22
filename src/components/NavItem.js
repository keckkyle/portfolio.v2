import React from 'react';
import { Link } from 'react-router-dom'

const NavItem = (props) => (
    <Link to={`/${props.children.toLowerCase()}`} className="NavItem">
        <p className="nav-icon">{props.icon}</p>
        <p className="nav-text">{props.children}</p>
    </Link>
)

export default NavItem;