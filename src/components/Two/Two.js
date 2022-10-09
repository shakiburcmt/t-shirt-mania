import React from 'react';
import X from '../X/X';
import Y from '../Y/Y';

const Two = ({house}) => {
    return (
        <div>
            <h2>two</h2>
            <section className='flex'>
                <X house={house}></X>
                <Y house={house}></Y>
            </section>
        </div>
    );
};

export default Two;