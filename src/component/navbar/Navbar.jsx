import React, { useState } from 'react';
import './Navbar.scss';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const carts = useSelector((state) => state.reducer.cart);
    return (
        <nav>
            <div className="logo">
                <h1>ECommerce</h1>
            </div>
            <div className="links">
                <Link to="/">Product</Link>
                <Link to="/additem">Add Item</Link>
            </div>
            <div className="cart">
                <span className="cart-count">{carts.length}</span>
                <Link to="/cart"><AiOutlineShoppingCart /></Link>

            </div>
        </nav>
    );
};

export default Navbar;
