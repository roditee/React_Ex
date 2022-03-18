import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HOME from './Home';
import ProductList from './ProductList';
import ProductDetailView from './ProductDetailView';
import ProductInsert from './ProductInsert';
import ProductUpdate from './ProductUpdate';

class Top extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">[홈]</Link>
                        <Link to="/productList">[상품조회]</Link>
                        <Link to="/productInsert">[상품등록]</Link>
                        <Link to="/productUpdate">[상품수정]</Link>
                        {/* Link는 태그가 아니라 컴포넌트 */}
                    </li>
                </ul>
                <hr/>
                <Routes>
                    <Route path="/" element={<HOME/>}/>
                    <Route path="/productList" element={<ProductList/>}/>
                    <Route path="/productDetailView/:prdNo" element={<ProductDetailView />}/>
                    <Route path="/productInsert" element={<ProductInsert />}/>
                    <Route path="/productUpdate/:prdNo" element={<ProductUpdate />}/>
                </Routes>
            </div>
        );
    }
}

export default Top;