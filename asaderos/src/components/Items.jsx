import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';
import products from './products';
import Card from './Card'


const Items= () =>{

    // const [product,serProduct] = useState([
    //     {
    //       id: 1,
    //       name: "Pollo Frito",
    //       price: 19000,
    //       descripcion: "Pollo mas papa platano y arepa",
    //       url: Pollo,
    //       counter: 0
    //     },
    //     {
    //       id: 2,
    //       name: "Combo 1",
    //       price: 21000,
    //       descripcion: "Pollo mas papa a la francesa platano arepa y gaseosa 1.5L",
    //       url: Combo1,
    //       counter: 0
    //     },
    //     {
    //       id: 3,
    //       name: "Arroz con Pollo",
    //       price: 16000,
    //       descripcion: "Arros amarillo con pechuga desmechada y verduras mas presa de pollo frito",
    //       url: ArrozPollo,
    //       counter: 0
    //     },
    //     {
    //       id: 4,
    //       name: "Tabla Mixta",
    //       price: 23000,
    //       descripcion: "Carne azada: res cerdo y pollo mas porcion de arroz y papa",
    //       url: Carnes,
    //       counter: 0
    //     },
        
    //   ]);

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
    {/* <div className="product-container">

    {products.map((item)=>{

                return (
                    <div key={item.id} className="card-product">

        <div className="product-img">
            <img src={item.url} alt=""/>
        </div>
        <div className="product-body">
            <h3>{item.name}</h3>
            <p>{item.descripcion}</p>
            <div className="price-control"><span>${item.price}</span>
                <div className="card-quantity">
                    <button className="btn-quantity" onClick={({item})=>(

                      console.log("click")
                      
                      

                    )}>-</button>
                    <span>{number_product}</span>
                    <button onClick= {()=>contador(item)}className="btn-quantity">+</button>
                </div>
            </div>
        </div>
    </div>
                );


            })}


    
    </div>
<div>

<Link to="/">Bienvenidos</Link>
</div> */}

</>

);


}

export default Items;