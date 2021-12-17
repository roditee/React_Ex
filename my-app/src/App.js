import React, { Component } from "react";
import Subject from './components/Subject';
import NAV from './components/NAV';
import Content from './components/Content';
import JSX from './components/JSX';
import Student from "./components/Student";
// import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h3>안녕하세요</h3> */}
        {/* JSX영역 : 주석 표시 */}
        {/* 위에서 추가했던 컴포넌트 사용 : 태그 형식으로 사용 */}
        {/* <Subject></Subject>
        <NAV></NAV>
        <Content></Content> */}
        {/* <JSX></JSX> */}
        {/* <Image></Image> */}


        {/* props */}
        <Subject title="제목" sub="부제목"></Subject>
        <Student name="홍길동" age="20" address="서울"></Student>
      </div>
    );
  }
}

export default App;