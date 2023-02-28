import React from 'react'
import ItemCount from './ItemCount';
import wooferImage from '../assets/subWoofer.jpg';
import { useParams } from 'react-router-dom';

const ItemDetail = ({woofers}) => {
    const {id} = useParams();
    const woofersFilter = woofers.filter((wofer => wofer.id == id));
  return (
    <>
    {woofersFilter.map((woofer) =>(
        <div key={woofer.id}>
            <img src={wooferImage}/>
            <text>Descripcion: {woofer.description}</text>

        <div><ItemCount
           stock={woofer.stock}
           id={woofer.id}
           name={woofer.name}
           price={woofer.price}
            />
        </div>
        </div>
    ))}
      
    </>
  )
}

export default ItemDetail
