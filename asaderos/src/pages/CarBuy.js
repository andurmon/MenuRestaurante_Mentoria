import React from "react";
import { Link } from "react-router-dom";
import Items from "../components/Items";
import '../styles/carBuy.css'

const CarBuy= () =>{
return (
    <div>
        {/* <div className="menu_icon"></div> */}
        <div className="mensaje" ><h1>Lista de Productos</h1></div>
        <Link to="/Menu"><i class="fas fa-chevron-circle-left"></i></Link>
        <div/>
        <Items/>
    Carrito
    
    </div>
);


}

export default CarBuy;