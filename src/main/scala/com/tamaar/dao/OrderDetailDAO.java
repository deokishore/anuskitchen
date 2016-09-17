package com.tamaar.dao;

import com.tamaar.model.OrderDetail;
import com.tamaar.repository.OrderDetailRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by deokishore on 20/01/2016.
 */
@Repository
@Transactional(readOnly = true)
@Service
public class OrderDetailDAO {

    @Resource
    OrderDetailRepository orderDetailRepository;

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * 
     */
    public OrderDetail findById(Integer orderDetailId) {
        OrderDetail entry = orderDetailRepository.findByOrderDetailId(orderDetailId);
        if (entry == null){
            System.out.println("No OrderDetail found with id: " + orderDetailId);
        }
        return entry;
    }

    public OrderDetail save(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

}
