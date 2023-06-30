import React, { useState } from 'react';
import './Navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Navbar = ({ data }) => {
    console.log("nam", data)
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
                <span className="cart-count">{data.length}</span>
                <Link to="/cart"><AiOutlineShoppingCart /></Link>

            </div>
        </nav>
    );
};

export default Navbar;
