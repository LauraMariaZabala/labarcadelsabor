import React from 'react'
import Button from './Button'
import './../styles/Nav.css';

const Nav =(props) =>{
    const {OnselectCategory, category} = props;
    return(
        <div>
        <div className="logo">
        <img src="./../assets/logo-salchi.png"  alt=""/>
        </div>
    
    <div className="mensaje">
        <div className="main"><h1>Baja para que</h1><p>encuentres mas sabores</p></div>
        
        <div className="switch"><i className="fas fa-toggle-on"></i></div>
    </div>
    <section className="nav-items-slider">
        <div className="item-card ">
            <a href="inicio.html">Hamburguesa</a>
        </div>
        <div className="item-card active ">
            <a href="#">Salvajadas</a>
        </div>
        <div className="item-card">
            <a href="perros.html">Perros</a>
        </div>

    </section>
    </div>
    
    )
};
export default Nav;