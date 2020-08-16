import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Project from '../components/Project'
import '../css/Projects.css';

class Projects extends React.Component {
    state = {
        viewProject: false,
        projectIndex: -1,
    }

    setProjectIndex = (index) => {
        this.setState({
            projectIndex: index,
        })
    }

    setViewProject = () => {
        this.setState({
            viewProject: !this.state.viewProject,
        })
    }

    openProject = (index) => {
        this.setProjectIndex(index)
        this.setViewProject()
    }

    render(){
        const { viewProject , projectIndex } = this.state
        const { projects } = this.props
        return (
            <div className="page">
                <div className="Projects">
                    <h3>Projects</h3>
                    <div className="project-list">
                        {projects.map((item, index) =>
                            <div key={item.id} onClick={() => this.openProject(index)} className="project-link">
                                <p className="text">{item.title}</p>
                                <p className="arrow">➤</p>
                            </div>
                        )}   
                    </div>  
                    <CSSTransition
                        in = {viewProject}
                        timeout = {400}
                        classNames = 'Projects'
                        unmountOnExit
                        onExited = {() => this.setProjectIndex(-1)}
                    >
                        <Project 
                          project={projects[projectIndex]} 
                          closeProject={this.setViewProject}
                        />
                    </CSSTransition>
                </div>
            </div>
        )
    }
}

export default Projects