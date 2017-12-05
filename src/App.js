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
} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Home from './Home/home';
import Login from './Login/login';
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password:''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  login(){
    axios.post('/authenticate',{
      email:this.state.email,
      password:this.state.password
    });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
         <AppBar title="Login" >
           <FlatButton label="Dashboard"><Link to='/Dashboard'></Link></FlatButton>
           {/* <FlatButton label="Scheduler"><Link to='/Scheduler'></Link></FlatButton> */}
           <FlatButton label="Logout"></FlatButton>
          </AppBar>
            <div className="container">
              <Route exact path='/' render={() => <Home />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='/dashboard' render={() => <Dashboard />} />
              {/*<Route path='/signup' render={() => <SignUp />} />*/}
            </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
