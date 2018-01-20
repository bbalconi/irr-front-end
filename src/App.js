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

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>      
        <Router>
          <div>
            <AppBar title="Login" >
              <FlatButton label="Dashboard"><Link to='/Dashboard'></Link></FlatButton>
              <FlatButton label="Scheduler"><Link to='/Scheduler'></Link></FlatButton> 
              <FlatButton label="Logout"></FlatButton>
              </AppBar>
                <div className="container">
                  <Route exact path='/' render={() => <Home />} />
                  <Route path='/login' render={() => <Login />} />
                  <Route path='/dashboard' render={() => <Dashboard />} />
                  <Route path='/scheduler' render={() => <Scheduler />} />

                  {/*<Route path='/signup' render={() => <SignUp />} />*/}
                </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
