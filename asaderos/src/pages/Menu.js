
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import '../styles/menu.css';
// import Pollo from '../img/pollo-asado.jpg';
// import Combo1 from '../img/pollo-seervido.jpg'
// import ArrozPollo from '../img/arroz-pollo.jpg'
// import Carnes from '../img/carnes.jpg'

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Items from '../components/Items.jsx';

const Menu= () =>{

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


return (
   
   <>
        <Header/>
        <Items/>
        {/* <div className="product-container">

        {product.map((item)=>{
                    return (
                        <div className="card-product">
            <div className="product-img">
                <img src={item.url} alt=""/>
            </div>
            <div className="product-body">

                


                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <div className="price-control"><span>${item.price}</span>
                    <div className="card-quantity">
                        <button className="btn-quantity">-</button>
                        <span>0</span>
                        <button className="btn-quantity">+</button>
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
    <Footer/>
    </>
);


}

export default Menu;