import React from 'react';
import Details from './components/UserDetails';
import About from './pages/About';
import Projects from './pages/Projects';
import { Route, Switch} from 'react-router-dom';
import { MobileView } from 'react-device-detect'
import './App.css';
import rotate from './images/rotate.png';

class App extends React.Component {
  state = {
    smallScreen: false,
    displayDetails: true,
    image: "https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/10968522_10106215452395394_3788513541001142363_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=JQ55jONBomIAX_5KYSn&_nc_ht=scontent.fdet1-1.fna&oh=da48689714812dc82424bcd7f84aac24&oe=5F323F37",
    currentView: window.location.pathname
  }

  componentDidMount = () => {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth)
  }

  updateWidth = () => {
    this.setState({
      smallScreen: window.innerWidth < 675 ? true : false
    })
    this.setDetails()
  }
  
  setDetails = () => {
    this.setState({
      currentView: window.location.pathname,
    })
  }

  setDisplay = () => {
    let view = this.state.currentView
    let boolean = true
    if(view !== "/") {
      boolean = false
    }
    this.setState({
      displayDetails: boolean,
    })
  }

  componentDidUpdate = (prevProp, prevState) => {
    if(prevState.currentView !== this.state.currentView){
      this.setDisplay()
    }
  }

  render(){
    const { smallScreen, displayDetails, image } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Details 
          smallScreen = {smallScreen}
          show={displayDetails}
          image={image} 
          setDetails={this.setDetails}
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
