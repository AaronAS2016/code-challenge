import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const defaultState = {
    profile: {
        name: "",
        points: 0
    }
}

export const actionTypes = {
  LOAD_USER_PERFIL: 'LOAD_USER_PERFIL',
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PERFIL:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

// ACTIONS

export const loadUser = ( profile ) => {
    return { type: actionTypes.LOAD_USER_PERFIL, payload: {profile} }
}

export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}