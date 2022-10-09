import React from 'react';
import X from '../X/X';
import Y from '../Y/Y';

const Two = ({house, ring}) => {
    return (
        <div>
            <h2>Two</h2>
            <section className='flex'>
                <X house={house} ring={ring}></X>
                <Y house={house}></Y>
            </section>
        </div>
    );
};

export default Two;