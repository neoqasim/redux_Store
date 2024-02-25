import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);

    const handleRemoveItem = (id) => {
        dispatch(remove(id))
    };

    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mt-8 mb-4">Cart</h3>
            <div className="flex flex-col gap-4">
                {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between bg-slate-100 items-center border rounded-lg p-4">
                        <img src={item.image} alt={item.title} className="w-36 h-36 object-cover mr-4" />
                        <p className="text-2xl font-medium">{item.title}</p>
                        <p className="text-gray-700 text-xl font-semibold">${item.price}</p>
                        <button
                            onClick={() => handleRemoveItem(item.id)}
                            className=" bg-red-500 text-white px-3 py-1 text-lg rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
