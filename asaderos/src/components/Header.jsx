import React from 'react'
import Logo from '../img/logo_asadero.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <>

    <div class="logo">
        <img src = {Logo} alt="SurtiAves 22 LL"/>
        <h5>Surtidora de Aves 22 LL</h5>
    </div>

    <div class="mensaje">
        <div className="main"><h1>Baja para que</h1><p>encuentres mas sabores</p></div>
        
        <div className="switch">{/*<i class="fas fa-toggle-on"></i>*/}</div>
    </div>
    </>
    )
}

export default Header;