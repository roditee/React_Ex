import React from 'react';
import './Right1.css';
import Right2 from './Right2';

const Right1 = ({onAddCount}) => {
    return (
        <div className='Right1'>
            <h3>Right1</h3>
            <Right2 onAddCount={onAddCount}/>
        </div>
    );
};

export default Right1;