import React, { useState } from 'react';
import { Link } from "react-router-dom";
import products from './products';


const Card = (props) => {

    const [number_product,setNumber_product]=useState(0);

function contadorAdd() {
    //console.log(`${cont}`)
  //valor = product.price*
  //cont=number_product;
  setNumber_product(number_product+1)
};

function contadorSub() {
    if (number_product!==0){
    //valor = product.price*
    //cont=number_product;
    setNumber_product(number_product-1)
    }
  };

    return (
        <>
   <div key={props.id} className="card-product">

        <div className="product-img">
         <img src={props.url} alt=""/>
         </div>
    
    <div className="product-body">
        <h3>{props.name}</h3>
        <p>{props.descripcion}</p>
        <div className="price-control"><span>${props.price}</span>
            <div className="card-quantity">
                <button className="btn-quantity" onClick={()=>contadorSub()}>-</button>
                <span>{number_product}</span>
                <button onClick= {()=>contadorAdd()}className="btn-quantity">+</button>
            </div>
        </div>
    </div>
</div>
        
        </>
    )
}

export default Card;