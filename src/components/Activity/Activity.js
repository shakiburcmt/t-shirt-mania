import React, { createContext, useState } from 'react';
import One from '../One/One';
import Three from '../Three/Three';
import Two from '../Two/Two';
import './Activity.css'

// create context er por default value dile null ba undefined ashena
export const RingContext = createContext('Value');
export const MoneyContext = createContext('Value');

const Activity = () => {
    // const house = 7;
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    const ring = 'Gold Ring';
    return (
        // <RingContext.Provider value='Diamond Ring'>
        // ekahne ja pathano hobe onno component theke setai receive korte hobe, jemon niche array pathano hoyeche tahole array akarei receive korte hobe, array ke dynamic vabe pathano hoyeche
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money,setMoney]}>
            <div className='activity'>
                <h2>Parent Activity</h2>
                <section className='flex'>
                    <One house={house} ring={ring}></One>
                    <Two house={house} ring={ring}></Two>
                    <Three house={house}></Three>
                </section>
            </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Activity;