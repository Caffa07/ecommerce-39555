import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
        <img src={item.imagen}></img>
        <div>
            <h2>{item.nombre}</h2>
            <p>${item.price}</p>
            <p>Stock: {item.stock}</p>
            <Link to={`/item/${item.id}`}>Details</Link>
        </div>
      
    </div>
  )
}

export default Item
