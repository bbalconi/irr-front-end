import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Dashboard from './Dashboard/dashboard';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Home from './Home/home';
import Login from './Login/login';
import PropTypes from 'prop-types';
import Scheduler from "./Scheduler/scheduler"
import Report from "./Report/Report";
import Controls from "./Controls/Controls";
import logo from "./logo.png";
import can from "./007-can.png";

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
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>      
        <Router>
          <div>
            {/* <AppBar showMenuIconButton={false}	className="irrAppBar" title={<img src={logo} alt="logo" height="80px"></img>}> */}
            <AppBar showMenuIconButton={false}	className="irrAppBar" >
              <FlatButton><Link to='/Dashboard'> <span className="barf"><img src={can} alt="logo" height="20px"></img>Dashboard</span></Link></FlatButton>
              <FlatButton><Link to='/Scheduler'> Scheduler </Link></FlatButton> 
              <FlatButton><Link to='/controls'> Controls </Link></FlatButton>
              <FlatButton><Link to='/historicalReports'> Reports </Link></FlatButton>
              <FlatButton> <span className="navText">Sign Up</span></FlatButton>
            </AppBar>
                <div className="container">
                  <Route exact path='/' render={() => <Home />} />
                  <Route path='/login' render={() => <Login />} />
                  <Route path='/dashboard' render={() => <Dashboard />} />
                  <Route path='/scheduler' render={() => <Scheduler />} />
                  <Route path='/historicalReports' render={() => <Report data={[5,10,1,3]} size={[500,500]} />} />
                  <Route path='/todaysReport' render={() => <Report />} />
                  <Route path='/controls' render={() => <Controls />} />
                  {/*<Route path='/signup' render={() => <SignUp />} />*/}
                </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
