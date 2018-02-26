import {REQUEST_SYSTEMS, RECEIVE_SYSTEMS} from "../actions"

//todo: normalize zones

const getSystem = (state = {
  name:null,
  isFetching: false,
  zones: []
}, action) => {
  switch (action.type) {
    case REQUEST_SYSTEMS:
      return {
        ...state,
        didInvalidate: false
      }
    case RECEIVE_SYSTEMS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    default:
      return state
  }
}

// const quenchActions = function(state = stat, action){
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     default:
//       return zones
//   }
// }

export default getSystem;