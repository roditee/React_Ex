import React from 'react';
import { useSelector } from 'react-redux';

function Left3() {
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h3>Left3</h3>
            <p>클릭수 : {count}</p>
        </div>
    );
}

export default Left3;