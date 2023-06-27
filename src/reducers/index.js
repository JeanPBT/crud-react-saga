import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import alertReducer from './alert-reducer'
//8.Creamos un archivo reducer, le damos un nombre y lo combinamos
export default combineReducers({
  products: productsReducer,
  alert: alertReducer
})

// If we are going to have several reducers, we must use combine them because there can only be one
