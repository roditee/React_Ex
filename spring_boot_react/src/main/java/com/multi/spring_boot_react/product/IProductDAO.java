package com.multi.spring_boot_react.product;

import java.util.ArrayList;
import java.util.HashMap;

public interface IProductDAO {
	 ArrayList<ProductVO> productList(); //전체 상품 조회
	 void insertProduct(ProductVO prd); //상품 등록
	 ProductVO productDeailView(String prdNo); //상품 상세 정보 조회
	 void updateProduct(ProductVO prd); //상품 정보 수정
	 void deleteProduct(String prdNo); //상품 정보 삭제
	 String prdNoCheck(String prdNo); //상품번호 중복 확인
	 ArrayList<ProductVO> productSearch(HashMap<String, Object> map); //상품 검색
	// ArrayList<DogVO> productSearch(HashMap<String, Object> map); 
}

