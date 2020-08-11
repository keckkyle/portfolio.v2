import React from 'react'

class Project extends React.Component {

    displayRef = React.createRef()
    titleRef = React.createRef()

    handleClick = () => {
        const details = this.displayRef.current
        const title = this.titleRef.current
        details.classList.toggle('open')
        title.classList.toggle('open')
    }

    render(){
        const { handleClick, displayRef, titleRef } = this;
        const { project } = this.props
        const { title, image, technologies, purpose, details, link} = project;
        return(
            <div className="Project">
                <div onClick={handleClick} className="project-link">
                    <p className="text">{title}</p>
                    <p className="arrow">➤</p>
                </div>
                <div ref={titleRef} className="project-title">
                    <button  onClick={handleClick}>❮ back</button>
                    <h4>{title}</h4>
                </div>
                <div ref={displayRef} className="details">
                    <div className="project-brief">
                        { project['image'] === "https://s3.amazonaws.com/keckkyle.com.images/undefined" ? <></> : <img src={image} alt={title}/>}
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
}

export default Project
