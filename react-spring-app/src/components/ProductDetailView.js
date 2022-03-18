import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailView(props) {
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
        
        // el표현 사용해서 보내고싶으면 링크를 감싸는 따옴표롤 숫자 1 옆에 있는 ` 사용
        //const response = await axios.get(`http://localhost:8080/product/detailView/${prdNo}`);
        
        console.log(response.data);
        setPrd({
            prdNo: response.data.prdNo,
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

    return (
        <div>
            <h3>상품 상세 정보 조회</h3>
            <table border="1" width="300">
                <thead>
                    <tr><td>상품번호</td><td> {prdNo}</td></tr>
                    <tr><td>상품명 </td><td> {prd.prdName}</td></tr>
                    <tr><td>가격 </td><td> {prd.prdPrice}</td></tr>
                    <tr><td>제조회사 </td><td>{prd.prdCompany}</td></tr>
                    <tr><td>재고 </td><td> {prd.prdStock}</td></tr>
                </thead>
            </table>
        </div>
    );
}

export default ProductDetailView;