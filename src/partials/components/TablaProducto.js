import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

const TablaProducto = (product) => {
  const history = useHistory()
  const { name, price, id } = product

  return (
    <tr>
      <td>{name}</td>
      <td className='prices'>{price} $</td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          
        >Edit</button>
        <button
          className='button button--delete'
          type='button'
           
        >Delete</button>
      </td>
    </tr>
  )
}

export default TablaProducto

