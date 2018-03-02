import {REQUEST_SYSTEMS, RECEIVE_SYSTEMS, UPDATE_ZONE_INPUT, ADD_ZONE} from "../actions"

const matchZone = (array, zone) => {
  return array.map((z)=>{return z.id}).indexOf(zone.id);
}

const getSystem = (state = {
  name:null,
  isFetching: false,
  updatedZones:[],
  updatedName:"",
  updatedLocation:"",
  data: { 
    system: {},
    zones:[]
  }
}, action) => {
  switch (action.type) {
    case REQUEST_SYSTEMS:
      return {
        ...state,
      }
    case ADD_ZONE:
      return {
        ...state,
        updatedZones: state.updatedZones.concat([{
          id:state.updatedZones.length + 1, 
          description:""
        }])
      }
    case RECEIVE_SYSTEMS:
      return {
        ...state,
        isFetching: false,
        updatedZones:action.data.data.zones,
        data: action.data.data,
        updatedName: action.data.data.system.name,
        updatedLocation: action.data.data.system.location
    }
    case UPDATE_ZONE_INPUT:
      var matchedIndex = matchZone(state.updatedZones, action.updatedZone);
      var copy = state.updatedZones.slice(0);
      copy.splice(matchedIndex, 1, action.updatedZone);
      return {
        ...state,
        updatedZones: copy
      } 
    default:
    return state
  }
}
export default getSystem;