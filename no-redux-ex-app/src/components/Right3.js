import React from 'react';
import './Right3.css';
import { MdAdd } from 'react-icons/md';

const Right3 = ({onAddCount, onMinusCount}) => {
    return (
        <div className='Right3'>
            <h3>Right3</h3>
            <button onClick={onAddCount}><MdAdd /></button>
            <button onClick={onMinusCount}>-</button>
        </div>
    );
};

export default Right3;