import axios from "axios";


export const REQUEST_SYSTEMS = 'REQUEST_POSTS'
export const RECEIVE_SYSTEMS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const addItemToGarbage = () =>({
  type: 'REQUEST_SYSTEMS',
});

export const fetchSystem = subreddit => dispatch => {
  debugger;
  //dispatch(requestPosts(subreddit));
  return axios.post("/system").then((data)=>{
    console.log(data);
  });
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //   .then(response => response.json())
  //   .then(json => dispatch(receivePosts(subreddit, json)))
}




