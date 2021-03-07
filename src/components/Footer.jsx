import React from 'react';
import './../styles/Footer.css';

const Footer = (props) => {
    const {onSetShowCart} = props;

    const onShowCart = () => {
        onSetShowCart(true);
    }

    return (
        <footer className="footer-container">
            <button className="btn-icon" onClick={onShowCart}>
                <i className="fas fa-shopping-cart"></i>
            </button>
        </footer>
    )
};

export default Footer;