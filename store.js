import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { actionTypes } from './actions/'
import { rootReducer } from './reducers/'
const defaultState = {}

// REDUCERS
export function initializeStore (initialState = defaultState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}