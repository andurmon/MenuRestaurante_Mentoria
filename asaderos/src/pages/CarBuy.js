import React, {useContext,useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card"
import '../styles/carBuy.css'
// import products from "../components/products";
import Context from "../context/Context";
import products from "../components/products";

const CarBuy = () =>{
    const carrito = useContext(Context);
    let salida;
    let totalTmp = 0;
    //console.log("Context", carrito);

    const [total,setTotal] = useState(0);

    salida = carrito.map((producto, i)=>{
        // carrito[i]
        // producto
        totalTmp += producto.price*producto.counter;
        if(producto.counter>0){
            return <Card 
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            descripcion={producto.descripcion}
            url={producto.url}
            counter={producto.counter}
            />
        }
    });

    useEffect(()=>{        
        setTotal(totalTmp);
    });

    return (
        
        <div>
            <div className="mensaje" ><h1>Mi orden</h1></div>
            <Link to="/Menu"><i className="fas fa-chevron-circle-left"></i></Link>
            <div/>
            {salida}

            <div>{total}</div>

        </div>
    );


}

export default CarBuy;