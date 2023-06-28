

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { listarProductosCargar } from '../../actions/products_actions'
import TablaProducto from '../../partials/components/TablaProducto'
import './index.css'

const Productos = () => {
  //11.Con la propiedad useEffect cargamos la funcion listarProductosCargar,esta funcion recoge la data que ha sido
  //almacenado por saga en su variable VARIABLE_LISTA_PRODUCTO
  useEffect(() => {
    (async () => await listarProductosCargar())()
  }, [])
//12.El useSelector es una propiedad q recoge la data dentro del Reducer, solamente en el Reducer, primero hallamos
//el nombre del Reducer q se llama Products y luego lo recogemos. Una vez recogido lo mostramos en una tabla en el componente,
//la variable se llama products.
  let products = useSelector(state => state.products.products)



  return (
    <div>
      <h2 className='table__title'>Products</h2>
     
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th id='table__title-price'>Price</th>
            <th id='table__title-action'>Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.map(product =>
              <TablaProducto
                key={product.id}
                name={product.name}
                price={product.id}
                id={product.id}
              />
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Productos
