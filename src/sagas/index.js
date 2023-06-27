import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_PRODUCT,
  VARIABLE_LISTA_PRODUCTO,
  RETRIEVE_PRODUCT_DELETE,
  BEGIN_EDIT_PRODUCT,
} from '../types'

import {
  listarProductosAction,
  downloadProductsErrorAction,
  addProductOkAction,
  addProductErrorAction,
  deleteProductOkAction,
  deleteProductErrorAction,
  editProductOkAction,
  editProductErrorAction
} from '../actions/products-actions'

import {
  listAPI,
  addProductDB,
  deleteProductDB,
  editProductDB
} from '../api-calls'

 //LISTAR SAGA
 //2. LLama al Api y lo procesa en saga, verificando asi su acceso o no al sistema( es un middware)
function* listarProductosSg() {
  try {
    const data = yield call(listAPI)
    //5.Saga realiza 2 envios, uno para Action y otro para Reducer.Para Action se envia la 
    //funcion "listarProductosAction"(todos los productos)
    yield listarProductosAction(data)
  } catch (error) {
    yield put(downloadProductsErrorAction())
  }
}

//3. Lo registramos en saga a la funcion que proviene del punto 2
function* listarProductosSaga() {
  yield takeEvery(VARIABLE_LISTA_PRODUCTO, listarProductosSg)
}









































// Create new product
// worker saga
function* addProduct(action) {
  const product = action.product
  try {
    yield call(addProductDB, product)
   /* const response = await axiosClient.post('/products', product)*/
    yield addProductOkAction(product) // download actualized products
      // Alert
    Swal.fire({
      title: 'Added!',
      text: 'The product has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield addProductErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.'
    })
  }
}

// watcher saga
function* addProductSaga() {
  yield takeEvery(ADD_PRODUCT, addProduct)
}


// Delete product
// worker saga
function* deleteProduct(action) {
  const id = action.payload
  try {
    yield call(deleteProductDB, id)
    yield deleteProductOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The product has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteProductErrorAction()
  }
}

// watcher saga
function* deleteProductSaga() {
  yield takeEvery(RETRIEVE_PRODUCT_DELETE, deleteProduct)
}


// Edit product
// worker saga
function* editProduct(action) {
  const product = action.product
  try {
    yield call(editProductDB, product)
    yield editProductOkAction(product)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The product has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editProductErrorAction()
  }
}

// watcher saga
function* editProductSaga() {
  yield takeEvery(BEGIN_EDIT_PRODUCT, editProduct)
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    //4. Se coloca la funcion en el repositorio saga al final.
    listarProductosSaga(),
    addProductSaga(),
    deleteProductSaga(),
    editProductSaga()
  ])
}
