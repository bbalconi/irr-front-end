import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import mockAxios from 'axios-mock-adapter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('can use axios', ()=>{
  let mockApi = new mockAxios(axios);
  mockApi.onGet('/test').reply(200, {
    data: {
      posts: ['hmm']
    }
  });

  axios.get('/test').then((res)=>{
      //so this works,
    expect(res.data.data.posts[0]).toBe('hmm');
  });
});