package com.multi.spring_boot_react.product;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
	
	// MyBatis 사용하는 경우
	@Autowired
	@Qualifier("IProductDAO")
	IProductDAO dao;

	@Override
	public ArrayList<ProductVO> productList() {
		return dao.productList();
	}

	@Override
	public void insertProduct(ProductVO prd) {
		dao.insertProduct(prd);
	}

	@Override
	public void updateProduct(ProductVO prd) {
		dao.updateProduct(prd);
	}

	@Override
	public void deleteProduct(String prdNo) {
		dao.deleteProduct(prdNo);
	}

	@Override
	public ProductVO productDetailView(String prdNo) {
		return dao.productDeailView(prdNo);
	}
	
	@Override
	public String prdNoCheck(String prdNo) {
		return dao.prdNoCheck(prdNo);
	}
	
	//@Override
//	public ArrayList<ProductVO> productSearch(String type, String keyword){
//		HashMap<String, Object> map = new HashMap<String, Object>();
//		map.put("type", type);
//		map.put("keyword", keyword);
//		return dao.productSearch(map);
//	}
	
	@Override
	public ArrayList<ProductVO> productSearch(HashMap<String, Object> map){
		return dao.productSearch(map);
	}

}
