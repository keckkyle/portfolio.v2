import React from 'react';

const IconLink = (props) => (
    <a className="IconLink" href={props.link} target="_blank" rel="noopener noreferrer">
        {props.icon}
    </a>
)

export default IconLink