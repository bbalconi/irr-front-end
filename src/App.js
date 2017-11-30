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
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.login = this.login.bind(this);

  }

  login(){
    axios.post('login');
  }

  render() {
    return (
      <MuiThemeProvider >
        <AppBar title="Login" />
        <TextField
           hintText="Hint Text"
            floatingLabelText="UserName"
        />
        <br />
        <TextField
          floatingLabelText="Password"
        /> <br/>
            <FlatButton label="Login" primary={true} onClick={this.login}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
