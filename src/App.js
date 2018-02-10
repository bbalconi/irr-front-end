import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Dashboard from './Dashboard/dashboard';
//import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Home from './Home/home';
import Login from './Login/login';
import Scheduler from "./Scheduler/scheduler"
import Report from "./Report/Report";
import Controls from "./Controls/Controls";
import CreateSystem from "./CreateSystem/createSystem";
import logo from "./logoTwo.png";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import {Provider} from 'mobx-react';
import zoneStore from './stores/zoneStore';



const muiTheme = getMuiTheme({
  palette: {
    "primary1Color": "#689f38",
    "primary3Color": "#7cb342",
    "accent1Color": "#039be5",
    "accent2Color": "#2979ff",
    "accent3Color": "#795548"
  },
  appBar: {
    height: 50,
  }
});

class App extends Component {

  constructor(){
    super()
    this.state = {
      drawerOpen:false,
      dialog:false
    }
  }

  handleToggle = () => {
    console.log('barf');
    this.setState({drawerOpen: !this.state.drawerOpen});
  }
  handleOpen = () => {
    this.setState({dialog: true});
  };

  handleClose = () => {
    this.setState({dialog: false});
  };

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>  
        <Provider zoneStore={new zoneStore()}>
          <Router>
            <div>
            <Dialog
              title="Login"
              modal={false}
              open={this.state.dialog}
              onRequestClose={this.handleClose}
            >
          <Login />
            </Dialog>
            <Drawer open={this.state.drawerOpen}
              docked={false}
              onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
            >
                <MenuItem><Link to='/Dashboard'></Link></MenuItem>
                <MenuItem><Link to='/Scheduler'> Scheduler </Link></MenuItem>
                <MenuItem><Link to='/controls'> Controls </Link></MenuItem>
                <MenuItem><Link to='/historicalReports'> Reports </Link></MenuItem>
                <MenuItem><Link to='/createSystem'>Create a System </Link></MenuItem>
            </Drawer>
              <AppBar 
              showMenuIconButton={true}
              onLeftIconButtonTouchTap={()=>{this.handleToggle()}}	
              title={<div className="titleWrapper"><img src={logo} alt="logo" height="60px"></img> Quench</div>}
                > 
                <FlatButton onClick={this.handleOpen}><span className="navText">Log in</span></FlatButton>
                <FlatButton onClick={this.handleOpen}> <span className="navText">Sign up</span></FlatButton> 
              </AppBar>
                  <div className="container">
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/dashboard' render={() => <Dashboard />} />
                    <Route path='/scheduler' render={() => <Scheduler />} />
                    <Route path='/historicalReports' render={() => <Report data={[5,10,1,3]} size={[500,500]} />} />
                    <Route path='/todaysReport' render={() => <Report />} />
                    <Route path='/controls' render={() => <Controls />} />
                    <Route path='/createSystem' render={() => <CreateSystem />} />
                  </div>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
