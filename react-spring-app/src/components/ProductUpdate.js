import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductUpdate = () => {
    let history = useNavigate();

    // part1 : prdNo에 해당하는 상품 정보 받아오기 (detailView와 동일)
    // 파라미터로 받아 온 값
    const { prdNo } = useParams();

    //state
    const [prd, setPrd] = useState({
        prdNo: '',
        prdName: '',
        prdPrice: '',
        prdCompany: '',
        prdStock: ''
    });

    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/product/detailView/' + prdNo);
        console.log(response.data);
        setPrd({
            // prdNo: response.data.prdNo,
            prdName: response.data.prdName,
            prdPrice: response.data.prdPrice,
            prdCompany: response.data.prdCompany,
            prdStock: response.data.prdStock
        });
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);



    // part2 : 폼에 입력된 값을 전송하고 DB 업데이트
    // insert와 유사 (매핑 url만 다름)
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setPrd({
            ...prd, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setPrd({
            // prdNo: '',
            prdName: '',
            prdPrice: '',
            prdCompany: '',
            prdStock: ''
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmUpdate);

        axios.post('http://localhost:8080/product/update/', frmData) // axios로 보내고
            .then(// 콜백지옥 방지하기 위해 promise 처리??
                response => {
                    alert("수정 완료");
                    history('/productList'); //상품 정보 조회 화면으로 이동
                }
            );
    }


    return (
        <div>
            <h3>상품 정보 수정</h3>
            <form name="frmUpdate" onSubmit={onSubmit} onReset={onReset}>
            {/* 이벤트 처리 form에서 해줌 */}
                <table>
                    <thead>
                        <tr>
                            <td>상품번호</td>
                            <td> <input
                                type="text"
                                name="prdNo"
                                value={prdNo}
                                readOnly />
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
                                <input type="submit" value="수정" />
                                <input type="reset" value="취소" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
};

export default ProductUpdate;