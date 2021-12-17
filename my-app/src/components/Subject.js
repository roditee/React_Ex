import React, { Component } from "react";

// 컴포넌트 생성
// 컴포넌트 : 사용자 정의 태그
class Subject extends Component {

  // 디폴트 props 설정 - 방법 1
  static defaultProps = {
    date: '2021-12-17'
  }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}<br />
        {this.props.date}<br />
        {this.props.year}
        {/* 디폴트 props가 여러 번 선언 된 경우 마지막으로 선언된 디폴트 props 출력 */}
      </header>
    );
  }
}

// 디폴트 props 설정 - 방법 2
Subject.defaultProps = {
  year: 2021
}
export default Subject;