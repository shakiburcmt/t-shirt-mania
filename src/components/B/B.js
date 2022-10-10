import React, { useContext } from 'react';
import { MoneyContext } from '../Activity/Activity';

const B = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>B</h2>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={()=>setMoney(money-445)}>Decrease Money</button>
        </div>
    );
};

export default B;