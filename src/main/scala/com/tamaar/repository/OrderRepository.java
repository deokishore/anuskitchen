package com.tamaar.repository;

import com.tamaar.model.Customer;
import com.tamaar.model.Order;
import com.tamaar.model.Shipper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by deokishore on 16/01/2016.
 */
public interface OrderRepository extends PagingAndSortingRepository<Order, Integer> {

    //String FIND_BY_CUSTOMER_ID_QUERY = "SELECT o FROM Order o WHERE o.customerByCustomerId.customerByCustomerId = :customerByCustomerId";

    Order findByOrderId(Integer integerId);

    /**
     * Find Order by CustomerId.
     */
    //@Query(FIND_BY_CUSTOMER_ID_QUERY)
    List<Order> findByCustomerByCustomerId(Customer customerByCustomerId);

    Page<Order> findByCustomerByCustomerId(Customer customerByCustomerId, Pageable pageable);



}
