import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [postTitle, modifyTitle] = useState(['남자 코트 추천', '크리스마스 노래 추천', '스파이더맨 상영 시간표']);
  let [thumbsup, thumbsupPlus] = useState(0);
  // let posts = "강남 고기 맛집";
  var newArray = [...postTitle];

  function modifyFunc() {
    newArray[0] = '여자 코트 추천';
    modifyTitle(newArray);
  }

  function sorting() {
    newArray = newArray.sort();
    modifyTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <button onClick={modifyFunc}>제목 수정하기</button>
      <button onClick={sorting}>정렬</button>
      <div className="list">
        <h3>{postTitle[0]} <span onClick={() => { thumbsupPlus(thumbsup + 1) }}>👍</span> {thumbsup} </h3>
        <p>12월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{postTitle[1]}</h3>
        <p>12월 16일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{postTitle[2]}</h3>
        <p>12월 15일 발행</p>
        <hr />
      </div>

      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>

    </div>
  );
}

export default App;