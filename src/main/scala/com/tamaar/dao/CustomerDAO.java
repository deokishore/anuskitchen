package com.tamaar.dao;

import com.tamaar.model.Address;
import com.tamaar.model.Customer;
import com.tamaar.repository.AddressRepository;
import com.tamaar.repository.CustomerRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by deokishore on 20/01/2016.
 */
@Repository
@Transactional(readOnly = true)
@Service
public class CustomerDAO {

    @Resource
    CustomerRepository customerRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public Customer findById(Integer customerId) {
        Customer entry = customerRepository.findByCustomerId(customerId);
        if (entry == null){
            System.out.println("No address found with id: " + customerId);
        }
        return entry;
    }

    public Customer findByEmail(String email) {
        Customer entry = customerRepository.findByEmail(email);
        if (entry == null){
            System.out.println("No address found with id: " + email);
        }
        return entry;
    }

    public List<Customer> findByCustomer(Customer customer) {
        List<Customer> entryList = customerRepository.findByCustomer(customer.getEmail(), customer.getPassword());
        if (entryList == null){
            System.out.println("No address found with id: " + customer.getEmail());
        }
        return entryList;
    }


    public Customer updateCompany(Customer customer) {
        return customerRepository.save(customer);
    }

    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

}
