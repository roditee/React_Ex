import React from 'react';

const Content2 = ( {inputValue, onChange, onTitleChange} ) => {
    return (
        <div className='content2'>
            <input type="text" onChange={onChange} value={inputValue}/>&nbsp;
            <button onClick={() => onTitleChange(inputValue)}>변경</button>
        </div>
    );
};

export default Content2;