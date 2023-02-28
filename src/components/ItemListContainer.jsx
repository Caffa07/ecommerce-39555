import React from 'react'
import ItemList from './ItemList';
import Data from '../data.json';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const { category } = useParams();
  
  const woofersFilter = Data.filter((Woofer) => Woofer.category === category);

  return (
    <div>
      Productos W4
      {category ?<ItemList woofers={woofersFilter}/> : <ItemList woofers={Data}></ItemList>}
    </div>
  );
}

export default ItemListContainer

