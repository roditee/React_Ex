import React from 'react';

function Content() {
    return (
        <div>
            <table border='1'>
                <tr><th>제목</th><th>저자</th><th>출판사</th><th>발행일</th></tr>
                <tr><td>아기 돼지 삼형제</td><td>김작가</td><td>꿀꿀출판사</td><td>1972-07-15</td></tr>
                <tr><td>미운 오리 새끼</td><td>이작가</td><td>꽥꽥출판사</td><td>1974-05-02</td></tr>
            </table>
        </div>
    );
};

export default Content;