import axios from 'axios';

//================== LISTAR
export async function listAPI() {
  let result = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.data;
  });
  return result;
}
