import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                footer입니다.<br />
                정보 출력해봅시다.<br />
                {this.props.company}<br />
                {this.props.tel}<br />
                {this.props.address}
            </footer>
        );
    }
}

export default Footer;