import React from 'react';
import './Root.css';

const Root = ({ children }) => {
    return (
        <div className='Root'>
            <div className='Root-title'>
                <h3>Root</h3>
            </div>
            <div className='Root-content'>
                { children }
            </div>
        </div>
    );
};

export default Root;