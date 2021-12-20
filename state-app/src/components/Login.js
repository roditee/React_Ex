import React, { Component } from 'react';

class Login extends Component {
    state = {
        id:'',
        pw:''
    }

    // (1) id 값 변경하는 이벤트 핸들러
    onIdChange = e => {
        this.setState({
            id:e.target.value
        });
    }

    // (2) pw 값 변경하는 이벤트 핸들러
    onPwChange = e => {
        this.setState({
            pw:e.target.value
        });
    }

    // 로그인 성공 실패 출력
    onShow = e => {
        if(this.state.id==='abcd' && this.state.pw==='1234') alert('로그인 성공');
        else alert('로그인 실패');
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <input type='text' name='id' size='10' value={this.state.id} onChange={this.onIdChange}/> &nbsp;
                <input type='password' name='pw' size='10' value={this.state.pw} onChange={this.onPwChange}/> &nbsp;

                <button onClick={this.onShow}>로그인</button>
            </div>
        );
    }
}

export default Login;