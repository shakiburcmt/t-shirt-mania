import React, { createContext } from 'react';
import One from '../One/One';
import Three from '../Three/Three';
import Two from '../Two/Two';
import './Activity.css'

const RingContext = createContext('Ring');

const Activity = () => {
    const house = 7;
    const ring = 'Gold Ring';
    return (
        <RingContext.Provider>
            <div className='activity'>
                <h2>Parent Activity</h2>
                <section className='flex'>
                    <One house={house} ring={ring}></One>
                    <Two house={house} ring={ring}></Two>
                    <Three house={house}></Three>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Activity;