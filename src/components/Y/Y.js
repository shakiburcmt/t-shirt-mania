import React, { useContext } from 'react';
import { MoneyContext } from '../Activity/Activity';

const Y = ({ house }) => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Y</h2>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={()=>setMoney(money+445)}>Add Money</button>
        </div>
    );
};

export default Y;