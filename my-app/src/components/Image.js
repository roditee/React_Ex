import React, { Component } from 'react';
import imgApple from '../image/apple.png';

class Image extends Component {
    render() {
        return (
            <div>
                <img src={imgApple} />
            </div>
        );
    }
}

export default Image;