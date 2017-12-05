import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class App extends Component {
  render(){
    return (
      <div>
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
      </div>
    )
  } 
}