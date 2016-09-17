package com.tamaar.repository;

import com.tamaar.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by deokishore on 06/12/2015.
 */
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Integer> {

    String FIND_BY_CUSTOMER_QUERY = "SELECT c FROM Customer c WHERE c.email = :email AND c.password = :password";


    Page<Customer> findByFirstNameLike(Pageable pageable, String firstName);

    Customer findByCustomerId(Integer customerId);

    Customer findByEmail(String email);

    /**
     * Find persons by address.
     */
    @Query(FIND_BY_CUSTOMER_QUERY)
    public List<Customer> findByCustomer(@Param("email") String email, @Param("password") String password);


}
