import { put, takeEvery, all, call } from 'redux-saga/effects'
import { VARIABLE_LISTA_PRODUCTO, } from '../types'
import { listarProductosAction,listarProductosErrorAction,} from '../actions/products_actions'
import { listAPI } from '../api'

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
function* listarProductosSaga() {
  yield takeEvery(VARIABLE_LISTA_PRODUCTO, listarProductosSg)
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    //4. Se coloca la funcion en el repositorio saga al final.
    listarProductosSaga(),
  ])
}
