import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dashboard from './Dashboard/dashboard';
import axios from 'axios';

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
      <MuiThemeProvider >
        <AppBar title="Login" >
          <FlatButton label="Dashboard" onClick={this.login}/>
          <FlatButton label="Scheduler" onClick={this.login}/>
          <FlatButton label="Logout" onClick={this.login}/>
        </AppBar>
        <TextField
          value={this.state.email} 
          onChange={this.handleEmailChange}
          floatingLabelText="email"
        />
        <br />
        <TextField
          value={this.state.password} 
          onChange={this.handlePasswordChange}
          floatingLabelText="Password"
        /> 
        <br/>
        <FlatButton label="Login" primary={true} onClick={this.login}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
