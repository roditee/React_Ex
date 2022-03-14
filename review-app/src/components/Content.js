import React from 'react';
import { useState } from 'react';

const Content = () => {

      // 변수 사용 가능
  // let title = "지금 우리 학교는";
  // state 사용하는 경우 : useState() 사용
  // let [title, setTitle] = useState("오징어 게임");
  // 값이 여러 개 인 경우 배열로 설정
  let [titles, setTitle] = useState([
    "지금 우리 학교는",
    "오징어 게임"
  ]);

  // 입력값 저장하기 위한 state 정의
  let [item, setItem] = useState('');

  // [항목 추가] 버튼 클릭했을 수행되는 함수 
  // titles에 항목을 추가 : state 값 변경
  // state 값 변경 함수 : setTitle() 함수
  const onClickAdd = () => {
    if (item === "") {
      alert("제목을 입력하세요");
    } else {
      // 배열에 항목 추가 
      // (1) concat("추가할 내용")
      // titles.concat("지옥")
      // (2) 스프레드 연산자 사용 : ...titles
      //setTitle(titles.concat(item)); // 배열에 입력된 값 item 추가
      setTitle([...titles, item]);
      setItem(''); // 입력란 지우기
    }
  }

  const onItemChange = e => setItem(e.target.value);

  const onItemRemove = (title, index) => {
    // 전달받은 index에 해당되는 titles의 title이 동일한 것은 제외한 새 배열 반환 (변경)
    // 즉, 선택한 title (index에 해당되는 title) 제거됨
    setTitle(titles.filter((title) => titles[index] !== title));
  };

    return (
        <div className='content'>
        {
          titles.map((title, index) => (
            <div key={index}>
              <p>
                {index} : {title} &nbsp;
                <button title={title} index={index}
                  onClick={() => onItemRemove(title, index)}>삭제</button>
              </p>
              <hr />
            </div>
          ))
        }

        <input type="text" name="item" value={item} onChange={onItemChange} />
        <button onClick={onClickAdd}>항목 추가</button>
      </div>
    );
};

export default Content;