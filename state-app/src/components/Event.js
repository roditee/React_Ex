import React, { Component } from 'react';

class Event extends Component {
    state = {
        message:'',
        id:'',
        pw:''
    }

    onChange = e => {
        this.setState({
            message: e.target.value
        });
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

    // (3) [완료] 버튼 클릭 시 실행되는 이벤트 핸들러
    // 입력한 id와 pw 값을 alert()로 출력
    onShow = e => {
        alert('id : ' + this.state.id + ' pw : ' + this.state.pw);
    }

    render() {
        return (
            <div>
                <hr/>
                <h3>이벤트 연습</h3>
                <input type="text" name="message" onChange={this.onChange}/>
                <h3>{this.state.message}</h3>

                {/* id와 pw 입력 받기 위한 <input> 태그 작성 */}
                <input type='text' name='id' size='10' value={this.state.id} onChange={this.onIdChange}/> &nbsp;
                <input type='password' name='pw' size='10' value={this.state.pw} onChange={this.onPwChange}/> &nbsp;

                <button onClick={this.onShow}>완료</button>
            </div>
        );
    }
}

export default Event;