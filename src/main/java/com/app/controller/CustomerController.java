package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.entity.Customer;
import com.app.repository.CustomerRepository;


@Controller
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	//"@{/customer/registration}"
	
	@GetMapping("/registration")
	public String viewRegistration(Model model) {
		Customer c= new Customer();
		model.addAttribute("customer", c);
		return "signup";
	}
	
	@PostMapping("/save")
	public String getDataFromRegistration(@ModelAttribute("customer")Customer customer,Model model) {
		
		if (customerRepo.existsByEmail(customer.getEmail())) {
			model.addAttribute("message", "Data Exist in this Email Id !! try new One");
			return "signup";
			
		}
		
		customerRepo.save(customer);
		model.addAttribute("customer", customer);
		return "successfull";
	}

}
