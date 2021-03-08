import React from 'react';
import Header from "./Header";
import './../styles/ShoppingCart.css';
import Order from './Order';


function ShoppingCart(props) {
    const {showCart, onSetShowCart, cartItems, onAddToCart, onRemoveFromCart} = props;
   
    // Función para añadir items al carrito
    const handleAdd = (item) => {
        onAddToCart(item);
    }

    // Función para quitar items del carrito
    const handleSubstract = (item) => {
        onRemoveFromCart(item);
    }

    const onHideCart = () => {
        onSetShowCart(false)
    }

    return (
        <div className={showCart ? 'shopping-cart' : 'shopping-cart shopping-cart--hidden'}>
            <div className="shopping-cart-container">
                <div className="btn-back" onClick={onHideCart}>Volver</div>

                <Header/>

                <div className="my-order">Tu pedido</div>

                <Order cartItems={cartItems} 
                    handleAdd={handleAdd}
                    handleSubstract={handleSubstract} />
            </div>
        </div>
    );
}

export default ShoppingCart;