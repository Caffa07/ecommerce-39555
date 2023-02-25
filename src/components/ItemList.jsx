import React from 'react';
import Item from './Item';

const ItemList = ({woofers}) => {
  return (
    <>
    <div>
        {woofers?.map((woofer) =>(
            <Item
            key={woofer.id}
            id={woofer.id}
            name={woofer.name}
            description={woofer.description}
            price={woofer.price}
            stock={woofer.stock}
            category={woofer.category}
            />
        ))}
    </div>
      
    </>
  )
}

export default ItemList
