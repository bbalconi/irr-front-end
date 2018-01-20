import React, { Component } from 'react';
import logo from './logo.svg';
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
            <AppBar className="irrAppBar" title="Quench" >
              <FlatButton> <Link to='/Dashboard'> Dashboard </Link></FlatButton>
              <FlatButton><Link to='/Scheduler'> Scheduler </Link></FlatButton> 
              <FlatButton > Logout</FlatButton>
            </AppBar>
                <div className="container">
                  <Route exact path='/' render={() => <Home />} />
                  <Route path='/login' render={() => <Login />} />
                  <Route path='/dashboard' render={() => <Dashboard />} />
                  <Route path='/scheduler' render={() => <Scheduler />} />
                  <Route path='/historicalReports' render={() => <Report />} />
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
