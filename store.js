import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const defaultState = {
    profile: {
        name: "",
        points: 0
    },
    actualPage: 1,
    productsPerPage: 16,
    products: []
}

export const actionTypes = {
  LOAD_USER_PERFIL: 'LOAD_USER_PERFIL',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  NEXT_PAGE: 'NEXT_PAGE',
  BACK_PAGE: 'BACK_PAGE',
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PERFIL:
      return Object.assign({}, state, action.payload)

    case actionTypes.LOAD_PRODUCTS:
          return Object.assign({}, state, action.payload)
    case actionTypes.NEXT_PAGE:
        return Object.assign({}, state, state.actualPage++)
    case actionTypes.BACK_PAGE:
        return Object.assign({}, state, state.actualPage--)
    default:
      return state
  }
}

// ACTIONS

export const loadUser = ( profile ) => {
    return { type: actionTypes.LOAD_USER_PERFIL, payload: {profile} }
}

export const loadProducts = (products ) => {
  return { type: actionTypes.LOAD_PRODUCTS, payload: { products } }
}

export const nextPage =  () => {
  return { type: actionTypes.NEXT_PAGE }
}


export const backPage =  () => {
  return { type: actionTypes.BACK_PAGE }
}


export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}