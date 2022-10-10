import React, { useContext } from 'react';
import { RingContext } from '../Activity/Activity';

const Three = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Three</h2>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house-1)}>Decrease</button>
        </div>
    );
};

export default Three;