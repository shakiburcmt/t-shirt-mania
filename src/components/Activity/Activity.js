import React from 'react';
import One from '../One/One';
import Three from '../Three/Three';
import Two from '../Two/Two';
import './Activity.css'

const Activity = () => {
    const house = 7;
    return (
        <div className='activity'>
            <h2>this is activity</h2>
            <section className='flex'>
                <One house={house}></One>
                <Two house={house}></Two>
                <Three house={house}></Three>
            </section>
        </div>
    );
};

export default Activity;