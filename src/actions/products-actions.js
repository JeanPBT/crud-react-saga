import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  VARIABLE_LISTA_PRODUCTO,
  VARIABLE_LISTA_PRODUCTO_RECOGE,
  PRODUCTS_DOWNLOAD_ERROR,
  RETRIEVE_PRODUCT_DELETE,
  PRODUCT_DELETED_OK,
  PRODUCT_DELETED_ERROR,
  RETRIEVE_PRODUCT_EDIT,
  BEGIN_EDIT_PRODUCT,
  PRODUCT_EDITED_OK,
  PRODUCT_EDITED_ERROR
} from '../types'
import store from '../store'


// Download products actions
const listaProductoCargarData = () => ({
  type: VARIABLE_LISTA_PRODUCTO,
  payload: true
})
//7.Una vez recogido el producto le colocamos una variable de tipo 
const listaProductoRecoger = products => ({
  
  type: VARIABLE_LISTA_PRODUCTO_RECOGE,
  payload: products
})

const downloadProductsError = () => ({
  type: PRODUCTS_DOWNLOAD_ERROR,
  payload: true
})

export const listarProductosCargar = () => store.dispatch(listaProductoCargarData())
//6.Desde el saga se recoge la lista de arrays y este lo almacena en la ultima linea 
export const listarProductosAction = products => store.dispatch(listaProductoRecoger(products))

export const downloadProductsErrorAction = () => store.dispatch(downloadProductsError())


// Create new products
const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: true,
  product: product
})

const addProductOk = () => ({
  type: VARIABLE_LISTA_PRODUCTO,
  payload: true
})

const addProductError = state => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
})

export const addProductAction = product => store.dispatch(addProduct(product))

export const addProductOkAction = () => store.dispatch(addProductOk())

export const addProductErrorAction = state => store.dispatch(addProductError(state))


// Delete products
const retrieveProductDelete = id => ({
  type: RETRIEVE_PRODUCT_DELETE,
  payload: id
})

const deleteProductOk = () => ({
  type: PRODUCT_DELETED_OK
})

const deleteProductError = () => ({
  type: PRODUCT_DELETED_ERROR,
  payload: true
})

export const deleteProductAction = id => store.dispatch(retrieveProductDelete(id))

export const deleteProductOkAction = () => store.dispatch(deleteProductOk())

export const deleteProductErrorAction = () => store.dispatch(deleteProductError())


// Edit product
const retrieveProductAction = product => ({
  type: RETRIEVE_PRODUCT_EDIT,
  payload: product
})

const editProduct = product => ({
  type: BEGIN_EDIT_PRODUCT,
  product: product
})

const editProductOk = product => ({
  type: PRODUCT_EDITED_OK,
  payload: product
})

const editProductError = () => ({
  type: PRODUCT_EDITED_ERROR,
  payload: true
})

export const retrieveProductEditAction = product => store.dispatch(retrieveProductAction(product))

export const editProductAction = product => store.dispatch(editProduct(product))

export const editProductOkAction = product => store.dispatch(editProductOk(product))

export const editProductErrorAction = () => store.dispatch(editProductError())
