import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <footer className="footer-container">
        
        <button className="btn-icon">
        <Link to="/CarBuy"><i className="fas fa-shopping-cart"></i></Link>
        </button>
        
    </footer>
    )
}

export default Footer;