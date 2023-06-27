import {
  VARIABLE_AGREGAR_PRODUCTO,
  ADD_PRODUCT_OK,
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

const initialState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null
}
//9.El Reducer con el nombre creado va tener dos elementos : type y payload,
//Se va buscar la variable y se va almacenar todo el array en la tienda, o en el Reducer
export default function(state = initialState, action) {
  switch(action.type) {

    case VARIABLE_LISTA_PRODUCTO:
    case VARIABLE_AGREGAR_PRODUCTO:
    case VARIABLE_EDITAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
        product: action.product
      }

    case ADD_PRODUCT_OK:
      return {
        ...state,
        loading: false
      }

    case ADD_PRODUCT_ERROR:
    case PRODUCTS_DOWNLOAD_ERROR:
    case PRODUCT_DELETED_ERROR:
    case PRODUCT_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
//10. Una vez identificada la variable de tipo recogemos el payload  y lo insertamos en la variable Products
    case VARIABLE_LISTA_PRODUCTO_RECOGE:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }

    case VARIABLE_ELIMINAR_PRODUCTO:
      return {
        ...state,
        deleteProduct: action.payload
      }

    case PRODUCT_DELETED_OK:
      return {
        ...state,
        products: state.products.filter(product => product.id !== state.deleteProduct),
        deleteProduct: null
      }

    case RETRIEVE_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload
      }

    case PRODUCT_EDITED_OK:
      return {
        ...state,
        editProduct: null,
        products: state.products.map(product =>
          product.id === action.payload.id ? product = action.payload : product
        )
      }

    default:
      return state
  }
}