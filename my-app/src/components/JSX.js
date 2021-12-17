// JSX 문법

import React, { Component } from 'react';

class JSX extends Component {
    render() {
        // 자바스크립트 코드 영역
        const name = "홍길동";
        const number = 0;
        const value = 1;

        // 자바스크립트 내부 함수
        // 변수 : 사용자 정의 객체
        const person = {
            name: '성춘향',
            age: 20
        };

        function getPerson() {
            return person.name + ", " + person.age;
        }

        return (
            <div>
                {/* JSX 영역 */}
                <h2>JSX입니다.</h2>
                <h2>{name} 안녕!</h2>

                {/* 조건(삼항) 연산자 */}
                {/* 괄호 없어도 됨 */}
                {name === "홍길동" ? (
                    <h3>홍길동입니다.</h3>
                ) : (
                    <h3>홍길동이 아닙니다.</h3>
                )}

                {name === "이몽룡" ? <h3>이몽룡입니다.</h3> : <h3>이몽룡이 아닙니다.</h3>}


                {/* 조건 && expression */}
                {name === "홍길동" && <h3>홍길동입니다</h3>}

                {/* 조건 || expression */}
                {number || '값이 undefined 입니다'}


                {/* 인라인 스타일링 : 카멜 표기법 */}
                <div
                    style={{
                        width: '50%',
                        backgroundColor: 'red',
                        color: 'white',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        padding: 10, // 단위 생략하면 px로 지정
                        marginTop: 20
                    }}
                >인라인 스타일 적용</div>

                {/* class 대신 className 사용 */}
                <div className='rect'>class style 적용</div>


                {/* 태그는 반드시 닫아야 함 */}
                <br />
                주소 : 서울 <br />
                전화 : 010-1234-1234 <br />
                <input type="password" />


                // 주석 아님
                /* 주석 아님 */
                {/* 주석은 이렇게 */}


                {/* JSX 내에 자바스크립트 if문 사용 가능 */}
                <div>
                    {
                        // 호출하지 않아도 자동으로 호출되는 함수 : (function() { ... })()
                        (function () {
                            if (value === 1) return <div>1 입니다</div>;
                            if (value === 2) return <div>2 입니다</div>;
                            if (value === 3) return <div>3 입니다</div>;
                        })()
                    }
                </div>
                <div>
                    {
                        // 화살표 함수로 변경도 가능
                        (() => {
                            if (value === 1) return <div>1 입니다</div>;
                            if (value === 2) return <div>2 입니다</div>;
                            if (value === 3) return <div>3 입니다</div>;
                        })()
                    }
                </div>

                {/* 변수 또는 함수 호출은 {}로 감싸서 */}
                <div>getPerson()</div><br />
                <div>{getPerson()}</div><br />
            </div>
        );
    }
}

export default JSX;