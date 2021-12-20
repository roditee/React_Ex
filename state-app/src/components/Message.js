import React, {useState} from 'react';
// {useState} import 해줘야 함

const Message = () => {
    const [message, setMassage] = useState('');
    // 이벤트 핸들러 추가
    const onClickEnter = () => setMassage('안녕하세요^^');
    const onClickLeave = () => setMassage('안녕히 가세요^^');
    const onClickClear = () => setMassage('');

    // 색상 변경 state
    const [color, setColor] = useState('black');
    const onClickGreen = () => setColor('green');
    const onClickRed = () => setColor('red');
    const onClickBlue = () => setColor('blue');

    return (
        <div>
            <p/>
            <button onClick={onClickEnter}>입장</button> &nbsp;
            <button onClick={onClickLeave}>퇴장</button> &nbsp;
            <button onClick={onClickClear}>지우기</button> &nbsp;
            <h3 style={{color}}>{message}</h3>

            {/* 출력되는 message 색상 변경 버튼 3개 추가 : green, red, blue */}
            {/* <button onClick={onClickGreen}>green</button> &nbsp;
            <button onClick={onClickRed}>red</button> &nbsp;
            <button onClick={onClickBlue}>blue</button> */}

            {/* 위와 같은 결과 수행하는 코드 + 버튼 글자 색상 변경 */}
            <button style={{color:'green'}} onClick={() => setColor('green')}>green</button> &nbsp;
            <button style={{color:'red'}} onClick={() => setColor('red')}>red</button> &nbsp;
            <button style={{color:'blue'}} onClick={() => setColor('blue')}>blue</button>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
};

export default Message;