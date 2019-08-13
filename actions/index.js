
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