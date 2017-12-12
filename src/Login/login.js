import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Login extends Component {
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

  render(){
    return (
      <div>
      <TextField
        className="emailInput"
            value={this.state.email} 
            onChange={this.handleEmailChange}
            floatingLabelText="email"
          />
          <br />
          <TextField
            value={this.state.password} 
            onChange={this.handlePasswordChange}
            floatingLabelText="password"
          /> 
          <br/>
        <FlatButton className="loginButton" label="login" primary={true} onClick={this.login}/>
      </div>
    )
  } 
}