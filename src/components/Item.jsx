import React from 'react'
import { Link } from 'react-router-dom';
import wooferImage from '../assets/subWoofer.jpg';

const Item = ({id,  name, stock, category, price }) => {
  return (
    <div>
    <div key={id}>
        <img src={wooferImage}></img>
        <div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`}>Details</Link>
        </div>
      
    </div>
    </div>
  )
}

export default Item
