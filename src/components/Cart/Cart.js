import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    // condition rendering
    let message;
    if (cart.length === 0) {
        message=<p>Please select at least 1 item.</p>
    }
    else if (cart.length === 1) {
        message=<p style={{padding:'10px'}}>1 item can only be taken once. However, six different items can be taken.</p>
    }
    else {
        message=<p>Thanks a lot for buying.</p>
    }

    return (
        <div>
            <h2 style={{ textDecoration: 'underline' }}>Your Cart</h2>
            <h4>Ordered Quantity: {cart.length}</h4>
            {
                cart.map(tShirt => <h5 key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </h5>)
            }
            {
                message
            }
            {
                cart.length===3?<p>Wow! you are our STAR customer.</p>:''
            }
        </div>
    );
};

export default Cart;