import { actionTypes } from '../actions/'



const defaultState = {
    profile: {
        name: "",
        points: 0
    },
    products: [],
}


// coreData reducer with all the data from request
export const coreData = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PERFIL:
      return Object.assign({}, state, action.payload)
    case actionTypes.LOAD_PRODUCTS:
        
        return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
