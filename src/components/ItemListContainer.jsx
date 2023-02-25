import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Data from '../data.json';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const { id } = useParams();
  const woofersFilter = Data.filter((Woofer) => Woofer.id === id);
  return (
    <div>
      Productos W4
      {<ItemList woofers={woofersFilter}/>}
    </div>
  );
}

export default ItemListContainer

