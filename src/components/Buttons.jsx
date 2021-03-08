import React from 'react'
import '../styles/Buttons.css';

const Buttons = (props) =>{
    const{category, onSelectCategory, active} = props;

    const selectCategoy = (ev) =>{
        ev.preventDefault();

        if (onSelectCategory){
            onSelectCategory(category);
        }
    }

    return(
        <div className={"item-card" + (active ? "active": "")}>
        <a href="/#" data-filter ={category} onClick={selectCategoy}>
            {category}
        </a>
    </div>
    )
}

export default Buttons;