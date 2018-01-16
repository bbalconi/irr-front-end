import React from 'react';
import axios from 'axios';
import mockAxios from 'axios-mock-adapter';
import Login from './login';
import { shallow, render, mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {MemoryRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard/dashboard';

//here's the state im in: everything works for this, i just need to get something else

var dude = mount(
    <MemoryRouter>
            <MuiThemeProvider muiTheme={getMuiTheme()}>      
              <Login />
              <Dashboard />
            </MuiThemeProvider>      
      </MemoryRouter>
)

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