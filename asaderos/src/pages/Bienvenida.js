import React from "react";
import { Link } from "react-router-dom";
import '../styles/wellcome.css'

const Bienvenida= () =>{
return (
    
    <div className="wellcome">
        <div className="icon_home">
            <i className="fas fa-drumstick-bite"></i>
        </div>
        <div className="name_busines">Surtidora de Aves 22 LL</div>
        <div className="buttom_home">
            <Link to="/Menu"><input className="btn-main" type="button" value="Ver Menu!"/></Link>
        </div>
    </div>
        
   

);


}

export default Bienvenida;