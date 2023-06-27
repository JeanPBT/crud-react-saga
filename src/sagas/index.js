import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  VARIABLE_AGREGAR_PRODUCTO,
  VARIABLE_LISTA_PRODUCTO,
  VARIABLE_ELIMINAR_PRODUCTO,
  VARIABLE_EDITAR_PRODUCTO,
} from '../types'

import {
  listarProductosAction,
  listarProductosErrorAction,
  agregarProductoAction,
  agregarProductosErrorAction,
  deleteProductoAction,
  deleteProductErrorAction,
  editProductOkAction,
  editProductErrorAction
} from '../actions/products-actions'

import {
  listAPI,
  agregarProductoAPI,
  deleteProductoAPI,
  editProductoAPI
} from '../api-calls'


//===============================LISTAR ===============
//2. LLama al Api y lo procesa en saga, verificando asi su acceso o no al sistema( es un middware)
function* listarProductosSg() {
  try {
    const data = yield call(listAPI)
    //5.Saga realiza 2 envios, uno para Action y otro para Reducer.Para Action se envia la 
    //funcion "listarProductosAction"(todos los productos)
    yield listarProductosAction(data)
  } catch (error) {
    yield put(listarProductosErrorAction())
  }
}

//3. Lo registramos en saga a la funcion que proviene del punto 2
// watcher saga
function* listarProductosSaga() {
  yield takeEvery(VARIABLE_LISTA_PRODUCTO, listarProductosSg)
}

//============================== AGREGAR ==================
function* agregarProductoSg(action) {
  const product = action.product
  try {
    yield call(agregarProductoAPI, product)
    yield agregarProductoAction(product)

    // ======= Mensage de Alert
    Swal.fire({
      title: 'Added!',
      text: 'The product has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {

    yield agregarProductosErrorAction(true)

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.'
    })

  }
}

// watcher saga
function* agregarProductosSaga() {
  yield takeEvery(VARIABLE_AGREGAR_PRODUCTO, agregarProductoSg)
}

//============================== ELIMINAR ==================
function* deleteProductoSg(action) {
  const id = action.payload
  try {
    yield call(deleteProductoAPI, id)
    yield deleteProductoAction()
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
  yield takeEvery(VARIABLE_ELIMINAR_PRODUCTO, deleteProductoSg)
}


//============================== EDITAR ==================
function* editarProductoSg(action) {
  const product = action.product
  try {
    yield call(editProductoAPI, product)
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
  yield takeEvery(VARIABLE_EDITAR_PRODUCTO, editarProductoSg)
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    //4. Se coloca la funcion en el repositorio saga al final.
    listarProductosSaga(),
    agregarProductosSaga(),
    deleteProductSaga(),
    editProductSaga()
  ])
}
