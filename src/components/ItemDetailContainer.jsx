import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import Data from '../data.json';
import { Await, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [woofer, setWoofer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(Data);
        const data = await response.json();
        setWoofer(data);
      }catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  const wooferFilter = Data.filter((woofer) => woofer.id == id);
  return <ItemDetail woofers={Data}/>;
  
}

export default ItemDetailContainer
