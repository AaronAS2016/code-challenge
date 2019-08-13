import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const productUnselected = {
  _id: 0,
  cost: 0 ,
  name: "", 
  category: "", 
  img: {
    url: "",
    hdUrl: ""
  } 
}

const defaultState = {
    profile: {
        name: "",
        points: 0
    },
    selectedProduct:productUnselected,
    actualPage: 1,
    productsPerPage: 16,
    products: [],
    sortBy: 'recent',
    modalState: false,
    success: false
}

export const actionTypes = {
  LOAD_USER_PERFIL: 'LOAD_USER_PERFIL',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  NEXT_PAGE: 'NEXT_PAGE',
  BACK_PAGE: 'BACK_PAGE',
  CHANGE_SORT_METHOD: 'CHANGE_SORT_METHOD',
  SELECT_PRODUCT: 'SELECT_PRODUCT',
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  SUCCESS_COMPLETED: 'SUCCESS_COMPLETED',
  RESET_PRODUCT: 'RESET_PRODUCT',
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
    case actionTypes.CHANGE_SORT_METHOD:
        return Object.assign({}, state, action.payload, state.actualPage = 1)
    case actionTypes.SELECT_PRODUCT:
        return Object.assign({}, state, { selectedProduct: action.payload})
    case actionTypes.SHOW_MODAL:
        return Object.assign({}, state, state.modalState = true)
    case actionTypes.HIDE_MODAL:
        return Object.assign({}, state, state.modalState = false)
    case actionTypes.SUCCESS_COMPLETED: 
        return Object.assign({}, state, state.success = true)
    case actionTypes.RESET_PRODUCT: 
        return Object.assign({}, state, state.success = false, state.selectedProduct = productUnselected)
    default:
      return state
  }
}

// ACTIONS

export const loadUser = ( profile ) => {
    return { type: actionTypes.LOAD_USER_PERFIL, payload: { profile } }
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

export const changeSortBy = (sortBy) => {
  return {type: actionTypes.CHANGE_SORT_METHOD, payload: sortBy}
}

export const selectedProduct = (product) => {
  return {type: actionTypes.SELECT_PRODUCT, payload: product }
}

export const showModal = () => {
  return {type: actionTypes.SHOW_MODAL}
}

export const hideModal = () => {
  return {type: actionTypes.HIDE_MODAL}
}

export const requestCompleted = () => {
  return {type: actionTypes.SUCCESS_COMPLETED}
}

export const resetProduct = () => {
  return {type: actionTypes.RESET_PRODUCT}
}


export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}