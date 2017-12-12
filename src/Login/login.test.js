import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import mockAxios from 'axios-mock-adapter';
import renderer from 'react-test-renderer';
import Login from './login';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { expect } from 'chai';

const component = shallow(<Login />);

// it('passes login information', () => {
//   const email = 'tjgarlick@gmail.com';
//   const password = '123password';
//   const wrapper = shallow(<Login handleLogin={state => {
//     expect(state.email).to.be.equal(email);
//     expect(state.password).to.be.equal(password);
//   }}/>);
//   wrapper.setState({ email: 'tjgarlick@gmail.com', password: '123password'});
//   wrapper.find('button').simulate('click');
// });

it('expects a TextField component with a label "password"', () => {
  expect(component.containsMatchingElement( <TextField floatingLabelText="password"/>)).to.be.true;
});

it('expects a TextField component with a label "email"', () => {
  expect(component.containsMatchingElement( <TextField floatingLabelText="email"/>)).to.be.true;
});

it('expects a login button is present', () => {
  expect(component.containsMatchingElement(<FlatButton primary={true} label="login" />)).to.be.true;
});
  
it ('expects to pass on login info after clicking "login" button', ()=>{
  let mockApi = new mockAxios(axios);
  mockApi.onPost('/authenticate').reply(200, {
    data: {
      posts: ['hmm']
    }
  });
  
  //component.setState({email:"mark"})
//  console.log(component.find('.emailInput').value)
  component.find('.emailInput').value = "foo";
  console.log(component.state())
  //component.instance().login()
  //component.find(".loginButton").simulate('click');
  //what happens after this? 
  //just need to verify that the function was called with the correct parameters
});