package com.multi.spring_boot_react;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactController {
	@RequestMapping("hello")
	public String hello() {
		return "안녕하세요";
	}
}
