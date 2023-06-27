import axiosClient from '../config/axios'
import axios from 'axios';

//LISTAR
export async function listAPI() {
//1. Llama al Api y se obtiene la lista del json
  let result = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.data;
  });
  return result
}


export async function addProductDB(product) {
  return await axiosClient.post('/products', product)
}

export async function deleteProductDB(id) {
  return await axiosClient.delete(`/products/${id}`)
}

export async function editProductDB(product) {
  return await axiosClient.put(`/products/${product.id}`, product)
}
