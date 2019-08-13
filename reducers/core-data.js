import { actionTypes } from '../actions/index'

const defaultState = {
    profile: {
        name: "",
        points: 0
    },
    products: [],
}


// REDUCERS
export const coreData = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PERFIL:
      return Object.assign({}, state, action.payload)
    case actionTypes.LOAD_PRODUCTS:
        let producsInView =  (action.payload.products.length >= 16)  ? 16 :  action.payload.products.length
        return Object.assign({}, state, action.payload, { producsInView })
    default:
      return state
  }
}
