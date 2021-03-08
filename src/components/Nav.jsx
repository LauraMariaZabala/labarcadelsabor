import React from 'react'
import Buttons from './Buttons'
import './../styles/Nav.css';

const Nav =(props) =>{
    const {onSelectCategory, category} = props;
    return(


    <section className="nav-items-slider">
            <Buttons category="Hamburguesa" active={category === "Hamburguesa"} onSelectCategory={onSelectCategory} />
            <Buttons category="Salvajada" active={category === "Salvajada"} onSelectCategory={onSelectCategory} />
            <Buttons category="Perros" active={category === "Perros"} onSelectCategory={onSelectCategory}/>

    </section>
    
    
    )
};
export default Nav;