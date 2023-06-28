import {
  VARIABLE_LISTA_PRODUCTO,
  VARIABLE_LISTA_PRODUCTO_RECOGE,
} from '../types'

const initialState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null
}
//9.El Reducer con el nombre creado va tener dos elementos : type y payload,
//Se va buscar la variable y se va almacenar todo el array en la tienda, o en el Reducer
export default function (state = initialState, action) {
  switch (action.type) {

    case VARIABLE_LISTA_PRODUCTO:

      return {
        ...state,
        loading: action.payload,
        product: action.product
      }
    case VARIABLE_LISTA_PRODUCTO_RECOGE:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }
      default:
        return state
  }
}
