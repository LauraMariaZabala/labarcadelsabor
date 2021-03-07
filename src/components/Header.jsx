import React from 'react'
import '../styles/Header.css' ;

const Header = () =>(

    <div className="container">
     <h1 className="title">Bienvenido a</h1>
      <img src="assets/img/logo.png"  className="img" alt=""/>

    <form action="inicio.html">
        <button class="btn">Ingresar</button>
    </form>
    </div>
);
export default Header;
