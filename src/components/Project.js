import React from 'react'

const Project = (props) => {
    const { title, image, technologies, purpose, details, link } = props.project;
    return (
        <div className="page">
            <div className="project-title">
                <button  onClick={props.closeProject}>❮ back</button>
                <h4>{title}</h4>
            </div>
            <div className="details">
                <div className="project-brief">
                    { image === "https://s3.amazonaws.com/keckkyle.com.images/undefined" ? <></> : <img className="project-img" src={image} alt={title}/>}
                    <div>                          
                        <p>{purpose}</p>
                        <p>Technologies: {technologies}</p>
                        { !link ? <></>:<p><a href={link} target="_blank" rel="noopener noreferrer"> {link}</a></p> }
                    </div>
                </div>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Project
