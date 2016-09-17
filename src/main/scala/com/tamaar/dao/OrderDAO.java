package com.tamaar.dao;

import com.tamaar.model.Order;
import com.tamaar.model.PaymentDetails;
import com.tamaar.repository.OrderRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Created by deokishore on 20/01/2016.
 */
@Repository
@Transactional(readOnly = true)
@Service
public class OrderDAO {

    @Resource
    OrderRepository orderRepository;

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * 
     */
    public Order findById(Integer orderId) {
        Order entry = orderRepository.findByOrderId(orderId);
        if (entry == null){
            System.out.println("No address found with id: " + orderId);
        }
        return entry;
    }

    public Order updateCompany(Order order) {
        return orderRepository.save(order);
    }

    public Order save(Order order) {
        return orderRepository.save(order);
    }

    public void updatePaymentMethod(int orderId, int paymentDetailsId) {
        Order order = new Order();
        order.setOrderId(orderId);
        Query query = entityManager.createQuery("update Order o set o.paymentDetails.paymentDetailsId = :paymentDetailsId where o.orderId = :orderId");
        query.setParameter("paymentDetailsId", paymentDetailsId);
        query.setParameter("orderId", orderId);
        query.executeUpdate();
    }

}
