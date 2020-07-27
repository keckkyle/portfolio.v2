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
        const { title, image, children } = this.props;
        return(
            <div className="Project">
                <div onClick={handleClick} className="project-link">
                    <p className="title">{title}</p>
                    <p>➤</p>
                </div>
                <div ref={displayRef} className="project-details">
                    <img src={image} alt={title}/>
                    <p>{children}</p>
                </div>
                <div ref={titleRef} className="project-title">
                    <button  onClick={handleClick}>⬅︎ back</button>
                    <h4>{title}</h4>
                </div>
            </div>
        )
    }
}

export default Project
