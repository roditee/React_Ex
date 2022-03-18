import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from './ProductListItem';

const ProductList = () => {

    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/product/productList');
        console.log(response.data);
        setData(response.data.prdList);
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h3>상품 정보 조회</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>제조회사</th>
                        <th>재고</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(function (prd, i) {
                            return <ProductListItem prd={prd} key={i} />
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ProductList;