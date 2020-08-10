import React from 'react';
import axios from 'axios';
import Details from './components/UserDetails';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { MobileView } from 'react-device-detect';
import './App.css';
import rotate from './images/rotate.png';


class App extends React.Component {
  state = {
    smallScreen: false,
    displayDetails: true,
    image: "https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/10968522_10106215452395394_3788513541001142363_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=JQ55jONBomIAX_5KYSn&_nc_ht=scontent.fdet1-1.fna&oh=da48689714812dc82424bcd7f84aac24&oe=5F323F37",
    currentView: window.location.pathname,
    projects: []
  }

  componentDidMount = () => {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth)
    axios.get('https://1eovf4zr73.execute-api.us-east-1.amazonaws.com/production/projects')
    .then(result => {
      const projectList = result.data.body
      this.setState({
          projects: projectList.sort((a, b) => (a.id < b.id) ? 1: -1),
      })
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }

  updateWidth = () => {
    this.setState({
      smallScreen: window.innerWidth < 675 ? true : false
    })
  }
  
  setDetails = (path) => {
    this.setState({
      currentView: `/${path}`,
      displayDetails: false,
    })
  }

  toggleDisplay = () => {
    this.setState({
      displayDetails: !this.state.displayDetails,
    })
  }

  render(){
    const { smallScreen, displayDetails, image, projects } = this.state
    return (
      <div className="App">
        <div className="Background-Image">
          <div className="opaque-background">
            <Route path="/" exact>
              {({match}) => (
                <CSSTransition
                  in={match != null}
                  timeout = {400}
                  classNames = 'Home'
                  unmountOnExit
                  onEnter={() => this.setDetails("")}
                >
                  <Home project={projects[0]}/>
                </CSSTransition>
              )}
            </Route>
            <Route path="/about" exact>
                {({match}) => (
                  <CSSTransition
                    in={match != null}
                    timeout = {400}
                    classNames = 'About'
                    unmountOnExit
                    onEnter={() => this.setDetails("about")}
                  >
                      <About />
                  </CSSTransition>
                )}
            </Route>
            <Route path="/projects" exact>
                {({match}) => (
                  <CSSTransition
                    in={match != null}
                    timeout = {400}
                    classNames = 'Projects'
                    unmountOnExit
                    onEnter={() => this.setDetails("projects")}
                  >
                      <Projects projects={projects}/>
                  </CSSTransition>
                )}
            </Route>
          </div>
        </div>
        <Details 
          smallScreen = {smallScreen}
          show={displayDetails}
          image={image} 
          setDetails={this.setDetails}
          current = {this.state.currentView}
          toggleDisplay = {this.toggleDisplay}
        />
        <MobileView>
          <div className="RotateDevice">
            <img src={rotate} alt="Rotate device"/>
            <p>Please turn your device</p>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default App;
