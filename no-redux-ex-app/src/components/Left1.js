import React from 'react';
import './Left1.css';
import Left2 from './Left2';

const Left1 = ({click}) => {
    return (
        <div className='Left1'>
            <h3>Left1</h3>
            <Left2 click={click}/>
        </div>
    );
};

export default Left1;