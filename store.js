import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { actionTypes } from './actions/'

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
    success: false,
    producsInView: 1
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PERFIL:
      return Object.assign({}, state, action.payload)
    case actionTypes.LOAD_PRODUCTS:
        let producsInView =  (action.payload.products.length >= 16)  ? 16 :  action.payload.products.length
        return Object.assign({}, state, action.payload, { producsInView })
    case actionTypes.NEXT_PAGE:
        let producsInViewNextPage = state.producsInView + (state.products.length - state.productsPerPage)
        return Object.assign({}, state, state.actualPage++, {producsInView:producsInViewNextPage})
    case actionTypes.BACK_PAGE:
        let producsInViewBackPage = state.producsInView - (state.products.length - state.productsPerPage)
        return Object.assign({}, state, state.actualPage--, {producsInView:producsInViewBackPage})
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


export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}