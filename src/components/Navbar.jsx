import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart)
    console.log(items);
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md rounded-lg">
            <span className="text-2xl font-bold text-gray-800">REDUX STORE</span>
            <div className="flex items-center space-x-6 text-3xl">
                <Link to="/" className="navLink  text-gray-600 hover:text-gray-800">Home</Link>
                <Link to="/cart" className="navLink  text-gray-600 hover:text-gray-800">Cart</Link>
                <span className="cartCount  px-3 py-1 rounded-full shadow">Cart items: {items.length}</span>
            </div>
        </div>

    );
};

export default Navbar;
