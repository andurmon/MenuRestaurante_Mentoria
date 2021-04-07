import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';
import products from './products';
import Card from './Card'


const Items= () =>{

// const [number_product,setNumber_product]=useState(0);
// function contador  (product) {

//   //valor = product.price*
//   product.counter=number_product;
//   setNumber_product(number_product+1)
// };
return (
    <>
      <div className="product-container">
        
        
        {products.map((product)=>(
          <Card 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              descripcion={product.descripcion}
              url={product.url}
              counter={product.counter}
          />
        ))}
        
        
        </div>
</>

);


}

export default Items;