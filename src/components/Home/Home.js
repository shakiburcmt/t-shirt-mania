import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, SetCart] = useState([]);

    const handleAddToCart = tShirt => {
        const exists = cart.find(shirt => shirt._id === tShirt._id);
        if (exists) {
            alert('tShirt already added into your cart');
        }
        else {
            const newCart = [...cart, tShirt];
            SetCart(newCart);
        }
    }

    // remove item from cart
    const handleRemoveFromCart = tShirt => {
        const remaining = cart.filter(shirt => shirt._id !== tShirt._id);
        SetCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='tShirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;