import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '크리스마스 노래 추천', '스파이더맨 상영 시간표']);
  let [좋아요, 좋아요변경] = useState(0);
  // let posts = "강남 고기 맛집";

  function 제목수정() {
    var newArray = [...글제목];
    newArray[0] = '겨울 코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목수정}>제목 수정하기</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
        <p>12월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>12월 16일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>12월 15일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
