import React from 'react';

const Content = ({onAdd}) => {
    return (
        <div className='content'>
            Content 영역입니다&nbsp;
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default Content;