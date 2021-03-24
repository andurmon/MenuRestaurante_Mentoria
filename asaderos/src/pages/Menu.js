
import React, { useContext } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Items from '../components/Items.jsx';

import Context from "../context/Context" ;

const Menu= () =>{

    return (
        <>
            <Header/>
            <Items/>
            <Footer/>
        </>
    );


}

export default Menu;