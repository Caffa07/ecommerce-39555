import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <div>
            <button type='button' onClick={()=> setCounter(counter-1)}>-</button>
            <button type='button'>{counter}</button>
            <button type='button' onClick={()=> setCounter(counter+1)}>+</button>
        </div>
        <div>
            <button type='button'>Comprar</button>
        </div>
    </div>
  )
}

export default ItemCount
