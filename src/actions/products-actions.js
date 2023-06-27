import {
  VARIABLE_AGREGAR_PRODUCTO,
  ADD_PRODUCT_ERROR,
  VARIABLE_LISTA_PRODUCTO,
  VARIABLE_LISTA_PRODUCTO_RECOGE,
  PRODUCTS_DOWNLOAD_ERROR,
  VARIABLE_ELIMINAR_PRODUCTO,
  PRODUCT_DELETED_OK,
  PRODUCT_DELETED_ERROR,
  RETRIEVE_PRODUCT_EDIT,
  VARIABLE_EDITAR_PRODUCTO,
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

export const listarProductosErrorAction = () => store.dispatch(downloadProductsError())


// Create new products
const agregarProductoSg = product => ({
  type: VARIABLE_AGREGAR_PRODUCTO,
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

export const addProductAction = product => store.dispatch(agregarProductoSg(product))

export const agregarProductoAction = () => store.dispatch(addProductOk())

export const agregarProductosErrorAction = state => store.dispatch(addProductError(state))


// Delete products
const retrieveProductDelete = id => ({
  type: VARIABLE_ELIMINAR_PRODUCTO,
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

export const deleteProductoAction = () => store.dispatch(deleteProductOk())

export const deleteProductErrorAction = () => store.dispatch(deleteProductError())


// Edit product
const retrieveProductAction = product => ({
  type: RETRIEVE_PRODUCT_EDIT,
  payload: product
})

const editProduct = product => ({
  type: VARIABLE_EDITAR_PRODUCTO,
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
