import { Container } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const ItemList = ({woofers}) => {
  return (
    <>
    <div>
      <Container>
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
      </Container>  
    </div>
      
    </>
  )
}

export default ItemList
