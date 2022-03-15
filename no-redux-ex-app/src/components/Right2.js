import React from 'react';
import './Right2.css';
import Right3 from './Right3';

const Right2 = ({onAddCount, onMinusCount}) => {
    return (
        <div className='Right2'>
            <h3>Right2</h3>
            <Right3 onAddCount={onAddCount} onMinusCount={onMinusCount}/>
        </div>
    );
};

export default Right2;