package com.multi.spring_boot_react.product;

import java.util.ArrayList;
import java.util.HashMap;

public interface IProductService {
	ArrayList<ProductVO> productList();
	void insertProduct(ProductVO prd);
	void updateProduct(ProductVO prd);
	void deleteProduct(String prdNo);
	ProductVO productDetailView(String prdNo);
	String prdNoCheck(String prdNo);
	//ArrayList<ProductVO> productSearch(String type, String keyword);	
	ArrayList<ProductVO> productSearch(HashMap<String, Object> map); //상품 검색
}
