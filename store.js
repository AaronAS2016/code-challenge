import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const defaultState = {
    profile: {
        name: "",
        points: 0
    },
    selectedProduct:{
/*       _id: 0,
      cost: 0 ,
      name: "", 
      category: "", 
      img: {
        url: "",
        hdUrl: ""
      }  */

      "_id": "5a0b35c1734d1d08bf7084c3",
      "name": "iPhone 8",
      "cost": 800,
      "category": "Phones",
      "img": {
        "url": "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
        "hdUrl": "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
      }
    },
    actualPage: 1,
    productsPerPage: 16,
    products: [],
    sortBy: 'recent'
}

export const actionTypes = {
  LOAD_USER_PERFIL: 'LOAD_USER_PERFIL',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  NEXT_PAGE: 'NEXT_PAGE',
  BACK_PAGE: 'BACK_PAGE',
  CHANGE_SORT_METHOD: 'CHANGE_SORT_METHOD',
  SELECT_PRODUCT: 'SELECT_PRODUCT'
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

export const changeSortBy = (sortBy) => {
  return {type: actionTypes.CHANGE_SORT_METHOD, payload: sortBy}
}

export const selectedProduct = (product) => {
  return {type: actionTypes.SELECT_PRODUCT, payload: product }
}


export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}