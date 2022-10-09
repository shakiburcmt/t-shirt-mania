import React from 'react';
import A from '../A/A';
import B from '../B/B';
import C from '../C/C';

const One = ({house, ring}) => {
    return (
        <div>
            <h2>One</h2>
            <section className='flex'>
                <A house={house} ring={ring}></A>
                <B house={house}></B>
                <C house={house}></C>
            </section>
        </div>
    );
};

export default One;