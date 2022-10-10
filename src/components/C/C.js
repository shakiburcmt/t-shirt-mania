import React, { useContext } from 'react';
import { RingContext } from '../Activity/Activity';

const C = () => {
    // const ring=useContext(RingContext)
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>C</h2>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default C;