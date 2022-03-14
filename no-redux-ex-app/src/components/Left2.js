import React from 'react';
import './Left2.css';
import Left3 from './Left3';

const Left2 = ({click}) => {
    return (
        <div className='Left2'>
            <h3>Left2</h3>
            <Left3 click={click}/>
        </div>
    );
};

export default Left2;