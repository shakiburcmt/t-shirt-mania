import React from 'react';
import './tShirt.css'

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { picture, name, price } = tShirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)} style={{ backgroundColor: 'coral', padding: '5px', borderRadius: '5px', fontWeight: 'bold', border: 'none', fontSize: '15px' }}>Buy This</button>
        </div>
    );
};

export default TShirt;