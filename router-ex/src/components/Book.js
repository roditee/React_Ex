import React from 'react';
import { useParams } from "react-router-dom";

const books = {
    pig : {
        title:'아기 돼지 삼형제',
        author:'김작가',
        publisher:'꿀꿀출판사',
        date:'1972-07-15'
    },
    duck : {
        title:'미운 오리 새끼',
        author:'이작가',
        publisher:'꽥꽥출판사',
        date:'1974-05-02'
    }
}
function Book() {
    const params = useParams();
    const book = books[params.keyword];
    
    if (!book) {
        return <div><hr/><div>영화 정보가 없습니다.</div></div>
    }
    
    return (
    <div>
        <hr/> <h3>{params.keyword} : {book.title}</h3>
        <p>작가 : {book.author}</p>
        <p>출판사 : {book.publisher}</p>
        <p>출판일 : {book.date}</p>
    </div>
    );

};

export default Book;
            