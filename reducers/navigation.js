import { actionTypes } from '../actions/'
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
    selectedProduct:productUnselected,
    actualPage: 1,
    productsPerPage: 16,
    sortBy: 'recent',
    success: false,
    producsInView: 1,
    productsLength: 0
}

// REDUCERS
export const navigation = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PRODUCT_LENGHT:
        let producsInView =  (action.payload.productsLength >= 16)  ? 16 :  action.payload.productsLength
        return Object.assign({}, state, action.payload, {producsInView})
    case actionTypes.NEXT_PAGE:
        let producsInViewNextPage = state.producsInView + (state.productsLength - state.productsPerPage)
        return Object.assign({}, state, state.actualPage++, {producsInView:producsInViewNextPage})
    case actionTypes.BACK_PAGE:
        let producsInViewBackPage = state.producsInView - (state.productsLength - state.productsPerPage)
        return Object.assign({}, state, state.actualPage--, {producsInView:producsInViewBackPage})
    case actionTypes.CHANGE_SORT_METHOD:
        return Object.assign({}, state, action.payload, state.actualPage = 1)
    case actionTypes.SELECT_PRODUCT:
        return Object.assign({}, state, { selectedProduct: action.payload})
    case actionTypes.SUCCESS_COMPLETED: 
        return Object.assign({}, state, state.success = true)
    case actionTypes.RESET_PRODUCT: 
        return Object.assign({}, state, state.success = false, state.selectedProduct = productUnselected)
    default:
      return state
  }
}