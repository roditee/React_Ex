import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  // 배열 반환 : useState(초기값);
  let [number, setNumber] = useState(0);
  // 선언한 그 위치에서 사용하고자 할 때 : 데이터 바인딩 -> { state 변수명 }, 값 변경 -> 값 변경 함수 사용
  // 선언한 그 위치가 아닌 다른 영역의(하위) 컴포넌트에서 사용하고자 한다면[리액트는 값 전달이 단방향 : 상위 -> 하위]
  // props로 전달 : Header 태그에서 number={number} / Header.js에서 {number} 받아줌 / {number} 사용

  // [+] 버튼 클릭했을 때 호출되는 함수
  // number 값을 1 증가시키는 함수
  const onAdd = () => {
    // state의 값을 변경하고자 할 때는 반드시 setter 사용해야 함 : setNumber()
    setNumber(number + 1);
  }
  // 함수도 하위 컴포넌트에서 사용하도록 하려면 props로 전달해줘야 함

  return (
    <div className="App">
      App 입니다 : {number}&nbsp;
      {/* onClick={함수명} */}
      <button onClick={onAdd}>+</button>
      <Header number={number}></Header> {/* number라는 이름으로 {number}를 Header에서 쓸 수 있도록 전달 */}
      <Content onAdd={onAdd}></Content>
    </div>
  );
}

export default App;