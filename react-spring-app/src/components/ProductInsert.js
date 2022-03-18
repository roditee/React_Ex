import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductInsert(props) {
    let history = useNavigate();

    //state
    const [prd, setPrd] = useState({
        prdNo: '',
        prdName: '',
        prdPrice: '',
        prdCompany: '',
        prdStock: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setPrd({
            ...prd, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setPrd({
            prdNo: '',
            prdName: '',
            prdPrice: '',
            prdCompany: '',
            prdStock: ''
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmInsert);

        axios.post('http://localhost:8080/product/insert/', frmData) // axios로 보내고
            .then(// 콜백지옥 방지하기 위해 promise 처리??
                response => {
                    alert("등록 완료");
                    history('/productList'); //상품 정보 조회 화면으로 이동
                }
            );
    }

    return (
        <div>
            <h3>상품 등록</h3>
            <form name="frmInsert" onSubmit={onSubmit} onReset={onReset}>
            {/* 이벤트 처리 form에서 해줌 */}
                <table>
                    <thead>
                        <tr>
                            <td>상품번호</td>
                            <td> <input
                                type="text"
                                name="prdNo"
                                value={prd.prdNo}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>상품명</td>
                            <td> <input
                                type="text"
                                name="prdName"
                                value={prd.prdName}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td> <input
                                type="text"
                                name="prdPrice"
                                value={prd.prdPrice}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>제조회사</td>
                            <td> <input
                                type="text"
                                name="prdCompany"
                                value={prd.prdCompany}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>재고</td>
                            <td> <input
                                type="text"
                                name="prdStock"
                                value={prd.prdStock}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="등록" />
                                <input type="reset" value="취소" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
}

export default ProductInsert;