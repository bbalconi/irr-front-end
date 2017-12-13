import React from 'react';
import axios from 'axios';
import mockAxios from 'axios-mock-adapter';
import Login from './login';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

var dude = shallow(<Login />);

it('expects a TextField component with a label "password"', () => {
  expect(dude.containsMatchingElement( <TextField type="password" floatingLabelText="password"/>)).toBeTruthy();
});

it('expects a TextField component with a label "email"', () => {
  expect(dude.containsMatchingElement( <TextField floatingLabelText="email"/>)).toBeTruthy();
});

it('expects a login button is present', () => {
  expect(dude.containsMatchingElement(<FlatButton primary={true} label="login" />)).toBeTruthy();
});

it ('expects a call to /authenticate after clicking the login button', ()=>{
  let mockApi = new mockAxios(axios);
  var barf = jest.fn(()=>{
    return [200];
  });
  mockApi.onPost('/authenticate').reply(barf());
  dude.first(".loginButton").simulate('click');
  expect(barf).toHaveBeenCalled();
});


//todo: how to make a test that once user clicks login, app sends them to /dashboard
//todo: need to make error handling tests