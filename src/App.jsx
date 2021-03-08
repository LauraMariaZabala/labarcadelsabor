import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Item from './components/Item';


const App = () =>{
    return(
        <div className="app-container">
            <Header/>
            <Nav category={category} onSelectCategory={selectCategory} />


        </div>
    )
} 
export default App;