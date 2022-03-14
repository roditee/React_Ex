import React from 'react';
import './Right3.css';

const Right3 = ({onAddCount}) => {
    return (
        <div className='Right3'>
            <h3>Right3</h3>
            <button onClick={() => onAddCount()}>+</button>
        </div>
    );
};

export default Right3;