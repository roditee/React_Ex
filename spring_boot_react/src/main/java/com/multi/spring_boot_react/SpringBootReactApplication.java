package com.multi.spring_boot_react;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.multi.spring_boot_react.product.IProductDAO;
import com.multi.spring_boot_react.product.ProductController;

@SpringBootApplication
@ComponentScan(basePackageClasses = ProductController.class)
@MapperScan(basePackageClasses = IProductDAO.class)
public class SpringBootReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactApplication.class, args);
	}

}
