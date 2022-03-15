import React from 'react';
import './Right1.css';
import Right2 from './Right2';

const Right1 = ({onAddCount, onMinusCount}) => {
    return (
        <div className='Right1'>
            <h3>Right1</h3>
            <Right2 onAddCount={onAddCount} onMinusCount={onMinusCount}/>
        </div>
    );
};

export default Right1;