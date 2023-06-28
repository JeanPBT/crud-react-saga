import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
//8.Creamos un archivo reducer, le damos un nombre y lo combinamos
export default combineReducers({
  products: productsReducer

})

