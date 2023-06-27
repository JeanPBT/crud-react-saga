import axiosClient from '../config/axios'
import axios from 'axios';

//================== LISTAR
export async function listAPI() {
//1. Llama al Api y se obtiene la lista del json
  let result = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.data;
  });
  return result
}

//================== AGREGAR
export async function agregarProductoAPI(product) {
  return await axios.post('/products', product).then((response) => {
    return response.data;
  });
}

//================== ELIMINAR
export async function deleteProductoAPI(id) {
  return await axios.delete(`/products/${id}`).then((response) => {
    return response.data;
  });
}

//================== EDITAR
export async function editProductoAPI(product) {
  return await axios.put(`/products/${product.id}`, product).then((response) => {
    return response.data;
  });
}
