import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("지금 우리 학교는");
  const [inputValue, setInputValue] = useState("");

  // 입력란 변경 시 inputValue 값 변경
  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  // 변경 버튼 클릭 시 inputValue (=입력값)으로 제목 변경
  const onTitleChange = (inputValue) => {
    setTitle(inputValue);
  }

  return (
    <div className="App">
      제목 : {title}
      <br></br>
      <input type="text" value={inputValue} onChange={onChange} />&nbsp;
      {/* 같은 컴포넌트 안에 있는 state를 사용할 때는 함수로 전달하지 않아도 됨 */}

      <button onClick={() => onTitleChange(inputValue)}>변경</button>
      {/* 주의 : 함수 호출 시 파라미터 있는 경우 화살표 함수 사용 */}
      {/* 아래처럼 사용 시 오류 발생 */}
      {/* <button onClick={onTitleChange(inputValue)}>변경</button> */}
    </div>
  );
}

export default App;
