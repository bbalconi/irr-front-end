import axios from "axios";
export const REQUEST_SYSTEMS = 'REQUEST_POSTS';
export const RECEIVE_SYSTEMS = 'RECEIVE_SYSTEMS';
export const UPDATE_ZONE_INPUT = "UPDATE_ZONE_INPUT";
export const ADD_ZONE = "ADD_ZONE";

export const addItemToGarbage = () =>({
  type: 'REQUEST_SYSTEMS',
});

export const addZone = ()=>({
  type:"ADD_ZONE"
});

export const updateZoneInput = (updatedZone) => ({
  type: "UPDATE_ZONE_INPUT",
  updatedZone
});

export function loadSystem(dispatch) {
  return axios.post(`/system`)
  .then((data)=>{
    dispatch({ type: 'RECEIVE_SYSTEMS', data })
  });
}

export function updateSystem(dispatch, updatedSystem) {
  return axios.post(`/updateSystem`, updatedSystem)
    .then((data)=>{
       dispatch({ type: 'RECEIVE_SYSTEMS', data })
  });
}
