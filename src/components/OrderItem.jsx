import React from 'react'
import './../styles/OrderItem.css';

const OrderItem = (props) => {
    const { product, name, price, quantity, icon, onAddToCart, onRemoveFromCart } = props;
    
    const handleAdd = () => {
        onAddToCart(product)
    }

    const handleSubstract = () =>{
        if (quantity > 0){
            onRemoveFromCart(product)
        }
    }

    return (
        <div className="card-container order-item">
            <div className="card-body order-item-body">
                <div className="title-container order-item-title-container">
                    <h5 className="card-title order-item-title">{icon} {name}</h5>
                    <span className="card-price order-item-price">${price}</span>
                </div>

                <div className="card-quantity order-item-quantity">
                    <div className="card-quantity-controls order-item-controls">
                        <button onClick={handleSubstract} className="btn-quantity order-item-btn">-</button>
                        <span>{quantity}</span>
                        <button onClick={handleAdd} className="btn-quantity order-item-btn">+</button>
                    </div>
                    <div className="order-item-total">
                        ${quantity * price}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderItem;