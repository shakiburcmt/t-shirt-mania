import React from 'react';
import A from '../A/A';
import B from '../B/B';
import C from '../C/C';

const One = ({house}) => {
    return (
        <div>
            <h2>one</h2>
            <section className='flex'>
                <A house={house}></A>
                <B house={house}></B>
                <C house={house}></C>
            </section>
        </div>
    );
};

export default One;