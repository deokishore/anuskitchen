package com.tamaar.repository;

import com.tamaar.model.Order;
import com.tamaar.model.OrderDetail;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by deokishore on 16/01/2016.
 */
public interface OrderDetailRepository extends PagingAndSortingRepository<OrderDetail, Integer> {

    OrderDetail findByOrderDetailId(Integer integerId);

}
