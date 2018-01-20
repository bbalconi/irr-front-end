import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.context.message}</h1>
          {this.props.children}
      </div>
    );
  }
}
 
class Login extends Component {
  
  constructor(props){
    super(props);
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

  async login(){
    var barf = await axios.post('authenticate', {
      email:this.state.email,
      password:this.state.password
    });
    this.props.history.push('/dashboard');
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
          type="password"
          value={this.state.password} 
          onChange={this.handlePasswordChange}
          floatingLabelText="password"
        /> 
        <br/>
        <FlatButton className="loginButton" label="login" primary={true} onClick={this.login}/>
        {/* <Greeting message={this.props.thing}  name={"Mark"}>
          <h2> fun timesi n babylong </h2>
        </Greeting> */}
      </div>
    )
  } 
}

Login.childContextTypes={
  message:PropTypes.string
}

export default withRouter(Login);
//export default Login;