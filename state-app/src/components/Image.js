import React, { Component } from 'react';
import imgApple from '../images/apple.png';
import imgBanana from '../images/banana.png';
import imgLizard from '../images/lizard.png';
import imgLizardon from '../images/lizardon.png';

class Image extends Component {
    state = {
        imgA:imgLizard,
        imgB:imgLizardon
    }

    render() {
        return (
            <div>
                {/* Image.js import */}
                <img src={imgApple} alt='apple'/><img src={imgBanana} alt='banana'/><br/>
                
                {/* public 접근하여 이미지 출력 */}
                <img src='/assets/black.png'/>
                <img src='/assets/pink.png'/><br/>

                {/* state 활용 : 후에 다른 이미지로 변경 가능 */}
                <img src={this.state.imgA} alt='lizard'/>
                <img src={this.state.imgB} alt='lizardon'/>
            </div>
        );
    }
}

export default Image;