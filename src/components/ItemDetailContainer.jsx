import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import Data from '../data.json';

const ItemDetailContainer = () => {
  return <ItemDetail woofers={Data}/>;
  
}

export default ItemDetailContainer
