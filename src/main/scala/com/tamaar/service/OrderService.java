package com.tamaar.service;

import com.google.common.collect.Lists;
import com.tamaar.model.Customer;
import com.tamaar.model.Order;
import com.tamaar.repository.OrderRepository;
import com.tamaar.shoppingcart.parser.OrderVo;
import com.tamaar.util.BeanUtil;
import com.tamaar.vo.CustomerVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by door3 on 07/11/2015.
 */

@Service
@Transactional
public class OrderService {

    @Autowired
    OrderRepository orderRepository;


    public List<OrderVo> findAll() {
        return  BeanUtil.getOrderVoList(executeQueryFindAll());
    }

    public OrderVo find(int orderId) {
        return BeanUtil.getOrderVo(orderRepository.findByOrderId(orderId));
    }


    public List<OrderVo> findByCustomerId(CustomerVo customerVo) {
        Customer customer = BeanUtil.getCustomer(null, customerVo);
        return BeanUtil.getOrderVoList(orderRepository.findByCustomerByCustomerId(customer));
    }


    private List<Order> executeQueryFindAll() {
        return Lists.newArrayList(orderRepository.findAll());
    }

}
