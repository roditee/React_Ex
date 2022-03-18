import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductListItem = (props) => {
    let history = useNavigate();

    const onDeleteItem = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            axios.get('http://localhost:8080/product/delete/' + props.prd.prdNo)
                .then(
                    () => {
                        history('/productList');
                        window.location.reload();
                        // reload 하지 않으면
                        // DB에서는 삭제되지만 현재 화면은 안 바뀜
                        // 삭제한 내용을 화면에 바로 반영하기 위해서 reload 추가
                    }
                ).catch(err => console.log(err));
        }
    }

    return (
        <tr>
            <td><Link to={"/productDetailView/" + props.prd.prdNo}>{props.prd.prdNo}</Link></td>
            <td>{props.prd.prdName}</td>
            <td>{props.prd.prdPrice}</td>
            <td>{props.prd.prdCompany}</td>
            <td>{props.prd.prdStock}</td>
            <td><Link to={"/productUpdate/" + props.prd.prdNo}>{props.prd.prdNo}</Link></td>
            <td><button onClick={onDeleteItem}>삭제</button></td>
        </tr>
    );

    // ProductListItem = ({prd})로 받아올 경우
    // return (
    //     <div>
    //         <tr>
    //             <td>{props.prd.prdNo}</td>
    //             <td>{props.prd.prdName}</td>
    //             <td>{props.prd.prdPrice}</td>
    //             <td>{props.prd.prdCompany}</td>
    //             <td>{props.prd.prdStock}</td>
    //         </tr>
    //     </div>
    // );
};

export default ProductListItem;