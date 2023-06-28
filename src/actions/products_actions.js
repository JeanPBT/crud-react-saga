import {
 
  VARIABLE_LISTA_PRODUCTO,
  VARIABLE_LISTA_PRODUCTO_RECOGE,
  PRODUCTS_DOWNLOAD_ERROR,


} from '../types'
import store from '../store'


const listaProductoCargarData = () => ({
  type: VARIABLE_LISTA_PRODUCTO,
  payload: true
})

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

