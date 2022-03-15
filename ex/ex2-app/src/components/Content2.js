import React from 'react';

const Content2 = ({onMinus, onPlus} ) => {
    return (
        <div className='content2'>
            <button onClick={onMinus}>-</button>
            <button onClick={onPlus}>+</button>
        </div>
    );
};

export default Content2;