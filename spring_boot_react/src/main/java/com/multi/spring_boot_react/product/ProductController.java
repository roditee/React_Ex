package com.multi.spring_boot_react.product;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*") // http://127.0.0.1 또는 localhost �떎 �궗�슜�븯�룄濡�
@RestController
public class ProductController {
	@Autowired
	ProductService service;
	
	//상품 목록 조회
	@RequestMapping("/product/productList")
	public HashMap<String, Object> viewProductList() {	
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("prdList",  service.productList());	
		return map; //상품 리스트
	}
	// ArrayList로 반환해도 됨
	// HashMap을 사용하면 다른 값도 같이 반환할 수 있음
	// 예 : 페이지 카운트 수
	
//	@RequestMapping("/product/productLis")
//	public ArrayList<ProductVO> viewProductList() {	
//		ArrayList<ProductVO> prdList = service.productList();	
//		return prdList; //상품 리스트
//	}
	
	//상품 상세 정보 반환
	@RequestMapping("/product/detailView/{prdNo}")
	public ProductVO detailVewProduct(@PathVariable  String prdNo) {		
		return service.productDetailView(prdNo);//상품 상세 정보 
	}

	//상품 등록
	@RequestMapping(value="/product/insert")
	public void insertProduct(ProductVO prd) {		
		service.insertProduct(prd);	 
	}
	
	// 상품 정보 수정
	@RequestMapping(value="/product/update")
	public void updateProduct(ProductVO prd) {		
		service.updateProduct(prd);	 
	}

	//상품 정보 삭제
	@RequestMapping(value="/product/delete/{prdNo}")
	public void  deleteProduct(@PathVariable  String prdNo) {	
		service.deleteProduct(prdNo);			
	}

}
