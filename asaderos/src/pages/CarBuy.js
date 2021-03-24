import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../styles/carBuy.css'
import products from "../components/products";
import Context from "../context/Context";

const CarBuy = () =>{
    const carrito = useContext(Context);
    console.log("Context", carrito);
    
    return (
        
        <div>
            <div className="mensaje" ><h1>Mi orden</h1></div>
            <Link to="/Menu"><i className="fas fa-chevron-circle-left"></i></Link>
            <div/>
            
            {products.map((product, i)=>(
                <div key={i}>{product.name}</div>
            ))}

        </div>
    );


}

export default CarBuy;