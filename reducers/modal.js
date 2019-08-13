

import { actionTypes } from '../actions/index'

  const defaultState = {
      modalState: false,
  }
  

// REDUCERS
export const modal = (state = defaultState, action) => {
  switch (action.type) {
      case actionTypes.SHOW_MODAL:
        return Object.assign({}, state, state.modalState = true)
    case actionTypes.HIDE_MODAL:
        return Object.assign({}, state, state.modalState = false)
    default:
      return state
  }
}

