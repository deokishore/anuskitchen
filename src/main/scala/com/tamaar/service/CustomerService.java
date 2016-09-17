package com.tamaar.service;

import com.tamaar.dao.AddressDAO;
import com.tamaar.dao.CustomerDAO;
import com.tamaar.model.Address;
import com.tamaar.model.Customer;
import com.tamaar.repository.AddressRepository;
import com.tamaar.repository.CustomerRepository;
import com.tamaar.util.BeanUtil;
import com.tamaar.vo.CustomerVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by deokishore on 06/12/2015.
 */
@Service
@Transactional
public class CustomerService {

    @Autowired
    private AddressDAO addressDAO;

    @Autowired
    private CustomerDAO customerDAO;

    public void save(CustomerVo customerVo) {
        Address address = new Address();
        BeanUtil.getAddress(address, customerVo.getAddressVo());
        Customer customer = new Customer();
        BeanUtil.getCustomer(customer, customerVo);
        address = addressDAO.save(address);
        customer.setAddress(address);
        customerDAO.save(customer);
    }

    public List<CustomerVo> isValidUser(CustomerVo customerVo) {
        List<Customer> customerList = customerDAO.findByCustomer(BeanUtil.getCustomer(null, customerVo));
        List<CustomerVo> customerVoList =  BeanUtil.getCustomerVoList(customerList);
        return customerVoList;
    }

    public CustomerVo isValidUser(String email) {
        Customer customer = customerDAO.findByEmail(email);
        CustomerVo customerVo =  BeanUtil.getCustomerVo(customer);
        return customerVo;
    }
}
