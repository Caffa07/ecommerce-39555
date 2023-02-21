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
      { <ItemList woofers={woofersFilter}/>}
    </div>
  );
}

export default ItemListContainer

