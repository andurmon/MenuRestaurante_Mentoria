
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css'
import Pollo from '../img/pollo-asado.jpg';

const Menu= () =>{

    const [product,serProduct] = useState([
        {
          id: 1,
          name: "Pollo Frito",
          price: 22,
          descripcion: "Pollo mas papa platano y arepa",
          url: Pollo
        },
        {
          id: 2,
          name: "Combo 1",
          price: 18,
          descripcion: "Pescado blanco, aguacate, queso crema y topping de ajonjolí.",
          url: Pollo
        },
        {
          id: 3,
          name: "Arroz con Pollo",
          price: 15,
          descripcion: "Cangrejo, vegetales, queso crema y topping de aguacate.",
          url: Pollo
        },
        {
          id: 4,
          name: "Tabla Mixta",
          price: 22,
          descripcion: "Tilapia apanada, aguacate y topping de langostinos tempurizados.",
          url: Pollo,
          counter: 0
        },
        
      ]);


return (
   
   <>

    
        <div className="product-container">

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
    Menu
    <Link to="/">Bienvenidos</Link>
    </div>
    </>
);


}

export default Menu;